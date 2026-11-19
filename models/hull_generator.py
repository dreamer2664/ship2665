"""
models/hull_generator.py
Procedural 3D Naval Architecture Mesh Generator for RMS Titanic (Yard No. 401)
Generates high-precision hull shell plating, bulkheads, decks, funnels, masts, and machinery geometry.
Can export to Wavefront OBJ format and JSON geometry for WebGL runtime consumption.
"""

import math
import json
import os
import sys

# Ensure repository root is on Python module search path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from models.naval_architecture import (
    LOA_METERS, LBP_METERS, EXTREME_BEAM_M, MOULDED_BEAM_M,
    DESIGN_DRAUGHT_M, DECK_ELEVATIONS, BULKHEADS, COMPARTMENTS,
    FUNNELS, LIFEBOATS, get_sheer_y, get_hull_half_breadth
)

class TitanicMeshBuilder:
    def __init__(self):
        self.vertices = []
        self.normals = []
        self.uvs = []
        self.faces = [] # list of [(v_idx, uv_idx, norm_idx), ...]
        self.groups = {} # group_name -> list of face indices

    def add_vertex(self, x, y, z):
        self.vertices.append((float(x), float(y), float(z)))
        return len(self.vertices) # 1-based index for OBJ

    def add_normal(self, nx, ny, nz):
        l = math.sqrt(nx*nx + ny*ny + nz*nz)
        if l > 0.0001:
            nx, ny, nz = nx/l, ny/l, nz/l
        else:
            nx, ny, nz = 0.0, 1.0, 0.0
        self.normals.append((float(nx), float(ny), float(nz)))
        return len(self.normals)

    def add_uv(self, u, v):
        self.uvs.append((float(u), float(v)))
        return len(self.uvs)

    def add_quad(self, v1, v2, v3, v4, uv1, uv2, uv3, uv4, n, group='default'):
        n_idx = self.add_normal(*n)
        uv_idx1 = self.add_uv(*uv1)
        uv_idx2 = self.add_uv(*uv2)
        uv_idx3 = self.add_uv(*uv3)
        uv_idx4 = self.add_uv(*uv4)

        face1 = [(v1, uv_idx1, n_idx), (v2, uv_idx2, n_idx), (v3, uv_idx3, n_idx)]
        face2 = [(v1, uv_idx1, n_idx), (v3, uv_idx3, n_idx), (v4, uv_idx4, n_idx)]

        if group not in self.groups:
            self.groups[group] = []

        self.groups[group].append(face1)
        self.groups[group].append(face2)

    def build_hull(self, num_stations=60, num_waterlines=24):
        """Builds symmetric port and starboard hull shell plating with sheer and flare."""
        z_stations = []
        # Fine spacing near bow and stern, wider amidships
        for i in range(num_stations + 1):
            t = i / num_stations
            # Cosine distribution to cluster points at stem and stern
            z = -5.21 + (263.85 - (-5.21)) * (0.5 - 0.5 * math.cos(t * math.pi))
            z_stations.append(z)

        y_waterlines = []
        for j in range(num_waterlines + 1):
            t = j / num_waterlines
            # Waterlines from keel to C-deck + sheer
            y_waterlines.append(t)

        print(f"Generating hull mesh: {len(z_stations)} stations x {len(y_waterlines)} waterlines...")

        for s in range(len(z_stations) - 1):
            z1 = z_stations[s]
            z2 = z_stations[s+1]
            sheer1 = get_sheer_y(z1)
            sheer2 = get_sheer_y(z2)
            c_deck1 = DECK_ELEVATIONS['C_Deck'] + sheer1
            c_deck2 = DECK_ELEVATIONS['C_Deck'] + sheer2

            for w in range(len(y_waterlines) - 1):
                t1 = y_waterlines[w]
                t2 = y_waterlines[w+1]
                y11 = t1 * c_deck1
                y12 = t2 * c_deck1
                y21 = t1 * c_deck2
                y22 = t2 * c_deck2

                b11 = get_hull_half_breadth(z1, y11)
                b12 = get_hull_half_breadth(z1, y12)
                b21 = get_hull_half_breadth(z2, y21)
                b22 = get_hull_half_breadth(z2, y22)

                # Starboard (+X)
                v1_stbd = self.add_vertex(b11, y11, z1)
                v2_stbd = self.add_vertex(b21, y21, z2)
                v3_stbd = self.add_vertex(b22, y22, z2)
                v4_stbd = self.add_vertex(b12, y12, z1)

                # Determine strake material group (red boot-topping below waterline, black hull above)
                avg_y = (y11 + y12 + y21 + y22) / 4.0
                grp = 'Hull_Bottom_Red' if avg_y < DESIGN_DRAUGHT_M else 'Hull_Topsides_Black'

                # Normal approximate
                norm_stbd = (1.0, 0.05, 0.0)
                self.add_quad(v1_stbd, v2_stbd, v3_stbd, v4_stbd, 
                              (t1, z1/270.0), (t1, z2/270.0), (t2, z2/270.0), (t2, z1/270.0), 
                              norm_stbd, group=grp)

                # Port (-X)
                v1_port = self.add_vertex(-b11, y11, z1)
                v2_port = self.add_vertex(-b12, y12, z1)
                v3_port = self.add_vertex(-b22, y22, z2)
                v4_port = self.add_vertex(-b21, y21, z2)
                norm_port = (-1.0, 0.05, 0.0)
                self.add_quad(v1_port, v2_port, v3_port, v4_port,
                              (t1, z1/270.0), (t2, z1/270.0), (t2, z2/270.0), (t1, z2/270.0),
                              norm_port, group=grp)

    def build_keel_and_bilge_keels(self):
        """Constructs center bar keel and bilge keels."""
        # Keel plate bottom
        v1 = self.add_vertex(0.45, 0.0, -2.0)
        v2 = self.add_vertex(0.45, 0.0, 255.0)
        v3 = self.add_vertex(-0.45, 0.0, 255.0)
        v4 = self.add_vertex(-0.45, 0.0, -2.0)
        self.add_quad(v1, v2, v3, v4, (0,0), (1,0), (1,1), (0,1), (0,-1,0), group='Keel_Bottom')

        # Bilge keels: 300 ft (91.4 m) long, 25 in (0.64 m) deep between Z=85m and Z=175m
        bk_z_start = 85.0
        bk_z_end = 175.0
        steps = 20
        for i in range(steps):
            z_a = bk_z_start + (bk_z_end - bk_z_start) * (i / steps)
            z_b = bk_z_start + (bk_z_end - bk_z_start) * ((i + 1) / steps)
            y_base = 2.2 # Turn of bilge height
            b_base_a = get_hull_half_breadth(z_a, y_base)
            b_base_b = get_hull_half_breadth(z_b, y_base)

            # Starboard bilge keel fin projecting downwards and outwards at 45 degrees
            fin_depth = 0.64
            v_stbd_base1 = self.add_vertex(b_base_a, y_base, z_a)
            v_stbd_base2 = self.add_vertex(b_base_b, y_base, z_b)
            v_stbd_tip2 = self.add_vertex(b_base_b + fin_depth * 0.707, y_base - fin_depth * 0.707, z_b)
            v_stbd_tip1 = self.add_vertex(b_base_a + fin_depth * 0.707, y_base - fin_depth * 0.707, z_a)
            self.add_quad(v_stbd_base1, v_stbd_base2, v_stbd_tip2, v_stbd_tip1,
                          (0,0), (1,0), (1,1), (0,1), (0.707, -0.707, 0), group='Bilge_Keel_Stbd')

            # Port bilge keel fin
            v_port_base1 = self.add_vertex(-b_base_a, y_base, z_a)
            v_port_tip1 = self.add_vertex(-b_base_a - fin_depth * 0.707, y_base - fin_depth * 0.707, z_a)
            v_port_tip2 = self.add_vertex(-b_base_b - fin_depth * 0.707, y_base - fin_depth * 0.707, z_b)
            v_port_base2 = self.add_vertex(-b_base_b, y_base, z_b)
            self.add_quad(v_port_base1, v_port_tip1, v_port_tip2, v_port_base2,
                          (0,0), (1,0), (1,1), (0,1), (-0.707, -0.707, 0), group='Bilge_Keel_Port')

    def build_bulkheads(self):
        """Constructs 15 transverse watertight bulkheads."""
        for bh in BULKHEADS:
            z = bh['z']
            y_top = bh['y_top']
            steps_y = 8
            for i in range(steps_y):
                y_a = DECK_ELEVATIONS['TankTop'] + (y_top - DECK_ELEVATIONS['TankTop']) * (i / steps_y)
                y_b = DECK_ELEVATIONS['TankTop'] + (y_top - DECK_ELEVATIONS['TankTop']) * ((i + 1) / steps_y)
                b_a = get_hull_half_breadth(z, y_a)
                b_b = get_hull_half_breadth(z, y_b)

                v1 = self.add_vertex(-b_a, y_a, z)
                v2 = self.add_vertex(b_a, y_a, z)
                v3 = self.add_vertex(b_b, y_b, z)
                v4 = self.add_vertex(-b_b, y_b, z)
                self.add_quad(v1, v2, v3, v4, (0,0), (1,0), (1,1), (0,1), (0, 0, 1), group=f'Bulkhead_{bh["id"]}')

    def build_decks(self):
        """Constructs the horizontal deck surfaces: Tank Top, F, E, D, C, B, A, Boat Deck."""
        decks = [
            ('TankTop', DECK_ELEVATIONS['TankTop'], 10.0, 240.0),
            ('E_Deck', DECK_ELEVATIONS['E_Deck'], 5.0, 250.0),
            ('D_Deck', DECK_ELEVATIONS['D_Deck'], 0.0, 255.0),
            ('C_Deck', DECK_ELEVATIONS['C_Deck'], -4.0, 260.0),
            ('B_Deck', DECK_ELEVATIONS['B_Deck'], 25.0, 200.0),
            ('A_Deck', DECK_ELEVATIONS['A_Deck'], 40.0, 195.0),
            ('Boat_Deck', DECK_ELEVATIONS['Boat_Deck'], 50.0, 192.0),
        ]
        for name, base_y, z_start, z_end in decks:
            steps_z = 25
            for i in range(steps_z):
                z_a = z_start + (z_end - z_start) * (i / steps_z)
                z_b = z_start + (z_end - z_start) * ((i + 1) / steps_z)
                y_a = base_y + get_sheer_y(z_a)
                y_b = base_y + get_sheer_y(z_b)
                b_a = min(14.0, get_hull_half_breadth(z_a, y_a) * 0.95)
                b_b = min(14.0, get_hull_half_breadth(z_b, y_b) * 0.95)

                if b_a > 0.5 and b_b > 0.5:
                    v1 = self.add_vertex(-b_a, y_a, z_a)
                    v2 = self.add_vertex(b_a, y_a, z_a)
                    v3 = self.add_vertex(b_b, y_b, z_b)
                    v4 = self.add_vertex(-b_b, y_b, z_b)
                    grp = 'Deck_Teak' if 'Deck' in name and name != 'TankTop' else 'TankTop_Steel'
                    self.add_quad(v1, v2, v3, v4, (0,0), (1,0), (1,1), (0,1), (0, 1, 0), group=grp)

    def build_funnels(self):
        """Constructs 4 elliptical raked funnels with White Star buff casing and black tops."""
        for fn in FUNNELS:
            z_c = fn['z_centre']
            rake = fn['rake_rad']
            base_y = DECK_ELEVATIONS['Boat_Deck'] + get_sheer_y(z_c)
            top_y = DECK_ELEVATIONS['Funnel_Tops']
            rx = 2.90 # Half-breadth 19 ft / 2 = 9.5 ft = 2.90 m
            rz = 3.73 # Half-length 24.5 ft / 2 = 12.25 ft = 3.73 m

            segments = 16
            layers = 4 # 3 buff layers, 1 black top layer
            for l in range(layers):
                y1 = base_y + (top_y - base_y) * (l / layers)
                y2 = base_y + (top_y - base_y) * ((l + 1) / layers)
                # Apply 1:12 rake aft
                dz1 = (y1 - base_y) * math.tan(rake)
                dz2 = (y2 - base_y) * math.tan(rake)
                grp = 'Funnel_Black_Top' if l == (layers - 1) else 'Funnel_WhiteStar_Buff'

                for s in range(segments):
                    ang1 = 2 * math.pi * s / segments
                    ang2 = 2 * math.pi * (s + 1) / segments

                    x1_a, z1_a = rx * math.cos(ang1), rz * math.sin(ang1)
                    x2_a, z2_a = rx * math.cos(ang2), rz * math.sin(ang2)

                    v1 = self.add_vertex(x1_a, y1, z_c - dz1 + z1_a)
                    v2 = self.add_vertex(x2_a, y1, z_c - dz1 + z2_a)
                    v3 = self.add_vertex(x2_a, y2, z_c - dz2 + z2_a)
                    v4 = self.add_vertex(x1_a, y2, z_c - dz2 + z1_a)

                    nx = (x1_a + x2_a) / 2.0
                    nz = (z1_a + z2_a) / 2.0
                    self.add_quad(v1, v2, v3, v4, 
                                  (s/segments, l/layers), ((s+1)/segments, l/layers),
                                  ((s+1)/segments, (l+1)/layers), (s/segments, (l+1)/layers),
                                  (nx, 0.05, nz), group=grp)

    def build_masts_and_rigging(self):
        """Constructs Fore Mast with Crow's nest and Main Mast."""
        # Fore Mast: Z = 215m, base Y = 18.5m, truck Y = 63.4m, rake aft
        rake = math.radians(4.0)
        base_y = DECK_ELEVATIONS['C_Deck'] + get_sheer_y(215.0)
        truck_y = DECK_ELEVATIONS['Fore_Mast_Truck']
        dz = (truck_y - base_y) * math.tan(rake)

        # Foremast cylinder
        r = 0.55
        v1 = self.add_vertex(-r, base_y, 215.0)
        v2 = self.add_vertex(r, base_y, 215.0)
        v3 = self.add_vertex(r*0.4, truck_y, 215.0 - dz)
        v4 = self.add_vertex(-r*0.4, truck_y, 215.0 - dz)
        self.add_quad(v1, v2, v3, v4, (0,0), (1,0), (1,1), (0,1), (0,0,1), group='Foremast_Steel')

        # Crow's Nest at Y = 29.0m (95 ft above waterline)
        cn_y = base_y + 18.5
        cn_dz = (cn_y - base_y) * math.tan(rake)
        cn_z = 215.0 - cn_dz
        v_cn1 = self.add_vertex(-0.8, cn_y, cn_z + 0.6)
        v_cn2 = self.add_vertex(0.8, cn_y, cn_z + 0.6)
        v_cn3 = self.add_vertex(0.8, cn_y + 1.2, cn_z + 0.6)
        v_cn4 = self.add_vertex(-0.8, cn_y + 1.2, cn_z + 0.6)
        self.add_quad(v_cn1, v_cn2, v_cn3, v_cn4, (0,0), (1,0), (1,1), (0,1), (0,0,1), group='Crows_Nest')

        # Main Mast: Z = 32.0m, truck Y = 61.57m
        main_base_y = DECK_ELEVATIONS['C_Deck'] + get_sheer_y(32.0)
        main_truck_y = DECK_ELEVATIONS['Main_Mast_Truck']
        main_dz = (main_truck_y - main_base_y) * math.tan(rake)
        v_m1 = self.add_vertex(-r, main_base_y, 32.0)
        v_m2 = self.add_vertex(r, main_base_y, 32.0)
        v_m3 = self.add_vertex(r*0.4, main_truck_y, 32.0 - main_dz)
        v_m4 = self.add_vertex(-r*0.4, main_truck_y, 32.0 - main_dz)
        self.add_quad(v_m1, v_m2, v_m3, v_m4, (0,0), (1,0), (1,1), (0,1), (0,0,1), group='Mainmast_Steel')

    def build_propellers_and_rudder(self):
        """Constructs 3 bronze propellers and massive single-plate rudder."""
        # Rudder at Z = -0.5m to -4.5m, Y = 0.5m to 16.0m
        v_r1 = self.add_vertex(0.0, 0.5, 0.0)
        v_r2 = self.add_vertex(0.0, 0.5, -4.5)
        v_r3 = self.add_vertex(0.0, 16.0, -4.0)
        v_r4 = self.add_vertex(0.0, 16.0, 0.0)
        self.add_quad(v_r1, v_r2, v_r3, v_r4, (0,0), (1,0), (1,1), (0,1), (1,0,0), group='Rudder_Plate')

        # Centre Propeller (16.5 ft = 5.03 m diameter, 3 blades) at Z = 4.5m, X = 0m, Y = 3.6m
        cp_y = 3.6
        cp_z = 4.5
        v_cp1 = self.add_vertex(-2.5, cp_y, cp_z)
        v_cp2 = self.add_vertex(2.5, cp_y, cp_z)
        v_cp3 = self.add_vertex(0.0, cp_y + 2.5, cp_z)
        v_cp4 = self.add_vertex(0.0, cp_y - 2.5, cp_z)
        self.add_quad(v_cp1, v_cp2, v_cp3, v_cp4, (0,0), (1,0), (0.5,1), (0.5,0), (0,0,1), group='Centre_Propeller_Bronze')

        # Port Wing Propeller (23.5 ft = 7.16 m diameter, 3 blades) at Z = 14.5m, X = -8.8m, Y = 4.5m
        wp_y = 4.5
        wp_z = 14.5
        v_pp1 = self.add_vertex(-8.8 - 3.5, wp_y, wp_z)
        v_pp2 = self.add_vertex(-8.8 + 3.5, wp_y, wp_z)
        v_pp3 = self.add_vertex(-8.8, wp_y + 3.5, wp_z)
        v_pp4 = self.add_vertex(-8.8, wp_y - 3.5, wp_z)
        self.add_quad(v_pp1, v_pp2, v_pp3, v_pp4, (0,0), (1,0), (0.5,1), (0.5,0), (0,0,1), group='Port_Propeller_Bronze')

        # Starboard Wing Propeller at Z = 14.5m, X = +8.8m, Y = 4.5m
        v_sp1 = self.add_vertex(8.8 - 3.5, wp_y, wp_z)
        v_sp2 = self.add_vertex(8.8 + 3.5, wp_y, wp_z)
        v_sp3 = self.add_vertex(8.8, wp_y + 3.5, wp_z)
        v_sp4 = self.add_vertex(8.8, wp_y - 3.5, wp_z)
        self.add_quad(v_sp1, v_sp2, v_sp3, v_sp4, (0,0), (1,0), (0.5,1), (0.5,0), (0,0,1), group='Starboard_Propeller_Bronze')

    def export_obj(self, filepath):
        """Exports the generated geometry to standard Wavefront OBJ format."""
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write("# RMS Titanic (Harland & Wolff Yard 401) 3D Model\n")
            f.write("# Project SHIP2665 - Maiden Voyage Southampton 1912\n\n")

            for v in self.vertices:
                f.write(f"v {v[0]:.4f} {v[1]:.4f} {v[2]:.4f}\n")
            f.write("\n")

            for vt in self.uvs:
                f.write(f"vt {vt[0]:.4f} {vt[1]:.4f}\n")
            f.write("\n")

            for vn in self.normals:
                f.write(f"vn {vn[0]:.4f} {vn[1]:.4f} {vn[2]:.4f}\n")
            f.write("\n")

            for grp_name, faces in self.groups.items():
                f.write(f"g {grp_name}\n")
                f.write(f"usemtl {grp_name}\n")
                for face in faces:
                    pts = " ".join([f"{v}/{vt}/{vn}" for v, vt, vn in face])
                    f.write(f"f {pts}\n")

        print(f"Exported Wavefront OBJ to {filepath}: {len(self.vertices)} vertices, {sum(len(f) for f in self.groups.values())} triangles across {len(self.groups)} groups.")

def generate_full_model(obj_path='/home/user/ship2665/models/titanic_model.obj'):
    builder = TitanicMeshBuilder()
    builder.build_hull()
    builder.build_keel_and_bilge_keels()
    builder.build_bulkheads()
    builder.build_decks()
    builder.build_funnels()
    builder.build_masts_and_rigging()
    builder.build_propellers_and_rudder()
    builder.export_obj(obj_path)

if __name__ == '__main__':
    generate_full_model()
