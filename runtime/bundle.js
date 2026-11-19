(()=>{var gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ic=0,rl=1,Dc=2;var ir=1,Po=2,fs=3,xi=0,ln=1,Fe=2,Di=0,Qn=1,sr=2,ol=3,al=4,Lc=5;var Li=100,Nc=101,Uc=102,Fc=103,Oc=104,Bc=200,Hc=201,zc=202,Gc=203,ll=204,cl=205,kc=206,Vc=207,Wc=208,Xc=209,qc=210,Yc=211,Zc=212,Jc=213,Kc=214,Qr=0,eo=1,to=2,ss=3,no=4,io=5,so=6,ro=7,hl=0,$c=1,jc=2,Hn=0,ul=1,dl=2,fl=3,rr=4,pl=5,ml=6,gl=7;var _l=300,Ni=301,ps=302,Io=303,Do=304,oo=1e3,Bn=1001,ao=1002,Xt=1003,Qc=1004;var or=1005;var an=1006,Lo=1007;var ei=1008;var dn=1009,xl=1010,yl=1011,ms=1012,No=1013,Dn=1014,Ln=1015,Nn=1016,Uo=1017,Fo=1018,Ui=1020,vl=35902,Ml=35899,Sl=1021,El=1022,Un=1023,Jn=1026,ti=1027,bl=1028,Oo=1029,yi=1030,Bo=1031;var Ho=1033,ar=33776,lr=33777,cr=33778,hr=33779,zo=35840,Go=35841,ko=35842,Vo=35843,Wo=36196,Xo=37492,qo=37496,Yo=37488,Zo=37489,ur=37490,Jo=37491,Ko=37808,$o=37809,jo=37810,Qo=37811,ea=37812,ta=37813,na=37814,ia=37815,sa=37816,ra=37817,oa=37818,aa=37819,la=37820,ca=37821,ha=36492,ua=36494,da=36495,fa=36283,pa=36284,dr=36285,ma=36286;var Ds=2300,lo=2301,$r=2302,Ka=2303,$a=2400,ja=2401,Qa=2402;var eh=3200;var ga=0,th=1,ni="",gn="srgb",Ls="srgb-linear",Ns="linear",ft="srgb";var jr=7680;var nh=519,ih=512,sh=513,rh=514,Tl=515,oh=516,ah=517,wl=518,Al=519,lh=35044;var Rl="300 es",Tn=2e3,rs=2001;function mu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ch(){let i=Us("canvas");return i.style.display="block",i}var rc={},os=null;function Cl(...i){let e="THREE."+i.shift();os?os("log",e,...i):console.log(e,...i)}function hh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=hh(i);let e="THREE."+i.shift();if(os)os("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Xe(...i){i=hh(i);let e="THREE."+i.shift();if(os)os("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ri(...i){let e=i.join(" ");e in rc||(rc[e]=!0,Oe(...i))}function uh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var dh={[Qr]:Qr,[to]:so,[no]:no,[ss]:io,[eo]:eo,[so]:to,[ro]:ro,[io]:ss},In=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oc=1234567,Ps=Math.PI/180,as=180/Math.PI;function gs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function Pl(i,e){return(i%e+e)%e}function _u(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function xu(i,e,t){return i!==e?(t-i)/(e-i):0}function Is(i,e,t){return(1-t)*i+t*e}function yu(i,e,t,n){return Is(i,e,1-Math.exp(-t*n))}function vu(i,e=1){return e-Math.abs(Pl(i,e*2)-e)}function Mu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Su(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Eu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bu(i,e){return i+Math.random()*(e-i)}function Tu(i){return i*(.5-Math.random())}function wu(i){i!==void 0&&(oc=i);let e=oc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Au(i){return i*Ps}function Ru(i){return i*as}function Cu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Pu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Il(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),m=r((e-n)/2),u=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*m,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*m,a*c);break;case"ZXZ":i.set(l*m,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*p,a*h,a*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function fh(i,e){if(e.constructor===Float32Array)return i;let t=Dl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function ph(i,e){if(e.constructor===Float32Array)return i;let t=Dl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ll={DEG2RAD:Ps,RAD2DEG:as,generateUUID:gs,clamp:rt,euclideanModulo:Pl,mapLinear:_u,inverseLerp:xu,lerp:Is,damp:yu,pingpong:vu,smoothstep:Mu,smootherstep:Su,randInt:Eu,randFloat:bu,randFloatSpread:Tu,seededRandom:wu,degToRad:Au,radToDeg:Ru,isPowerOfTwo:Cu,ceilPowerOfTwo:Pu,floorPowerOfTwo:Il,setQuaternionFromProperEuler:Iu,normalize:ph,denormalize:fh},ze=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],u=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(m!==v||l!==u||c!==p||h!==_){let f=l*u+c*p+h*_+m*v;f<0&&(u=-u,p=-p,_=-_,v=-v,f=-f);let d=1-a;if(f<.9995){let M=Math.acos(f),A=Math.sin(M);d=Math.sin(d*M)/A,a=Math.sin(a*M)/A,l=l*d+u*a,c=c*d+p*a,h=h*d+_*a,m=m*d+v*a}else{l=l*d+u*a,c=c*d+p*a,h=h*d+_*a,m=m*d+v*a;let M=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=M,c*=M,h*=M,m*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[o],u=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*m+l*p-c*u,e[t+1]=l*_+h*u+c*m-a*p,e[t+2]=c*_+h*p+a*u-l*m,e[t+3]=h*_-a*m-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),m=a(r/2),u=l(n/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*m+c*p*_,this._y=c*p*m-u*h*_,this._z=c*h*_+u*p*m,this._w=c*h*m-u*p*_;break;case"YXZ":this._x=u*h*m+c*p*_,this._y=c*p*m-u*h*_,this._z=c*h*_-u*p*m,this._w=c*h*m+u*p*_;break;case"ZXY":this._x=u*h*m-c*p*_,this._y=c*p*m+u*h*_,this._z=c*h*_+u*p*m,this._w=c*h*m-u*p*_;break;case"ZYX":this._x=u*h*m-c*p*_,this._y=c*p*m+u*h*_,this._z=c*h*_-u*p*m,this._w=c*h*m+u*p*_;break;case"YZX":this._x=u*h*m+c*p*_,this._y=c*p*m+u*h*_,this._z=c*h*_-u*p*m,this._w=c*h*m-u*p*_;break;case"XZY":this._x=u*h*m-c*p*_,this._y=c*p*m-u*h*_,this._z=c*h*_+u*p*m,this._w=c*h*m+u*p*_;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],m=t[10],u=n+a+m;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>m){let p=2*Math.sqrt(1+n-a-m);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>m){let p=2*Math.sqrt(1+a-n-m);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+m-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),m=2*(r*n-o*t);return this.x=t+l*c+o*m-a*h,this.y=n+l*h+a*c-r*m,this.z=s+l*m+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pa.copy(this).projectOnVector(e),this.sub(Pa)}reflect(e){return this.sub(Pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pa=new B,ac=new xn,Ye=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],m=n[7],u=n[2],p=n[5],_=n[8],v=s[0],f=s[3],d=s[6],M=s[1],A=s[4],E=s[7],w=s[2],T=s[5],g=s[8];return r[0]=o*v+a*M+l*w,r[3]=o*f+a*A+l*T,r[6]=o*d+a*E+l*g,r[1]=c*v+h*M+m*w,r[4]=c*f+h*A+m*T,r[7]=c*d+h*E+m*g,r[2]=u*v+p*M+_*w,r[5]=u*f+p*A+_*T,r[8]=u*d+p*E+_*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],m=h*o-a*c,u=a*l-h*r,p=c*r-o*l,_=t*m+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=m*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ri("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return Ri("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return Ri("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ia=new Ye,lc=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cc=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Du(){let i={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?Ns:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ls]:{primaries:e,whitePoint:n,transfer:Ns,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:lc,fromXYZ:cc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}var at=Du();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wi,co=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wi===void 0&&(Wi=Us("canvas")),Wi.width=e.width,Wi.height=e.height;let s=Wi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Us("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Lu=0,ls=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Da(s[o].image)):r.push(Da(s[o]))}else r=Da(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Nu=0,La=new B,hn=class i extends In{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=an,o=ei,a=Un,l=dn,c=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=gs(),this.name="",this.source=new ls(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(La).x}get height(){return this.source.getSize(La).y}get depth(){return this.source.getSize(La).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=_l;hn.DEFAULT_ANISOTROPY=1;var At=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],m=l[8],u=l[1],p=l[5],_=l[9],v=l[2],f=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(m-v)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(m+v)<.1&&Math.abs(_+f)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,E=(p+1)/2,w=(d+1)/2,T=(h+u)/4,g=(m+v)/4,S=(_+f)/4;return A>E&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=g/n):E>w?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=S/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=g/r,s=S/r),this.set(n,s,r,t),this}let M=Math.sqrt((f-_)*(f-_)+(m-v)*(m-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(f-_)/M,this.y=(m-v)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ho=class extends In{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new hn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ls(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yn=class extends ho{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fs=class extends hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var uo=class extends hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Tt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,h,m,u,p,_,v,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,m,u,p,_,v,f)}set(e,t,n,s,r,o,a,l,c,h,m,u,p,_,v,f){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=m,d[14]=u,d[3]=p,d[7]=_,d[11]=v,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),r=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let u=o*h,p=o*m,_=a*h,v=a*m;t[0]=l*h,t[4]=-l*m,t[8]=c,t[1]=p+_*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,p=l*m,_=c*h,v=c*m;t[0]=u+v*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*m,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,p=l*m,_=c*h,v=c*m;t[0]=u-v*a,t[4]=-o*m,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,p=o*m,_=a*h,v=a*m;t[0]=l*h,t[4]=_*c-p,t[8]=u*c+v,t[1]=l*m,t[5]=v*c+u,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=v-u*m,t[8]=_*m+p,t[1]=m,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*m+_,t[10]=u-v*m}else if(e.order==="XZY"){let u=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=-m,t[8]=c*h,t[1]=u*m+v,t[5]=o*h,t[9]=p*m-_,t[2]=_*m-p,t[6]=a*h,t[10]=v*m+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uu,e,Fu)}lookAt(e,t,n){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),si.crossVectors(n,pn),si.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),si.crossVectors(n,pn)),si.normalize(),Cr.crossVectors(pn,si),s[0]=si.x,s[4]=Cr.x,s[8]=pn.x,s[1]=si.y,s[5]=Cr.y,s[9]=pn.y,s[2]=si.z,s[6]=Cr.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],m=n[5],u=n[9],p=n[13],_=n[2],v=n[6],f=n[10],d=n[14],M=n[3],A=n[7],E=n[11],w=n[15],T=s[0],g=s[4],S=s[8],O=s[12],D=s[1],F=s[5],G=s[9],q=s[13],P=s[2],X=s[6],$=s[10],W=s[14],oe=s[3],J=s[7],ne=s[11],ie=s[15];return r[0]=o*T+a*D+l*P+c*oe,r[4]=o*g+a*F+l*X+c*J,r[8]=o*S+a*G+l*$+c*ne,r[12]=o*O+a*q+l*W+c*ie,r[1]=h*T+m*D+u*P+p*oe,r[5]=h*g+m*F+u*X+p*J,r[9]=h*S+m*G+u*$+p*ne,r[13]=h*O+m*q+u*W+p*ie,r[2]=_*T+v*D+f*P+d*oe,r[6]=_*g+v*F+f*X+d*J,r[10]=_*S+v*G+f*$+d*ne,r[14]=_*O+v*q+f*W+d*ie,r[3]=M*T+A*D+E*P+w*oe,r[7]=M*g+A*F+E*X+w*J,r[11]=M*S+A*G+E*$+w*ne,r[15]=M*O+A*q+E*W+w*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],m=e[6],u=e[10],p=e[14],_=e[3],v=e[7],f=e[11],d=e[15],M=l*p-c*u,A=a*p-c*m,E=a*u-l*m,w=o*p-c*h,T=o*u-l*h,g=o*m-a*h;return t*(v*M-f*A+d*E)-n*(_*M-f*w+d*T)+s*(_*A-v*w+d*g)-r*(_*E-v*T+f*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],m=e[9],u=e[10],p=e[11],_=e[12],v=e[13],f=e[14],d=e[15],M=t*a-n*o,A=t*l-s*o,E=t*c-r*o,w=n*l-s*a,T=n*c-r*a,g=s*c-r*l,S=h*v-m*_,O=h*f-u*_,D=h*d-p*_,F=m*f-u*v,G=m*d-p*v,q=u*d-p*f,P=M*q-A*G+E*F+w*D-T*O+g*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/P;return e[0]=(a*q-l*G+c*F)*X,e[1]=(s*G-n*q-r*F)*X,e[2]=(v*g-f*T+d*w)*X,e[3]=(u*T-m*g-p*w)*X,e[4]=(l*D-o*q-c*O)*X,e[5]=(t*q-s*D+r*O)*X,e[6]=(f*E-_*g-d*A)*X,e[7]=(h*g-u*E+p*A)*X,e[8]=(o*G-a*D+c*S)*X,e[9]=(n*D-t*G-r*S)*X,e[10]=(_*T-v*E+d*M)*X,e[11]=(m*E-h*T-p*M)*X,e[12]=(a*O-o*F-l*S)*X,e[13]=(t*F-n*O+s*S)*X,e[14]=(v*A-_*w-f*M)*X,e[15]=(h*w-m*A+u*M)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,m=a+a,u=r*c,p=r*h,_=r*m,v=o*h,f=o*m,d=a*m,M=l*c,A=l*h,E=l*m,w=n.x,T=n.y,g=n.z;return s[0]=(1-(v+d))*w,s[1]=(p+E)*w,s[2]=(_-A)*w,s[3]=0,s[4]=(p-E)*T,s[5]=(1-(u+d))*T,s[6]=(f+M)*T,s[7]=0,s[8]=(_+A)*g,s[9]=(f-M)*g,s[10]=(1-(u+v))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Xi.set(s[0],s[1],s[2]).length(),a=Xi.set(s[4],s[5],s[6]).length(),l=Xi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Rn.copy(this);let c=1/o,h=1/a,m=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=m,Rn.elements[9]*=m,Rn.elements[10]*=m,t.setFromRotationMatrix(Rn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Tn,l=!1){let c=this.elements,h=2*r/(t-e),m=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),_,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===Tn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===rs)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=m,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Tn,l=!1){let c=this.elements,h=2/(t-e),m=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),_,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===Tn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===rs)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=m,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xi=new B,Rn=new Tt,Uu=new B(0,0,0),Fu=new B(1,1,1),si=new B,Cr=new B,pn=new B,hc=new Tt,uc=new xn,Kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],m=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uc.setFromEuler(this),this.setFromQuaternion(uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ou=0,dc=new B,qi=new xn,Vn=new Tt,Pr=new B,ws=new B,Bu=new B,Hu=new xn,fc=new B(1,0,0),pc=new B(0,1,0),mc=new B(0,0,1),gc={type:"added"},zu={type:"removed"},Yi={type:"childadded",child:null},Na={type:"childremoved",child:null},Yt=class i extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new Kn,n=new xn,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ye}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(fc,e)}rotateY(e){return this.rotateOnAxis(pc,e)}rotateZ(e){return this.rotateOnAxis(mc,e)}translateOnAxis(e,t){return dc.copy(e).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fc,e)}translateY(e){return this.translateOnAxis(pc,e)}translateZ(e){return this.translateOnAxis(mc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pr.copy(e):Pr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(ws,Pr,this.up):Vn.lookAt(Pr,ws,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Vn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zu),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gc),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Hu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),m=o(e.shapes),u=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yt.DEFAULT_UP=new B(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gu={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,n),d=this._getHandJoint(c,v);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],u=h.position.distanceTo(m.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Ua(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=Pl(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ua(o,r,e+1/3),this.g=Ua(o,r,e),this.b=Ua(o,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=gn){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){let n=mh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return at.workingToColorSpace(Qt.copy(this),e),Math.round(rt(Qt.r*255,0,255))*65536+Math.round(rt(Qt.g*255,0,255))*256+Math.round(rt(Qt.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let m=o-a;switch(c=h<=.5?m/(o+a):m/(2-o-a),o){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=gn){at.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Ir);let n=Is(ri.h,Ir.h,t),s=Is(ri.s,Ir.s,t),r=Is(ri.l,Ir.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new He;He.NAMES=mh;var Bs=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Hs=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Cn=new B,Wn=new B,Fa=new B,Xn=new B,Zi=new B,Ji=new B,_c=new B,Oa=new B,Ba=new B,Ha=new B,za=new At,Ga=new At,ka=new At,ci=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),Wn.subVectors(n,t),Fa.subVectors(e,t);let o=Cn.dot(Cn),a=Cn.dot(Wn),l=Cn.dot(Fa),c=Wn.dot(Wn),h=Wn.dot(Fa),m=o*c-a*a;if(m===0)return r.set(0,0,0),null;let u=1/m,p=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return za.setScalar(0),Ga.setScalar(0),ka.setScalar(0),za.fromBufferAttribute(e,t),Ga.fromBufferAttribute(e,n),ka.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(za,r.x),o.addScaledVector(Ga,r.y),o.addScaledVector(ka,r.z),o}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),Wn.subVectors(e,t),Cn.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Cn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Zi.subVectors(s,n),Ji.subVectors(r,n),Oa.subVectors(e,n);let l=Zi.dot(Oa),c=Ji.dot(Oa);if(l<=0&&c<=0)return t.copy(n);Ba.subVectors(e,s);let h=Zi.dot(Ba),m=Ji.dot(Ba);if(h>=0&&m<=h)return t.copy(s);let u=l*m-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Zi,o);Ha.subVectors(e,r);let p=Zi.dot(Ha),_=Ji.dot(Ha);if(_>=0&&p<=_)return t.copy(r);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Ji,a);let f=h*_-p*m;if(f<=0&&m-h>=0&&p-_>=0)return _c.subVectors(r,s),a=(m-h)/(m-h+(p-_)),t.copy(s).addScaledVector(_c,a);let d=1/(f+v+u);return o=v*d,a=u*d,t.copy(n).addScaledVector(Zi,o).addScaledVector(Ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hi=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),Lr.subVectors(this.max,As),Ki.subVectors(e.a,As),$i.subVectors(e.b,As),ji.subVectors(e.c,As),oi.subVectors($i,Ki),ai.subVectors(ji,$i),bi.subVectors(Ki,ji);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-bi.z,bi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,bi.z,0,-bi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-bi.y,bi.x,0];return!Va(t,Ki,$i,ji,Lr)||(t=[1,0,0,0,1,0,0,0,1],!Va(t,Ki,$i,ji,Lr))?!1:(Nr.crossVectors(oi,ai),t=[Nr.x,Nr.y,Nr.z],Va(t,Ki,$i,ji,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qn=[new B,new B,new B,new B,new B,new B,new B,new B],Pn=new B,Dr=new hi,Ki=new B,$i=new B,ji=new B,oi=new B,ai=new B,bi=new B,As=new B,Lr=new B,Nr=new B,Ti=new B;function Va(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);let a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ot=new B,Ur=new ze,ku=0,cn=class extends In{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ku++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lh,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=e!==void 0?Dl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):fh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ph(e,this.array)}};var zs=class extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gs=class extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Vu=new hi,Rs=new B,Wa=new B,Ci=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Vu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);let t=Rs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Wa)),this.expandByPoint(Rs.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wu=0,bn=new Tt,Xa=new Yt,Qi=new B,mn=new hi,Cs=new hi,Wt=new B,Zt=class i extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mu(e)?Gs:zs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(mn.min,Cs.min),mn.expandByPoint(Wt),Wt.addVectors(mn.max,Cs.max),mn.expandByPoint(Wt)):(mn.expandByPoint(Cs.min),mn.expandByPoint(Cs.max))}mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Wt.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(e,c),Wt.add(Qi)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let O=0;O<n.count;O++)a[O]=new B,l[O]=new B;let h=new B,m=new B,u=new B,p=new ze,_=new ze,v=new ze,f=new B,d=new B;function M(O,D,F){c[O]=c[D]=c[F]=1,h.fromBufferAttribute(n,O),m.fromBufferAttribute(n,D),u.fromBufferAttribute(n,F),p.fromBufferAttribute(r,O),_.fromBufferAttribute(r,D),v.fromBufferAttribute(r,F),m.sub(h),u.sub(h),_.sub(p),v.sub(p);let G=1/(_.x*v.y-v.x*_.y);isFinite(G)&&(f.copy(m).multiplyScalar(v.y).addScaledVector(u,-_.y).multiplyScalar(G),d.copy(u).multiplyScalar(_.x).addScaledVector(m,-v.x).multiplyScalar(G),a[O].add(f),a[D].add(f),a[F].add(f),l[O].add(d),l[D].add(d),l[F].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let O=0,D=A.length;O<D;++O){let F=A[O],G=F.start,q=F.count;for(let P=G,X=G+q;P<X;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let E=new B,w=new B,T=new B,g=new B;function S(O){T.fromBufferAttribute(s,O),g.copy(T);let D=a[O];E.copy(D),E.sub(T.multiplyScalar(T.dot(D))).normalize(),w.crossVectors(g,D);let G=w.dot(l[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,G)}for(let O=0,D=n.count;O<D;++O)c[O]&&S(O);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,m=new B;if(e)for(let u=0,p=e.count;u<p;u+=3){let _=e.getX(u+0),v=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),h.subVectors(o,r),m.subVectors(s,r),h.cross(m),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),m.subVectors(s,r),h.cross(m),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,m=a.normalized,u=new c.constructor(l.length*h),p=0,_=0;for(let v=0,f=l.length;v<f;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)u[_++]=c[p++]}return new cn(u,h,m)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,m=c.length;h<m;h++){let u=c[h],p=e(u,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,u=c.length;m<u;m++){let p=c[m];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],m=r[c];for(let u=0,p=m.length;u<p;u++)h.push(m[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let m=o[c];this.addGroup(m.start,m.count,m.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var qa=new B,Xu=new B,qu=new Ye,_n=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=qa.subVectors(n,t).cross(Xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(qa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qu.getNormalMatrix(e),s=this.coplanarPoint(qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Yu=0,$n=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Qn,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new _n().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Yn=new B,Ya=new B,Fr=new B,Or=new B,Pi=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ya.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(Ya);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Fr),a=Or.dot(this.direction),l=-Or.dot(Fr),c=Or.lengthSq(),h=Math.abs(1-o*o),m,u,p,_;if(h>0)if(m=o*l-a,u=o*a-l,_=r*h,m>=0)if(u>=-_)if(u<=_){let v=1/h;m*=v,u*=v,p=m*(m+o*u+2*a)+u*(o*m+u+2*l)+c}else u=r,m=Math.max(0,-(o*u+a)),p=-m*m+u*(u+2*l)+c;else u=-r,m=Math.max(0,-(o*u+a)),p=-m*m+u*(u+2*l)+c;else u<=-_?(m=Math.max(0,-(-o*r+a)),u=m>0?-r:Math.min(Math.max(-r,-l),r),p=-m*m+u*(u+2*l)+c):u<=_?(m=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(m=Math.max(0,-(o*r+a)),u=m>0?r:Math.min(Math.max(-r,-l),r),p=-m*m+u*(u+2*l)+c);else u=o>0?-r:r,m=Math.max(0,-(o*u+a)),p=-m*m+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Ya).addScaledVector(Fr,u),p}intersectSphere(e,t){if(e.radius<0)return null;Yn.subVectors(e.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(e.min.z-u.z)*m,l=(e.max.z-u.z)*m):(a=(e.max.z-u.z)*m,l=(e.min.z-u.z)*m),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,m=e.x-o.x,u=e.y-o.y,p=e.z-o.z,_=t.x-o.x,v=t.y-o.y,f=t.z-o.z,d=n.x-o.x,M=n.y-o.y,A=n.z-o.z,E=Math.abs(l),w=Math.abs(c),T=Math.abs(h),g,S,O,D,F,G,q,P,X,$,W,oe;if(E>=w&&E>=T?(O=l,G=m,X=_,oe=d,l>=0?(g=c,S=h,D=u,F=p,q=v,P=f,$=M,W=A):(g=h,S=c,D=p,F=u,q=f,P=v,$=A,W=M)):w>=T?(O=c,G=u,X=v,oe=M,c>=0?(g=h,S=l,D=p,F=m,q=f,P=_,$=A,W=d):(g=l,S=h,D=m,F=p,q=_,P=f,$=d,W=A)):(O=h,G=p,X=f,oe=A,h>=0?(g=l,S=c,D=m,F=u,q=_,P=v,$=d,W=M):(g=c,S=l,D=u,F=m,q=v,P=_,$=M,W=d)),O===0)return null;let J=g/O,ne=S/O,ie=1/O,Ae=D-J*G,Ve=F-ne*G,ee=q-J*X,ye=P-ne*X,be=$-J*oe,Le=W-ne*oe,ve=be*ye-Le*ee,qe=Ae*Le-Ve*be,Lt=ee*Ve-ye*Ae;if(s){if(ve<0||qe<0||Lt<0)return null}else if((ve<0||qe<0||Lt<0)&&(ve>0||qe>0||Lt>0))return null;let Ie=ve+qe+Lt;if(Ie===0)return null;let ct=ie*(ve*G+qe*X+Lt*oe);return(Ie>0?ct<0:ct>0)?null:this.at(ct/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ui=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xc=new Tt,wi=new Pi,Br=new Ci,yc=new B,Hr=new B,zr=new B,Gr=new B,Za=new B,kr=new B,vc=new B,Vr=new B,N=class extends Yt{constructor(e=new Zt,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],m=r[l];h!==0&&(Za.fromBufferAttribute(m,e),o?kr.addScaledVector(Za,h):kr.addScaledVector(Za.sub(t),h))}t.add(kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Br.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Br,yc)===null||wi.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(xc.copy(r).invert(),wi.copy(e.ray).applyMatrix4(xc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let f=u[_],d=o[f.materialIndex],M=Math.max(f.start,p.start),A=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let E=M,w=A;E<w;E+=3){let T=a.getX(E),g=a.getX(E+1),S=a.getX(E+2);s=Wr(this,d,e,n,c,h,m,T,g,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let f=_,d=v;f<d;f+=3){let M=a.getX(f),A=a.getX(f+1),E=a.getX(f+2);s=Wr(this,o,e,n,c,h,m,M,A,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let f=u[_],d=o[f.materialIndex],M=Math.max(f.start,p.start),A=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let E=M,w=A;E<w;E+=3){let T=E,g=E+1,S=E+2;s=Wr(this,d,e,n,c,h,m,T,g,S),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let f=_,d=v;f<d;f+=3){let M=f,A=f+1,E=f+2;s=Wr(this,o,e,n,c,h,m,M,A,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Zu(i,e,t,n,s,r,o,a){let l;if(e.side===ln?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===xi,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:i}}function Wr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Hr),i.getVertexPosition(l,zr),i.getVertexPosition(c,Gr);let h=Zu(i,e,t,n,Hr,zr,Gr,vc);if(h){let m=new B;ci.getBarycoord(vc,Hr,zr,Gr,m),s&&(h.uv=ci.getInterpolatedAttribute(s,a,l,c,m,new ze)),r&&(h.uv1=ci.getInterpolatedAttribute(r,a,l,c,m,new ze)),o&&(h.normal=ci.getInterpolatedAttribute(o,a,l,c,m,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};ci.getNormal(Hr,zr,Gr,u.normal),h.face=u,h.barycoord=m}return h}var fo=class extends hn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Xt,h=Xt,m,u){super(null,o,a,l,c,h,s,r,m,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ai=new Ci,Ju=new ze(.5,.5),Xr=new B,di=class{constructor(e=new _n,t=new _n,n=new _n,s=new _n,r=new _n,o=new _n){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],m=r[5],u=r[6],p=r[7],_=r[8],v=r[9],f=r[10],d=r[11],M=r[12],A=r[13],E=r[14],w=r[15];if(s[0].setComponents(c-o,p-h,d-_,w-M).normalize(),s[1].setComponents(c+o,p+h,d+_,w+M).normalize(),s[2].setComponents(c+a,p+m,d+v,w+A).normalize(),s[3].setComponents(c-a,p-m,d-v,w-A).normalize(),n)s[4].setComponents(l,u,f,E).normalize(),s[5].setComponents(c-l,p-u,d-f,w-E).normalize();else if(s[4].setComponents(c-l,p-u,d-f,w-E).normalize(),t===Tn)s[5].setComponents(c+l,p+u,d+f,w+E).normalize();else if(t===rs)s[5].setComponents(l,u,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);let t=Ju.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xr.x=s.normal.x>0?e.max.x:e.min.x,Xr.y=s.normal.y>0?e.max.y:e.min.y,Xr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mc=new Tt,po=class i{constructor(){this.coordinateSystem=Tn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Mc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new di),n[s].setFromProjectionMatrix(Mc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new di),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var mo=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sc=new Tt,el=new Pi,qr=new Ci,Yr=new B,ks=class extends Yt{constructor(e=new Zt,t=new mo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;Sc.copy(s).invert(),el.copy(e.ray).applyMatrix4(Sc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,m=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=u,v=p;_<v;_++){let f=c.getX(_);Yr.fromBufferAttribute(m,f),Ec(Yr,f,l,s,e,t,this)}}else{let u=Math.max(0,o.start),p=Math.min(m.count,o.start+o.count);for(let _=u,v=p;_<v;_++)Yr.fromBufferAttribute(m,_),Ec(Yr,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ec(i,e,t,n,s,r,o){let a=el.distanceSqToPoint(i);if(a<t){let l=new B;el.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Vs=class extends hn{constructor(e=[],t=Ni,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var jn=class extends hn{constructor(e,t,n=Dn,s,r,o,a=Xt,l=Xt,c,h=Jn,m=1){if(h!==Jn&&h!==ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:m};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ls(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ws=class extends jn{constructor(e,t=Dn,n=Ni,s,r,o=Xt,a=Xt,l,c=Jn){let h={width:e,height:e,depth:1},m=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xs=class extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pe=class i extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],m=[],u=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(m,2));function _(v,f,d,M,A,E,w,T,g,S,O){let D=E/g,F=w/S,G=E/2,q=w/2,P=T/2,X=g+1,$=S+1,W=0,oe=0,J=new B;for(let ne=0;ne<$;ne++){let ie=ne*F-q;for(let Ae=0;Ae<X;Ae++){let Ve=Ae*D-G;J[v]=Ve*M,J[f]=ie*A,J[d]=P,c.push(J.x,J.y,J.z),J[v]=0,J[f]=0,J[d]=T>0?1:-1,h.push(J.x,J.y,J.z),m.push(Ae/g),m.push(1-ne/S),W+=1}}for(let ne=0;ne<S;ne++)for(let ie=0;ie<g;ie++){let Ae=u+ie+X*ne,Ve=u+ie+X*(ne+1),ee=u+(ie+1)+X*(ne+1),ye=u+(ie+1)+X*ne;l.push(Ae,Ve,ye),l.push(Ve,ee,ye),oe+=6}a.addGroup(p,oe,O),p+=oe,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var De=class i extends Zt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],u=[],p=[],_=0,v=[],f=n/2,d=0;M(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new _t(m,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(p,2));function M(){let E=new B,w=new B,T=0,g=(t-e)/n;for(let S=0;S<=r;S++){let O=[],D=S/r,F=D*(t-e)+e;for(let G=0;G<=s;G++){let q=G/s,P=q*l+a,X=Math.sin(P),$=Math.cos(P);w.x=F*X,w.y=-D*n+f,w.z=F*$,m.push(w.x,w.y,w.z),E.set(X,g,$).normalize(),u.push(E.x,E.y,E.z),p.push(q,1-D),O.push(_++)}v.push(O)}for(let S=0;S<s;S++)for(let O=0;O<r;O++){let D=v[O][S],F=v[O+1][S],G=v[O+1][S+1],q=v[O][S+1];(e>0||O!==0)&&(h.push(D,F,q),T+=3),(t>0||O!==r-1)&&(h.push(F,G,q),T+=3)}c.addGroup(d,T,0),d+=T}function A(E){let w=_,T=new ze,g=new B,S=0,O=E===!0?e:t,D=E===!0?1:-1;for(let G=1;G<=s;G++)m.push(0,f*D,0),u.push(0,D,0),p.push(.5,.5),_++;let F=_;for(let G=0;G<=s;G++){let P=G/s*l+a,X=Math.cos(P),$=Math.sin(P);g.x=O*$,g.y=f*D,g.z=O*X,m.push(g.x,g.y,g.z),u.push(0,D,0),T.x=X*.5+.5,T.y=$*.5*D+.5,p.push(T.x,T.y),_++}for(let G=0;G<s;G++){let q=w+G,P=F+G;E===!0?h.push(P,P+1,q):h.push(P+1,P,q),S+=3}c.addGroup(d,S,E===!0?1:2),d+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qs=class i extends De{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var je=class i extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,m=e/a,u=t/l,p=[],_=[],v=[],f=[];for(let d=0;d<h;d++){let M=d*u-o;for(let A=0;A<c;A++){let E=A*m-r;_.push(E,-M,0),v.push(0,0,1),f.push(A/a),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let A=M+c*d,E=M+c*(d+1),w=M+1+c*(d+1),T=M+1+c*d;p.push(A,E,T),p.push(E,w,T)}this.setIndex(p),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ii=class i extends Zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],m=new B,u=new B,p=[],_=[],v=[],f=[];for(let d=0;d<=n;d++){let M=[],A=d/n,E=o+A*a,w=e*Math.cos(E),T=Math.sqrt(e*e-w*w),g=0;d===0&&o===0?g=.5/t:d===n&&l===Math.PI&&(g=-.5/t);for(let S=0;S<=t;S++){let O=S/t,D=s+O*r;m.x=-T*Math.cos(D),m.y=w,m.z=T*Math.sin(D),_.push(m.x,m.y,m.z),u.copy(m).normalize(),v.push(u.x,u.y,u.z),f.push(O+g,1-A),M.push(c++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){let A=h[d][M+1],E=h[d][M],w=h[d+1][M],T=h[d+1][M+1];(d!==0||o>0)&&p.push(A,E,T),(d!==n-1||l<Math.PI)&&p.push(E,w,T)}this.setIndex(p),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(v,3)),this.setAttribute("uv",new _t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ys=class i extends Zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],m=[],u=new B,p=new B,_=new B;for(let v=0;v<=n;v++){let f=o+v/n*a;for(let d=0;d<=s;d++){let M=d/s*r;p.x=(e+t*Math.cos(f))*Math.cos(M),p.y=(e+t*Math.cos(f))*Math.sin(M),p.z=t*Math.sin(f),c.push(p.x,p.y,p.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),_.subVectors(p,u).normalize(),h.push(_.x,_.y,_.z),m.push(d/s),m.push(v/n)}}for(let v=1;v<=n;v++)for(let f=1;f<=s;f++){let d=(s+1)*v+f-1,M=(s+1)*(v-1)+f-1,A=(s+1)*(v-1)+f,E=(s+1)*v+f;l.push(d,M,E),l.push(M,A,E)}this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Fi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(bc(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(bc(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function tn(i){let e={};for(let t=0;t<i.length;t++){let n=Fi(i[t]);for(let s in n)e[s]=n[s]}return e}function bc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ku(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var gh={clone:Fi,merge:tn},$u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fi(e.uniforms),this.uniformsGroups=Ku(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new ze().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new At().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Tt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},go=class extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ke=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ga,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zs=class extends Ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ri('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ri('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var _o=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xo=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function es(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Zr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yo=class extends fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$a,endingEnd:$a}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ja:r=e,a=2*t-n;break;case Qa:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ja:o=e,l=2*n-t;break;case Qa:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,m=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),v=_*_,f=v*_,d=-u*f+2*u*v-u*_,M=(1+u)*f+(-1.5-2*u)*v+(-.5+u)*_+1,A=(-1-p)*f+(1.5+p)*v+.5*_,E=p*f-p*v;for(let w=0;w!==a;++w)r[w]=d*o[h+w]+M*o[c+w]+A*o[l+w]+E*o[m+w];return r}},vo=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),m=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*m+o[l+u]*h;return r}},Mo=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},So=class extends fi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,m=this.outTangents;if(!h||!m){let _=(n-t)/(s-t),v=1-_;for(let f=0;f!==a;++f)r[f]=o[c+f]*v+o[l+f]*_;return r}let u=a*2,p=e-1;for(let _=0;_!==a;++_){let v=o[c+_],f=o[l+_],d=p*u+_*2,M=m[d],A=m[d+1],E=e*u+_*2,w=h[E],T=h[E+1],g=ed(n,t,M,w,s);r[_]=_h(g,v,A,T,f)}return r}};function _h(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Qu(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ed(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=_h(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Qu(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=es(t,this.TimeBufferType),this.values=es(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:es(e.times,Array),values:es(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Zr(e.settings)&&(n.settings={inTangents:es(e.settings.inTangents,Array),outTangents:es(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new So(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ds:t=this.InterpolantFactoryMethodDiscrete;break;case lo:t=this.InterpolantFactoryMethodLinear;break;case $r:t=this.InterpolantFactoryMethodSmooth;break;case Ka:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return $r;case this.InterpolantFactoryMethodBezier:return Ka}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Zr(this.settings)&&(Tc(this.settings.inTangents,e),Tc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Zr(this.settings)&&(wc(this.settings.inTangents,e),wc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&gu(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$r,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let m=a*n,u=m-n,p=m+n;for(let _=0;_!==n;++_){let v=t[m+_];if(v!==t[u+_]||v!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let m=a*n,u=o*n;for(let p=0;p!==n;++p)t[u+p]=t[m+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Zr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function wc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=lo;var pi=class extends vn{constructor(e,t,n){super(e,t,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Ds;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};Eo.prototype.ValueTypeName="color";var bo=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};bo.prototype.ValueTypeName="number";var To=class extends fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Js=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends vn{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Ds;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};wo.prototype.ValueTypeName="vector";var Ao=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,u=c.length;m<u;m+=2){let p=c[m],_=c[m+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xh=new Ao,Ro=class{constructor(e){this.manager=e!==void 0?e:xh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var hs=class extends Yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ks=class extends hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ja=new Tt,Ac=new B,Rc=new B,$s=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new di,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ac.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ac),Rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ja,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===rs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jr=new B,Kr=new xn,On=new B,js=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jr,Kr,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,Kr,On.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Jr,Kr,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,Kr,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},li=new B,Cc=new ze,Pc=new ze,en=class extends js{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Cc,Pc),t.subVectors(Pc,Cc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var tl=class extends $s{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},vt=class extends hs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Qs=class extends js{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nl=class extends $s{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},er=class extends hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new nl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ts=-90,ns=1,us=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(ts,ns,e,t);s.layers=this.layers,this.add(s);let r=new en(ts,ns,e,t);r.layers=this.layers,this.add(r);let o=new en(ts,ns,e,t);o.layers=this.layers,this.add(o);let a=new en(ts,ns,e,t);a.layers=this.layers,this.add(a);let l=new en(ts,ns,e,t);l.layers=this.layers,this.add(l);let c=new en(ts,ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,m=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(m,u,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Co=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ul="\\[\\]\\.:\\/",td=new RegExp("["+Ul+"]","g"),Fl="[^"+Ul+"]",nd="[^"+Ul.replace("\\.","")+"]",id=/((?:WC+[\/:])*)/.source.replace("WC",Fl),sd=/(WCOD+)?/.source.replace("WCOD",nd),rd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),od=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),ad=new RegExp("^"+id+sd+rd+od+"$"),ld=["material","materials","bones","map"],il=class{constructor(e,t,n){let s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(td,"")}static parseTrackName(e){let t=ad.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ld.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=il;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x0=new Float32Array(1);var tr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},ds=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var sl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var nr=class extends In{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Ol(i,e,t,n){let s=cd(n);switch(t){case Sl:return i*e;case bl:return i*e/s.components*s.byteLength;case Oo:return i*e/s.components*s.byteLength;case yi:return i*e*2/s.components*s.byteLength;case Bo:return i*e*2/s.components*s.byteLength;case El:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case Ho:return i*e*4/s.components*s.byteLength;case ar:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Go:case Vo:return Math.max(i,16)*Math.max(e,8)/4;case zo:case ko:return Math.max(i,8)*Math.max(e,8)/2;case Wo:case Xo:case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qo:case ur:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case na:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case la:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ha:case ua:case da:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fa:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dr:case ma:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cd(i){switch(i){case dn:case xl:return{byteLength:1,components:1};case ms:case yl:case Nn:return{byteLength:2,components:1};case Uo:case Fo:return{byteLength:2,components:4};case Dn:case No:case Ln:return{byteLength:4,components:1};case vl:case Ml:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function zh(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ud(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,m=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,l,c){let h=l.array,m=l.updateRanges;if(i.bindBuffer(c,a),m.length===0)i.bufferSubData(c,0,h);else{m.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<m.length;p++){let _=m[u],v=m[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,m[u]=v)}m.length=u+1;for(let p=0,_=m.length;p<_;p++){let v=m[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Td=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",kd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,df=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,If=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Uf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$f=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ap=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ip=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Np=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Op=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:dd,alphahash_pars_fragment:fd,alphamap_fragment:pd,alphamap_pars_fragment:md,alphatest_fragment:gd,alphatest_pars_fragment:_d,aomap_fragment:xd,aomap_pars_fragment:yd,batching_pars_vertex:vd,batching_vertex:Md,begin_vertex:Sd,beginnormal_vertex:Ed,bsdfs:bd,iridescence_fragment:Td,bumpmap_pars_fragment:wd,clipping_planes_fragment:Ad,clipping_planes_pars_fragment:Rd,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Pd,color_fragment:Id,color_pars_fragment:Dd,color_pars_vertex:Ld,color_vertex:Nd,common:Ud,defaultnormal_vertex:Fd,displacementmap_pars_vertex:Od,displacementmap_vertex:Bd,emissivemap_fragment:Hd,emissivemap_pars_fragment:zd,colorspace_fragment:Gd,colorspace_pars_fragment:kd,envmap_fragment:Vd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:Xd,envmap_pars_vertex:qd,envmap_physical_pars_fragment:sf,envmap_vertex:Yd,fog_vertex:Zd,fog_pars_vertex:Jd,fog_fragment:Kd,fog_pars_fragment:$d,gradientmap_pars_fragment:jd,lightmap_pars_fragment:Qd,lights_lambert_fragment:ef,lights_lambert_pars_fragment:tf,lights_pars_begin:nf,lights_toon_fragment:rf,lights_toon_pars_fragment:of,lights_phong_fragment:af,lights_phong_pars_fragment:lf,lights_physical_fragment:cf,lights_physical_pars_fragment:hf,lights_fragment_begin:uf,lights_fragment_maps:df,lights_fragment_end:ff,lightprobes_pars_fragment:pf,logdepthbuf_fragment:mf,logdepthbuf_pars_fragment:gf,logdepthbuf_pars_vertex:_f,logdepthbuf_vertex:xf,map_fragment:yf,map_pars_fragment:vf,map_particle_fragment:Mf,map_particle_pars_fragment:Sf,metalnessmap_fragment:Ef,metalnessmap_pars_fragment:bf,morphinstance_vertex:Tf,morphcolor_vertex:wf,morphnormal_vertex:Af,morphtarget_pars_vertex:Rf,morphtarget_vertex:Cf,normal_fragment_begin:Pf,normal_fragment_maps:If,normal_pars_fragment:Df,normal_pars_vertex:Lf,normal_vertex:Nf,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Of,clearcoat_pars_fragment:Bf,iridescence_pars_fragment:Hf,opaque_fragment:zf,packing:Gf,premultiplied_alpha_fragment:kf,project_vertex:Vf,dithering_fragment:Wf,dithering_pars_fragment:Xf,roughnessmap_fragment:qf,roughnessmap_pars_fragment:Yf,shadowmap_pars_fragment:Zf,shadowmap_pars_vertex:Jf,shadowmap_vertex:Kf,shadowmask_pars_fragment:$f,skinbase_vertex:jf,skinning_pars_vertex:Qf,skinning_vertex:ep,skinnormal_vertex:tp,specularmap_fragment:np,specularmap_pars_fragment:ip,tonemapping_fragment:sp,tonemapping_pars_fragment:rp,transmission_fragment:op,transmission_pars_fragment:ap,uv_pars_fragment:lp,uv_pars_vertex:cp,uv_vertex:hp,worldpos_vertex:up,background_vert:dp,background_frag:fp,backgroundCube_vert:pp,backgroundCube_frag:mp,cube_vert:gp,cube_frag:_p,depth_vert:xp,depth_frag:yp,distance_vert:vp,distance_frag:Mp,equirect_vert:Sp,equirect_frag:Ep,linedashed_vert:bp,linedashed_frag:Tp,meshbasic_vert:wp,meshbasic_frag:Ap,meshlambert_vert:Rp,meshlambert_frag:Cp,meshmatcap_vert:Pp,meshmatcap_frag:Ip,meshnormal_vert:Dp,meshnormal_frag:Lp,meshphong_vert:Np,meshphong_frag:Up,meshphysical_vert:Fp,meshphysical_frag:Op,meshtoon_vert:Bp,meshtoon_frag:Hp,points_vert:zp,points_frag:Gp,shadow_vert:kp,shadow_frag:Vp,sprite_vert:Wp,sprite_frag:Xp},Se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Gn={basic:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:tn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:tn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:tn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:tn([Se.points,Se.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:tn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:tn([Se.common,Se.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:tn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:tn([Se.sprite,Se.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:tn([Se.common,Se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:tn([Se.lights,Se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Gn.physical={uniforms:tn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var _a={r:0,b:0,g:0},qp=new Tt,Gh=new Ye;Gh.set(-1,0,0,0,1,0,0,0,1);function Yp(i,e,t,n,s,r){let o=new He(0),a=s===!0?0:1,l,c,h=null,m=0,u=null;function p(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let E=M.backgroundBlurriness>0;A=e.get(A,E)}return A}function _(M){let A=!1,E=p(M);E===null?f(o,a):E&&E.isColor&&(f(E,1),A=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,A){let E=p(A);E&&E.isCubeTexture?(c===void 0&&(c=new N(new pe(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Fi(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qp.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gh),c.material.toneMapped=at.getTransfer(E.colorSpace)!==ft,(h!==E||m!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=E,m=E.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new N(new je(2,2),new un({name:"BackgroundMaterial",uniforms:Fi(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=at.getTransfer(E.colorSpace)!==ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||m!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,m=E.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,A){M.getRGB(_a,Nl(i)),t.buffers.color.setClear(_a.r,_a.g,_a.b,A,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,f(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,f(o,a)},render:_,addToRenderList:v,dispose:d}}function Zp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(F,G,q,P,X){let $=!1,W=m(F,P,q,G);r!==W&&(r=W,c(r.object)),$=p(F,P,q,X),$&&_(F,P,q,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,E(F,G,q,P),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function m(F,G,q,P){let X=P.wireframe===!0,$=n[G.id];$===void 0&&($={},n[G.id]=$);let W=F.isInstancedMesh===!0?F.id:0,oe=$[W];oe===void 0&&(oe={},$[W]=oe);let J=oe[q.id];J===void 0&&(J={},oe[q.id]=J);let ne=J[X];return ne===void 0&&(ne=u(l()),J[X]=ne),ne}function u(F){let G=[],q=[],P=[];for(let X=0;X<t;X++)G[X]=0,q[X]=0,P[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:P,object:F,attributes:{},index:null}}function p(F,G,q,P){let X=r.attributes,$=G.attributes,W=0,oe=q.getAttributes();for(let J in oe)if(oe[J].location>=0){let ie=X[J],Ae=$[J];if(Ae===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(Ae=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(Ae=F.instanceColor)),ie===void 0||ie.attribute!==Ae||Ae&&ie.data!==Ae.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function _(F,G,q,P){let X={},$=G.attributes,W=0,oe=q.getAttributes();for(let J in oe)if(oe[J].location>=0){let ie=$[J];ie===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(ie=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(ie=F.instanceColor));let Ae={};Ae.attribute=ie,ie&&ie.data&&(Ae.data=ie.data),X[J]=Ae,W++}r.attributes=X,r.attributesNum=W,r.index=P}function v(){let F=r.newAttributes;for(let G=0,q=F.length;G<q;G++)F[G]=0}function f(F){d(F,0)}function d(F,G){let q=r.newAttributes,P=r.enabledAttributes,X=r.attributeDivisors;q[F]=1,P[F]===0&&(i.enableVertexAttribArray(F),P[F]=1),X[F]!==G&&(i.vertexAttribDivisor(F,G),X[F]=G)}function M(){let F=r.newAttributes,G=r.enabledAttributes;for(let q=0,P=G.length;q<P;q++)G[q]!==F[q]&&(i.disableVertexAttribArray(q),G[q]=0)}function A(F,G,q,P,X,$,W){W===!0?i.vertexAttribIPointer(F,G,q,X,$):i.vertexAttribPointer(F,G,q,P,X,$)}function E(F,G,q,P){v();let X=P.attributes,$=q.getAttributes(),W=G.defaultAttributeValues;for(let oe in $){let J=$[oe];if(J.location>=0){let ne=X[oe];if(ne===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor)),ne!==void 0){let ie=ne.normalized,Ae=ne.itemSize,Ve=e.get(ne);if(Ve===void 0)continue;let ee=Ve.buffer,ye=Ve.type,be=Ve.bytesPerElement,Le=ye===i.INT||ye===i.UNSIGNED_INT||ne.gpuType===No;if(ne.isInterleavedBufferAttribute){let ve=ne.data,qe=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Lt=ne.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Ie=0;Ie<J.locationSize;Ie++)d(J.location+Ie,ve.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ie=0;Ie<J.locationSize;Ie++)f(J.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Ie=0;Ie<J.locationSize;Ie++)A(J.location+Ie,Ae/J.locationSize,ye,ie,qe*be,(Lt+Ae/J.locationSize*Ie)*be,Le)}else{if(ne.isInstancedBufferAttribute){for(let ve=0;ve<J.locationSize;ve++)d(J.location+ve,ne.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<J.locationSize;ve++)f(J.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let ve=0;ve<J.locationSize;ve++)A(J.location+ve,Ae/J.locationSize,ye,ie,Ae*be,Ae/J.locationSize*ve*be,Le)}}else if(W!==void 0){let ie=W[oe];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(J.location,ie);break;case 3:i.vertexAttrib3fv(J.location,ie);break;case 4:i.vertexAttrib4fv(J.location,ie);break;default:i.vertexAttrib1fv(J.location,ie)}}}}M()}function w(){O();for(let F in n){let G=n[F];for(let q in G){let P=G[q];for(let X in P){let $=P[X];for(let W in $)h($[W].object),delete $[W];delete P[X]}}delete n[F]}}function T(F){if(n[F.id]===void 0)return;let G=n[F.id];for(let q in G){let P=G[q];for(let X in P){let $=P[X];for(let W in $)h($[W].object),delete $[W];delete P[X]}}delete n[F.id]}function g(F){for(let G in n){let q=n[G];for(let P in q){let X=q[P];if(X[F.id]===void 0)continue;let $=X[F.id];for(let W in $)h($[W].object),delete $[W];delete X[F.id]}}}function S(F){for(let G in n){let q=n[G],P=F.isInstancedMesh===!0?F.id:0,X=q[P];if(X!==void 0){for(let $ in X){let W=X[$];for(let oe in W)h(W[oe].object),delete W[oe];delete X[$]}delete q[P],Object.keys(q).length===0&&delete n[G]}}}function O(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:v,enableAttribute:f,disableUnusedAttributes:M}}function Jp(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Kp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==Un&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let S=g===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==dn&&g!==Ln&&!S&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:E,maxSamples:w,samples:T}}function $p(i){let e=this,t=null,n=0,s=!1,r=!1,o=new _n,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,u){let p=m.length!==0||u||n!==0||s;return s=u,n=m.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,u){t=h(m,u,0)},this.setState=function(m,u,p){let _=m.clippingPlanes,v=m.clipIntersection,f=m.clipShadows,d=i.get(m);if(!s||_===null||_.length===0||r&&!f)r?h(null):c();else{let M=r?0:n,A=M*4,E=d.clippingState||null;l.value=E,E=h(_,u,A,p);for(let w=0;w!==A;++w)E[w]=t[w];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(m,u,p,_){let v=m!==null?m.length:0,f=null;if(v!==0){if(f=l.value,_!==!0||f===null){let d=p+v*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<d)&&(f=new Float32Array(d));for(let A=0,E=p;A!==v;++A,E+=4)o.copy(m[A]).applyMatrix4(M,a),o.normal.toArray(f,E),f[E+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}var mr=class extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Vs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pe(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Di});r.uniforms.tEquirect.value=t;let o=new N(s,r),a=t.minFilter;return t.minFilter===ei&&(t.minFilter=an),new us(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},yh=256,jp=3,Qp=20,kh=256,Vh=16,em=3,tm=new B,nm=new He,ya=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new us(1,10,null),this._boxMesh=new N(new pe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=tm}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let m=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,_=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(nm));let f=new us(n,s,h);return f.position.copy(a),f.update(l,e),l.autoClear=m,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=_,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(yh,Il(e))}_fromTexture(e,t){e.mapping===Ni||e.mapping===ps?this._setSize(e.image.length===0?yh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=vh(e,!1,!1),n=Math.log2(e)-jp;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=vh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ni||e.mapping===ps?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Mh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=im(),this._integrationMaterial=sm());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Vh);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-em)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(kh*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=rm());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function vh(i,e,t){return new mr(i,{minFilter:ei,generateMipmaps:e,type:Nn,colorSpace:Ls,depthBuffer:t})}function gr(i,e,t){return new un({name:i,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:ln,blending:Di,depthTest:!1,depthWrite:!1})}function im(){return gr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${kh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function sm(){return gr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rm(){return gr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Qp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Mh(){return gr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Sh(){return gr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function om(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Io||p===Do)if(e.has(u)){let _=e.get(u).texture;return a(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let v=new mr(_.height);return v.fromEquirectangularTexture(i,u),e.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,_=p===Io||p===Do,v=p===Ni||p===ps;if(_||v){let f=t.get(u),d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new ya(i)),f=_?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),f.texture;if(f!==void 0)return f.texture;{let M=u.image;return _&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new ya(i)),f=_?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function a(u,p){return p===Io?u.mapping=Ni:p===Do&&(u.mapping=ps),u}function l(u){let p=0,_=6;for(let v=0;v<_;v++)u[v]!==void 0&&p++;return p===_}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function am(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ri("WebGLRenderer: "+n+" extension not supported."),s}}}function lm(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let f in _.attributes)e.remove(_.attributes[f]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);let v=r.get(_);v&&(e.remove(v),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(_){let v=_.attributes;for(let f in v)e.update(v[f],i.ARRAY_BUFFER)}function m(_){let v=_.index,f=_.attributes.position,d=0;if(f===void 0)return;let M=v!==null?v.array.length:f.array.length/3-1,A=f.count>=65535?Gs:zs,E=new A(Math.ceil(M/3)*6,1),w=E.array;if(v!==null){let g=v.array;d=v.version;for(let S=0,O=0;S<M;S+=3){let D=g[S+0],F=g[S+1],G=g[S+2];w[O++]=D,w[O++]=F,w[O++]=F,w[O++]=G,w[O++]=G,w[O++]=D}}else{d=f.version;for(let g=0,S=0;g<M;g+=3){let O=g+0,D=g+1,F=g+2;w[S++]=O,w[S++]=D,w[S++]=D,w[S++]=F,w[S++]=F,w[S++]=O}}E.version=d;let T=r.get(_);T&&e.remove(T),r.set(_,E)}function u(_){let v=r.get(_);if(v){let f=_.index;f!==null&&v.version<f.version&&m(_)}else m(_);return r.get(_)}function p(){for(let _ in s){let v=s[_].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:p}}function cm(i,e,t){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,u){i.drawElements(n,u,r,m*o),t.update(u,n,1)}function c(m,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,m*o,p),t.update(u,n,p))}function h(m,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,p);let v=0;for(let f=0;f<p;f++)v+=u[f];t.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function hm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Xe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function um(i,e,t){let n=new WeakMap,s=new At;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==m){let O=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],A=0;p===!0&&(A=1),_===!0&&(A=2),v===!0&&(A=3);let E=a.attributes.position.count*A,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let T=new Float32Array(E*w*4*m),g=new Fs(T,E,w,m);g.type=Ln,g.needsUpdate=!0;let S=A*4;for(let D=0;D<m;D++){let F=f[D],G=d[D],q=M[D],P=E*w*4*D;for(let X=0;X<F.count;X++){let $=X*S;p===!0&&(s.fromBufferAttribute(F,X),T[P+$+0]=s.x,T[P+$+1]=s.y,T[P+$+2]=s.z,T[P+$+3]=0),_===!0&&(s.fromBufferAttribute(G,X),T[P+$+4]=s.x,T[P+$+5]=s.y,T[P+$+6]=s.z,T[P+$+7]=0),v===!0&&(s.fromBufferAttribute(q,X),T[P+$+8]=s.x,T[P+$+9]=s.y,T[P+$+10]=s.z,T[P+$+11]=q.itemSize===4?s.w:1)}}u={count:m,texture:g,size:new ze(E,w)},n.set(a,u),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function dm(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,m=c.geometry,u=e.get(c,m);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var fm={[ul]:"LINEAR_TONE_MAPPING",[dl]:"REINHARD_TONE_MAPPING",[fl]:"CINEON_TONE_MAPPING",[rr]:"ACES_FILMIC_TONE_MAPPING",[ml]:"AGX_TONE_MAPPING",[gl]:"NEUTRAL_TONE_MAPPING",[pl]:"CUSTOM_TONE_MAPPING"};function pm(i,e,t,n,s,r){let o=new yn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Zt;h.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _t([0,2,0,0,2,0],2));let m=new go({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new N(h,m),p=new Qs(-1,1,1,-1,0,1),_=null,v=null,f=!1,d,M=null,A=[],E=!1;this.setSize=function(w,T){o.setSize(w,T),a!==null&&a.setSize(w,T),l!==null&&l.setSize(w,T);for(let g=0;g<A.length;g++){let S=A[g];S.setSize&&S.setSize(w,T)}},this.setEffects=function(w){A=w,E=A.length>0&&A[0].isRenderPass===!0;let T=o.width,g=o.height;A.length>0&&a===null&&(a=new yn(T,g,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new yn(T,g,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&A.some(O=>O.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new jn(T,g),r===!0&&(c.format=ti,c.type=Ui)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let O=0;O<A.length;O++){let D=A[O];D.setSize&&D.setSize(T,g),S&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(c)}},this.begin=function(w,T){if(f||w.toneMapping===Hn&&A.length===0)return!1;if(M=T,T!==null){let g=T.width,S=T.height;(o.width!==g||o.height!==S)&&this.setSize(g,S)}return E===!1&&w.setRenderTarget(o),d=w.toneMapping,w.toneMapping=Hn,!0},this.hasRenderPass=function(){return E},this.end=function(w,T){w.toneMapping=d,f=!0;let g=o,S=a;for(let O=0;O<A.length;O++){let D=A[O];D.enabled!==!1&&(D.render(w,S,g,T),D.needsSwap!==!1&&(g=S,S=S===a?l:a))}if(_!==w.outputColorSpace||v!==w.toneMapping){_=w.outputColorSpace,v=w.toneMapping,m.defines={},at.getTransfer(_)===ft&&(m.defines.SRGB_TRANSFER="");let O=fm[v];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(M),w.render(u,p),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),m.dispose()}}var Wh=new hn,Xh=new jn(1,1),qh=new Ws(1),Yh=new Fs,Zh=new uo,Jh=new Vs,Eh=[],bh=[],Th=new Float32Array(16),wh=new Float32Array(9),Ah=new Float32Array(4);function xs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Eh[s];if(r===void 0&&(r=new Float32Array(s),Eh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ma(i,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function _m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function ym(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,n))return;Ah.set(n),i.uniformMatrix2fv(this.addr,!1,Ah),zt(t,n)}}function vm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,n))return;wh.set(n),i.uniformMatrix3fv(this.addr,!1,wh),zt(t,n)}}function Mm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ht(t,n))return;Th.set(n),i.uniformMatrix4fv(this.addr,!1,Th),zt(t,n)}}function Sm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function Tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function wm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Am(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function Rm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function Cm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function Sa(i){return i.version===0&&(i.compareFunction=Al,i.needsUpdate=!0),i}function Pm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Sa(Xh):r=Wh,t.setTexture2D(e||r,s)}function Im(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zh,s)}function Dm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Sa(qh):r=Jh,t.setTextureCube(e||r,s)}function Lm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yh,s)}function Nm(i){switch(i){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return xm;case 35674:return ym;case 35675:return vm;case 35676:return Mm;case 5124:case 35670:return Sm;case 35667:case 35671:return Em;case 35668:case 35672:return bm;case 35669:case 35673:return Tm;case 5125:return wm;case 36294:return Am;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Um(i,e){i.uniform1fv(this.addr,e)}function Fm(i,e){let t=xs(e,this.size,2);i.uniform2fv(this.addr,t)}function Om(i,e){let t=xs(e,this.size,3);i.uniform3fv(this.addr,t)}function Bm(i,e){let t=xs(e,this.size,4);i.uniform4fv(this.addr,t)}function Hm(i,e){let t=xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zm(i,e){let t=xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gm(i,e){let t=xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function km(i,e){i.uniform1iv(this.addr,e)}function Vm(i,e){i.uniform2iv(this.addr,e)}function Wm(i,e){i.uniform3iv(this.addr,e)}function Xm(i,e){i.uniform4iv(this.addr,e)}function qm(i,e){i.uniform1uiv(this.addr,e)}function Ym(i,e){i.uniform2uiv(this.addr,e)}function Zm(i,e){i.uniform3uiv(this.addr,e)}function Jm(i,e){i.uniform4uiv(this.addr,e)}function Km(i,e,t){let n=this.cache,s=e.length,r=Ma(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Sa(Xh):o=Wh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function $m(i,e,t){let n=this.cache,s=e.length,r=Ma(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zh,r[o])}function jm(i,e,t){let n=this.cache,s=e.length,r=Ma(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Sa(qh):o=Jh;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Qm(i,e,t){let n=this.cache,s=e.length,r=Ma(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Yh,r[o])}function eg(i){switch(i){case 5126:return Um;case 35664:return Fm;case 35665:return Om;case 35666:return Bm;case 35674:return Hm;case 35675:return zm;case 35676:return Gm;case 5124:case 35670:return km;case 35667:case 35671:return Vm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return Ym;case 36295:return Zm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Qm}}var zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nm(t.type)}},Gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eg(t.type)}},kl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Bl=/(\w+)(\])?(\[|\.)?/g;function Rh(i,e){i.seq.push(e),i.map[e.id]=e}function tg(i,e,t){let n=i.name,s=n.length;for(Bl.lastIndex=0;;){let r=Bl.exec(n),o=Bl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rh(t,c===void 0?new zl(a,i,e):new Gl(a,i,e));break}else{let m=t.map[a];m===void 0&&(m=new kl(a),Rh(t,m)),t=m}}}var _s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);tg(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ch(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ng=37297,ig=0;function sg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Ph=new Ye;function rg(i){at._getMatrix(Ph,at.workingColorSpace,i);let e=`mat3( ${Ph.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case Ns:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ih(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+sg(i.getShaderSource(e),a)}else return r}function og(i,e){let t=rg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ag={[ul]:"Linear",[dl]:"Reinhard",[fl]:"Cineon",[rr]:"ACESFilmic",[ml]:"AgX",[gl]:"Neutral",[pl]:"Custom"};function lg(i,e){let t=ag[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xa=new B;function cg(){at.getLuminanceCoefficients(xa);let i=xa.x.toFixed(4),e=xa.y.toFixed(4),t=xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function ug(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function pr(i){return i!==""}function Dh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Lh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(i){return i.replace(fg,pg)}function pg(i,e){let t=et[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Vl(t)}var mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nh(i){return i.replace(mg,gg)}function gg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var _g={[ir]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function xg(i){return _g[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yg={[ps]:"ENVMAP_MODE_REFRACTION"};function vg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Mg={[hl]:"ENVMAP_BLENDING_MULTIPLY",[$c]:"ENVMAP_BLENDING_MIX",[jc]:"ENVMAP_BLENDING_ADD"};function Sg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Mg[i.combine]||"ENVMAP_BLENDING_NONE"}function Eg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=xg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=vg(t),m=Sg(t),u=hg(t),p=ug(r),_=s.createProgram(),v,f,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(pr).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(pr).join(`
`),f.length>0&&(f+=`
`)):(v=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),f=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?et.tonemapping_pars_fragment:"",t.toneMapping!==Hn?lg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,og("linearToOutputTexel",t.outputColorSpace),cg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),o=Vl(o),o=Dh(o,t),o=Lh(o,t),a=Vl(a),a=Dh(a,t),a=Lh(a,t),o=Nh(o),a=Nh(a),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",t.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=d+v+o,A=d+f+a,E=Ch(s,s.VERTEX_SHADER,M),w=Ch(s,s.FRAGMENT_SHADER,A);s.attachShader(_,E),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(D){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(E)||"",q=s.getShaderInfoLog(w)||"",P=F.trim(),X=G.trim(),$=q.trim(),W=!0,oe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,w);else{let J=Ih(s,E,"vertex"),ne=Ih(s,w,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+J+`
`+ne)}else P!==""?Oe("WebGLProgram: Program Info Log:",P):(X===""||$==="")&&(oe=!1);oe&&(D.diagnostics={runnable:W,programLog:P,vertexShader:{log:X,prefix:v},fragmentShader:{log:$,prefix:f}})}s.deleteShader(E),s.deleteShader(w),g=new _s(s,_),S=dg(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(_,ng)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ig++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}var bg=0,Wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xl(e),t.set(e,n)),n}},Xl=class{constructor(e){this.id=bg++,this.code=e,this.usedTimes=0}};function Tg(i){return i===yi||i===ur||i===dr}function wg(i,e,t,n,s,r){let o=new Os,a=new Wl,l=new Set,c=[],h=new Map,m=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,S,O,D,F,G){let q=D.fog,P=F.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,W=e.get(g.envMap||X,$),oe=u[g.type],J=n.precision;g.precision!==null&&(J=n.getMaxPrecision(g.precision),J!==g.precision&&Oe("WebGLProgram.getParameters:",g.precision,"not supported, using",J,"instead."));let ne=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ie=ne!==void 0?ne.length:0,Ae=0;P.morphAttributes.position!==void 0&&(Ae=1),P.morphAttributes.normal!==void 0&&(Ae=2),P.morphAttributes.color!==void 0&&(Ae=3);let Ve,ee,ye,be;if(oe){let xe=Gn[oe];Ve=xe.vertexShader,ee=xe.fragmentShader}else{Ve=g.vertexShader,ee=g.fragmentShader;let xe=a.getVertexShaderStage(g),$e=a.getFragmentShaderStage(g);a.update(g,xe,$e),ye=xe.id,be=$e.id}let Le=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),qe=F.isInstancedMesh===!0,Lt=F.isBatchedMesh===!0,Ie=!!g.map,ct=!!g.matcap,ut=!!W,tt=ut&&W.isPMREMTexture===!0,Rt=!!g.aoMap,Dt=!!g.lightMap,qt=!!g.bumpMap&&g.wireframe===!1,xt=!!g.normalMap,wn=!!g.displacementMap,Nt=!!g.emissiveMap,pt=!!g.metalnessMap,nn=!!g.roughnessMap,Jt=g.anisotropy>0,L=g.clearcoat>0,Kt=g.diffuseRoughness>0,yt=g.dispersion>0,Mt=g.retroreflectivity>0,_e=g.iridescence>0,Ct=g.sheen>0,Ne=g.transmission>0,Ge=Jt&&!!g.anisotropyMap,b=L&&!!g.clearcoatMap,x=L&&!!g.clearcoatNormalMap,z=L&&!!g.clearcoatRoughnessMap,re=Kt&&!!g.diffuseRoughnessMap,K=_e&&!!g.iridescenceMap,de=_e&&!!g.iridescenceThicknessMap,me=Ct&&!!g.sheenColorMap,j=Ct&&!!g.sheenRoughnessMap,Q=!!g.specularMap,fe=!!g.specularColorMap,R=!!g.specularIntensityMap,te=Ne&&!!g.transmissionMap,Z=Ne&&!!g.thicknessMap,ae=!!g.gradientMap,ce=!!g.alphaMap,he=g.alphaTest>0,Ce=!!g.alphaHash,Ze=!!g.extensions,le=Hn;g.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(le=i.toneMapping);let Pe=tt?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Je={shaderID:oe,shaderType:g.type,shaderName:g.name,vertexShader:Ve,fragmentShader:ee,defines:g.defines,customVertexShaderID:ye,customFragmentShaderID:be,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:J,batching:Lt,batchingColor:Lt&&F._colorsTexture!==null,instancing:qe,instancingColor:qe&&F.instanceColor!==null,instancingMorph:qe&&F.morphTexture!==null,outputColorSpace:Le===null?i.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ie,matcap:ct,envMap:ut,envMapMode:ut&&W.mapping,envMapPMREM:tt,envMapMaxLod:tt?Pe.length-1:null,envMapSize:tt?Pe[0].width:null,aoMap:Rt,lightMap:Dt,bumpMap:qt,normalMap:xt,displacementMap:wn,emissiveMap:Nt,normalMapObjectSpace:xt&&g.normalMapType===th,normalMapTangentSpace:xt&&g.normalMapType===ga,packedNormalMap:xt&&g.normalMapType===ga&&Tg(g.normalMap.format),metalnessMap:pt,roughnessMap:nn,anisotropy:Jt,anisotropyMap:Ge,clearcoat:L,clearcoatMap:b,clearcoatNormalMap:x,clearcoatRoughnessMap:z,diffuseRoughness:Kt,diffuseRoughnessMap:re,dispersion:yt,retroreflection:Mt,iridescence:_e,iridescenceMap:K,iridescenceThicknessMap:de,sheen:Ct,sheenColorMap:me,sheenRoughnessMap:j,specularMap:Q,specularColorMap:fe,specularIntensityMap:R,transmission:Ne,transmissionMap:te,thicknessMap:Z,gradientMap:ae,opaque:g.transparent===!1&&g.blending===Qn&&g.alphaToCoverage===!1,alphaMap:ce,alphaTest:he,alphaHash:Ce,combine:g.combine,mapUv:Ie&&p(g.map.channel),aoMapUv:Rt&&p(g.aoMap.channel),lightMapUv:Dt&&p(g.lightMap.channel),bumpMapUv:qt&&p(g.bumpMap.channel),normalMapUv:xt&&p(g.normalMap.channel),displacementMapUv:wn&&p(g.displacementMap.channel),emissiveMapUv:Nt&&p(g.emissiveMap.channel),metalnessMapUv:pt&&p(g.metalnessMap.channel),roughnessMapUv:nn&&p(g.roughnessMap.channel),anisotropyMapUv:Ge&&p(g.anisotropyMap.channel),clearcoatMapUv:b&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:K&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:j&&p(g.sheenRoughnessMap.channel),specularMapUv:Q&&p(g.specularMap.channel),specularColorMapUv:fe&&p(g.specularColorMap.channel),specularIntensityMapUv:R&&p(g.specularIntensityMap.channel),transmissionMapUv:te&&p(g.transmissionMap.channel),thicknessMapUv:Z&&p(g.thicknessMap.channel),alphaMapUv:ce&&p(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(xt||Jt),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!P.attributes.uv&&(Ie||ce),fog:!!q,useFog:g.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&xt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ae,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:G.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:Ie&&g.map.isVideoTexture===!0&&at.getTransfer(g.map.colorSpace)===ft,decodeVideoTextureEmissive:Nt&&g.emissiveMap.isVideoTexture===!0&&at.getTransfer(g.emissiveMap.colorSpace)===ft,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Fe,flipSided:g.side===ln,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ze&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&g.extensions.multiDraw===!0||Lt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function v(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let O in g.defines)S.push(O),S.push(g.defines[O]);return g.isRawShaderMaterial===!1&&(f(S,g),d(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function f(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function d(g,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function M(g){let S=u[g.type],O;if(S){let D=Gn[S];O=gh.clone(D.uniforms)}else O=g.uniforms;return O}function A(g,S){let O=h.get(S);return O!==void 0?++O.usedTimes:(O=new Eg(i,S,g,s),c.push(O),h.set(S,O)),O}function E(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){a.remove(g)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:M,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:c,dispose:T}}function Ag(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Rg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Fh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,_,v,f,d){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:p,material:_,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:f,group:d},i[e]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=_,M.materialVariant=o(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=f,M.group=d),e++,M}function l(u,p,_,v,f,d,M){M.reversedDepth===!0&&(f=-f);let A=a(u,p,_,v,f,d);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):t.push(A)}function c(u,p,_,v,f,d){let M=a(u,p,_,v,f,d);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):t.unshift(M)}function h(u,p){t.length>1&&t.sort(u||Rg),n.length>1&&n.sort(p||Fh),s.length>1&&s.sort(p||Fh)}function m(){for(let u=e,p=i.length;u<p;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:h}}function Cg(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Oh,i.set(n,[o])):s>=r.length?(o=new Oh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new He};break;case"SpotLight":t={position:new B,direction:new B,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Ig(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Dg=0;function Lg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ng(i){let e=new Pg,t=Ig(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Tt,o=new Tt;function a(c){let h=0,m=0,u=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let p=0,_=0,v=0,f=0,d=0,M=0,A=0,E=0,w=0,T=0,g=0,S=0,O=0,D=0;c.sort(Lg);for(let G=0,q=c.length;G<q;G++){let P=c[G],X=P.color,$=P.intensity,W=P.distance,oe=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===yi?oe=P.shadow.map.texture:oe=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=X.r*$,m+=X.g*$,u+=X.b*$;else if(P.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(P.sh.coefficients[J],$);D++}else if(P.isSunLight){let J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ne=P.shadow,ie=t.get(P);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[_]=ie,n.sunShadowMap[_]=oe;let Ae=ne.getViewportCount();for(let Ve=0;Ve<Ae;Ve++)n.sunShadowMatrix[v+Ve]=ne.getMatrix(Ve),n.sunShadowCascade[v+Ve]=ne._cascadeData[Ve];v+=Ae,_++}n.sun[p]=J,p++}else if(P.isDirectionalLight){let J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ne=P.shadow,ie=t.get(P);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,n.directionalShadow[f]=ie,n.directionalShadowMap[f]=oe,n.directionalShadowMatrix[f]=P.shadow.matrix,w++}n.directional[f]=J,f++}else if(P.isSpotLight){let J=e.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(X).multiplyScalar($),J.distance=W,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,n.spot[M]=J;let ne=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,ne.updateMatrices(P),P.castShadow&&O++),n.spotLightMatrix[M]=ne.matrix,P.castShadow){let ie=t.get(P);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,n.spotShadow[M]=ie,n.spotShadowMap[M]=oe,g++}M++}else if(P.isRectAreaLight){let J=e.get(P);J.color.copy(X).multiplyScalar($),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=J,A++}else if(P.isPointLight){let J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){let ne=P.shadow,ie=t.get(P);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,ie.shadowCameraNear=ne.camera.near,ie.shadowCameraFar=ne.camera.far,n.pointShadow[d]=ie,n.pointShadowMap[d]=oe,n.pointShadowMatrix[d]=P.shadow.matrix,T++}n.point[d]=J,d++}else if(P.isHemisphereLight){let J=e.get(P);J.skyColor.copy(P.color).multiplyScalar($),J.groundColor.copy(P.groundColor).multiplyScalar($),n.hemi[E]=J,E++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=u;let F=n.hash;(F.sunLength!==p||F.directionalLength!==f||F.pointLength!==d||F.spotLength!==M||F.rectAreaLength!==A||F.hemiLength!==E||F.numSunShadows!==_||F.numDirectionalShadows!==w||F.numPointShadows!==T||F.numSpotShadows!==g||F.numSpotMaps!==S||F.numLightProbes!==D)&&(n.sun.length=p,n.directional.length=f,n.spot.length=M,n.rectArea.length=A,n.point.length=d,n.hemi.length=E,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+S-O,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=D,F.sunLength=p,F.directionalLength=f,F.pointLength=d,F.spotLength=M,F.rectAreaLength=A,F.hemiLength=E,F.numSunShadows=_,F.numDirectionalShadows=w,F.numPointShadows=T,F.numSpotShadows=g,F.numSpotMaps=S,F.numLightProbes=D,n.version=Dg++)}function l(c,h){let m=0,u=0,p=0,_=0,v=0,f=0,d=h.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){let E=c[M];if(E.isSunLight){let w=n.sun[m];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),m++}else if(E.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),u++}else if(E.isSpotLight){let w=n.spot[_];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),_++}else if(E.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),o.identity(),r.copy(E.matrixWorld),r.premultiply(d),o.extractRotation(r),w.halfWidth.set(E.width*.5,0,0),w.halfHeight.set(0,E.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){let w=n.point[p];w.position.setFromMatrixPosition(E.matrixWorld),w.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){let w=n.hemi[f];w.direction.setFromMatrixPosition(E.matrixWorld),w.direction.transformDirection(d),f++}}}return{setup:a,setupView:l,state:n}}function Bh(i){let e=new Ng(i),t=[],n=[],s=[];function r(m){h.camera=m,t.length=0,n.length=0,s.length=0}function o(m){m.isLightProbeGrid?s.push(m):t.push(m)}function a(m){n.push(m)}function l(){e.setup(t),s.sort((m,u)=>m.priority-u.priority||m.id-u.id)}function c(m){e.setupView(t,m)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ug(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Bh(i),e.set(s,[a])):r>=o.length?(a=new Bh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bg=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Hg=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Hh=new Tt,fr=new B,Hl=new B;function zg(i,e,t){let n=new di,s=new ze,r=new ze,o=new At,a=new _o,l=new xo,c={},h=t.maxTextureSize,m={[xi]:ln,[ln]:xi,[Fe]:Fe},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Fg,fragmentShader:Og}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new Zt;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new N(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let d=this.type;this.render=function(T,g,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===Po&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);let O=i.getRenderTarget(),D=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Di),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let q=d!==this.type;q&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(X=>X.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,X=T.length;P<X;P++){let $=T[P],W=$.shadow;if(W===void 0){Oe("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let oe=W.getFrameExtents();s.multiply(oe),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,W.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=J,W.map===null||q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===fs){if($.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new yn(s.x,s.y,{format:yi,type:Nn,minFilter:an,magFilter:an,generateMipmaps:!1}),W.map.texture.name=$.name+".shadowMap",W.map.depthTexture=new jn(s.x,s.y,Ln),W.map.depthTexture.name=$.name+".shadowMapDepth",W.map.depthTexture.format=Jn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Xt,W.map.depthTexture.magFilter=Xt}else $.isPointLight?(W.map=new mr(s.x),W.map.depthTexture=new Ws(s.x,Dn)):(W.map=new yn(s.x,s.y),W.map.depthTexture=new jn(s.x,s.y,Dn)),W.map.depthTexture.name=$.name+".shadowMap",W.map.depthTexture.format=Jn,this.type===ir?(W.map.depthTexture.compareFunction=J?wl:Tl,W.map.depthTexture.minFilter=an,W.map.depthTexture.magFilter=an):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Xt,W.map.depthTexture.magFilter=Xt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let ne=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();$.isPointLight!==!0&&W.updateMatrices($,S);let ie=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:S.layers;for(let Ae=0;Ae<ne;Ae++){let Ve=W.getCamera(Ae);if($.isPointLight){let ee=W.camera,ye=W.matrix,be=$.distance||ee.far;be!==ee.far&&(ee.far=be,ee.updateProjectionMatrix()),fr.setFromMatrixPosition($.matrixWorld),ee.position.copy(fr),Hl.copy(ee.position),Hl.add(Bg[Ae]),ee.up.copy(Hg[Ae]),ee.lookAt(Hl),ee.updateMatrixWorld(),ye.makeTranslation(-fr.x,-fr.y,-fr.z),Hh.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Hh,ee.coordinateSystem,ee.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Ae),i.clear();else{Ae===0&&(i.setRenderTarget(W.map),i.clear());let ee=W.getViewport(Ae);o.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),G.viewport(o)}n=W.getFrustum(Ae),E(g,S,Ve,$,ie,this.type)}W.isPointLightShadow!==!0&&this.type===fs&&M(W,S),W.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(O,D,F)};function M(T,g){let S=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new yn(s.x,s.y,{format:yi,type:Nn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,S,u,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,S,p,v,null)}function A(T,g,S,O){let D=null,F=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)D=F;else if(D=S.isPointLight===!0?l:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let G=D.uuid,q=g.uuid,P=c[G];P===void 0&&(P={},c[G]=P);let X=P[q];X===void 0&&(X=D.clone(),P[q]=X,g.addEventListener("dispose",w)),D=X}if(D.visible=g.visible,D.wireframe=g.wireframe,O===fs?D.side=g.shadowSide!==null?g.shadowSide:g.side:D.side=g.shadowSide!==null?g.shadowSide:m[g.side],D.alphaMap=g.alphaMap,D.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,D.map=g.map,D.clipShadows=g.clipShadows,D.clippingPlanes=g.clippingPlanes,D.clipIntersection=g.clipIntersection,D.displacementMap=g.displacementMap,D.displacementScale=g.displacementScale,D.displacementBias=g.displacementBias,D.wireframeLinewidth=g.wireframeLinewidth,D.linewidth=g.linewidth,S.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let G=i.properties.get(D);G.light=S}return D}function E(T,g,S,O,D,F){if(T.visible===!1)return;if(T.layers.test(D)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===fs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let P=e.update(T),X=T.material;if(Array.isArray(X)){let $=P.groups;for(let W=0,oe=$.length;W<oe;W++){let J=$[W],ne=X[J.materialIndex];if(ne&&ne.visible){let ie=A(T,ne,O,F);T.onBeforeShadow(i,T,g,S,P,ie,J),i.renderBufferDirect(S,null,P,ie,T,J),T.onAfterShadow(i,T,g,S,P,ie,J)}}}else if(X.visible){let $=A(T,X,O,F);T.onBeforeShadow(i,T,g,S,P,$,null),i.renderBufferDirect(S,null,P,$,T,null),T.onAfterShadow(i,T,g,S,P,$,null)}}let q=T.children;for(let P=0,X=q.length;P<X;P++)E(q[P],g,S,O,D,F)}function w(T){T.target.removeEventListener("dispose",w);for(let S in c){let O=c[S],D=T.target.uuid;D in O&&(O[D].dispose(),delete O[D])}}}function Gg(i,e){function t(){let R=!1,te=new At,Z=null,ae=new At(0,0,0,0);return{setMask:function(ce){Z!==ce&&!R&&(i.colorMask(ce,ce,ce,ce),Z=ce)},setLocked:function(ce){R=ce},setClear:function(ce,he,Ce,Ze,le){le===!0&&(ce*=Ze,he*=Ze,Ce*=Ze),te.set(ce,he,Ce,Ze),ae.equals(te)===!1&&(i.clearColor(ce,he,Ce,Ze),ae.copy(te))},reset:function(){R=!1,Z=null,ae.set(-1,0,0,0)}}}function n(){let R=!1,te=!1,Z=null,ae=null,ce=null;return{setReversed:function(he){if(te!==he){let Ce=e.get("EXT_clip_control");he?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),te=he;let Ze=ce;ce=null,this.setClear(Ze)}},getReversed:function(){return te},setTest:function(he){he?ve(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(he){Z!==he&&!R&&(i.depthMask(he),Z=he)},setFunc:function(he){if(te&&(he=dh[he]),ae!==he){switch(he){case Qr:i.depthFunc(i.NEVER);break;case eo:i.depthFunc(i.ALWAYS);break;case to:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case no:i.depthFunc(i.EQUAL);break;case io:i.depthFunc(i.GEQUAL);break;case so:i.depthFunc(i.GREATER);break;case ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=he}},setLocked:function(he){R=he},setClear:function(he){ce!==he&&(ce=he,te&&(he=1-he),i.clearDepth(he))},reset:function(){R=!1,Z=null,ae=null,ce=null,te=!1}}}function s(){let R=!1,te=null,Z=null,ae=null,ce=null,he=null,Ce=null,Ze=null,le=null;return{setTest:function(Pe){R||(Pe?ve(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(Pe){te!==Pe&&!R&&(i.stencilMask(Pe),te=Pe)},setFunc:function(Pe,Je,xe){(Z!==Pe||ae!==Je||ce!==xe)&&(i.stencilFunc(Pe,Je,xe),Z=Pe,ae=Je,ce=xe)},setOp:function(Pe,Je,xe){(he!==Pe||Ce!==Je||Ze!==xe)&&(i.stencilOp(Pe,Je,xe),he=Pe,Ce=Je,Ze=xe)},setLocked:function(Pe){R=Pe},setClear:function(Pe){le!==Pe&&(i.clearStencil(Pe),le=Pe)},reset:function(){R=!1,te=null,Z=null,ae=null,ce=null,he=null,Ce=null,Ze=null,le=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},m={},u={},p=new WeakMap,_=[],v=null,f=!1,d=null,M=null,A=null,E=null,w=null,T=null,g=null,S=new He(0,0,0),O=0,D=!1,F=null,G=null,q=null,P=null,X=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,oe=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=oe>=1):J.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=oe>=2);let ne=null,ie={},Ae=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),ee=new At().fromArray(Ae),ye=new At().fromArray(Ve);function be(R,te,Z,ae){let ce=new Uint8Array(4),he=i.createTexture();i.bindTexture(R,he),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<Z;Ce++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(te+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return he}let Le={};Le[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(i.DEPTH_TEST),o.setFunc(ss),qt(!1),xt(rl),ve(i.CULL_FACE),Rt(Di);function ve(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function qe(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Lt(R,te){return u[R]!==te?(i.bindFramebuffer(R,te),u[R]=te,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=te),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=te),!0):!1}function Ie(R,te){let Z=_,ae=!1;if(R){Z=p.get(te),Z===void 0&&(Z=[],p.set(te,Z));let ce=R.textures;if(Z.length!==ce.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Ce=ce.length;he<Ce;he++)Z[he]=i.COLOR_ATTACHMENT0+he;Z.length=ce.length,ae=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ae=!0);ae&&i.drawBuffers(Z)}function ct(R){return v!==R?(i.useProgram(R),v=R,!0):!1}let ut={[Li]:i.FUNC_ADD,[Nc]:i.FUNC_SUBTRACT,[Uc]:i.FUNC_REVERSE_SUBTRACT};ut[Fc]=i.MIN,ut[Oc]=i.MAX;let tt={[Bc]:i.ZERO,[Hc]:i.ONE,[zc]:i.SRC_COLOR,[ll]:i.SRC_ALPHA,[qc]:i.SRC_ALPHA_SATURATE,[Wc]:i.DST_COLOR,[kc]:i.DST_ALPHA,[Gc]:i.ONE_MINUS_SRC_COLOR,[cl]:i.ONE_MINUS_SRC_ALPHA,[Xc]:i.ONE_MINUS_DST_COLOR,[Vc]:i.ONE_MINUS_DST_ALPHA,[Yc]:i.CONSTANT_COLOR,[Zc]:i.ONE_MINUS_CONSTANT_COLOR,[Jc]:i.CONSTANT_ALPHA,[Kc]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(R,te,Z,ae,ce,he,Ce,Ze,le,Pe){if(R===Di){f===!0&&(qe(i.BLEND),f=!1);return}if(f===!1&&(ve(i.BLEND),f=!0),R!==Lc){if(R!==d||Pe!==D){if((M!==Li||w!==Li)&&(i.blendEquation(i.FUNC_ADD),M=Li,w=Li),Pe)switch(R){case Qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sr:i.blendFunc(i.ONE,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xe("WebGLState: Invalid blending: ",R);break}else switch(R){case Qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ol:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case al:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",R);break}A=null,E=null,T=null,g=null,S.set(0,0,0),O=0,d=R,D=Pe}return}ce=ce||te,he=he||Z,Ce=Ce||ae,(te!==M||ce!==w)&&(i.blendEquationSeparate(ut[te],ut[ce]),M=te,w=ce),(Z!==A||ae!==E||he!==T||Ce!==g)&&(i.blendFuncSeparate(tt[Z],tt[ae],tt[he],tt[Ce]),A=Z,E=ae,T=he,g=Ce),(Ze.equals(S)===!1||le!==O)&&(i.blendColor(Ze.r,Ze.g,Ze.b,le),S.copy(Ze),O=le),d=R,D=!1}function Dt(R,te){R.side===Fe?qe(i.CULL_FACE):ve(i.CULL_FACE);let Z=R.side===ln;te&&(Z=!Z),qt(Z),R.blending===Qn&&R.transparent===!1?Rt(Di):Rt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let ae=R.stencilWrite;a.setTest(ae),ae&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Nt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(R){F!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),F=R)}function xt(R){R!==Ic?(ve(i.CULL_FACE),R!==G&&(R===rl?i.cullFace(i.BACK):R===Dc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),G=R}function wn(R){R!==q&&(W&&i.lineWidth(R),q=R)}function Nt(R,te,Z){R?(ve(i.POLYGON_OFFSET_FILL),(P!==te||X!==Z)&&(P=te,X=Z,o.getReversed()&&(te=-te,Z=-Z),i.polygonOffset(te,Z))):qe(i.POLYGON_OFFSET_FILL)}function pt(R){R?ve(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function nn(R){R===void 0&&(R=i.TEXTURE0+$-1),ne!==R&&(i.activeTexture(R),ne=R)}function Jt(R,te,Z){Z===void 0&&(ne===null?Z=i.TEXTURE0+$-1:Z=ne);let ae=ie[Z];ae===void 0&&(ae={type:void 0,texture:void 0},ie[Z]=ae),(ae.type!==R||ae.texture!==te)&&(ne!==Z&&(i.activeTexture(Z),ne=Z),i.bindTexture(R,te||Le[R]),ae.type=R,ae.texture=te)}function L(){let R=ie[ne];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(R){Xe("WebGLState:",R)}}function yt(){try{i.compressedTexImage3D(...arguments)}catch(R){Xe("WebGLState:",R)}}function Mt(){try{i.texSubImage2D(...arguments)}catch(R){Xe("WebGLState:",R)}}function _e(){try{i.texSubImage3D(...arguments)}catch(R){Xe("WebGLState:",R)}}function Ct(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Xe("WebGLState:",R)}}function Ne(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Xe("WebGLState:",R)}}function Ge(){try{i.texStorage2D(...arguments)}catch(R){Xe("WebGLState:",R)}}function b(){try{i.texStorage3D(...arguments)}catch(R){Xe("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){Xe("WebGLState:",R)}}function z(){try{i.texImage3D(...arguments)}catch(R){Xe("WebGLState:",R)}}function re(R){return m[R]!==void 0?m[R]:i.getParameter(R)}function K(R,te){m[R]!==te&&(i.pixelStorei(R,te),m[R]=te)}function de(R){ee.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ee.copy(R))}function me(R){ye.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ye.copy(R))}function j(R,te){let Z=c.get(te);Z===void 0&&(Z=new WeakMap,c.set(te,Z));let ae=Z.get(R);ae===void 0&&(ae=i.getUniformBlockIndex(te,R.name),i.uniformBlockBinding(te,ae,ae),Z.set(R,ae))}function Q(R,te,Z){let ce=c.get(te).get(R);l[ce]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,ce,Z),l[ce]=Z)}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},ne=null,ie={},u={},l={},p=new WeakMap,_=[],v=null,f=!1,d=null,M=null,A=null,E=null,w=null,T=null,g=null,S=new He(0,0,0),O=0,D=!1,F=null,G=null,q=null,P=null,X=null,ee.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:qe,bindFramebuffer:Lt,drawBuffers:Ie,useProgram:ct,setBlending:Rt,setMaterial:Dt,setFlipSided:qt,setCullFace:xt,setLineWidth:wn,setPolygonOffset:Nt,setScissorTest:pt,activeTexture:nn,bindTexture:Jt,unbindTexture:L,compressedTexImage2D:Kt,compressedTexImage3D:yt,texImage2D:x,texImage3D:z,pixelStorei:K,getParameter:re,updateUBOMapping:j,uniformBlockBinding:Q,texStorage2D:Ge,texStorage3D:b,texSubImage2D:Mt,texSubImage3D:_e,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Ne,scissor:de,viewport:me,reset:fe}}function kg(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,h=new WeakMap,m=new Set,u,p=new WeakMap,_=new Set,v=new FinalizationRegistry(b=>_.delete(b)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(b,x){return f?new OffscreenCanvas(b,x):Us("canvas")}function M(b,x,z){let re=1,K=Ge(b);if((K.width>z||K.height>z)&&(re=z/Math.max(K.width,K.height)),re<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let de=Math.floor(re*K.width),me=Math.floor(re*K.height);u===void 0&&(u=d(de,me));let j=x?d(de,me):u;return j.width=de,j.height=me,j.getContext("2d").drawImage(b,0,0,de,me),Oe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+de+"x"+me+")."),j}else return"data"in b&&Oe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function A(b){return b.generateMipmaps}function E(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(b,x,z,re,K,de=!1){if(b!==null){if(i[b]!==void 0)return i[b];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let me;re&&(me=e.get("EXT_texture_norm16"),me||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8),z===i.UNSIGNED_SHORT&&me&&(j=me.R16_EXT),z===i.SHORT&&me&&(j=me.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),x===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8),z===i.UNSIGNED_SHORT&&me&&(j=me.RG16_EXT),z===i.SHORT&&me&&(j=me.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),z===i.UNSIGNED_INT&&(j=i.RGB32UI),z===i.BYTE&&(j=i.RGB8I),z===i.SHORT&&(j=i.RGB16I),z===i.INT&&(j=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),z===i.UNSIGNED_INT&&(j=i.RGBA32UI),z===i.BYTE&&(j=i.RGBA8I),z===i.SHORT&&(j=i.RGBA16I),z===i.INT&&(j=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&me&&(j=me.RGB16_EXT),z===i.SHORT&&me&&(j=me.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),x===i.RGBA){let Q=de?Ns:at.getTransfer(K);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=Q===ft?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&me&&(j=me.RGBA16_EXT),z===i.SHORT&&me&&(j=me.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function g(b,x){let z;return b?x===null||x===Dn||x===Ui?z=i.DEPTH24_STENCIL8:x===Ln?z=i.DEPTH32F_STENCIL8:x===ms&&(z=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Dn||x===Ui?z=i.DEPTH_COMPONENT24:x===Ln?z=i.DEPTH_COMPONENT32F:x===ms&&(z=i.DEPTH_COMPONENT16),z}function S(b,x){return A(b)===!0||b.isFramebufferTexture&&b.minFilter!==Xt&&b.minFilter!==an?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function O(b){let x=new WeakRef(b);n.get(b).__ref=x,_.add(x),v.register(b,x,x)}function D(b){let x=n.get(b).__ref;x!==void 0&&(_.delete(x),v.unregister(x))}function F(b){q(b.target)}function G(b){P(b.target)}function q(b){b.removeEventListener("dispose",F),D(b),$(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&m.delete(b)}function P(b){b.removeEventListener("dispose",G),D(b),oe(b)}function X(){for(let b of _){let x=b.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):q(x))}_.clear(),m.clear()}function $(b){let x=n.get(b);if(x.__webglInit===void 0)return;let z=b.source,re=p.get(z);if(re){let K=re[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&W(b),Object.keys(re).length===0&&p.delete(z)}n.remove(b)}function W(b){let x=n.get(b);i.deleteTexture(x.__webglTexture);let z=b.source,re=p.get(z);delete re[x.__cacheKey],o.memory.textures--}function oe(b){let x=n.get(b);x.__depthDisposeCallback&&x.__depthDisposeCallback();let z=b.depthTexture;if(z&&z.renderTarget===b&&q(z),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let de=0;de<x.__webglFramebuffer[K].length;de++)i.deleteFramebuffer(x.__webglFramebuffer[K][de]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let re=b.textures;for(let K=0,de=re.length;K<de;K++){let me=n.get(re[K]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(re[K])}n.remove(b)}let J=0;function ne(){J=0}function ie(){return J}function Ae(b){J=b}function Ve(){let b=J;return b>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,b}function ee(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.mipmapsAutoUpdate),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function ye(b,x){let z=n.get(b);if(b.isVideoTexture&&Ct(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&z.__version!==b.version){let re=b.image;if(re===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(z,b,x);return}}else b.isExternalTexture&&(z.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function be(b,x){let z=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){Dt(z,b,x);return}else b.isExternalTexture&&(z.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function Le(b,x){let z=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){Dt(z,b,x);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function ve(b,x){let z=n.get(b);if(b.version>0&&z.__version!==b.version){qt(z,b,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let qe={[oo]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},Lt={[Xt]:i.NEAREST,[Qc]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},Ie={[ih]:i.NEVER,[Al]:i.ALWAYS,[sh]:i.LESS,[Tl]:i.LEQUAL,[rh]:i.EQUAL,[wl]:i.GEQUAL,[oh]:i.GREATER,[ah]:i.NOTEQUAL};function ct(b,x){if(x.type===Ln&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===an||x.magFilter===Lo||x.magFilter===or||x.magFilter===ei||x.minFilter===an||x.minFilter===Lo||x.minFilter===or||x.minFilter===ei)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,qe[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,qe[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,qe[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Lt[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Lt[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xt||x.minFilter!==or&&x.minFilter!==ei||x.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ut(b,x){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",F),O(x));let re=x.source,K=p.get(re);K===void 0&&(K={},p.set(re,K));let de=ee(x);if(de!==b.__cacheKey){K[de]===void 0&&(K[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[de].usedTimes++;let me=K[b.__cacheKey];me!==void 0&&(K[b.__cacheKey].usedTimes--,me.usedTimes===0&&W(x)),b.__cacheKey=de,b.__webglTexture=K[de].texture}return z}function tt(b,x,z){return Math.floor(Math.floor(b/z)/x)}function Rt(b,x,z,re){let de=b.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,re,x.data);else{de.sort((R,te)=>R.start-te.start);let me=0;for(let R=1;R<de.length;R++){let te=de[me],Z=de[R],ae=te.start+te.count,ce=tt(Z.start,x.width,4),he=tt(te.start,x.width,4);Z.start<=ae+1&&ce===he&&tt(Z.start+Z.count-1,x.width,4)===ce?te.count=Math.max(te.count,Z.start+Z.count-te.start):(++me,de[me]=Z)}de.length=me+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,te=de.length;R<te;R++){let Z=de[R],ae=Math.floor(Z.start/4),ce=Math.ceil(Z.count/4),he=ae%x.width,Ce=Math.floor(ae/x.width),Ze=ce,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,he),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce),t.texSubImage2D(i.TEXTURE_2D,0,he,Ce,Ze,le,z,re,x.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function Dt(b,x,z){let re=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(re=i.TEXTURE_3D);let K=ut(b,x),de=x.source;t.bindTexture(re,b.__webglTexture,i.TEXTURE0+z);let me=n.get(de);if(de.version!==me.__version||K===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let le=at.getPrimaries(at.workingColorSpace),Pe=x.colorSpace===ni?null:at.getPrimaries(x.colorSpace),Je=x.colorSpace===ni||le===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=M(x.image,!1,s.maxTextureSize);Q=Ne(x,Q);let fe=r.convert(x.format,x.colorSpace),R=r.convert(x.type),te=T(x.internalFormat,fe,R,x.normalized,x.colorSpace,x.isVideoTexture);ct(re,x);let Z,ae=x.mipmaps,ce=x.isVideoTexture!==!0,he=me.__version===void 0||K===!0,Ce=de.dataReady,Ze=S(x,Q);if(x.isDepthTexture)te=g(x.format===ti,x.type),he&&(ce?t.texStorage2D(i.TEXTURE_2D,1,te,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,te,Q.width,Q.height,0,fe,R,null));else if(x.isDataTexture)if(ae.length>0){ce&&he&&t.texStorage2D(i.TEXTURE_2D,Ze,te,ae[0].width,ae[0].height);for(let le=0,Pe=ae.length;le<Pe;le++)Z=ae[le],ce?Ce&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Z.width,Z.height,fe,R,Z.data):t.texImage2D(i.TEXTURE_2D,le,te,Z.width,Z.height,0,fe,R,Z.data);x.generateMipmaps=!1}else ce?(he&&t.texStorage2D(i.TEXTURE_2D,Ze,te,Q.width,Q.height),Ce&&Rt(x,Q,fe,R)):t.texImage2D(i.TEXTURE_2D,0,te,Q.width,Q.height,0,fe,R,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ce&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,te,ae[0].width,ae[0].height,Q.depth);for(let le=0,Pe=ae.length;le<Pe;le++)if(Z=ae[le],x.format!==Un)if(fe!==null)if(ce){if(Ce)if(x.layerUpdates.size>0){let Je=Ol(Z.width,Z.height,x.format,x.type);for(let xe of x.layerUpdates){let $e=Z.data.subarray(xe*Je/Z.data.BYTES_PER_ELEMENT,(xe+1)*Je/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,xe,Z.width,Z.height,1,fe,$e)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,Q.depth,fe,Z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,te,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Z.width,Z.height,Q.depth,fe,R,Z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,te,Z.width,Z.height,Q.depth,0,fe,R,Z.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ce&&he&&t.texStorage2D(i.TEXTURE_2D,Ze,te,ae[0].width,ae[0].height);for(let le=0,Pe=ae.length;le<Pe;le++)Z=ae[le],x.format!==Un?fe!==null?ce?Ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Z.width,Z.height,fe,Z.data):t.compressedTexImage2D(i.TEXTURE_2D,le,te,Z.width,Z.height,0,Z.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Ce&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Z.width,Z.height,fe,R,Z.data):t.texImage2D(i.TEXTURE_2D,le,te,Z.width,Z.height,0,fe,R,Z.data)}else if(x.isDataArrayTexture)if(ce){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,te,Q.width,Q.height,Q.depth),Ce)if(x.layerUpdates.size>0){let le=Ol(Q.width,Q.height,x.format,x.type);for(let Pe of x.layerUpdates){let Je=Q.data.subarray(Pe*le/Q.data.BYTES_PER_ELEMENT,(Pe+1)*le/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pe,Q.width,Q.height,1,fe,R,Je)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,R,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,te,Q.width,Q.height,Q.depth,0,fe,R,Q.data);else if(x.isData3DTexture)ce?(he&&t.texStorage3D(i.TEXTURE_3D,Ze,te,Q.width,Q.height,Q.depth),Ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,R,Q.data)):t.texImage3D(i.TEXTURE_3D,0,te,Q.width,Q.height,Q.depth,0,fe,R,Q.data);else if(x.isFramebufferTexture){if(he)if(ce)t.texStorage2D(i.TEXTURE_2D,Ze,te,Q.width,Q.height);else{let le=Q.width,Pe=Q.height;for(let Je=0;Je<Ze;Je++)t.texImage2D(i.TEXTURE_2D,Je,te,le,Pe,0,fe,R,null),le>>=1,Pe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),Q.parentNode!==le){le.appendChild(Q),m.add(x),le.onpaint=Pe=>{let Je=Pe.changedElements;for(let xe of m)Je.includes(xe.image)&&(xe.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let Je=i.RGBA,xe=i.RGBA,$e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Je,xe,$e,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ae.length>0){if(ce&&he){let le=Ge(ae[0]);t.texStorage2D(i.TEXTURE_2D,Ze,te,le.width,le.height)}for(let le=0,Pe=ae.length;le<Pe;le++)Z=ae[le],ce?Ce&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,fe,R,Z):t.texImage2D(i.TEXTURE_2D,le,te,fe,R,Z);x.generateMipmaps=!1}else if(ce){if(he){let le=Ge(Q);t.texStorage2D(i.TEXTURE_2D,Ze,te,le.width,le.height)}Ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,R,Q)}else t.texImage2D(i.TEXTURE_2D,0,te,fe,R,Q);A(x)&&x.mipmapsAutoUpdate===!0&&E(re),me.__version=de.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function qt(b,x,z){if(x.image.length!==6)return;let re=ut(b,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+z);let de=n.get(K);if(K.version!==de.__version||re===!0){t.activeTexture(i.TEXTURE0+z);let me=at.getPrimaries(at.workingColorSpace),j=x.colorSpace===ni?null:at.getPrimaries(x.colorSpace),Q=x.colorSpace===ni||me===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let fe=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,te=[];for(let xe=0;xe<6;xe++)!fe&&!R?te[xe]=M(x.image[xe],!0,s.maxCubemapSize):te[xe]=R?x.image[xe].image:x.image[xe],te[xe]=Ne(x,te[xe]);let Z=te[0],ae=r.convert(x.format,x.colorSpace),ce=r.convert(x.type),he=T(x.internalFormat,ae,ce,x.normalized,x.colorSpace),Ce=x.isVideoTexture!==!0,Ze=de.__version===void 0||re===!0,le=K.dataReady,Pe=S(x,Z);ct(i.TEXTURE_CUBE_MAP,x);let Je;if(x.isDepthTexture){if(he=g(x.format===ti,x.type),Ze)if(Ce)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,he,Z.width,Z.height);else for(let xe=0;xe<6;xe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,Z.width,Z.height,0,ae,ce,null)}else if(fe){Ce&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,he,Z.width,Z.height);for(let xe=0;xe<6;xe++){Je=te[xe].mipmaps;for(let $e=0;$e<Je.length;$e++){let Ut=Je[$e];x.format!==Un?ae!==null?Ce?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,0,0,Ut.width,Ut.height,ae,Ut.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,he,Ut.width,Ut.height,0,Ut.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,0,0,Ut.width,Ut.height,ae,ce,Ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e,he,Ut.width,Ut.height,0,ae,ce,Ut.data)}}}else{if(Je=x.mipmaps,Ce&&Ze){Je.length>0&&Pe++;let xe=Ge(te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,he,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(R){Ce?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,te[xe].width,te[xe].height,ae,ce,te[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,te[xe].width,te[xe].height,0,ae,ce,te[xe].data);for(let $e=0;$e<Je.length;$e++){let Mn=Je[$e].image[xe].image;Ce?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,0,0,Mn.width,Mn.height,ae,ce,Mn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,he,Mn.width,Mn.height,0,ae,ce,Mn.data)}}else{Ce?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ae,ce,te[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,ae,ce,te[xe]);for(let $e=0;$e<Je.length;$e++){let Ut=Je[$e];Ce?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,0,0,ae,ce,Ut.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,$e+1,he,ae,ce,Ut.image[xe])}}}A(x)&&x.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),de.__version=K.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function xt(b,x,z,re,K,de){let me=r.convert(z.format,z.colorSpace),j=r.convert(z.type),Q=T(z.internalFormat,me,j,z.normalized,z.colorSpace),fe=n.get(x),R=n.get(z);if(R.__renderTarget=x,!fe.__hasExternalTextures){let te=Math.max(1,x.width>>de),Z=Math.max(1,x.height>>de);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,de,Q,te,Z,x.depth,0,me,j,null):t.texImage2D(K,de,Q,te,Z,0,me,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),_e(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,K,R.__webglTexture,0,Mt(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,K,R.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function wn(b,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){let re=x.depthTexture,K=re&&re.isDepthTexture?re.type:null,de=g(x.stencilBuffer,K),me=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_e(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(x),de,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(x),de,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,b)}else{let re=x.textures;for(let K=0;K<re.length;K++){let de=re[K],me=r.convert(de.format,de.colorSpace),j=r.convert(de.type),Q=T(de.internalFormat,me,j,de.normalized,de.colorSpace);_e(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(x),Q,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(x),Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(b,x,z){let re=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);K.__renderTarget=x;let de=re?x.depthTexture.image[0]:x.depthTexture.image;(!K.__webglTexture||de.width!==x.width||de.height!==x.height)&&(de.width=x.width,de.height=x.height,x.depthTexture.needsUpdate=!0),re?ve(x.depthTexture,0):ye(x.depthTexture,0);let me=K.__webglTexture,j=Mt(x),Q=re?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,fe=x.depthTexture.format===ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Jn)_e(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,Q,me,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,fe,Q,me,0);else if(x.depthTexture.format===ti)_e(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,Q,me,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,fe,Q,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(b){let x=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let re=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),re){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,re.removeEventListener("dispose",K)};re.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=re}if(b.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let re=0;re<6;re++)Nt(x.__webglFramebuffer[re],b,re);else b.texture.mipmaps.length>0?Nt(x.__webglFramebuffer[0],b,0):Nt(x.__webglFramebuffer,b,0);else if(z){x.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[re]),x.__webglDepthbuffer[re]===void 0)x.__webglDepthbuffer[re]=i.createRenderbuffer(),wn(x.__webglDepthbuffer[re],b,!1);else{let K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,de)}}else if(b.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),wn(x.__webglDepthbuffer,b,!1);else{let K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nn(b,x,z){let re=n.get(b);x!==void 0&&xt(re.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&pt(b)}function Jt(b){let x=b.texture,z=n.get(b),re=n.get(x);b.addEventListener("dispose",G),O(b);let K=b.textures,de=b.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=x.version,o.memory.textures++),de){z.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps.length>0){z.__webglFramebuffer[j]=[];for(let Q=0;Q<x.mipmaps.length;Q++)z.__webglFramebuffer[j][Q]=i.createFramebuffer()}else z.__webglFramebuffer[j]=i.createFramebuffer()}else{if(x.mipmaps.length>0){z.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)z.__webglFramebuffer[j]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(me)for(let j=0,Q=K.length;j<Q;j++){let fe=n.get(K[j]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&_e(b)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let Q=K[j];z.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[j]);let fe=r.convert(Q.format,Q.colorSpace),R=r.convert(Q.type),te=T(Q.internalFormat,fe,R,Q.normalized,Q.colorSpace,b.isXRRenderTarget===!0),Z=Mt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,te,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,z.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),wn(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),ct(i.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)xt(z.__webglFramebuffer[j][Q],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else xt(z.__webglFramebuffer[j],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);A(x)?E(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(me){for(let j=0,Q=K.length;j<Q;j++){let fe=K[j],R=n.get(fe),te=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(te=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,R.__webglTexture),ct(te,fe),xt(z.__webglFramebuffer,b,fe,i.COLOR_ATTACHMENT0+j,te,0),A(fe)&&E(te)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(j=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,re.__webglTexture),ct(j,x),x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)xt(z.__webglFramebuffer[Q],b,x,i.COLOR_ATTACHMENT0,j,Q);else xt(z.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,j,0);A(x)?E(j):x.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}b.depthBuffer&&pt(b)}function L(b){let x=b.textures;for(let z=0,re=x.length;z<re;z++){let K=x[z];if(A(K)&&K.mipmapsAutoUpdate===!0){let de=w(b),me=n.get(K).__webglTexture;t.bindTexture(de,me),E(de),t.unbindTexture()}}}let Kt=[];function yt(b){if(b.samples>0){if(_e(b)===!1){let x=b.textures,z=b.width,re=b.height,K=i.COLOR_BUFFER_BIT,de=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(b),j=x.length>1;if(j)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);let R=n.get(x[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,z,re,0,0,z,re,K,i.NEAREST),l===!0&&(Kt.length=0,Kt.push(i.COLOR_ATTACHMENT0+fe),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&Kt.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Kt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);let R=n.get(x[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Mt(b){return Math.min(s.maxSamples,b.samples)}function _e(b){let x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ct(b){let x=o.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Ne(b,x){let z=b.colorSpace,re=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==Ls&&z!==ni&&(at.getTransfer(z)===ft?(re!==Un||K!==dn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",z)),x}function Ge(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Ve,this.resetTextureUnits=ne,this.getTextureUnits=ie,this.setTextureUnits=Ae,this.setTexture2D=ye,this.setTexture2DArray=be,this.setTexture3D=Le,this.setTextureCube=ve,this.rebindTextures=nn,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=_e,this.dispose=X}function Vg(i,e){function t(n,s=ni){let r,o=at.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===Uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ml)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xl)return i.BYTE;if(n===yl)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===No)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===Sl)return i.ALPHA;if(n===El)return i.RGB;if(n===Un)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===ti)return i.DEPTH_STENCIL;if(n===bl)return i.RED;if(n===Oo)return i.RED_INTEGER;if(n===yi)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===Ho)return i.RGBA_INTEGER;if(n===ar||n===lr||n===cr||n===hr)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zo||n===Go||n===ko||n===Vo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===ur||n===Jo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wo||n===Xo)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yo)return r.COMPRESSED_R11_EAC;if(n===Zo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ur)return r.COMPRESSED_RG11_EAC;if(n===Jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ko||n===$o||n===jo||n===Qo||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ko)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qo)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ea)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===na)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ra)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===aa)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===la)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ha||n===ua||n===da)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ha)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fa||n===pa||n===dr||n===ma)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new un({vertexShader:Wg,fragmentShader:Xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new N(new je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yl=class extends In{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,m=null,u=null,p=null,_=null,v=typeof XRWebGLBinding<"u",f=new ql,d={},M=t.getContextAttributes(),A=null,E=null,w=[],T=[],g=new ze,S=null,O=null,D=new en;D.viewport=new At;let F=new en;F.viewport=new At;let G=[D,F],q=new Co,P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ye=w[ee];return ye===void 0&&(ye=new cs,w[ee]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ee){let ye=w[ee];return ye===void 0&&(ye=new cs,w[ee]=ye),ye.getGripSpace()},this.getHand=function(ee){let ye=w[ee];return ye===void 0&&(ye=new cs,w[ee]=ye),ye.getHandSpace()};function $(ee){let ye=T.indexOf(ee.inputSource);if(ye===-1)return;let be=w[ye];be!==void 0&&(be.update(ee.inputSource,ee.frame,c||o),be.dispatchEvent({type:ee.type,data:ee.inputSource}))}function W(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",oe);for(let ee=0;ee<w.length;ee++){let ye=T[ee];ye!==null&&(T[ee]=null,w[ee].disconnect(ye))}P=null,X=null,f.reset();for(let ee in d)delete d[ee];if(e.setRenderTarget(A),p=null,u=null,m=null,s=null,E=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(g.width,g.height,!1),O!==null){let ee=O.camera;ee.fov=O.fov,ee.zoom=O.zoom,ee.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return m===null&&v&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",W),s.addEventListener("inputsourceschange",oe),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(g),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Le=null,ve=null;M.depth&&(ve=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=M.stencil?ti:Jn,Le=M.stencil?Ui:Dn);let qe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};m=this.getBinding(),u=m.createProjectionLayer(qe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new yn(u.textureWidth,u.textureHeight,{format:Un,type:dn,depthTexture:new jn(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let be={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new yn(p.framebufferWidth,p.framebufferHeight,{format:Un,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function oe(ee){for(let ye=0;ye<ee.removed.length;ye++){let be=ee.removed[ye],Le=T.indexOf(be);Le>=0&&(T[Le]=null,w[Le].disconnect(be))}for(let ye=0;ye<ee.added.length;ye++){let be=ee.added[ye],Le=T.indexOf(be);if(Le===-1){for(let qe=0;qe<w.length;qe++)if(qe>=T.length){T.push(be),Le=qe;break}else if(T[qe]===null){T[qe]=be,Le=qe;break}if(Le===-1)break}let ve=w[Le];ve&&ve.connect(be)}}function J(ee,ye){ye===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ye.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ye=ee.near,be=ee.far;f.texture!==null&&(f.depthNear>0&&(ye=f.depthNear),f.depthFar>0&&(be=f.depthFar)),q.near=F.near=D.near=ye,q.far=F.far=D.far=be,(P!==q.near||X!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),P=q.near,X=q.far),q.layers.mask=ee.layers.mask|6,D.layers.mask=q.layers.mask&-5,F.layers.mask=q.layers.mask&-3;let Le=ee.parent,ve=q.cameras;J(q,Le);for(let qe=0;qe<ve.length;qe++)J(ve[qe],Le);q.projectionMatrix.copy(D.projectionMatrix),q.projectionMatrixInverse.copy(D.projectionMatrixInverse),O===null&&ee.isPerspectiveCamera&&(O={camera:ee,fov:ee.fov,zoom:ee.zoom}),ne(ee,q,Le)};function ne(ee,ye,be){be===null?ee.matrix.copy(ye.matrixWorld):(ee.matrix.copy(be.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ye.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ye.projectionMatrix),ee.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=as*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(ee){l=ee,u!==null&&(u.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(q)},this.getCameraTexture=function(ee){return d[ee]};let ie=null;function Ae(ee,ye){if(h=ye.getViewerPose(c||o),_=ye,h!==null){let be=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Le=!1;be.length!==q.cameras.length&&(q.cameras.length=0,Le=!0);for(let Ie=0;Ie<be.length;Ie++){let ct=be[Ie],ut=null;if(p!==null)ut=p.getViewport(ct);else{let Rt=m.getViewSubImage(u,ct);ut=Rt.viewport,Ie===0&&(e.setRenderTargetTextures(E,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(E))}let tt=G[Ie];tt===void 0&&(tt=new en,tt.layers.enable(Ie),tt.viewport=new At,G[Ie]=tt),tt.matrix.fromArray(ct.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(ct.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ut.x,ut.y,ut.width,ut.height),Ie===0&&(q.matrix.copy(tt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Le===!0&&q.cameras.push(tt)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){m=n.getBinding();let Ie=m.getDepthInformation(be[0]);Ie&&Ie.isValid&&Ie.texture&&f.init(Ie,s.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),m=n.getBinding();for(let Ie=0;Ie<be.length;Ie++){let ct=be[Ie].camera;if(ct){let ut=d[ct];ut||(ut=new Xs,d[ct]=ut);let tt=m.getCameraImage(ct);ut.sourceTexture=tt}}}}for(let be=0;be<w.length;be++){let Le=T[be],ve=w[be];Le!==null&&ve!==void 0&&ve.update(Le,ye,c||o)}ie&&ie(ee,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),_=null}let Ve=new zh;Ve.setAnimationLoop(Ae),this.setAnimationLoop=function(ee){ie=ee},this.dispose=function(){}}},qg=new Tt,Kh=new Ye;Kh.set(-1,0,0,0,1,0,0,0,1);function Yg(i,e){function t(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Nl(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,M,A,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),m(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&p(f,d,E)):d.isMeshMatcapMaterial?(r(f,d),_(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),v(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(o(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?l(f,d,M,A):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,t(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===ln&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,t(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===ln&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,t(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,t(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let M=e.get(d),A=M.envMap,E=M.envMapRotation;A&&(f.envMap.value=A,f.envMapRotation.value.setFromMatrix4(qg.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Kh),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,f.aoMapTransform))}function o(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform))}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,M,A){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*M,f.scale.value=A*.5,d.map&&(f.map.value=d.map,t(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,t(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,t(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function m(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function p(f,d,M){f.ior.value=d.ior,d.diffuseRoughness>0&&(f.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,d){d.matcap&&(f.matcap.value=d.matcap)}function v(f,d){let M=e.get(d).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zg(i,e,t,n){let s={},r={};function o(M,A){let E=A.program;n.uniformBlockBinding(M,E,s[M.id])}function a(M,A){let E=s[M.id];E===void 0&&(_(M),E=l(M),s[M.id]=E,M.addEventListener("dispose",f));let w=A.program;n.updateUBOMapping(M,w);let T=e.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){let A=i.createBuffer(),E=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(M){let A=s[M.id],E=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,g=E.length;T<g;T++){let S=E[T];if(Array.isArray(S))for(let O=0,D=S.length;O<D;O++)h(S[O],T,O,w);else h(S,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,A,E,w){if(u(M,A,E,w)===!0){let T=M.__offset,g=M.value;if(Array.isArray(g)){let S=0;for(let O=0;O<g.length;O++){let D=g[O],F=v(D,!0);m(D,M.__data,S),S+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else m(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function m(M,A,E){typeof M=="number"||typeof M=="boolean"?A[E]=M:M.isMatrix3?(A[E]=M.elements[0],A[E+1]=M.elements[1],A[E+2]=M.elements[2],A[E+3]=0,A[E+4]=M.elements[3],A[E+5]=M.elements[4],A[E+6]=M.elements[5],A[E+7]=0,A[E+8]=M.elements[6],A[E+9]=M.elements[7],A[E+10]=M.elements[8],A[E+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-E),E):M.toArray(A,E)}function u(M,A,E,w){let T=M.value,g=A+"_"+E;if(Array.isArray(T)){w[g]===void 0&&(w[g]=[]);let S=w[g],O=!1;for(let D=0;D<T.length;D++)p(T[D],S,D)===!0&&(O=!0);return O}return p(T,w,g)}function p(M,A,E){if(A[E]===void 0)return typeof M=="number"||typeof M=="boolean"?A[E]=M:ArrayBuffer.isView(M)?A[E]=M.slice():A[E]=M.clone(),!0;{let w=A[E];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return A[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function _(M){let A=M.uniforms,E=0,w=16;for(let g=0,S=A.length;g<S;g++){let O=Array.isArray(A[g])?A[g]:[A[g]];for(let D=0,F=O.length;D<F;D++){let G=O[D],q=Array.isArray(G.value)?G.value:[G.value],P=Array.isArray(A[g])||Array.isArray(G.value),X=E;for(let W=0,oe=q.length;W<oe;W++){let J=q[W],ne=v(J,P),ie=E%w,Ae=ie%ne.boundary,Ve=ie+Ae;E+=Ae,Ve!==0&&w-Ve<ne.storage&&(E+=w-Ve),W===0&&(X=E),E+=ne.storage}let $=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new $((E-X)/Float32Array.BYTES_PER_ELEMENT),G.__offset=X}}let T=E%w;return T>0&&(E+=w-T),M.__size=E,M.__cache={},this}function v(M,A){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=16,E.storage=48):M.isMatrix4?(E.boundary=16,E.storage=64):M.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function f(M){let A=M.target;A.removeEventListener("dispose",f),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:d}}var Jg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function Kg(){return zn===null&&(zn=new fo(Jg,16,16,yi,Nn),zn.name="DFG_LUT",zn.minFilter=an,zn.magFilter=an,zn.wrapS=Bn,zn.wrapT=Bn,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var va=class{constructor(e={}){let{canvas:t=ch(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:u=!1,outputBufferType:p=dn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let v=p,f=new Set([Ho,Bo,Oo]),d=new Set([dn,Dn,ms,Ui,Uo,Fo]),M=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},w=null,T=null,g=[],S=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,F=!1,G=null,q=null,P=null,X=null;this._outputColorSpace=gn;let $=0,W=0,oe=null,J=-1,ne=null,ie=new At,Ae=new At,Ve=null,ee=new He(0),ye=0,be=t.width,Le=t.height,ve=1,qe=null,Lt=null,Ie=new At(0,0,be,Le),ct=new At(0,0,be,Le),ut=!1,tt=new di,Rt=new po,Dt=!1,qt=!1,xt=new Tt,wn=new B,Nt=new At,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nn=!1;function Jt(){return oe===null?ve:1}let L=n;function Kt(y,I){return t.getContext(y,I)}let yt,Mt,_e,Ct,Ne,Ge,b,x,z,re,K,de,me,j,Q,fe,R,te,Z,ae,ce,he,Ce;try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",xe,!1),L===null){let I="webgl2";if(L=Kt(I,y),L===null)throw Kt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(y){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Xe("WebGLRenderer: "+y.message),y}function Ze(){yt=new am(L),yt.init(),ce=new Vg(L,yt),Mt=new Kp(L,yt,e,ce),_e=new Gg(L,yt),Mt.reversedDepthBuffer&&u&&_e.buffers.depth.setReversed(!0),q=L.createFramebuffer(),P=L.createFramebuffer(),X=L.createFramebuffer(),Ct=new hm(L),Ne=new Ag,Ge=new kg(L,yt,_e,Ne,Mt,ce,Ct),b=new om(D),x=new ud(L),he=new Zp(L,x),z=new lm(L,x,Ct,he),re=new dm(L,z,x,he,Ct),te=new um(L,Mt,Ge),Q=new $p(Ne),K=new wg(D,b,yt,Mt,he,Q),de=new Yg(D,Ne),me=new Cg,j=new Ug(yt),R=new Yp(D,b,_e,re,_,l),fe=new zg(D,re,Mt),Ce=new Zg(L,Ct,Mt,_e),Z=new Jp(L,yt,Ct),ae=new cm(L,yt,Ct),Ct.programs=K.programs,D.capabilities=Mt,D.extensions=yt,D.properties=Ne,D.renderLists=me,D.shadowMap=fe,D.state=_e,D.info=Ct}v!==dn&&(O=new pm(v,t.width,t.height,a,s,r));let le=new Yl(D,L);this.xr=le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=yt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=yt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(y){y!==void 0&&(ve=y,this.setSize(be,Le,!1))},this.getSize=function(y){return y.set(be,Le)},this.setSize=function(y,I,V=!0){if(le.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}be=y,Le=I,t.width=Math.floor(y*ve),t.height=Math.floor(I*ve),V===!0&&(t.style.width=y+"px",t.style.height=I+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(be*ve,Le*ve).floor()},this.setDrawingBufferSize=function(y,I,V){be=y,Le=I,ve=V,t.width=Math.floor(y*V),t.height=Math.floor(I*V),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(v===dn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ie)},this.getViewport=function(y){return y.copy(Ie)},this.setViewport=function(y,I,V,H){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,I,V,H),_e.viewport(ie.copy(Ie).multiplyScalar(Jt()).round())},this.getScissor=function(y){return y.copy(ct)},this.setScissor=function(y,I,V,H){y.isVector4?ct.set(y.x,y.y,y.z,y.w):ct.set(y,I,V,H),_e.scissor(Ae.copy(ct).multiplyScalar(Jt()).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(y){_e.setScissorTest(ut=y)},this.setOpaqueSort=function(y){qe=y},this.setTransparentSort=function(y){Lt=y},this.getClearColor=function(y){return y.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,V=!0){let H=0;if(y){let k=!1;if(oe!==null){let ue=oe.texture.format;k=f.has(ue)}if(k){let ue=oe.texture.type,Te=d.has(ue),ge=R.getClearColor(),Me=R.getClearAlpha(),Re=ge.r,We=ge.g,nt=ge.b;Te?(M[0]=Re,M[1]=We,M[2]=nt,M[3]=Me,L.clearBufferuiv(L.COLOR,0,M)):(A[0]=Re,A[1]=We,A[2]=nt,A[3]=Me,L.clearBufferiv(L.COLOR,0,A))}else H|=L.COLOR_BUFFER_BIT}I&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),G=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),R.dispose(),me.dispose(),j.dispose(),Ge.dispose(),Ne.dispose(),b.dispose(),re.dispose(),z.dispose(),he.dispose(),Ce.dispose(),K.dispose(),le.dispose(),le.removeEventListener("sessionstart",Bi),le.removeEventListener("sessionend",Hi),Sn.stop()};function Pe(y){y.preventDefault(),Cl("WebGLRenderer: Context Lost."),F=!0}function Je(){Cl("WebGLRenderer: Context Restored."),F=!1;let y=Ct.autoReset,I=fe.enabled,V=fe.autoUpdate,H=fe.needsUpdate,k=fe.type;Ze(),Ct.autoReset=y,fe.enabled=I,fe.autoUpdate=V,fe.needsUpdate=H,fe.type=k}function xe(y){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function $e(y){let I=y.target;I.removeEventListener("dispose",$e),Ut(I)}function Ut(y){Mn(y),Ne.remove(y)}function Mn(y){let I=Ne.get(y).programs;I!==void 0&&(I.forEach(function(V){K.releaseProgram(V)}),y.isShaderMaterial&&K.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,V,H,k,ue){I===null&&(I=pt);let Te=k.isMesh&&k.matrixWorld.determinantAffine()<0,ge=vr(y,I,V,H,k);_e.setMaterial(H,Te);let Me=V.index,Re=1;if(H.wireframe===!0){if(Me=z.getWireframeAttribute(V),Me===void 0)return;Re=2}let We=V.drawRange,nt=V.attributes.position,Ee=We.start*Re,it=(We.start+We.count)*Re;ue!==null&&(Ee=Math.max(Ee,ue.start*Re),it=Math.min(it,(ue.start+ue.count)*Re)),Me!==null?(Ee=Math.max(Ee,0),it=Math.min(it,Me.count)):nt!=null&&(Ee=Math.max(Ee,0),it=Math.min(it,nt.count));let Pt=it-Ee;if(Pt<0||Pt===1/0)return;he.setup(k,H,ge,V,Me);let mt,dt=Z;if(Me!==null&&(mt=x.get(Me),dt=ae,dt.setIndex(mt)),k.isMesh)H.wireframe===!0?(_e.setLineWidth(H.wireframeLinewidth*Jt()),dt.setMode(L.LINES)):dt.setMode(L.TRIANGLES);else if(k.isLine){let St=H.linewidth;St===void 0&&(St=1),_e.setLineWidth(St*Jt()),k.isLineSegments?dt.setMode(L.LINES):k.isLineLoop?dt.setMode(L.LINE_LOOP):dt.setMode(L.LINE_STRIP)}else k.isPoints?dt.setMode(L.POINTS):k.isSprite&&dt.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(yt.get("WEBGL_multi_draw"))dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let St=k._multiDrawStarts,we=k._multiDrawCounts,Bt=k._multiDrawCount,ot=Me?x.get(Me).bytesPerElement:1,on=Ne.get(H).currentProgram.getUniforms();for(let kt=0;kt<Bt;kt++)on.setValue(L,"_gl_DrawID",kt),dt.render(St[kt]/ot,we[kt])}else if(k.isInstancedMesh)dt.renderInstances(Ee,Pt,k.count);else if(V.isInstancedBufferGeometry){let St=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,we=Math.min(V.instanceCount,St);dt.renderInstances(Ee,Pt,we)}else dt.render(Ee,Pt)};function Oi(y,I,V,H){G!==null&&y.isNodeMaterial&&G.setObject(H,y),Dt===!0&&Q.setState(y,V,!1),y.transparent===!0&&y.side===Fe&&y.forceSinglePass===!1?(y.side=ln,y.needsUpdate=!0,ii(y,I,H),y.side=xi,y.needsUpdate=!0,ii(y,I,H),y.side=Fe):ii(y,I,H)}this.compile=function(y,I,V=null){V===null&&(V=y),G!==null&&G.renderStart(y,I,V),T=j.get(V),T.init(I),S.push(T),V.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),y!==V&&y.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights(),G!==null&&G.updateLights(T.state.lightsArray),qt=this.localClippingEnabled,Dt=Q.init(this.clippingPlanes,qt),Dt===!0&&Q.setGlobalState(this.clippingPlanes,I),G!==null&&fe.render(T.state.shadowsArray,V,I);let H=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ue=k.material;if(ue)if(Array.isArray(ue))for(let Te=0;Te<ue.length;Te++){let ge=ue[Te];Oi(ge,V,I,k),H.add(ge)}else Oi(ue,V,I,k),H.add(ue)}),T=S.pop(),G!==null&&G.renderEnd(),H},this.compileAsync=function(y,I,V=null){let H=this.compile(y,I,V);return new Promise(k=>{function ue(){if(H.forEach(function(Te){let Me=Ne.get(Te).currentProgram;(Me===void 0||Me.isReady())&&H.delete(Te)}),H.size===0){k(y);return}setTimeout(ue,10)}yt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let sn=null;function yr(y){sn&&sn(y)}function Bi(){Sn.stop()}function Hi(){Sn.start()}let Sn=new zh;Sn.setAnimationLoop(yr),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(y){sn=y,le.setAnimationLoop(y),y===null?Sn.stop():Sn.start()},le.addEventListener("sessionstart",Bi),le.addEventListener("sessionend",Hi),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;G!==null&&G.renderStart(y,I);let V=le.enabled===!0&&le.isPresenting===!0,H=O!==null&&(oe===null||V)&&O.begin(D,oe);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(I),I=le.getCamera()),y.isScene===!0&&y.onBeforeRender(D,y,I,oe),T=j.get(y,S.length),T.init(I),T.state.textureUnits=Ge.getTextureUnits(),S.push(T),xt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Rt.setFromArrayCamera(I):tt.setFromProjectionMatrix(xt,Tn,I.reversedDepth),qt=this.localClippingEnabled,Dt=Q.init(this.clippingPlanes,qt),w=me.get(y,g.length),w.init(),g.push(w),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Te=D.xr.getDepthSensingMesh();Te!==null&&zi(Te,I,-1/0,D.sortObjects)}zi(y,I,0,D.sortObjects),w.finish(),G!==null&&G.updateLights(T.state.lightsArray),D.sortObjects===!0&&w.sort(qe,Lt),nn=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,nn&&R.addToRenderList(w,y),this.info.autoReset===!0&&this.info.reset(),Dt===!0&&Q.beginShadows();let k=T.state.shadowsArray;if(fe.render(k,y,I),Dt===!0&&Q.endShadows(),(H&&O.hasRenderPass())===!1){let Te=w.opaque,ge=w.transmissive;if(T.setupLights(),I.isArrayCamera){let Me=I.cameras;if(ge.length>0)for(let Re=0,We=Me.length;Re<We;Re++){let nt=Me[Re];vi(Te,ge,y,nt)}nn&&R.render(y);for(let Re=0,We=Me.length;Re<We;Re++){let nt=Me[Re];ys(w,y,nt,nt.viewport)}}else ge.length>0&&vi(Te,ge,y,I),nn&&R.render(y),ys(w,y,I)}oe!==null&&W===0&&(Ge.updateMultisampleRenderTarget(oe),Ge.updateRenderTargetMipmap(oe)),H&&O.end(D),y.isScene===!0&&y.onAfterRender(D,y,I),he.resetDefaultState(),J=-1,ne=null,S.pop(),S.length>0?(T=S[S.length-1],Ge.setTextureUnits(T.state.textureUnits),Dt===!0&&Q.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,G!==null&&G.renderEnd()};function zi(y,I,V,H){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){let Te=I.isArrayCamera?Rt:tt;if(!y.frustumCulled||y.intersectsFrustum(Te)){H&&Nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(xt);let ge=re.update(y),Me=y.material;Me.visible&&w.push(y,ge,Me,V,Nt.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){let Te=I.isArrayCamera?Rt:tt;if(!y.frustumCulled||y.intersectsFrustum(Te)){let ge=re.update(y),Me=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Nt.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Nt.copy(ge.boundingSphere.center)),Nt.applyMatrix4(y.matrixWorld).applyMatrix4(xt)),Array.isArray(Me)){let Re=ge.groups;for(let We=0,nt=Re.length;We<nt;We++){let Ee=Re[We],it=Me[Ee.materialIndex];it&&it.visible&&w.push(y,ge,it,V,Nt.z,Ee,I)}}else Me.visible&&w.push(y,ge,Me,V,Nt.z,null,I)}}}let ue=y.children;for(let Te=0,ge=ue.length;Te<ge;Te++)zi(ue[Te],I,V,H)}function ys(y,I,V,H){let{opaque:k,transmissive:ue,transparent:Te}=y;T.setupLightsView(V),Dt===!0&&Q.setGlobalState(D.clippingPlanes,V),H&&_e.viewport(ie.copy(H)),k.length>0&&Mi(k,I,V),ue.length>0&&Mi(ue,I,V),Te.length>0&&Mi(Te,I,V),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function vi(y,I,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let Ee=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new yn(1,1,{generateMipmaps:!0,type:Ee?Nn:dn,minFilter:ei,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let ue=T.state.transmissionRenderTarget[H.id],Te=H.viewport||ie;ue.setSize(Te.z*D.transmissionResolutionScale,Te.w*D.transmissionResolutionScale);let ge=D.getRenderTarget(),Me=D.getActiveCubeFace(),Re=D.getActiveMipmapLevel();D.setRenderTarget(ue),D.getClearColor(ee),ye=D.getClearAlpha(),ye<1&&D.setClearColor(16777215,.5),D.clear(),nn&&R.render(V);let We=D.toneMapping;D.toneMapping=Hn;let nt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),Dt===!0&&Q.setGlobalState(D.clippingPlanes,H),Mi(y,V,H),Ge.updateMultisampleRenderTarget(ue),Ge.updateRenderTargetMipmap(ue),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let it=0,Pt=I.length;it<Pt;it++){let mt=I[it],{object:dt,geometry:St,material:we,group:Bt}=mt;if(we.side===Fe&&dt.layers.test(H.layers)){let ot=we.side;we.side=ln,we.needsUpdate=!0,vs(dt,V,H,St,we,Bt),we.side=ot,we.needsUpdate=!0,Ee=!0}}Ee===!0&&(Ge.updateMultisampleRenderTarget(ue),Ge.updateRenderTargetMipmap(ue))}D.setRenderTarget(ge,Me,Re),D.setClearColor(ee,ye),nt!==void 0&&(H.viewport=nt),D.toneMapping=We}function Mi(y,I,V){let H=I.isScene===!0?I.overrideMaterial:null;for(let k=0,ue=y.length;k<ue;k++){let Te=y[k],{object:ge,geometry:Me,group:Re}=Te,We=Te.material;We.allowOverride===!0&&H!==null&&(We=H),ge.layers.test(V.layers)&&vs(ge,I,V,Me,We,Re)}}function vs(y,I,V,H,k,ue){G!==null&&k.isNodeMaterial&&G.setObject(y,k),y.onBeforeRender(D,I,V,H,k,ue),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(D,I,V,H,y,ue),k.transparent===!0&&k.side===Fe&&k.forceSinglePass===!1?(k.side=ln,k.needsUpdate=!0,D.renderBufferDirect(V,I,H,k,y,ue),k.side=xi,k.needsUpdate=!0,D.renderBufferDirect(V,I,H,k,y,ue),k.side=Fe):D.renderBufferDirect(V,I,H,k,y,ue),y.onAfterRender(D,I,V,H,k,ue)}function Ms(y){let I=0;for(let V of y)V.texture!==null&&I++;return I}function ii(y,I,V){I.isScene!==!0&&(I=pt);let H=Ne.get(y),k=T.state.lights,ue=T.state.shadowsArray,Te=k.state.version,ge=K.getParameters(y,k.state,ue,I,V,T.state.lightProbeGridArray),Me=K.getProgramCacheKey(ge),Re=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,H.fog=I.fog;let We=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=b.get(y.envMap||H.environment,We),H.envMapRotation=H.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",$e),Re=new Map,H.programs=Re,H.programVariants=new Map);let nt=Re.get(Me);if(nt!==void 0){if(H.currentProgram===nt&&H.lightsStateVersion===Te)return Es(y,ge),nt}else ge.uniforms=K.getUniforms(y),G!==null&&y.isNodeMaterial&&G.build(y,V,ge),y.onBeforeCompile(ge,D),nt=K.acquireProgram(ge,Me),Re.set(Me,nt),H.uniforms=ge.uniforms;let Ee=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=Q.uniform),Es(y,ge),H.needsLights=Sr(y),H.lightsStateVersion=Te,H.needsLights&&(Ee.ambientLightColor.value=k.state.ambient,Ee.lightProbe.value=k.state.probe,Ee.sunLights.value=k.state.sun,Ee.sunLightShadows.value=k.state.sunShadow,Ee.directionalLights.value=k.state.directional,Ee.directionalLightShadows.value=k.state.directionalShadow,Ee.spotLights.value=k.state.spot,Ee.spotLightShadows.value=k.state.spotShadow,Ee.rectAreaLights.value=k.state.rectArea,Ee.ltc_1.value=k.state.rectAreaLTC1,Ee.ltc_2.value=k.state.rectAreaLTC2,Ee.pointLights.value=k.state.point,Ee.pointLightShadows.value=k.state.pointShadow,Ee.hemisphereLights.value=k.state.hemi,Ee.sunShadowMatrix.value=k.state.sunShadowMatrix,Ee.sunShadowCascade.value=k.state.sunShadowCascade,Ee.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ee.spotLightMatrix.value=k.state.spotLightMatrix,Ee.spotLightMap.value=k.state.spotLightMap,Ee.pointShadowMatrix.value=k.state.pointShadowMatrix),H.numLightProbeGrids=Ms(T.state.lightProbeGridArray),H.currentProgram=nt,H.uniformsList=null,nt}function rn(y,I,V,H,k){let ue=Ne.get(y),Te=ue.currentProgram.id+","+H+","+k,ge=ue.programVariants.get(Te);return ge===void 0?(ge=ii(y,I,V),ue.programVariants.set(Te,ge)):(ue.currentProgram=ge,ue.uniformsList=null,ue.outputColorSpace=H,ue.toneMapping=k),ge}function Ss(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=_s.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function Es(y,I){let V=Ne.get(y);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function vr(y,I,V,H,k){I.isScene!==!0&&(I=pt),Ge.resetTextureUnits();let ue=I.fog,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?I.environment:null,ge=oe===null?D.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:at.workingColorSpace,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Re=b.get(H.envMap||Te,Me),We=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,nt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ee=!!V.morphAttributes.position,it=!!V.morphAttributes.normal,Pt=!!V.morphAttributes.color,mt=Hn;H.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(mt=D.toneMapping);let dt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,St=dt!==void 0?dt.length:0,we=Ne.get(H),Bt=T.state.lights;if(Dt===!0&&(qt===!0||y!==ne)){let Et=y===ne&&H.id===J;Q.setState(H,y,Et)}let ot=!1,on=!1;H.version===we.__version?we.needsLights&&we.lightsStateVersion!==Bt.state.version||k.isBatchedMesh&&we.batching===!1||!k.isBatchedMesh&&we.batching===!0||k.isBatchedMesh&&we.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&we.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&we.instancing===!1||!k.isInstancedMesh&&we.instancing===!0||k.isSkinnedMesh&&we.skinning===!1||!k.isSkinnedMesh&&we.skinning===!0||k.isInstancedMesh&&we.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&we.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&we.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&we.instancingMorph===!1&&k.morphTexture!==null||we.envMap!==Re||H.fog===!0&&we.fog!==ue||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Q.numPlanes||we.numIntersection!==Q.numIntersection)||we.vertexAlphas!==We||we.vertexTangents!==nt||we.morphTargets!==Ee||we.morphNormals!==it||we.morphColors!==Pt||we.morphTargetsCount!==St||we.numLightProbeGrids!==Ms(T.state.lightProbeGridArray)?ot=!0:(we.outputColorSpace!==ge||we.toneMapping!==mt)&&(on=!0):(ot=!0,we.__version=H.version);let kt=we.currentProgram;(ot===!0||on===!0)&&(kt=on===!0?rn(H,I,k,ge,mt):ii(H,I,k),G&&H.isNodeMaterial&&G.onUpdateProgram(H,kt,we));let Si=!1,An=!1,Fn=!1,Qe=kt.getUniforms(),Ft=we.uniforms;if(_e.useProgram(kt.program)&&(Si=!0,An=!0,Fn=!0),H.id!==J&&(J=H.id,An=!0),Si||ne!==y){_e.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Qe.setValue(L,"projectionMatrix",y.projectionMatrix),Qe.setValue(L,"viewMatrix",y.matrixWorldInverse);let wt=Qe.map.cameraPosition;wt!==void 0&&wt.setValue(L,wn.setFromMatrixPosition(y.matrixWorld)),Mt.logarithmicDepthBuffer&&Qe.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Qe.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),ne!==y&&(ne=y,An=!0,Fn=!0)}if(we.needsLights&&(Bt.state.sunShadowMap.length>0&&Qe.setValue(L,"sunShadowMap",Bt.state.sunShadowMap,Ge),Bt.state.directionalShadowMap.length>0&&Qe.setValue(L,"directionalShadowMap",Bt.state.directionalShadowMap,Ge),Bt.state.spotShadowMap.length>0&&Qe.setValue(L,"spotShadowMap",Bt.state.spotShadowMap,Ge),Bt.state.pointShadowMap.length>0&&Qe.setValue(L,"pointShadowMap",Bt.state.pointShadowMap,Ge)),k.isSkinnedMesh){Qe.setOptional(L,k,"bindMatrix"),Qe.setOptional(L,k,"bindMatrixInverse");let Et=k.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),Qe.setValue(L,"boneTexture",Et.boneTexture,Ge))}k.isBatchedMesh&&(Qe.setOptional(L,k,"batchingTexture"),Qe.setValue(L,"batchingTexture",k._matricesTexture,Ge),Qe.setOptional(L,k,"batchingIdTexture"),Qe.setValue(L,"batchingIdTexture",k._indirectTexture,Ge),Qe.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Qe.setValue(L,"batchingColorTexture",k._colorsTexture,Ge));let $t=V.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&te.update(k,V,kt),(An||we.receiveShadow!==k.receiveShadow)&&(we.receiveShadow=k.receiveShadow,Qe.setValue(L,"receiveShadow",k.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&I.environment!==null&&(Ft.envMapIntensity.value=I.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=Kg()),An){if(Qe.setValue(L,"toneMappingExposure",D.toneMappingExposure),we.needsLights&&Mr(Ft,Fn),ue&&H.fog===!0&&de.refreshFogUniforms(Ft,ue),de.refreshMaterialUniforms(Ft,H,ve,Le,T.state.transmissionRenderTarget[y.id]),we.needsLights&&we.numLightProbeGrids>0){let Et=E,wt=0;for(let En of T.state.lightProbeGridArray)En.texture!==null&&(Et.textures[wt]=En.texture,Et.min[wt]=En.boundingBox.min,Et.max[wt]=En.boundingBox.max,Et.resolution[wt]=En.resolution,wt++);for(let En in Et)Et[En].length=wt;Ft.probesSH.value=Et.textures,Ft.probesMin.value=Et.min,Ft.probesMax.value=Et.max,Ft.probesResolution.value=Et.resolution}_s.upload(L,Ss(we),Ft,Ge)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(_s.upload(L,Ss(we),Ft,Ge),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Qe.setValue(L,"center",k.center),Qe.setValue(L,"modelViewMatrix",k.modelViewMatrix),Qe.setValue(L,"normalMatrix",k.normalMatrix),Qe.setValue(L,"modelMatrix",k.matrixWorld),H.uniformsGroups!==void 0){let Et=H.uniformsGroups;for(let wt=0,En=Et.length;wt<En;wt++){let bs=Et[wt];Ce.update(bs,kt),Ce.bind(bs,kt)}}return kt}function Mr(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function Sr(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(y,I,V){let H=Ne.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ne.get(y.texture).__webglTexture=I,Ne.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let V=Ne.get(y);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,V=0){oe=y,$=I,W=V;let H=null,k=!1,ue=!1;if(y){let ge=Ne.get(y);if(ge.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(L.FRAMEBUFFER,ge.__webglFramebuffer),ie.copy(y.viewport),Ae.copy(y.scissor),Ve=y.scissorTest,_e.viewport(ie),_e.scissor(Ae),_e.setScissorTest(Ve),J=-1;return}else if(ge.__webglFramebuffer===void 0)Ge.setupRenderTarget(y);else if(ge.__hasExternalTextures)Ge.rebindTextures(y,Ne.get(y.texture).__webglTexture,Ne.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let We=y.depthTexture;if(ge.__boundDepthTexture!==We){if(We!==null&&Ne.has(We)&&(y.width!==We.image.width||y.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(y)}}let Me=y.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ue=!0);let Re=Ne.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?H=Re[I][V]:H=Re[I],k=!0):y.samples>0&&Ge.useMultisampledRTT(y)===!1?H=Ne.get(y).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[V]:H=Re,ie.copy(y.viewport),Ae.copy(y.scissor),Ve=y.scissorTest}else ie.copy(Ie).multiplyScalar(ve).floor(),Ae.copy(ct).multiplyScalar(ve).floor(),Ve=ut;if(V!==0&&(H=q),_e.bindFramebuffer(L.FRAMEBUFFER,H)&&_e.drawBuffers(y,H),_e.viewport(ie),_e.scissor(Ae),_e.setScissorTest(Ve),k){let ge=Ne.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ge.__webglTexture,V)}else if(ue){let ge=I;for(let Me=0;Me<y.textures.length;Me++){let Re=Ne.get(y.textures[Me]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Me,Re.__webglTexture,V,ge)}}else if(y!==null&&V!==0){let ge=Ne.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge.__webglTexture,V)}J=-1};function Gi(y){let I=Ne.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=Mt.textureFormatReadable(y.format),I.__typeReadable=Mt.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,V,H,k,ue,Te,ge=0){if(!(y&&y.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Me=Me[Te],Array.isArray(Me)&&(Me=Me[0])),Me){_e.bindFramebuffer(L.FRAMEBUFFER,Me);try{let Re=y.textures[ge],We=Re.format,nt=Re.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge);let Ee=Gi(Re);if(Ee.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-H&&V>=0&&V<=y.height-k&&L.readPixels(I,V,H,k,ce.convert(We),ce.convert(nt),ue)}finally{let Re=oe!==null?Ne.get(oe).__webglFramebuffer:null;_e.bindFramebuffer(L.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,I,V,H,k,ue,Te,ge=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(Me=Me[Te],Array.isArray(Me)&&(Me=Me[0])),Me)if(I>=0&&I<=y.width-H&&V>=0&&V<=y.height-k){_e.bindFramebuffer(L.FRAMEBUFFER,Me);let Re=y.textures[ge],We=Re.format,nt=Re.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge);let Ee=Gi(Re);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,it),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(I,V,H,k,ce.convert(We),ce.convert(nt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Pt=oe!==null?Ne.get(oe).__webglFramebuffer:null;_e.bindFramebuffer(L.FRAMEBUFFER,Pt);let mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await uh(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,it),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(it),L.deleteSync(mt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,V=0){let H=Math.pow(2,-V),k=Math.floor(y.image.width*H),ue=Math.floor(y.image.height*H),Te=I!==null?I.x:0,ge=I!==null?I.y:0;Ge.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,Te,ge,k,ue),_e.unbindTexture()},this.copyTextureToTexture=function(y,I,V=null,H=null,k=0,ue=0){let Te,ge,Me,Re,We,nt,Ee,it,Pt,mt=y.isCompressedTexture?y.mipmaps[ue]:y.image;if(V!==null)Te=V.max.x-V.min.x,ge=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,Re=V.min.x,We=V.min.y,nt=V.isBox3?V.min.z:0;else{let Qe=Math.pow(2,-k);Te=Math.floor(mt.width*Qe),ge=Math.floor(mt.height*Qe),y.isDataArrayTexture?Me=mt.depth:y.isData3DTexture?Me=Math.floor(mt.depth*Qe):Me=1,Re=0,We=0,nt=0}H!==null?(Ee=H.x,it=H.y,Pt=H.z):(Ee=0,it=0,Pt=0);let dt=ce.convert(I.format),St=ce.convert(I.type),we;I.isData3DTexture?(Ge.setTexture3D(I,0),we=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ge.setTexture2DArray(I,0),we=L.TEXTURE_2D_ARRAY):(Ge.setTexture2D(I,0),we=L.TEXTURE_2D),_e.activeTexture(L.TEXTURE0),_e.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),_e.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_e.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);let Bt=_e.getParameter(L.UNPACK_ROW_LENGTH),ot=_e.getParameter(L.UNPACK_IMAGE_HEIGHT),on=_e.getParameter(L.UNPACK_SKIP_PIXELS),kt=_e.getParameter(L.UNPACK_SKIP_ROWS),Si=_e.getParameter(L.UNPACK_SKIP_IMAGES);_e.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),_e.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),_e.pixelStorei(L.UNPACK_SKIP_PIXELS,Re),_e.pixelStorei(L.UNPACK_SKIP_ROWS,We),_e.pixelStorei(L.UNPACK_SKIP_IMAGES,nt);let An=y.isDataArrayTexture||y.isData3DTexture,Fn=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let Qe=Ne.get(y),Ft=Ne.get(I),$t=Ne.get(Qe.__renderTarget),Et=Ne.get(Ft.__renderTarget);_e.bindFramebuffer(L.READ_FRAMEBUFFER,$t.__webglFramebuffer),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let wt=0;wt<Me;wt++)An&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.get(y).__webglTexture,k,nt+wt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ne.get(I).__webglTexture,ue,Pt+wt)),L.blitFramebuffer(Re,We,Re+Te,We+ge,Ee,it,Ee+Te,it+ge,L.DEPTH_BUFFER_BIT,L.NEAREST);_e.bindFramebuffer(L.READ_FRAMEBUFFER,null),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||Ne.has(y)){let Qe=Ne.get(y),Ft=Ne.get(I);_e.bindFramebuffer(L.READ_FRAMEBUFFER,P),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,X);for(let $t=0;$t<Me;$t++)An?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Qe.__webglTexture,k,nt+$t):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Qe.__webglTexture,k),Fn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.__webglTexture,ue,Pt+$t):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ft.__webglTexture,ue),k!==0?L.blitFramebuffer(Re,We,Re+Te,We+ge,Ee,it,Ee+Te,it+ge,L.COLOR_BUFFER_BIT,L.NEAREST):Fn?L.copyTexSubImage3D(we,ue,Ee,it,Pt+$t,Re,We,Te,ge):L.copyTexSubImage2D(we,ue,Ee,it,Re,We,Te,ge);_e.bindFramebuffer(L.READ_FRAMEBUFFER,null),_e.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Fn?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(we,ue,Ee,it,Pt,Te,ge,Me,dt,St,mt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(we,ue,Ee,it,Pt,Te,ge,Me,dt,mt.data):L.texSubImage3D(we,ue,Ee,it,Pt,Te,ge,Me,dt,St,mt):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,Ee,it,Te,ge,dt,St,mt.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,Ee,it,mt.width,mt.height,dt,mt.data):L.texSubImage2D(L.TEXTURE_2D,ue,Ee,it,Te,ge,dt,St,mt);_e.pixelStorei(L.UNPACK_ROW_LENGTH,Bt),_e.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),_e.pixelStorei(L.UNPACK_SKIP_PIXELS,on),_e.pixelStorei(L.UNPACK_SKIP_ROWS,kt),_e.pixelStorei(L.UNPACK_SKIP_IMAGES,Si),ue===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&L.generateMipmap(we),_e.unbindTexture()},this.initRenderTarget=function(y){Ne.get(y).__webglFramebuffer===void 0&&Ge.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ge.setTextureCube(y,0):y.isData3DTexture?Ge.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ge.setTexture2DArray(y,0):Ge.setTexture2D(y,0),_e.unbindTexture()},this.resetState=function(){$=0,W=0,oe=null,_e.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var $h={type:"change"},Jl={type:"start"},Qh={type:"end"},Ea=new Pi,jh=new _n,$g=Math.cos(70*Ll.DEG2RAD),Gt=new B,fn=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zl=1e-6,ba=class extends nr{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new xn,this._lastTargetPosition=new B,this._quat=new xn().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ds,this._sphericalDelta=new ds,this._scale=1,this._panOffset=new B,this._rotateStart=new ze,this._rotateEnd=new ze,this._rotateDelta=new ze,this._panStart=new ze,this._panEnd=new ze,this._panDelta=new ze,this._dollyStart=new ze,this._dollyEnd=new ze,this._dollyDelta=new ze,this._dollyDirection=new B,this._mouse=new ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qg.bind(this),this._onPointerDown=jg.bind(this),this._onPointerUp=e0.bind(this),this._onContextMenu=a0.bind(this),this._onMouseWheel=i0.bind(this),this._onKeyDown=s0.bind(this),this._onTouchStart=r0.bind(this),this._onTouchMove=o0.bind(this),this._onMouseDown=t0.bind(this),this._onMouseMove=n0.bind(this),this._interceptControlDown=l0.bind(this),this._interceptControlUp=c0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ht.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($h),this.update(),this.state=ht.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=fn:n>Math.PI&&(n-=fn),s<-Math.PI?s+=fn:s>Math.PI&&(s-=fn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Gt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ea.origin.copy(this.object.position),Ea.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ea.direction))<$g?this.object.lookAt(this.target):(jh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ea.intersectPlane(jh,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zl||this._lastTargetPosition.distanceToSquared(this.target)>Zl?(this.dispatchEvent($h),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fn/60*this.autoRotateSpeed*e:fn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Gt.copy(s).sub(this.target);let r=Gt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function jg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Qg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function e0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qh),this.state=ht.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function t0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ht.DOLLY;break;case gi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ht.ROTATE}break;case gi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Jl)}function n0(i){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function i0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(i.preventDefault(),this.dispatchEvent(Jl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Qh))}function s0(i){this.enabled!==!1&&this._handleKeyDown(i)}function r0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1){this.state=ht.NONE;break}this._handleTouchStartRotate(i),this.state=ht.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1){this.state=ht.NONE;break}this._handleTouchStartPan(i),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ht.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(Jl)}function o0(i){switch(this._trackPointer(i),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ht.NONE}}function a0(i){this.enabled!==!1&&i.preventDefault()}function l0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function c0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eu(){let i={};return i.hullBlack=new Ke({color:1184534,roughness:.38,metalness:.22,side:Fe,name:"Hull_Topsides_Black"}),i.hullRed=new Ke({color:7545626,roughness:.62,metalness:.15,side:Fe,name:"Hull_Bottom_OxideRed"}),i.sheerStrakeWhite=new Ke({color:16118508,roughness:.35,metalness:.1,side:Fe,name:"Sheer_Strake_White"}),i.goldCoveLine=new Ke({color:13214267,roughness:.28,metalness:.78,side:Fe,name:"Gold_Cove_Line"}),i.funnelBuff=new Ke({color:14255151,roughness:.42,metalness:.15,side:Fe,name:"Funnel_WhiteStar_Buff"}),i.funnelBlack=new Ke({color:1381912,roughness:.48,metalness:.25,side:Fe,name:"Funnel_Black_Top"}),i.deckhouseWhite=new Ke({color:16250352,roughness:.32,metalness:.08,side:Fe,name:"Deckhouse_Enamel_White"}),i.teakDeck=new Ke({color:11241304,roughness:.72,metalness:.05,side:Fe,name:"Deck_Teak_Planking"}),i.teakHandrail=new Ke({color:5911830,roughness:.35,metalness:.05,side:Fe,name:"Teak_Handrail"}),i.mastSteel=new Ke({color:14255151,roughness:.48,metalness:.3,side:Fe,name:"Mast_Buff_Steel"}),i.mastTeakPole=new Ke({color:9132587,roughness:.58,metalness:.05,side:Fe,name:"Mast_Teak_Pole"}),i.steelWire=new Ke({color:4013892,roughness:.4,metalness:.85,side:Fe,name:"Rigging_Steel_Wire"}),i.polishedBrass=new Ke({color:14201410,roughness:.22,metalness:.88,side:Fe,name:"Polished_Brass"}),i.manganeseBronze=new Ke({color:9728572,roughness:.3,metalness:.92,side:Fe,name:"Manganese_Bronze"}),i.castIron=new Ke({color:2960946,roughness:.68,metalness:.58,side:Fe,name:"Cast_Iron_Machinery"}),i.polishedSteel=new Ke({color:10791087,roughness:.16,metalness:.96,side:Fe,name:"Machinery_Polished_Steel"}),i.copperPipe=new Ke({color:12542010,roughness:.28,metalness:.84,side:Fe,name:"Copper_Pipe"}),i.boilerSteel=new Ke({color:2368808,roughness:.62,metalness:.62,side:Fe,name:"Boiler_Steel"}),i.glowingCoal=new Ke({color:2230272,emissive:16728064,emissiveIntensity:3.2,roughness:.85,side:Fe,name:"Glowing_Coal_Fire"}),i.englishOak=new Ke({color:7556394,roughness:.42,metalness:.05,side:Fe,name:"English_Oak_Boiserie"}),i.hondurasMahogany=new Ke({color:5054997,roughness:.35,metalness:.05,side:Fe,name:"Honduras_Mahogany"}),i.jacobeanWhite=new Ke({color:15920870,roughness:.38,metalness:.05,side:Fe,name:"Jacobean_White_Paneling"}),i.giltBronze=new Ke({color:13739320,roughness:.26,metalness:.84,side:Fe,name:"Gilt_Bronze_Ornament"}),i.wroughtIron=new Ke({color:1579034,roughness:.48,metalness:.72,side:Fe,name:"Wrought_Iron"}),i.marbleWhite=new Ke({color:15395043,roughness:.22,metalness:.05,side:Fe,name:"Carrara_White_Marble"}),i.turkishTile=new Ke({color:1931400,roughness:.25,metalness:.12,side:Fe,name:"Turkish_Arabesque_Tile"}),i.poolTurquoiseTile=new Ke({color:2277050,roughness:.18,metalness:.15,side:Fe,name:"Pool_Turquoise_Tile"}),i.greenVelvet=new Ke({color:1854763,roughness:.82,metalness:0,side:Fe,name:"Green_Wilton_Velvet"}),i.leatherBurgundy=new Ke({color:4855578,roughness:.52,metalness:.05,side:Fe,name:"Burgundy_Chesterfield_Leather"}),i.glass=new Zs({color:14741759,transparent:!0,opacity:.45,roughness:.08,metalness:.1,transmission:.92,ior:1.52,side:Fe,name:"Glazing_Glass"}),i.stainedGlass=new Ke({color:6724027,emissive:3364215,emissiveIntensity:.7,roughness:.18,transparent:!0,opacity:.88,side:Fe,name:"Stained_Glass_Window"}),i.lifeboatWood=new Ke({color:16118766,roughness:.48,metalness:.05,side:Fe,name:"Lifeboat_White_Wood"}),i.canvasCover=new Ke({color:14406075,roughness:.88,metalness:0,side:Fe,name:"Canvas_Cover"}),i.welinDavitSteel=new Ke({color:2500394,roughness:.52,metalness:.68,side:Fe,name:"Welin_Davit_Steel"}),i.trellisGreen=new Ke({color:2381102,roughness:.65,metalness:.05,side:Fe,name:"Cafe_Parisien_Trellis"}),i.wickerChair=new Ke({color:12559213,roughness:.78,metalness:.02,side:Fe,name:"Wicker_Cane_Furniture"}),i.steeragePine=new Ke({color:12886891,roughness:.68,metalness:.05,side:Fe,name:"Steerage_Pine_Wood"}),i.enamelIron=new Ke({color:14473941,roughness:.45,metalness:.42,side:Fe,name:"Steerage_Enamel_Iron"}),i.corkWall=new Ke({color:7228974,roughness:.92,metalness:0,side:Fe,name:"Marconi_Silent_Cork"}),i.leatherBlack=new Ke({color:1579034,roughness:.55,metalness:.1,side:Fe,name:"Gymnasium_Saddle_Leather"}),i}function tu(i){let e=new Be;e.name="RMS_Titanic_Yard_401";let t=new Be;t.name="Hull_Structure";let n=new Be;n.name="Decks_Superstructure";let s=new Be;s.name="Funnels_Rigging";let r=new Be;r.name="Machinery_Engineering";let o=new Be;o.name="Interiors_Accommodation";let a=new Be;a.name="Fittings_Lifeboats",e.add(t),e.add(n),e.add(s),e.add(r),e.add(o),e.add(a);function l(U){let C=U-130;return C>0?2.8*Math.pow(C/(263.85-130),2.1):1.4*Math.pow(-C/(130- -5.21),2)}function c(U,C){if(U<-5.21||U>263.85||C<0)return 0;let se=14.02,Ue=1;if(U>165){let st=(U-165)/98.85000000000002;Ue=Math.max(0,1-(1.1*st*st-.1*st*st*st))}else if(U<95){let st=(95-U)/100.21;Ue=Math.max(0,1-(1.05*Math.pow(st,1.8)-.05*st*st*st))}let ke=se*Math.sqrt(Math.max(0,Math.min(1,Ue)));if(C<=.2)return Math.min(ke,.45*(C/.2));let lt=1;if(C<3.5?lt=Math.pow(C/3.5,.35):C>18.5&&(lt=1-.015*((C-18.5)/10)),U>220&&C>10.54){let st=(U-220)/43.85000000000002,gt=(C-10.54)/15;return Math.min(se,ke*lt+1.8*st*Math.max(0,gt))}return U<10&&C<6?ke*Math.max(.1,C/6)*.4:Math.max(0,ke*lt)}let h=50,m=20,u=[];for(let U=0;U<=h;U++){let C=U/h;u.push(-5.21+(263.85- -5.21)*(.5-.5*Math.cos(C*Math.PI)))}let p=[],_=[],v=[],f=[],d=[],M=[];for(let U=0;U<h;U++){let C=u[U],se=u[U+1],Ue=l(C),ke=l(se),lt=18.5+Ue,st=18.5+ke;C>=30&&C<=198&&(lt=21.65+Ue*.2),se>=30&&se<=198&&(st=21.65+ke*.2),C>225&&(lt=22.85+Ue),se>225&&(st=22.85+ke),C<26&&(lt=22.85+Ue),se<26&&(st=22.85+ke);for(let gt=0;gt<m;gt++){let It=gt/m,Vt=(gt+1)/m,kn=It*lt,ki=Vt*lt,Ei=It*st,Vi=Vt*st,br=c(C,kn),ic=c(C,ki),sc=c(se,Ei),Tr=c(se,Vi),Ca=(kn+ki+Ei+Vi)/4,wr=Ca<10.54?p:f,Ar=Ca<10.54?_:d,Rr=Ca<10.54?v:M;wr.push(br,kn,C,sc,Ei,se,Tr,Vi,se),wr.push(br,kn,C,Tr,Vi,se,ic,ki,C),Ar.push(1,0,0,1,0,0,1,0,0),Ar.push(1,0,0,1,0,0,1,0,0),Rr.push(It,C/270,It,se/270,Vt,se/270),Rr.push(It,C/270,Vt,se/270,Vt,C/270),wr.push(-br,kn,C,-ic,ki,C,-Tr,Vi,se),wr.push(-br,kn,C,-Tr,Vi,se,-sc,Ei,se),Ar.push(-1,0,0,-1,0,0,-1,0,0),Ar.push(-1,0,0,-1,0,0,-1,0,0),Rr.push(It,C/270,Vt,C/270,Vt,se/270),Rr.push(It,C/270,Vt,se/270,It,se/270)}}let A=new Zt;A.setAttribute("position",new _t(p,3)),A.setAttribute("normal",new _t(_,3)),A.setAttribute("uv",new _t(v,2)),A.computeVertexNormals();let E=new Zt;E.setAttribute("position",new _t(f,3)),E.setAttribute("normal",new _t(d,3)),E.setAttribute("uv",new _t(M,2)),E.computeVertexNormals();let w=new N(A,i.hullRed),T=new N(E,i.hullBlack);t.add(w),t.add(T);for(let U of[-1,1]){let C=new N(new pe(.15,.45,260),i.sheerStrakeWhite);C.position.set(U*13.95,18.8,128),t.add(C)}for(let U of[-1,1]){let C=new N(new pe(.64,.1,91.4),i.castIron);C.position.set(U*13.2,2.2,130),C.rotation.z=U*(Math.PI/4),t.add(C)}let g=new N(new pe(.9,.4,258),i.castIron);g.position.set(0,.2,126),t.add(g);let S=new Be;S.position.set(0,8.2,-.5);let O=new N(new pe(.8,15.5,4.5),i.castIron);O.position.set(0,0,-2.25),S.add(O),t.add(S);let D=new Be;D.position.set(0,3.6,4.5);let F=new N(new De(.8,.8,1.8,16),i.manganeseBronze);F.rotation.x=Math.PI/2,D.add(F);for(let U=0;U<3;U++){let C=new N(new pe(.2,2.2,.8),i.manganeseBronze);C.position.y=1.3,C.rotation.x=.4;let se=new Be;se.rotation.z=U*2*Math.PI/3,se.add(C),D.add(se)}t.add(D);function G(U){let C=new Be,se=U?8.8:-8.8;C.position.set(se,4.5,14.5);let Ue=new N(new De(1.1,1.1,2.2,16),i.manganeseBronze);Ue.rotation.x=Math.PI/2,C.add(Ue);for(let lt=0;lt<3;lt++){let st=new N(new pe(.25,3.2,1.1),i.manganeseBronze);st.position.y=1.8,st.rotation.x=U?.45:-.45;let gt=new Be;gt.rotation.z=lt*2*Math.PI/3,gt.add(st),C.add(gt)}let ke=new N(new De(.4,.4,6,12),i.castIron);return ke.position.set(U?-2.2:2.2,1.8,1),ke.rotation.z=U?-.5:.5,C.add(ke),C}let q=G(!0),P=G(!1);t.add(q),t.add(P);let X=[{id:"A",z:245,top:18.5,hasDoor:!1},{id:"B",z:228,top:15.3,hasDoor:!1},{id:"C",z:207,top:12.4,hasDoor:!1},{id:"D",z:186,top:12.4,hasDoor:!0},{id:"E",z:168,top:12.4,hasDoor:!0},{id:"F",z:149,top:12.4,hasDoor:!0},{id:"G",z:130,top:12.4,hasDoor:!0},{id:"H",z:111,top:12.4,hasDoor:!0},{id:"J",z:92,top:12.4,hasDoor:!0},{id:"K",z:75,top:15.3,hasDoor:!0},{id:"L",z:52,top:15.3,hasDoor:!0},{id:"M",z:35,top:15.3,hasDoor:!0},{id:"N",z:20,top:15.3,hasDoor:!0},{id:"O",z:8,top:15.3,hasDoor:!0},{id:"P",z:-2,top:15.3,hasDoor:!1}],$=[];X.forEach(U=>{let C=Math.min(27.5,c(U.z,8)*2),se=U.top-1.6,Ue=new N(new pe(C,se,.4),i.boilerSteel);if(Ue.position.set(0,1.6+se/2,U.z),t.add(Ue),U.hasDoor){let ke=new N(new pe(2.4,2.8,.5),i.castIron);ke.position.set(0,1.6+1.4,U.z),t.add(ke);let lt=new N(new pe(1.8,2.4,.15),i.castIron);lt.position.set(0,1.6+1.2,U.z),t.add(lt);let st=new N(new De(.15,.15,1.2,8),i.polishedBrass);st.position.set(.6,1.6+3.2,U.z+.2),t.add(st),$.push({id:`WTD-${U.id}`,bulkhead:U.id,mesh:lt,openY:1.6+1.2,closedY:1.6-1,position:1})}});let W=new N(new pe(26.5,.3,230),i.castIron);W.position.set(0,1.6,124),t.add(W);let oe=new N(new pe(27.8,.4,260),i.teakDeck);oe.position.set(0,18.5,126),n.add(oe);let J=new N(new pe(19,.4,38),i.teakDeck);J.position.set(0,21.65,244),n.add(J);for(let U of[-1,1]){let C=new N(new pe(.3,1.2,9),i.boilerSteel);C.position.set(U*4.5,22.25,236),C.rotation.y=U*.6,n.add(C)}let ne=new N(new pe(21,.4,31),i.teakDeck);ne.position.set(0,21.65,10),n.add(ne);let ie=new N(new pe(27,.4,168),i.teakDeck);ie.position.set(0,21.65,114),n.add(ie);for(let U of[-1,1]){let C=new N(new pe(.3,2.75,168),i.deckhouseWhite);C.position.set(U*13.35,23.02,114),n.add(C);for(let se=35;se<195;se+=3.2){let Ue=new N(new pe(.4,1.1,1.3),i.stainedGlass);Ue.position.set(U*13.35,23.3,se),n.add(Ue)}}let Ae=new N(new pe(26.2,.4,152),i.teakDeck);Ae.position.set(0,24.4,118),n.add(Ae);for(let U of[-1,1]){let C=new N(new pe(.3,2.7,145),i.deckhouseWhite);C.position.set(U*10.2,25.75,116),n.add(C)}for(let U of[-1,1]){let C=new N(new pe(.25,2.7,58.5),i.deckhouseWhite);C.position.set(U*12.95,25.75,164),n.add(C);for(let se=136;se<192;se+=2.8){let Ue=new N(new pe(.35,1.4,1.6),i.glass);Ue.position.set(U*12.95,26.1,se),n.add(Ue)}}let Ve=new N(new pe(25,.4,150),i.teakDeck);Ve.position.set(0,27.3,120),n.add(Ve);let ee=new N(new pe(29.4,.3,8),i.teakDeck);ee.position.set(0,27.45,194),n.add(ee);let ye=new N(new pe(8,3,7),i.deckhouseWhite);ye.position.set(0,28.9,193.5),n.add(ye);let be=new N(new pe(16,2.8,22),i.deckhouseWhite);be.position.set(0,28.7,179),n.add(be);let Le=new N(new pe(8,2.8,12),i.deckhouseWhite);Le.position.set(7.5,28.7,164),n.add(Le);let ve=new N(new pe(5,.2,5),i.teakDeck);ve.position.set(0,30.5,134),n.add(ve);let qe=new N(new De(.3,.4,1.2,12),i.polishedBrass);qe.position.set(0,31.2,134),n.add(qe),[{z:175.5,dummy:!1},{z:148,dummy:!1},{z:120.5,dummy:!1},{z:93,dummy:!0}].forEach((U,C)=>{let se=new Be;se.position.set(0,27.5,U.z),se.rotation.x=Math.atan(1/12);let Ue=new De(2.9,2.9,19.5,24);Ue.scale(1,1,1.28);let ke=new N(Ue,i.funnelBuff);ke.position.y=9.75,se.add(ke);let lt=new De(2.88,2.88,6.5,24);lt.scale(1,1,1.28);let st=new N(lt,i.funnelBlack);st.position.y=22.75,se.add(st);let gt=new N(new De(.18,.18,25,8),i.copperPipe);if(gt.position.set(1.6,12.5,3.4),se.add(gt),C<2){let It=new N(new De(.12,.15,1.8,8),i.polishedBrass);It.position.set(0,20,3.8),se.add(It)}for(let It of[-1,1]){let Vt=new N(new De(.04,.04,28,6),i.steelWire);Vt.position.set(It*8.5,12,0),Vt.rotation.z=It*.45,se.add(Vt)}s.add(se)});let Ie=new Be;Ie.position.set(0,18.5,215),Ie.rotation.x=.07;let ct=new N(new De(.45,.6,32,16),i.mastSteel);ct.position.y=16,Ie.add(ct);let ut=new N(new De(.2,.4,18,12),i.mastTeakPole);ut.position.y=41,Ie.add(ut);let tt=new N(new De(1,.8,1.6,12),i.boilerSteel);tt.position.set(0,21,.6),Ie.add(tt),s.add(Ie);let Rt=new Be;Rt.position.set(0,18.5,32),Rt.rotation.x=.07;let Dt=new N(new De(.42,.58,30,16),i.mastSteel);Dt.position.y=15,Rt.add(Dt);let qt=new N(new De(.18,.38,18,12),i.mastTeakPole);qt.position.y=39,Rt.add(qt),s.add(Rt);let xt=new N(new De(.02,.02,180,4),i.steelWire);xt.position.set(0,58,124),xt.rotation.x=Math.PI/2,s.add(xt),[{z:195,type:"cutter",swungOut:!0},{z:180,type:"standard"},{z:168,type:"standard"},{z:156,type:"standard"},{z:105,type:"standard"},{z:93,type:"standard"},{z:81,type:"standard"},{z:69,type:"standard"}].forEach(U=>{for(let C of[-1,1]){let se=new Be,Ue=C*(U.swungOut?14.8:11.8);se.position.set(Ue,28.5,U.z);let ke=U.type==="cutter"?7.6:9.14,lt=new N(new pe(2.7,1.3,ke),i.lifeboatWood);se.add(lt);let st=new N(new pe(2.65,.4,ke-.2),i.canvasCover);st.position.y=.7,se.add(st);for(let gt of[-ke/2-.4,ke/2+.4]){let It=new N(new De(.12,.16,3.2,8),i.welinDavitSteel);It.position.set(-C*.8,.4,gt),It.rotation.z=C*(U.swungOut?-.5:-.2),se.add(It)}a.add(se)}});for(let U of[-1,1]){let C=new N(new pe(2.4,.6,8.3),i.canvasCover);C.position.set(U*8.8,27.8,190),a.add(C)}for(let U of[-1,1]){let C=new N(new pe(2.4,.6,8.3),i.canvasCover);C.position.set(U*5.5,30.2,185),a.add(C)}for(let U of[-1,1]){let C=new N(new pe(.8,2.5,1.4),i.castIron);C.position.set(U*4.2,17.5,256),a.add(C)}let Nt=new N(new pe(1.6,1.2,3.8),i.castIron);Nt.position.set(0,22.4,252),a.add(Nt);let pt=new Be;pt.position.set(0,18.5,166);let nn=new N(new je(16,9.5),i.englishOak);nn.position.set(0,4.75,-6),pt.add(nn);let Jt=new N(new je(16,9.5),i.englishOak);Jt.position.set(0,4.75,6),Jt.rotation.y=Math.PI,pt.add(Jt);let L=new N(new je(12,9.5),i.englishOak);L.position.set(8,4.75,0),L.rotation.y=-Math.PI/2,pt.add(L);let Kt=new N(new je(12,9.5),i.englishOak);Kt.position.set(-8,4.75,0),Kt.rotation.y=Math.PI/2,pt.add(Kt);for(let U of[0,3.15,5.9]){let C=new N(new pe(15.8,.2,2.5),i.englishOak);C.position.set(0,U,4.75),pt.add(C)}for(let U=-1;U<=1;U+=2){let C=new N(new pe(2.4,.2,5.2),i.englishOak);C.position.set(U*4.2,1.6,.5),C.rotation.x=-.52,C.rotation.y=U*.15,pt.add(C);let se=new N(new pe(.12,.9,5.2),i.wroughtIron);se.position.set(U*(4.2-1.1),2.1,.5),se.rotation.x=-.52,pt.add(se)}let yt=new N(new pe(4.2,2.8,.35),i.englishOak);yt.position.set(0,6.2,5.8),pt.add(yt);let Mt=new De(1.6,1.6,.35,16,1,!1,0,Math.PI),_e=new N(Mt,i.englishOak);_e.rotation.z=Math.PI/2,_e.rotation.y=Math.PI/2,_e.position.set(0,7.6,5.8),pt.add(_e);let Ct=new N(new De(.45,.45,.1,24),i.polishedBrass);Ct.rotation.x=Math.PI/2,Ct.position.set(0,6.4,5.6),pt.add(Ct);for(let U of[-1.15,1.15]){let C=new N(new pe(.7,1.6,.25),i.giltBronze);C.position.set(U,6.2,5.65),pt.add(C)}let Ne=new N(new Ii(4.8,16,12,0,Math.PI*2,0,Math.PI/2),i.stainedGlass);Ne.position.set(0,9.2,0),pt.add(Ne);let Ge=new N(new De(.1,1.2,1.2,12),i.giltBronze);Ge.position.set(0,8.4,0),pt.add(Ge);let b=new vt(16772829,3.8,25);b.position.set(0,8.2,0),pt.add(b),o.add(pt);let x=new Be;x.position.set(0,15.3,139);let z=new N(new je(26,32),i.teakDeck);z.rotation.x=-Math.PI/2,x.add(z);let re=new N(new je(26,32),i.jacobeanWhite);re.position.y=3,re.rotation.x=Math.PI/2,x.add(re);for(let U of[-1,1]){let C=new N(new je(32,3),i.jacobeanWhite);C.position.set(U*13,1.5,0),C.rotation.y=U*(-Math.PI/2),x.add(C);for(let se=-12;se<=12;se+=4.5){let Ue=new N(new pe(.2,1.4,2),i.stainedGlass);Ue.position.set(U*12.9,1.6,se),x.add(Ue)}}for(let U of[-6,6])for(let C of[-10,-3,4,11]){let se=new N(new De(.3,.35,3,12),i.jacobeanWhite);se.position.set(U,1.5,C),x.add(se)}for(let U of[-8,0,8])for(let C of[-9,0,9]){let se=new N(new De(1.2,1.2,.75,16),i.jacobeanWhite);se.position.set(U,.38,C),x.add(se);for(let Ue=0;Ue<4;Ue++){let ke=new N(new pe(.5,.85,.5),i.greenVelvet),lt=Ue*Math.PI/2;ke.position.set(U+1.5*Math.cos(lt),.45,C+1.5*Math.sin(lt)),x.add(ke)}}for(let U of[-15,15]){let C=new N(new je(26,3),i.jacobeanWhite);C.position.set(0,1.5,U),U>0&&(C.rotation.y=Math.PI),x.add(C)}for(let U of[-10,-3,4,11]){let C=new vt(16775917,3.2,22);C.position.set(0,2.5,U),x.add(C)}o.add(x);let K=new Be;K.position.set(0,24.4,82);let de=new N(new je(18,18),i.hondurasMahogany);de.rotation.x=-Math.PI/2,K.add(de);let me=new N(new je(18,18),i.hondurasMahogany);me.position.y=2.8,me.rotation.x=Math.PI/2,K.add(me);for(let U of[-1,1]){let C=new N(new je(18,2.8),i.hondurasMahogany);C.position.set(U*9,1.4,0),C.rotation.y=U*(-Math.PI/2),K.add(C)}let j=new N(new je(18,2.8),i.hondurasMahogany);j.position.set(0,1.4,-9),K.add(j);let Q=new N(new je(18,2.8),i.hondurasMahogany);Q.position.set(0,1.4,9),Q.rotation.y=Math.PI,K.add(Q);for(let U of[-5,2]){let C=new vt(16767144,3.2,18);C.position.set(0,2.2,U),K.add(C)}let fe=new N(new pe(3.2,2.1,.8),i.marbleWhite);fe.position.set(0,1.05,-8.5),K.add(fe);let R=new N(new pe(1.6,.6,.5),i.glowingCoal);R.position.set(0,.35,-8.3),K.add(R);let te=new N(new pe(2.4,1.4,.1),i.giltBronze);te.position.set(0,2.1,-8.05),K.add(te);for(let U of[-4.5,4.5]){let C=new N(new pe(2.6,.8,1.1),i.leatherBurgundy);C.position.set(U,.4,-3),K.add(C)}let Z=new vt(16767144,3.2,25);Z.position.set(0,2.4,-2),K.add(Z),o.add(K);let ae=new Be;ae.position.set(6.5,9.8,156);let ce=new N(new je(16,16),i.turkishTile);ce.rotation.x=-Math.PI/2,ae.add(ce);let he=new N(new je(16,16),i.jacobeanWhite);he.position.y=2.6,he.rotation.x=Math.PI/2,ae.add(he);let Ce=new N(new je(16,2.6),i.turkishTile);Ce.position.set(7.5,1.3,0),Ce.rotation.y=-Math.PI/2,ae.add(Ce);let Ze=new N(new je(16,2.6),i.turkishTile);Ze.position.set(-7.5,1.3,0),Ze.rotation.y=Math.PI/2,ae.add(Ze);for(let U of[-8,8]){let C=new N(new je(15,2.6),i.turkishTile);C.position.set(0,1.3,U),U>0&&(C.rotation.y=Math.PI),ae.add(C)}let le=new N(new pe(4.2,1.8,9.1),i.poolTurquoiseTile);le.position.set(-2,-.6,0),ae.add(le);let Pe=new N(new pe(4,.1,8.9),i.glass);Pe.position.set(-2,.1,0),ae.add(Pe);let Je=new vt(2277050,4.2,25);Je.position.set(-2,2,0),ae.add(Je);let xe=new vt(16771232,4.5,22);xe.position.set(2.5,2.2,0),ae.add(xe),o.add(ae);let $e=new Be;$e.position.set(8.5,21.65,68);let Ut=new N(new je(8,18),i.linoleumTile);Ut.rotation.x=-Math.PI/2,$e.add(Ut);let Mn=new N(new je(8,18),i.deckhouseWhite);Mn.position.y=2.75,Mn.rotation.x=Math.PI/2,$e.add(Mn);let Oi=new N(new je(18,2.75),i.trellisGreen);Oi.position.set(-4,1.375,0),Oi.rotation.y=Math.PI/2,$e.add(Oi);for(let U=-8;U<=8;U+=1.2){let C=new N(new pe(.04,2.7,.04),i.deckhouseWhite);C.position.set(-3.95,1.35,U),$e.add(C)}for(let U=.35;U<=2.65;U+=.45){let C=new N(new pe(.04,.04,17.5),i.deckhouseWhite);C.position.set(-3.95,U,0),$e.add(C)}for(let U of[-9,9]){let C=new N(new je(8,2.75),i.deckhouseWhite);C.position.set(0,1.375,U),U>0&&(C.rotation.y=Math.PI),$e.add(C)}for(let U=-7.5;U<=7.5;U+=2.5){let C=new N(new pe(.2,1.8,1.6),i.glass);C.position.set(3.9,1.5,U),$e.add(C);let se=new N(new pe(.25,1.9,1.7),i.deckhouseWhite);se.position.set(3.9,1.5,U),$e.add(se)}for(let U=-6;U<=6;U+=3){let C=new N(new De(.55,.55,.72,16),i.wickerChair);C.position.set(0,.36,U),$e.add(C);for(let se=0;se<4;se++){let Ue=new Be,ke=se*Math.PI/2;Ue.position.set(1*Math.cos(ke),0,U+1*Math.sin(ke)),Ue.rotation.y=-ke-Math.PI/2;let lt=new N(new pe(.42,.05,.38),i.wickerChair);lt.position.y=.42,Ue.add(lt);let st=new N(new pe(.42,.45,.05),i.wickerChair);st.position.set(0,.65,-.16),Ue.add(st);for(let gt of[-.16,.16])for(let It of[-.14,.14]){let Vt=new N(new De(.02,.02,.42,8),i.wickerChair);Vt.position.set(gt,.21,It),Ue.add(Vt)}$e.add(Ue)}}for(let U of[-5,0,5]){let C=new vt(16774630,3.2,16);C.position.set(-1,2.3,U),$e.add(C)}o.add($e);let sn=new Be;sn.position.set(9,27.3,142);let yr=new N(new je(7.5,12),i.teakDeck);yr.rotation.x=-Math.PI/2,sn.add(yr);let Bi=new N(new je(7.5,12),i.deckhouseWhite);Bi.position.y=2.9,Bi.rotation.x=Math.PI/2,sn.add(Bi);let Hi=new N(new je(12,2.9),i.deckhouseWhite);Hi.position.set(-3.75,1.45,0),Hi.rotation.y=Math.PI/2,sn.add(Hi);for(let U=.3;U<=2.6;U+=.25){let C=new N(new De(.03,.03,6,8),i.teakHandrail);C.rotation.z=Math.PI/2,C.position.set(-3.65,U,-2),sn.add(C)}for(let U of[1.5,3.2]){let C=new Be;C.position.set(1.5,0,U);let se=new N(new De(.04,.04,.9,8),i.castIron);se.position.y=.45,C.add(se);let Ue=new N(new pe(.3,.1,.25),i.leatherBlack);Ue.position.set(0,.85,0),C.add(Ue);let ke=new N(new De(.32,.32,.08,16),i.polishedBrass);ke.rotation.x=Math.PI/2,ke.position.set(0,1.15,.4),C.add(ke),sn.add(C)}let Sn=new Be;Sn.position.set(-1,0,-2.5);let zi=new N(new pe(.6,.12,2.4),i.castIron);zi.position.y=.06,Sn.add(zi);let ys=new N(new pe(.4,.1,.35),i.teakHandrail);ys.position.set(0,.18,0),Sn.add(ys),sn.add(Sn);let vi=new Be;vi.position.set(1.5,0,-2.5);let Mi=new N(new pe(.7,.8,1.3),i.castIron);Mi.position.y=.6,vi.add(Mi);let vs=new N(new pe(.5,.25,.6),i.leatherBlack);vs.position.set(0,1.1,0),vi.add(vs),sn.add(vi);let Ms=new N(new De(.25,.25,.9,12),i.leatherBurgundy);Ms.position.set(-1.5,1.8,2.5),sn.add(Ms);let ii=new vt(16775920,3.8,20);ii.position.set(0,2.6,0),sn.add(ii),o.add(sn);let rn=new Be;rn.position.set(-3.5,27.3,157);let Ss=new N(new je(6.5,7.5),i.teakDeck);Ss.rotation.x=-Math.PI/2,rn.add(Ss);let Es=new N(new pe(1,.76,3.2),i.hondurasMahogany);Es.position.set(-2,.38,0),rn.add(Es);for(let U of[-.6,.6]){let C=new N(new pe(.12,.04,.22),i.castIron);C.position.set(-2,.78,U),rn.add(C);let se=new N(new pe(.04,.03,.18),i.morseBrass);se.position.set(-2,.81,U),rn.add(se)}let vr=new N(new pe(.35,.28,.6),i.hondurasMahogany);vr.position.set(-2,.9,0),rn.add(vr);for(let U of[-.18,.18]){let C=new N(new De(.1,.1,.04,16),i.morseBrass);C.rotation.z=Math.PI/2,C.position.set(-1.82,.92,U),rn.add(C)}let Mr=new N(new pe(.6,1.4,2.2),i.teakHandrail);Mr.position.set(-2,1.2,2.2),rn.add(Mr);let Sr=new N(new pe(3,2.8,.2),i.corkWall);Sr.position.set(1.5,1.4,0),rn.add(Sr);let Gi=new N(new De(.4,.4,1.2,16),i.castIron);Gi.rotation.x=Math.PI/2,Gi.position.set(2.2,.5,0),rn.add(Gi);let y=new N(new De(.5,.5,.35,16),i.morseBrass);y.rotation.z=Math.PI/2,y.position.set(2.2,.5,1),rn.add(y);let I=new vt(16770229,3.2,18);I.position.set(-1,2.5,0),rn.add(I),o.add(rn);let V=new Be;V.position.set(0,27.3,204);let H=new N(new je(12,7),i.teakDeck);H.rotation.x=-Math.PI/2,V.add(H);let k=new N(new De(.22,.26,1.15,16),i.polishedBrass);k.position.set(0,.58,1.5),V.add(k);let ue=new Be;ue.position.set(0,1.1,1.32);let Te=new N(new Ys(.75,.05,8,24),i.teakHandrail);ue.add(Te);let ge=new N(new De(.12,.12,.08,12),i.polishedBrass);ge.rotation.x=Math.PI/2,ue.add(ge);for(let U=0;U<8;U++){let C=new N(new De(.025,.025,1.5,8),i.teakHandrail);C.rotation.z=U*Math.PI/4,ue.add(C)}V.add(ue);let Me=new N(new De(.3,.35,1.25,16),i.teakHandrail);Me.position.set(0,.62,2.6),V.add(Me);let Re=new N(new Ii(.28,12,8,0,Math.PI*2,0,Math.PI/2),i.polishedBrass);Re.position.set(0,1.25,2.6),V.add(Re);for(let U of[-1,1]){let C=new N(new Ii(.14,12,12),i.castIron);C.position.set(U*.45,1.1,2.6),V.add(C)}let We=new N(new pe(2.4,.85,1.2),i.hondurasMahogany);We.position.set(0,.42,-2),V.add(We);let nt=new vt(16773341,3.5,20);nt.position.set(0,2.6,0),V.add(nt),o.add(V);let Ee=new Be;Ee.position.set(0,9.8,198);let it=new N(new je(16,16),i.linoleumTile);it.rotation.x=-Math.PI/2,Ee.add(it);for(let U of[-1,1]){let C=new N(new je(16,2.6),i.enamelIron);C.position.set(U*8,1.3,0),C.rotation.y=U*(-Math.PI/2),Ee.add(C)}for(let U of[-5,0,5])for(let C of[-4.5,4.5]){let se=new N(new pe(1.6,.74,5.5),i.steeragePine);se.position.set(U,.37,C),Ee.add(se);for(let Ue of[-.65,.65]){let ke=new N(new pe(.35,.45,5.5),i.steeragePine);ke.position.set(U+Ue,.22,C),Ee.add(ke)}}let Pt=new N(new pe(1.4,1.2,.6),i.hondurasMahogany);Pt.position.set(-6.5,.6,-6.5),Ee.add(Pt);let mt=new vt(16775914,3.2,22);mt.position.set(0,2.4,-4),Ee.add(mt);let dt=new vt(16775914,3.2,22);dt.position.set(0,2.4,4),Ee.add(dt),o.add(Ee);let St=new Be;St.position.set(-2.8,12.4,132.5);let we=new N(new je(2.6,95),i.castIron);we.rotation.x=-Math.PI/2,St.add(we);let Bt=new N(new je(2.6,95),i.enamelIron);Bt.position.y=2.9,Bt.rotation.x=Math.PI/2,St.add(Bt);for(let U of[-1.3,1.3]){let C=new N(new je(95,2.9),i.enamelIron);C.position.set(U,1.45,0),C.rotation.y=U>0?-Math.PI/2:Math.PI/2,St.add(C)}for(let U=-35;U<=35;U+=17.5){let C=new N(new pe(2.6,.4,.25),i.castIron);C.position.set(0,2.7,U),St.add(C);let se=new N(new pe(.2,2.5,.25),i.castIron);se.position.set(1.2,1.25,U),St.add(se)}for(let U of[-.8,-.3,.3,.8]){let C=new N(new De(.07,.07,95,8),i.copperPipe);C.position.set(U,2.65,0),C.rotation.x=Math.PI/2,St.add(C)}for(let U=-40;U<=40;U+=15){let C=new vt(16772829,3.2,18);C.position.set(0,2.4,U),St.add(C)}o.add(St);let ot=new Be;ot.position.set(-1.5,12.4,176.5);for(let U of[-1.8,0,1.8]){let C=new N(new pe(1.6,15,1.6),i.wroughtIron);C.position.set(U,7.5,0),ot.add(C)}let on=new Be;on.position.set(0,0,0);let kt=new N(new pe(1.5,.1,1.5),i.hondurasMahogany);on.add(kt);let Si=new N(new pe(1.5,.1,1.5),i.jacobeanWhite);Si.position.y=2.4,on.add(Si);let An=new N(new pe(1.5,2.4,1.5),i.wroughtIron);An.position.y=1.2,on.add(An);let Fn=new vt(16775916,2.5,8);Fn.position.set(0,2.2,0),on.add(Fn),ot.add(on),o.add(ot);let Qe=new Be;Qe.position.set(0,15.3,14);let Ft=new N(new De(.3,.3,3.2,16),i.castIron);Ft.position.set(0,1.6,-1.5),Qe.add(Ft);let $t=new N(new De(1.8,1.8,.35,16,1,!1,-Math.PI/3,2*Math.PI/3),i.castIron);$t.rotation.x=Math.PI/2,$t.position.set(0,2.2,-1.5),Qe.add($t);for(let U of[-1,1]){let C=new N(new pe(1.2,1.8,2.2),i.castIron);C.position.set(U*2.8,.9,.5),Qe.add(C)}let Et=new vt(16769720,3,18);Et.position.set(0,2.6,0),Qe.add(Et),o.add(Qe);let wt=new Be;wt.position.set(0,1.6,177);let En=new N(new je(24,18),i.castIron);En.rotation.x=-Math.PI/2,wt.add(En);for(let U=0;U<4;U++){let C=(U-1.5)*5.4,se=new Be;se.position.set(C,2.6,0);let Ue=new N(new De(2.4,2.4,6.1,16),i.boilerSteel);Ue.rotation.x=Math.PI/2,se.add(Ue);for(let ke of[-3.1,3.1])for(let lt of[-1.2,0,1.2]){let st=new N(new De(.65,.65,.15,12),i.castIron);st.rotation.x=Math.PI/2,st.position.set(lt,-1,ke),se.add(st);let gt=new N(new De(.48,.48,.08,12),i.glowingCoal);gt.rotation.x=Math.PI/2,gt.position.set(lt,-1,ke+(ke>0?.05:-.05)),se.add(gt)}wt.add(se)}let bs=new vt(16729344,4.5,30);bs.position.set(0,3.2,0),wt.add(bs),r.add(wt);let Aa={portCrank:null,stbdCrank:null};function jl(U){let C=new Be,se=U?4.8:-4.8;C.position.set(se,1.98,63.5);let Ue=new N(new pe(6.2,1.2,18),i.castIron);Ue.position.y=.6,C.add(Ue);let ke=new Be;ke.position.set(0,1.4,0);let lt=new N(new De(.5,.5,17.5,16),i.polishedSteel);return lt.rotation.x=Math.PI/2,ke.add(lt),C.add(ke),U?Aa.stbdCrank=ke:Aa.portCrank=ke,[{name:"HP",dia:1.37,z:6},{name:"IP",dia:2.13,z:2},{name:"LP1",dia:2.46,z:-2},{name:"LP2",dia:2.46,z:-6}].forEach(gt=>{let It=new N(new De(gt.dia/2,gt.dia/2,2.5,16),i.castIron);It.position.set(0,10.5,gt.z),C.add(It);for(let ki of[-2.2,2.2]){let Ei=new N(new De(.25,.35,8.5,10),i.castIron);Ei.position.set(ki,5.5,gt.z),C.add(Ei)}let Vt=new N(new De(.18,.22,6.5,8),i.polishedSteel);Vt.position.set(0,5.5,gt.z),C.add(Vt);let kn=new N(new pe(.5,.4,.3),i.polishedBrass);kn.position.set(0,8.2,gt.z+(U?-1.1:1.1)),C.add(kn)}),C}let fu=jl(!0),pu=jl(!1);r.add(fu),r.add(pu);let Ql=new N(new pe(2.2,.12,17.5),i.castIron);Ql.position.set(0,5.4,63.5),r.add(Ql);for(let U of[-1.05,1.05]){let C=new N(new De(.025,.025,17.5,8),i.polishedBrass);C.position.set(U,6.4,63.5),C.rotation.x=Math.PI/2,r.add(C)}let ec=new vt(16775917,4.5,45);ec.position.set(0,11.5,63.5),r.add(ec);let tc=new vt(16772304,4,35);tc.position.set(0,5.2,63.5),r.add(tc);let Ts=new Be;Ts.position.set(0,1.6,43.5);let Ra=new N(new De(2.4,2.4,9.5,20),i.castIron);Ra.rotation.x=Math.PI/2,Ra.position.y=2.6,Ts.add(Ra);for(let U of[-1,1]){let C=new N(new De(.85,.85,8,12),i.copperPipe);C.position.set(U*2.8,5.2,5),C.rotation.x=.5,Ts.add(C);let se=new N(new De(1.8,1.8,7.5,16),i.boilerSteel);se.rotation.x=Math.PI/2,se.position.set(U*7.5,2.4,0),Ts.add(se)}r.add(Ts);let Er=new Be;Er.position.set(0,1.6,27.5);for(let U=0;U<4;U++){let C=new Be;C.position.set((U-1.5)*4.2,0,0);let se=new N(new pe(1.8,3.2,2.2),i.castIron);se.position.y=1.6,C.add(se);let Ue=new N(new De(1.2,1.2,2,16),i.castIron);Ue.rotation.x=Math.PI/2,Ue.position.set(0,1.4,2),C.add(Ue),Er.add(C)}let nc=new N(new pe(14,2.8,.4),i.castIron);return nc.position.set(0,2.2,-5.5),Er.add(nc),r.add(Er),{shipGroup:e,hullGroup:t,decksGroup:n,funnelsGroup:s,machineryGroup:r,interiorsGroup:o,fittingsGroup:a,animatedDoors:$,centrePropGroup:D,portPropGroup:P,stbdPropGroup:q,recipEnginePivots:Aa,rudderGroup:S,wheelPivot:ue,elevatorCar:on,quadrantTiller:$t}}function nu(i){let n=new je(1200,1200,160,160);n.rotateX(-Math.PI/2);let s=new un({uniforms:{uTime:{value:0},uSpeed:{value:0},uDeepColor:{value:new He(662314)},uSurfaceColor:{value:new He(1721952)},uFoamColor:{value:new He(14544639)},uSunDirection:{value:new B(.5,.8,.3).normalize()}},vertexShader:`
      uniform float uTime;
      uniform float uSpeed;
      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying float vWaveHeight;

      // Gerstner Wave Function
      vec3 gerstnerWave(vec4 wave, vec3 p, inout vec3 tangent, inout vec3 binormal) {
        float steepness = wave.z;
        float wavelength = wave.w;
        float k = 2.0 * 3.14159 / wavelength;
        float c = sqrt(9.8 / k);
        vec2 d = normalize(wave.xy);
        float f = k * (dot(d, p.xz) - c * uTime * 0.8);
        float a = steepness / k;

        tangent += vec3(
          -d.x * d.x * (steepness * sin(f)),
          d.x * (steepness * cos(f)),
          -d.x * d.y * (steepness * sin(f))
        );
        binormal += vec3(
          -d.x * d.y * (steepness * sin(f)),
          d.y * (steepness * cos(f)),
          -d.y * d.y * (steepness * sin(f))
        );

        return vec3(
          d.x * (a * cos(f)),
          a * sin(f),
          d.y * (a * cos(f))
        );
      }

      void main() {
        vec3 pos = position;
        vec3 tangent = vec3(1.0, 0.0, 0.0);
        vec3 binormal = vec3(0.0, 0.0, 1.0);

        // 4 Superimposed Gerstner Wave Spectra:
        // vec4(dir.x, dir.y, steepness, wavelength)
        vec4 w1 = vec4(0.8, 0.6, 0.12, 110.0); // Long swell
        vec4 w2 = vec4(0.6, 0.8, 0.09, 45.0);  // Secondary swell
        vec4 w3 = vec4(-0.4, 0.9, 0.06, 18.0); // Wind wave
        vec4 w4 = vec4(0.9, -0.3, 0.04, 6.0);  // Capillary chop

        vec3 p = pos;
        p += gerstnerWave(w1, pos, tangent, binormal);
        p += gerstnerWave(w2, pos, tangent, binormal);
        p += gerstnerWave(w3, pos, tangent, binormal);
        p += gerstnerWave(w4, pos, tangent, binormal);

        vec3 norm = normalize(cross(binormal, tangent));
        vNormal = norm;
        vWaveHeight = p.y;
        vWorldPosition = p;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uDeepColor;
      uniform vec3 uSurfaceColor;
      uniform vec3 uFoamColor;
      uniform vec3 uSunDirection;
      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying float vWaveHeight;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(cameraPosition - vWorldPosition);

        // Fresnel reflection
        float fresnel = pow(1.0 - max(0.0, dot(viewDir, normal)), 4.0);
        fresnel = clamp(fresnel, 0.1, 0.9);

        // Specular sun highlight
        vec3 halfDir = normalize(uSunDirection + viewDir);
        float spec = pow(max(0.0, dot(normal, halfDir)), 120.0);

        // Depth coloring based on wave elevation
        float waveMix = smoothstep(-1.2, 1.8, vWaveHeight);
        vec3 waterColor = mix(uDeepColor, uSurfaceColor, waveMix);

        // Crest foam
        float foam = smoothstep(1.2, 2.0, vWaveHeight);
        vec3 finalColor = mix(waterColor, uFoamColor, foam * 0.45);
        finalColor += vec3(1.0, 0.95, 0.8) * spec * 0.85;
        finalColor = mix(finalColor, vec3(0.6, 0.75, 0.9), fresnel * 0.5);

        gl_FragColor = vec4(finalColor, 0.92);
      }
    `,transparent:!0,side:Fe}),r=new N(n,s);r.position.y=10.54,i.add(r);let o=new je(35,180,16,32);o.rotateX(-Math.PI/2);let a=new ui({color:15530239,transparent:!0,opacity:.45,blending:sr}),l=new N(o,a);l.position.set(0,10.6,-95),i.add(l);let c=0,h=0,m=0;function u(p,_,v,f){s.uniforms.uTime.value=_,s.uniforms.uSpeed.value=v;let d=Math.min(1,Math.abs(v)/21.5);a.opacity=.15+d*.65,l.scale.set(1+d*.5,1+d*.8,1);let M=.4;m=Math.sin(_*M)*.25,c=Math.sin(_*M*.8+1.2)*.008,h=Math.sin(_*M*.5)*.012,f&&(f.position.y=m,f.rotation.x=c,f.rotation.z=h)}return{oceanMesh:r,wakeMesh:l,update:u}}function iu(i){let t=[{id:1,z:175.5,isDummy:!1},{id:2,z:148,isDummy:!1},{id:3,z:120.5,isDummy:!1},{id:4,z:93,isDummy:!0}],n=[];t.forEach(r=>{let o=new Zt,a=new Float32Array(270),l=new Float32Array(90),c=new Float32Array(90),h=[],m=53.34,u=(m-27.5)*(1/12),p=r.z-u;for(let f=0;f<90;f++){let d=Math.random();h.push({life:d,speed:4.5+Math.random()*3.5,baseScale:r.isDummy?1.5:3.5+Math.random()*2.5,offset:new B((Math.random()-.5)*1.5,0,(Math.random()-.5)*1.5)}),a[f*3+0]=0,a[f*3+1]=m,a[f*3+2]=p,l[f]=1,c[f]=0}o.setAttribute("position",new cn(a,3)),o.setAttribute("scale",new cn(l,1)),o.setAttribute("opacity",new cn(c,1));let _=new un({uniforms:{uColor:{value:r.isDummy?new He(15791615):new He(3683376)}},vertexShader:`
        attribute float scale;
        attribute float opacity;
        varying float vOpacity;
        void main() {
          vOpacity = opacity;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vOpacity;
        void main() {
          // Circular soft particle sprite
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.0, dist) * vOpacity;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:r.isDummy?Qn:Qn}),v=new ks(o,_);i.add(v),n.push({funnel:r,points:v,geom:o,material:_,particleData:h,positions:a,scales:l,opacities:c,topY:m,funnelZ:p})});function s(r,o,a){let l=o?o.boiler_firing_rate:.6,h=-12*Math.max(.2,Math.abs(a)/21.5);n.forEach(m=>{let u=m.funnel.isDummy,p=90,_=m.positions,v=m.scales,f=m.opacities;for(let d=0;d<p;d++){let M=m.particleData[d];M.life+=r*.22,M.life>1&&(M.life=0);let A=M.life,E=A*(M.speed*(u?.3:1.2)*(.5+l*.8)*12),w=A*h*15,T=A*(u?2:8);if(_[d*3+0]=M.offset.x*(1+T),_[d*3+1]=m.topY+E,_[d*3+2]=m.funnelZ+w+M.offset.z*(1+T),v[d]=M.baseScale*(1+T*1.8),u)f[d]=Math.sin(A*Math.PI)*.06;else{let g=.15+.65*l;f[d]=Math.sin(A*Math.PI)*g}}m.geom.attributes.position.needsUpdate=!0,m.geom.attributes.scale.needsUpdate=!0,m.geom.attributes.opacity.needsUpdate=!0})}return{smokeGroups:n,update:s}}var Ta=class{constructor(){this.ctx=null,this.isMuted=!0,this.engineGain=null,this.turbineGain=null,this.oceanGain=null,this.alarmGain=null,this.engineOsc=null,this.turbineOsc=null,this.oceanNoiseNode=null,this.isInitialized=!1}init(){if(!this.isInitialized)try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e;let t=this.ctx.createGain();t.gain.value=.8,t.connect(this.ctx.destination),this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=0,this.engineGain.connect(t),this.engineOsc=this.ctx.createOscillator(),this.engineOsc.type="triangle",this.engineOsc.frequency.value=35,this.engineOsc.connect(this.engineGain),this.engineOsc.start(),this.turbineGain=this.ctx.createGain(),this.turbineGain.gain.value=0,this.turbineGain.connect(t),this.turbineOsc=this.ctx.createOscillator(),this.turbineOsc.type="sine",this.turbineOsc.frequency.value=165,this.turbineOsc.connect(this.turbineGain),this.turbineOsc.start(),this.oceanGain=this.ctx.createGain(),this.oceanGain.gain.value=.15,this.oceanGain.connect(t);let n=this.ctx.sampleRate*2,s=this.ctx.createBuffer(1,n,this.ctx.sampleRate),r=s.getChannelData(0),o=0;for(let c=0;c<n;c++){let h=Math.random()*2-1;r[c]=(o+.02*h)/1.02,o=r[c]}let a=this.ctx.createBufferSource();a.buffer=s,a.loop=!0;let l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=350,a.connect(l),l.connect(this.oceanGain),a.start(),this.alarmGain=this.ctx.createGain(),this.alarmGain.gain.value=0,this.alarmGain.connect(t),this.isInitialized=!0}catch(e){console.warn("Web Audio not supported or blocked:",e)}}setMuted(e){this.isMuted=e,!e&&this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playTelegraphBell(){if(!(this.isMuted||!this.ctx))try{let e=this.ctx.currentTime;[0,.14].forEach(t=>{let n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(1480,e+t),s.gain.setValueAtTime(.4,e+t),s.gain.exponentialRampToValueAtTime(.001,e+t+.45),n.connect(s),s.connect(this.ctx.destination),n.start(e+t),n.stop(e+t+.5)})}catch{}}playSteamWhistle(){if(!(this.isMuted||!this.ctx))try{let e=this.ctx.currentTime;[130.81,164.81,196].forEach(t=>{let n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(t,e),s.gain.setValueAtTime(.01,e),s.gain.linearRampToValueAtTime(.25,e+.3),s.gain.linearRampToValueAtTime(.25,e+2.5),s.gain.exponentialRampToValueAtTime(.001,e+3.8),n.connect(s),s.connect(this.ctx.destination),n.start(e),n.stop(e+4)})}catch{}}setAlarmRinging(e){if(!(!this.alarmGain||!this.ctx)){if(this.isMuted){this.alarmGain.gain.value=0;return}this.alarmGain.gain.value=e?.3:0}}update(e){if(!this.ctx||this.isMuted)return;let t=Math.abs(e.port_recip_rpm),n=e.turbine_rpm;if(this.engineGain&&this.engineOsc){let s=t/75*.4;this.engineGain.gain.setTargetAtTime(s,this.ctx.currentTime,.2),this.engineOsc.frequency.setTargetAtTime(25+t*.5,this.ctx.currentTime,.2)}if(this.turbineGain&&this.turbineOsc){let s=n/165*.25;this.turbineGain.gain.setTargetAtTime(s,this.ctx.currentTime,.2),this.turbineOsc.frequency.setTargetAtTime(100+n*.8,this.ctx.currentTime,.2)}}};var Kl={port_bow:{name:"Port Bow Quarter",pos:[-140,30,290],target:[0,19,210],desc:"Fine entrance lines, flared stem, port bower anchor, White Star livery"},starboard_bow:{name:"Starboard Bow Quarter",pos:[140,30,290],target:[0,19,210],desc:"Starboard bower anchor, forecastle sheer strake, Welin davits"},broadside_port:{name:"Broadside Port Profile",pos:[-270,24,130],target:[0,22,130],desc:"Full 882ft 9in profile, four raked funnels, two pole masts, sheer curve"},broadside_starboard:{name:"Broadside Starboard Profile",pos:[270,24,130],target:[0,22,130],desc:"Starboard profile showing Caf\xE9 Parisien windows and A-deck weather screen"},stern_propellers:{name:"Stern Counter & Three Screws",pos:[28,4,-22],target:[0,5.5,8],desc:"Cruiser counter, 15.5m rudder, wing propellers (23.5ft) and centre propeller (16.5ft)"},aerial_three_quarter:{name:"Aerial High Three-Quarter",pos:[180,130,260],target:[0,25,120],desc:"Bird's eye view of Boat Deck, 20 lifeboats, funnel tops, and Marconi aerial"},waterline_low:{name:"Waterline Low Angle",pos:[-55,13,270],target:[0,19,210],desc:"Looming perspective from waterline showing 34ft 7in draught and bow flare"},bridge_navigating:{name:"Navigating Bridge & Wheelhouse",pos:[0,29.5,186],target:[0,28.8,195],desc:"Bridge wings, Chadburn engine telegraphs, telemotor helm, binnacle"},wheelhouse_navigating:{name:"Wheelhouse Telemotor & Standard Binnacle",pos:[0,28.3,201.2],target:[0,28.1,205.5],desc:"Brown's telemotor helm, Kelvin magnetic binnacle, chart table, chronometer"},boat_deck_davits:{name:"Boat Deck & Welin Davits",pos:[14.2,29.2,162],target:[12,28.5,184],desc:"Welin double-acting quadrant davits, Class A lifeboats, white enamel houses"},funnels_rigging:{name:"Funnels & Marconi Rigging",pos:[28,42,155],target:[0,40,132],desc:"1:12 rake, White Star buff casing, Willett-Bruce whistles, guy stays"},crows_nest:{name:"Lookout Crow's Nest (Foremast)",pos:[0,41.5,218],target:[0,25,260],desc:"95ft above waterline vantage looking forward over the bow stem"},grand_staircase_dome:{name:"Forward Grand Staircase & Glass Dome",pos:[0,21,161],target:[0,27.2,166],desc:"Wrought iron glass dome, 50-light chandelier, Louis XIV oak paneling"},grand_staircase_clock:{name:"Honour and Glory Crowning Time Clock",pos:[3.4,25.2,164],target:[0,24.8,171.85],desc:"Carved allegorical clock on A-Deck landing, gilt bronze balustrades"},dining_saloon_1st:{name:"First Class Dining Saloon",pos:[-9,16.8,126],target:[0,16,140],desc:"112ft Jacobean white carved paneling, multipane leaded windows, round tables"},smoking_room_1st:{name:"First Class Smoking Room",pos:[0,25.6,88],target:[0,25.4,73.5],desc:"Honduras mahogany boiserie, mother-of-pearl inlay, Wilkinson fireplace"},cafe_parisien:{name:"Caf\xE9 Parisien & Verandah Caf\xE9",pos:[7,22.8,62],target:[9,22.5,68.5],desc:"B-Deck aft ivy trellis, French bistro wicker chairs, arched observation windows"},gymnasium_interior:{name:"Gymnasium & Exercisers",pos:[10.5,28.5,137.5],target:[7.8,28.2,143],desc:"Boat Deck gymnasium, stationary cycling machines with brass dials, rowing machine, electric camel, wall bars"},marconi_wireless_room:{name:"Marconi Wireless Telegraphy Station",pos:[-2.2,28.3,153.5],target:[-2,28.1,157],desc:"Marconi wireless operating desk, twin morse keys, magnetic detector, cork-lined Silent Room, motor-generator"},steerage_dining_saloon:{name:"Third Class (Steerage) Dining Saloon",pos:[-5,11.2,192.5],target:[0,10.8,198],desc:"Third Class dining saloon on F Deck, long pine trestle tables, benches, enamel iron bulkheads, piano"},scotland_road_passage:{name:"Scotland Road Working Passage",pos:[-2.8,13.5,120],target:[-2.8,13.5,138],desc:"E Deck port working passage (Scotland Road), overhead steam pipes, cable trays, bulkhead door arches"},passenger_lifts:{name:"First Class Passenger Lifts",pos:[-1.5,23,163],target:[-1.5,21,168.5],desc:"Triple First Class passenger lift shafts, wrought iron decorative cages, guide rails, hoisting cables"},turkish_baths_pool:{name:"Turkish Baths & Swimming Bath",pos:[10.5,11.2,150],target:[6.5,10.5,156],desc:"Moorish arabesque ceramic tiles, teak loungers, heated saltwater pool"},boiler_room_6:{name:"Boiler Room No. 6 (Stokehold)",pos:[0,4.2,186],target:[0,3.8,177],desc:"Scotch marine double-ended boilers (15ft 9in dia), glowing furnaces, coal bunkers"},reciprocating_engine_room:{name:"Reciprocating Engine Room",pos:[0,6.2,53],target:[0,8,64],desc:"Twin 4-crank triple expansion engines, 75in stroke, Stephenson link motion"},turbine_room:{name:"Parsons Reaction Turbine Room",pos:[0,5,35],target:[0,3.5,43.5],desc:"16,000 SHP LP turbine, twin overhead copper steam trunks, surface condensers"},dynamo_room:{name:"Electric Dynamo Room",pos:[0,4.2,18],target:[0,3.2,27.5],desc:"Four 400 kW 100V DC steam dynamos, main switchboard distribution panels"},steering_gear_tiller:{name:"Steering Gear Flat & Quadrant Tiller",pos:[2.5,16.8,18],target:[0,16.5,13],desc:"D Deck aft steering gear flat, 23.5-inch rudder stock, spring-cushioned quadrant tiller, twin steam engines"},watertight_doors_cutaway:{name:"Watertight Bulkheads & Lower Doors",pos:[18,4.2,78],target:[0,3.5,75],desc:"Bulkhead K vertical sliding drop door, friction cataract, stiffeners"},longitudinal_cutaway:{name:"Longitudinal Interior Cutaway",pos:[160,22,130],target:[0,16,130],desc:"Internal view revealing all 10 deck levels, 15 bulkheads, and machinery spaces"},closeup_welin_davit:{name:"Extreme Close-Up: Welin Davit Gear",pos:[14,29.2,167.2],target:[12.6,29,167.8],desc:"Quadrant quadrant gear teeth, brass screw spindle, steel pivot pins"},closeup_engine_valve_gear:{name:"Extreme Close-Up: Stephenson Link Motion",pos:[-3.6,4.2,63.8],target:[-4.8,4.5,63.5],desc:"Curved expansion link, eccentric rods, brass oil cups, polished steel slipper"}};window.TITANIC_SIM={order:"FULL_AHEAD",speedKts:21.5,boilerFiring:.95,boilerPressure:215,recipRPM:75,turbineRPM:165,crankAngle:0,watertightClosed:!1,cutawayMode:!1,lightingMode:"day",targetRudderDeg:0,currentRudderDeg:0,elevatorDeckIndex:5,elevatorTargetY:14.9,elevatorCurrentY:14.9,cabinDoorsOpen:!0,cabinDoorAngle:Math.PI/2,ready:!1};var su=[{name:"E Deck",y:0},{name:"D Deck",y:2.9},{name:"C Deck",y:6.1},{name:"B Deck",y:9.25},{name:"A Deck",y:12},{name:"Boat Deck",y:14.9}],Y={scene:null,camera:null,renderer:null,controls:null,materials:null,ship:null,ocean:null,smoke:null,audio:null,dirLight:null,hemiLight:null,steamJets:[],clock:new tr};function h0(){let i=document.getElementById("canvas-container");Y.scene=new Hs,Y.scene.background=new He(11588844),Y.scene.fog=new Bs(11588844,.0012),Y.camera=new en(45,window.innerWidth/window.innerHeight,.5,4e3),Y.camera.position.set(-145,28,310),Y.renderer=new va({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),Y.renderer.setSize(window.innerWidth,window.innerHeight),Y.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.renderer.toneMapping=rr,Y.renderer.toneMappingExposure=1.15,Y.renderer.shadowMap.enabled=!0,Y.renderer.shadowMap.type=Po,i.appendChild(Y.renderer.domElement),Y.controls=new ba(Y.camera,Y.renderer.domElement),Y.controls.enableDamping=!0,Y.controls.dampingFactor=.05,Y.controls.maxDistance=1500,Y.controls.minDistance=2,Y.controls.target.set(0,18,230),Y.controls.update(),Y.hemiLight=new Ks(16777215,1981008,.85),Y.scene.add(Y.hemiLight),Y.dirLight=new er(16775917,2.4),Y.dirLight.position.set(120,180,160),Y.dirLight.castShadow=!0,Y.dirLight.shadow.mapSize.width=2048,Y.dirLight.shadow.mapSize.height=2048,Y.dirLight.shadow.camera.near=10,Y.dirLight.shadow.camera.far=1e3;let e=250;Y.dirLight.shadow.camera.left=-e,Y.dirLight.shadow.camera.right=e,Y.dirLight.shadow.camera.top=e,Y.dirLight.shadow.camera.bottom=-e,Y.scene.add(Y.dirLight);let t=new Be,n=new vt(16772829,3.5,45);n.position.set(0,24,166),t.add(n);let s=new vt(16771276,3,50);s.position.set(0,17,139),t.add(s);let r=new vt(16729344,4,40);r.position.set(0,4,177),t.add(r);let o=new vt(16767144,3.5,40);o.position.set(0,6,63.5),t.add(o),Y.scene.add(t),Y.materials=eu(),Y.ship=tu(Y.materials),Y.scene.add(Y.ship.shipGroup),Y.ocean=nu(Y.scene),Y.smoke=iu(Y.scene),Y.audio=new Ta,u0(),d0(),f0(),window.addEventListener("resize",_0),window.TITANIC_SIM.ready=!0,window.renderReady=!0,uu()}function u0(){for(let i of[176.5,149]){let e=new qs(.6,3.5,12),t=new ui({color:16777215,transparent:!0,opacity:0}),n=new N(e,t);n.position.set(.6,51.5,i),n.rotation.x=-Math.PI/4,Y.scene.add(n),Y.steamJets.push(n)}}function ru(){Y.audio&&(Y.audio.init(),Y.audio.setMuted(!1),Y.audio.playSteamWhistle()),Y.steamJets.forEach(i=>{i.material.opacity=.85,setTimeout(()=>{let e=setInterval(()=>{i.material.opacity-=.08,i.material.opacity<=0&&(i.material.opacity=0,clearInterval(e))},50)},1200)})}function d0(){let i=[{id:"FULL_AHEAD",label:"Full Ahead",speed:21.5,recip:75,turb:165,fire:.95},{id:"HALF_AHEAD",label:"Half Ahead",speed:15,recip:52,turb:115,fire:.65},{id:"SLOW_AHEAD",label:"Slow Ahead",speed:10,recip:35,turb:75,fire:.4},{id:"STOP",label:"Stop",speed:0,recip:0,turb:0,fire:.15},{id:"FULL_ASTERN",label:"Full Astern",speed:-13,recip:-75,turb:0,fire:.95}],e=document.getElementById("telegraph-controls");e&&i.forEach(p=>{let _=document.createElement("button");_.className=`btn-telegraph ${p.id==="FULL_AHEAD"?"active":""}`,_.innerText=p.label,_.onclick=()=>{document.querySelectorAll(".btn-telegraph").forEach(v=>v.classList.remove("active")),_.classList.add("active"),p0(p)},e.appendChild(_)});let t=document.getElementById("camera-select");if(t){for(let[p,_]of Object.entries(Kl)){let v=document.createElement("option");v.value=p,v.innerText=_.name,t.appendChild(v)}t.onchange=p=>{lu(p.target.value)}}let n=document.getElementById("btn-watertight");n&&(n.onclick=()=>{cu()});let s=document.getElementById("btn-cutaway");s&&(s.onclick=()=>{hu()});let r=document.getElementById("btn-helm-port");r&&(r.onclick=()=>wa(-5));let o=document.getElementById("btn-helm-mid");o&&(o.onclick=()=>$l(0));let a=document.getElementById("btn-helm-stbd");a&&(a.onclick=()=>wa(5));let l=document.getElementById("btn-lift-call");l&&(l.onclick=()=>ou());let c=document.getElementById("btn-doors-toggle");c&&(c.onclick=()=>au());let h=document.getElementById("light-select");h&&(h.onchange=p=>{g0(p.target.value)});let m=document.getElementById("btn-whistle");m&&(m.onclick=()=>ru());let u=document.getElementById("btn-sound");u&&(u.onclick=()=>{Y.audio.init();let p=!Y.audio.isMuted;Y.audio.setMuted(p),u.innerText=p?"\u{1F50A} Sound: Off":"\u{1F50A} Sound: On"})}function f0(){window.addEventListener("keydown",i=>{if(!["INPUT","SELECT","TEXTAREA"].includes(document.activeElement.tagName))switch(i.code){case"Digit1":case"Numpad1":xr(0);break;case"Digit2":case"Numpad2":xr(1);break;case"Digit3":case"Numpad3":xr(2);break;case"Digit4":case"Numpad4":xr(3);break;case"Digit5":case"Numpad5":xr(4);break;case"ArrowLeft":case"KeyA":wa(-5);break;case"ArrowRight":case"KeyD":wa(5);break;case"KeyS":$l(0);break;case"KeyW":case"Space":ru();break;case"KeyL":ou();break;case"KeyO":au();break;case"KeyX":hu();break;case"KeyT":cu();break}})}function xr(i){let e=document.querySelectorAll(".btn-telegraph");e&&e[i]&&e[i].click()}function wa(i){let e=Math.max(-35,Math.min(35,window.TITANIC_SIM.targetRudderDeg+i));$l(e)}function $l(i){window.TITANIC_SIM.targetRudderDeg=i;let e=document.getElementById("hud-rudder");e&&(i===0?e.innerText="Rudder: Amidships":i<0?e.innerText=`Rudder: ${Math.abs(i)}\xB0 Port`:e.innerText=`Rudder: ${i}\xB0 Starboard`)}function ou(){window.TITANIC_SIM.elevatorDeckIndex=(window.TITANIC_SIM.elevatorDeckIndex+1)%su.length;let i=su[window.TITANIC_SIM.elevatorDeckIndex];window.TITANIC_SIM.elevatorTargetY=i.y;let e=document.getElementById("hud-lift-deck");e&&(e.innerText=i.name)}function au(){window.TITANIC_SIM.cabinDoorsOpen=!window.TITANIC_SIM.cabinDoorsOpen,window.TITANIC_SIM.cabinDoorAngle=window.TITANIC_SIM.cabinDoorsOpen?Math.PI/2:0;let i=document.getElementById("btn-doors-toggle");i&&(i.innerText=window.TITANIC_SIM.cabinDoorsOpen?"\u{1F6AA} Cabins: Open":"\u{1F6AA} Cabins: Closed")}function p0(i){window.TITANIC_SIM.order=i.id,window.TITANIC_SIM.speedKts=i.speed,window.TITANIC_SIM.recipRPM=i.recip,window.TITANIC_SIM.turbineRPM=i.turb,window.TITANIC_SIM.boilerFiring=i.fire,Y.audio.init(),Y.audio.playTelegraphBell(),m0()}function m0(){let i=document.getElementById("hud-speed"),e=document.getElementById("hud-recip"),t=document.getElementById("hud-turb"),n=document.getElementById("hud-power");i&&(i.innerText=`${window.TITANIC_SIM.speedKts.toFixed(1)} kts`),e&&(e.innerText=`${Math.abs(window.TITANIC_SIM.recipRPM).toFixed(0)} RPM`),t&&(t.innerText=`${window.TITANIC_SIM.turbineRPM.toFixed(0)} RPM`);let s=Math.round(3e4*Math.pow(Math.abs(window.TITANIC_SIM.recipRPM)/75,2.8)+16e3*Math.pow(window.TITANIC_SIM.turbineRPM/165,2.8));n&&(n.innerText=`${s.toLocaleString()} HP`)}function lu(i){let e=Kl[i];if(!e||!Y.camera||!Y.controls)return;Y.camera.position.set(...e.pos),Y.controls.target.set(...e.target),Y.camera.lookAt(...e.target),Y.controls.update(),Y.renderer&&Y.scene&&Y.renderer.render(Y.scene,Y.camera);let t=document.getElementById("camera-desc");t&&(t.innerText=`${e.name}: ${e.desc}`)}window.setCameraView=lu;function cu(){window.TITANIC_SIM.watertightClosed=!window.TITANIC_SIM.watertightClosed;let i=window.TITANIC_SIM.watertightClosed;Y.audio.init(),Y.audio.setAlarmRinging(i);let e=document.getElementById("btn-watertight");e&&(e.innerText=i?"\u{1F6E1}\uFE0F Doors: Closing / Dropped":"\u{1F6E1}\uFE0F Doors: Open (Bridge)",e.style.backgroundColor=i?"#991b1b":"#1e3a5f"),document.querySelectorAll(".bh-indicator").forEach(n=>{n.style.backgroundColor=i?"#ef4444":"#22c55e"})}function hu(){window.TITANIC_SIM.cutawayMode=!window.TITANIC_SIM.cutawayMode;let i=window.TITANIC_SIM.cutawayMode;Y.materials.hullBlack.transparent=i,Y.materials.hullBlack.opacity=i?.18:1,Y.materials.hullRed.transparent=i,Y.materials.hullRed.opacity=i?.18:1;let e=document.getElementById("btn-cutaway");e&&(e.innerText=i?"\u{1F441}\uFE0F Hull: Cutaway (X-Ray)":"\u{1F441}\uFE0F Hull: Solid Plating",e.style.backgroundColor=i?"#b45309":"#1e3a5f")}function g0(i){window.TITANIC_SIM.lightingMode=i,i==="day"?(Y.scene.background.setHex(11588844),Y.scene.fog.color.setHex(11588844),Y.dirLight.color.setHex(16775917),Y.dirLight.intensity=2.4,Y.hemiLight.color.setHex(16777215),Y.hemiLight.groundColor.setHex(1981008)):i==="sunset"?(Y.scene.background.setHex(15432530),Y.scene.fog.color.setHex(15432530),Y.dirLight.color.setHex(16746564),Y.dirLight.intensity=2.8,Y.hemiLight.color.setHex(16755319),Y.hemiLight.groundColor.setHex(3346722)):i==="night"&&(Y.scene.background.setHex(264208),Y.scene.fog.color.setHex(264208),Y.dirLight.color.setHex(6719692),Y.dirLight.intensity=.45,Y.hemiLight.color.setHex(1122884),Y.hemiLight.groundColor.setHex(132362))}function _0(){!Y.camera||!Y.renderer||(Y.camera.aspect=window.innerWidth/window.innerHeight,Y.camera.updateProjectionMatrix(),Y.renderer.setSize(window.innerWidth,window.innerHeight))}function uu(){window.isHeadless||requestAnimationFrame(uu),du()}function du(){let i=Math.min(.1,Y.clock.getDelta()),e=Y.clock.getElapsedTime(),t=window.TITANIC_SIM.recipRPM*2*Math.PI/60*i;if(window.TITANIC_SIM.crankAngle=(window.TITANIC_SIM.crankAngle+t)%(2*Math.PI),Y.ship.recipEnginePivots.portCrank&&(Y.ship.recipEnginePivots.portCrank.rotation.z=window.TITANIC_SIM.crankAngle),Y.ship.recipEnginePivots.stbdCrank&&(Y.ship.recipEnginePivots.stbdCrank.rotation.z=-window.TITANIC_SIM.crankAngle),Y.ship.portPropGroup&&(Y.ship.portPropGroup.rotation.z+=t),Y.ship.stbdPropGroup&&(Y.ship.stbdPropGroup.rotation.z-=t),Y.ship.centrePropGroup){let o=window.TITANIC_SIM.turbineRPM*2*Math.PI/60*i;Y.ship.centrePropGroup.rotation.z+=o}let n=window.TITANIC_SIM.targetRudderDeg-window.TITANIC_SIM.currentRudderDeg;window.TITANIC_SIM.currentRudderDeg+=n*Math.min(1,i*2.5);let s=window.TITANIC_SIM.currentRudderDeg*Math.PI/180;Y.ship.rudderGroup&&(Y.ship.rudderGroup.rotation.y=-s),Y.ship.wheelPivot&&(Y.ship.wheelPivot.rotation.z=-s*4),Y.ship.quadrantTiller&&(Y.ship.quadrantTiller.rotation.y=-s);let r=window.TITANIC_SIM.elevatorTargetY-window.TITANIC_SIM.elevatorCurrentY;if(window.TITANIC_SIM.elevatorCurrentY+=r*Math.min(1,i*1.8),Y.ship.elevatorCar&&(Y.ship.elevatorCar.position.y=window.TITANIC_SIM.elevatorCurrentY),Y.ship.animatedDoors){let o=window.TITANIC_SIM.watertightClosed;Y.ship.animatedDoors.forEach(a=>{let l=o?0:1;a.position+=(l-a.position)*Math.min(1,i*.35),a.mesh.position.y=a.closedY+a.position*(a.openY-a.closedY)})}Y.ocean&&Y.ocean.update(i,e,window.TITANIC_SIM.speedKts,Y.ship.shipGroup),Y.smoke&&Y.smoke.update(i,{boiler_firing_rate:window.TITANIC_SIM.boilerFiring},window.TITANIC_SIM.speedKts),Y.audio&&Y.audio.update({port_recip_rpm:window.TITANIC_SIM.recipRPM,turbine_rpm:window.TITANIC_SIM.turbineRPM}),Y.controls&&Y.controls.update(),Y.renderer&&Y.scene&&Y.camera&&Y.renderer.render(Y.scene,Y.camera)}window.renderFrame=du;window.addEventListener("DOMContentLoaded",h0);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
