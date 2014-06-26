(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var svgNS = "http://www.w3.org/2000/svg";

function createLineElement(x1,x2,y1,y2,strWdth,color) {
  var newLine = document.createElementNS(svgNS,"line");
  newLine.setAttributeNS(null,"x1",x1); 
  newLine.setAttributeNS(null,"x2",x2);   
  newLine.setAttributeNS(null,"y1",y1);   
  newLine.setAttributeNS(null,"y2",y2); 
  newLine.setAttributeNS(null,"stroke",color);    
  newLine.setAttributeNS(null,"stroke-width", strWdth);
  document.getElementById("field").appendChild(newLine);
  return newLine;
}
var createLineObject = function(e){
  var r = {};
  r.dx1 = 0;
  r.dx2 = 0;
  r.dy1 = 0;
  r.dy2 = 0;
  Object.defineProperty(r, 'x1', {
    get: function(){return e.x1.baseVal.value},
    set: function(val){e.x1.baseVal.value = val;}
  });
  Object.defineProperty(r, 'x2', {
    get: function(){return e.x2.baseVal.value},
    set: function(val){e.x2.baseVal.value = val;}
  });
  Object.defineProperty(r, 'y1', {
    get: function(){return e.y1.baseVal.value},
    set: function(val){e.y1.baseVal.value = val;}
  });
  Object.defineProperty(r, 'y2', {
    get: function(){return e.y2.baseVal.value},
    set: function(val){e.y2.baseVal.value = val;}
  });
  return r;
};
function createCircleElement(cx,cy,r,color) {
  var newCircle = document.createElementNS(svgNS,"circle");
  newCircle.setAttributeNS(null,"cx",cx);  
  newCircle.setAttributeNS(null,"cy",cy);    
  newCircle.setAttributeNS(null,"r",r);      
  newCircle.setAttributeNS(null,"fill",color);   
  document.getElementById("field").appendChild(newCircle);
  return newCircle;
}

var createCircleObj = function(e){
  var r = {};
  r.dx = 0;
  r.dy = 0;
  Object.defineProperty(r, 'x', {
    get: function(){return e.cx.baseVal.value},
    set: function(val){e.cx.baseVal.value = val;}
  });
  Object.defineProperty(r, 'y', {
    get: function(){return e.cy.baseVal.value},
    set: function(val){e.cy.baseVal.value = val;}
  });
  
  return r;
}
function createEllipseElement(cx,cy,rx,ry,color,opacity,stroke) {
  var newEllipse = document.createElementNS(svgNS,"ellipse");
  newEllipse.setAttributeNS(null,"cx",cx);  
  newEllipse.setAttributeNS(null,"cy",cy);    
  newEllipse.setAttributeNS(null,"rx",rx);  
  newEllipse.setAttributeNS(null,"ry",ry);    
  newEllipse.setAttributeNS(null,"fill",color);
  newEllipse.setAttributeNS(null,"fill-opacity",opacity); 
  newEllipse.setAttributeNS(null,"stroke",stroke);    
  document.getElementById("field").appendChild(newEllipse);
  return newEllipse;
}
var createEllipseObj = function(e){
  var r = {};
  r.dx = 0;
  r.dy = 0;
  
  Object.defineProperty(r, 'x', {
    get: function(){return e.cx.baseVal.value},
    set: function(val){e.cx.baseVal.value = val; }
  });
  Object.defineProperty(r, 'y', {
    get: function(){return e.cy.baseVal.value},
    set: function(val){e.cy.baseVal.value = val; }
  });
  return r;
};
var createRectObject = function(e){
  var r = {};
  r.dx = 0;
  r.dy = 0;
  
  Object.defineProperty(r, 'x', {
    get: function(){return e.x.baseVal.value},
    set: function(val){e.x.baseVal.value = val; }
  });
  Object.defineProperty(r, 'y', {
    get: function(){return e.y.baseVal.value},
    set: function(val){e.y.baseVal.value = val; }
  });
  return r;
};
var createPolyObject = function(e){
  var r = {};
  r.dx = 0;
  r.dy = 0;
  r.length = e.points.length
  r.yArr = [];

  for(var i=0,len=r.length;i<len;i++){
    e.points[i].y += 7
  }
  console.log(r.yArr);
  return r;
};
function createRectElement(width,height,x,y,opacity,fill,stroke,rx) {
  var newRect = document.createElementNS(svgNS,"rect");
  newRect.setAttributeNS(null,"width",width); 
  newRect.setAttributeNS(null,"height",height);    
  newRect.setAttributeNS(null,"x",x);   
  newRect.setAttributeNS(null,"y",y);  
  newRect.setAttributeNS(null,"fill-opacity",opacity);    
  newRect.setAttributeNS(null,"fill",fill);
  newRect.setAttributeNS(null,"rx",rx);
  newRect.setAttributeNS(null,"stroke",stroke);
  document.getElementById("field").appendChild(newRect);
  return newRect;
}




// function createEllipseBlades(){
//   var r = {};
//   r.topBlades = createEllipseElement(195,357.5,100,40 ,'#0f7795',0.5);
//   r.backBlades = createEllipseElement(62.5,402.5,18,18 ,'#0f7795',0.5);
//   return r;
// }
// createLineElement(x1,x2,y1,y2,strWdth,color)
// createEllipseElement(cx,cy,rx,ry,color,opacity,stroke)
// createRectElement(width,height,x,y,opacity,fill,stroke,rx)
function createHeli(){
  var r = {};
  r.roundArr = [];
  r.lineArr = [];
  r.rectArr = [];
  
  r.leg1 = createLineElement(217,210,434,455,4,'black');
  r.leg2 = createLineElement(245,238,434,455,4,'black');
  r.legPad = createRectElement(60,4,192,453,1,'black','none',6);
  r.bod = createEllipseElement(230,420,30,25,'white',1,'none');
  r.invisClip1 = createRectElement(90,137,140,368.5,1,'black','none',0);
  r.invisClip2 = createRectElement(97,85,190,420.5,1,'black','none',0);
  r.bladeShadow = createEllipseElement(230,365,80,40 ,'#0f7795',0.5);
  r.smallBladeShadow = createEllipseElement(117.5,394,18,18 ,'#0f7795',0.5);


  r.tail = createPolyElement('120,390 120,395 210,432 210,419',"white");
  r.polyArr = [r.tail];
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
var myHero = createHero();
var helicopter = createHeli();
// var ellipseBlades = createEllipseBlades();

// createLineElement(x1,x2,y1,y2,strWdth,color)
// createEllipseElement(cx,cy,rx,ry,color,opacity,stroke)
// createRectElement(width,height,x,y,opacity,fill,stroke,rx)
function createHero(){
  var r = {};
  r.roundArr = [];
  r.lineArr = [];
  r.torso1Ele = createLineElement(228,259,422.5,422.5,8,'#BD2C06');
  // r.torso2Ele = createLineElement(233,255,433,433,20,'#BD2C06');
  r.headEle = createCircleElement(245,410,15,'#FFE1CE');
  r.leftEyeEle = createEllipseElement(242,408,4.75,6,'white');
  r.rightEyeEle = createEllipseElement(248,408,4.75,6,'white');
  r.leftEyeColorEle = createEllipseElement(243,408,1,1,'#1E181A');
  r.rightEyeColorEle = createEllipseElement(250,408,1,1,'#1E181A');
  r.mouthEle = createEllipseElement(245,418,2,2,'#1E181A');
  r.hair1Ele = createLineElement(233,230,397,412,4,'#D1A967');
  r.hair2Ele = createLineElement(232,259,397,393,7,'#D1A967');

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
var blade1 = createPolyElement('153,353 153,366 232,364',"#194C7F");
var blade2 = createPolyElement('203,327 180,334 232,364',"#194C7F");
var blade3 = createPolyElement('245,328 270,331 232,364',"#194C7F");
var blade4 = createPolyElement('303,353 306,366 232,364',"#194C7F");
var blade5 = createPolyElement('285,390 270,400 232,364',"#194C7F");
var blade6 = createPolyElement('225,404 245,404 232,364',"#194C7F");
var blade7 = createPolyElement('165,387 190,394 232,364',"#194C7F");

var smallBlade1 = createPolyElement('100,397 100,388 118,394',"#194C7F");
var smallBlade2 = createPolyElement('118,377 128,378 118,394',"#194C7F");
var smallBlade3 = createPolyElement('134,396 130,404 118,394',"#194C7F");
var smallBlade4 = createPolyElement('110,410 117,413 118,394',"#194C7F");

var blades = [blade1,blade2,blade3,blade4,blade5,blade6,blade7];
var smallBlades = [smallBlade1,smallBlade2,smallBlade3,smallBlade4];
console.log(blades[0].points);

document.addEventListener("mousedown", moveHeroUp);
document.addEventListener("mouseup", moveHeroDown);

var vert = 0;
function animate(){
  
  for(var i=0;i<blades.length;i++){
    if(Math.random() > 0.2){
      blades[i].attributes[1].value = 'none';
    }
    else{
      blades[i].attributes[1].value = '#144d5d';
    } 
  }
  for(var i=0;i<smallBlades.length;i++){
    if(Math.random() > 0.15){
      smallBlades[i].attributes[1].value = 'none';
    }
    else{
      smallBlades[i].attributes[1].value = '#144d5d';
    }   
  }
  
  for(var i=0,len=myHero.roundArr.length;i<len;i++){
    myHero.roundArr[i].y += vert;
  }
  for(var i=0,len=helicopter.roundArr.length;i<len;i++){
    helicopter.roundArr[i].y += vert;
  }
  for(var i=0,len=helicopter.rectArr.length;i<len;i++){
    helicopter.roundArr[i].y += vert;
  }
  for(var i=0;i<helicopter.polyArr.length;i++){
    for(var j=0;j<helicopter.polyArr[i].points.length;j++){
      helicopter.polyArr[i].points[j].y += vert;
    }
  }
  for(var i=0;i<blades.length;i++){
    for(var j=0;j<blades[i].points.length;j++){
      blades[i].points[j].y += vert;
    }
  }
  for(var i=0;i<smallBlades.length;i++){
    for(var j=0;j<smallBlades[i].points.length;j++){
      smallBlades[i].points[j].y += vert;
    }
  }
  for(var i=0,len=myHero.lineArr.length;i<len;i++){
    myHero.lineArr[i].y1 += vert;
    myHero.lineArr[i].y2 += vert;
  }

  for(var i=0,len=helicopter.lineArr.length;i<len;i++){
    helicopter.lineArr[i].y1 += vert;
    helicopter.lineArr[i].y2 += vert;
  }
  requestAnimationFrame(animate)
}
requestAnimationFrame(animate)






