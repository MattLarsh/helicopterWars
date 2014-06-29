
// createLineElement(x1,x2,y1,y2,strWdth,color)
// createEllipseElement(cx,cy,rx,ry,color,opacity,stroke)
// createRectElement(width,height,x,y,opacity,fill,stroke,rx)
function createHeli(){
  var r = {};
  r.roundArr = [];
  r.lineArr = [];
  r.rectArr = [];
  
  r.leg1 = createLineElement(217,210,434,455,4,'white');
  r.leg2 = createLineElement(245,238,434,455,4,'white');
  r.post = createPolyElement('220,400 231,365 233,365 237,400',"white");
  r.legPad = createRectElement(60,4,192,453,1,'white','none',6);
  r.bod = createEllipseElement(230,420,40,25,'white',1,'none');
  r.invisClip1 = createRectElement(97,137,140,368.5,1,'black','none',0);
  r.invisClip2 = createRectElement(97,85,190,420.5,1,'black','none',0);
  r.bladeShadow = createEllipseElement(230,365,90,30 ,'#0f7795',0.5);
  r.smallBladeShadow = createEllipseElement(117.5,394,18,18 ,'#0f7795',0.5);


  r.tail = createPolyElement('120,390 120,395 210,432 210,419',"white");
  r.polyArr = [r.tail,r.post];
  var clip = document.getElementById('clipHeli');
  clip.appendChild(r.invisClip1);
  clip.appendChild(r.invisClip2);
  r.bod.setAttribute('clip-path', 'url(#clipHeli)');

  r.leg1Obj = createLineObject(r.leg1);
  r.leg2Obj = createLineObject(r.leg2);
  r.legPadObj = createRectObject(r.legPad);
  r.bodObj = createEllipseObj(r.bod);
  r.invisClip1Obj = createRectObject(r.invisClip1);
  r.invisClip2Obj = createRectObject(r.invisClip2);
  r.bladeShadowObj = createEllipseObj(r.bladeShadow);
  r.smallBladeShadowObj = createEllipseObj(r.smallBladeShadow);

  for(var key in r){
    if(r[key].dx !== undefined){
      r.roundArr.push(r[key]);
    }
  }
  for(var key in r){
    if(r[key].dx1 !== undefined){
      r.lineArr.push(r[key]);
    }
  }
  return r;
}

// helicopter.bod.setAttribute("transform","translate(-70,-50)rotate(-20)");

// createLineElement(x1,x2,y1,y2,strWdth,color)
// createEllipseElement(cx,cy,rx,ry,color,opacity,stroke)
// createRectElement(width,height,x,y,opacity,fill,stroke,rx)
function createHero(){
  var r = {};
  r.roundArr = [];
  r.lineArr = [];
  r.torso1Ele = createLineElement(236,267,422.5,422.5,8,'#BD2C06');
  // r.torso2Ele = createLineElement(233,255,433,433,20,'#BD2C06');
  r.headEle = createCircleElement(253,410,15,'#FFE1CE');
  r.leftEyeEle = createEllipseElement(250,408,4.75,6,'white');
  r.rightEyeEle = createEllipseElement(256,408,4.75,6,'white');
  r.leftEyeColorEle = createEllipseElement(251,408,1,1,'#1E181A');
  r.rightEyeColorEle = createEllipseElement(258,408,1,1,'#1E181A');
  r.mouthEle = createEllipseElement(253,418,2,2,'#1E181A');
  r.hair1Ele = createLineElement(241,238,397,412,4,'#D1A967');
  r.hair2Ele = createLineElement(240,267,397,393,7,'#D1A967');
  
  r.torso1Obj = createLineObject(r.torso1Ele);
  // r.torso2Obj = createLineObject(r.torso2Ele);
  r.headObj = createCircleObj(r.headEle);
  r.leftEyeObj = createEllipseObj(r.leftEyeEle);
  r.rightEyeObj = createEllipseObj(r.rightEyeEle);
  r.leftEyeColorObj = createEllipseObj(r.leftEyeColorEle);
  r.rightEyeColorObj = createEllipseObj(r.rightEyeColorEle);
  r.mouthObj = createEllipseObj(r.mouthEle);
  r.hair1Obj = createLineObject(r.hair1Ele);
  r.hair2Obj = createLineObject(r.hair2Ele);
  for(var key in r){
    if(r[key].dx !== undefined){
      r.roundArr.push(r[key]);
    }
  }
  for(var key in r){
    if(r[key].dx1 !== undefined){
      r.lineArr.push(r[key]);
    }
  }
  return r;
}

function createBlood(eleArr,objArr,x,y){
  for(var i=0;i<100;i++){
    eleArr[i] = createEllipseElement(x,y,3,3,'red');
  }
  for(var i=0;i<100;i++){
    objArr[i] = createEllipseObj(eleArr[i]);
  } 
}
function bloodExplosion(objArr){
  var x;
  var y;
  for(var i=0,len=objArr.length;i<len;i++){
    if(Math.random() > 0.5){
      x = 99;
    }
    else{
      x = -99;
    }
    if(Math.random() < 0.5){
      y = 99;
    }
    else{
      y = -99;
    }
    objArr[i].dx = x * Math.random();
    objArr[i].dy = y * Math.random();
  }
}
function moveHeroUp(){
  vert = -7
}
function moveHeroDown(){
  vert = 7;
}
function createPolyElement(points,fill,stroke) {
  var newPoly = document.createElementNS(svgNS,"polygon");
  newPoly.setAttributeNS(null, "points", points);
  newPoly.setAttributeNS(null, "fill", fill);
  newPoly.setAttributeNS(null, "stroke", stroke);
  document.getElementById("field").appendChild(newPoly);
  return newPoly;
}
var blade1 = createPolyElement('149,353 142,366 231.5,364',"#194C7F");
var blade2 = createPolyElement('203,337 180,340 231.5,364',"#194C7F");
var blade3 = createPolyElement('245,335 270,338 231.5,364',"#194C7F");
var blade4 = createPolyElement('312,353 319,366 231.5,364',"#194C7F");
var blade5 = createPolyElement('304,380 275,392 231.5,364',"#194C7F");
var blade6 = createPolyElement('225,395 245,395 231.5,364',"#194C7F");
var blade7 = createPolyElement('165,385 190,393 231.5,364',"#194C7F");


var smallBlade1 = createPolyElement('100,397 100,388 118,394',"#194C7F");
var smallBlade2 = createPolyElement('118,377 128,378 118,394',"#194C7F");
var smallBlade3 = createPolyElement('134,396 130,404 118,394',"#194C7F");
var smallBlade4 = createPolyElement('110,410 117,413 118,394',"#194C7F");

var blades = [blade1,blade2,blade3,blade4,blade5,blade6,blade7];
var smallBlades = [smallBlade1,smallBlade2,smallBlade3,smallBlade4];


document.addEventListener("mousedown", moveHeroUp);
document.addEventListener("mouseup", moveHeroDown);

var vert = 0;

function removeEle(obj){
  for(var key in obj){
    if(obj[key] != undefined){
      obj[key].remove();
      delete obj[key];
    } 
  }
  
}

  
var myHero = createHero();
var helicopter = createHeli();
  







