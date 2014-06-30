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
  r.r = e.r.baseVal.value;
  
  function update(){
    r.right = r.x + r.r;
    r.left = r.x - r.r;
    r.top = r.y - r.r;
    r.bottom = r.y + r.r;
  }
  Object.defineProperty(r, 'x', {
    get: function(){return e.cx.baseVal.value},
    set: function(val){e.cx.baseVal.value = val; update()}
  });
  Object.defineProperty(r, 'y', {
    get: function(){return e.cy.baseVal.value},
    set: function(val){e.cy.baseVal.value = val; update()}
  });
  update();
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
  r.rx = e.rx.baseVal.value; 
  r.ry = e.ry.baseVal.value;
  function update(){
    r.right = r.x + r.rx;
    r.left = r.x - r.rx;
    r.top = r.y - r.ry;
    r.bottom = r.y + r.ry;
  }
  Object.defineProperty(r, 'x', {
    get: function(){return e.cx.baseVal.value},
    set: function(val){e.cx.baseVal.value = val; update()}
  });
  Object.defineProperty(r, 'y', {
    get: function(){return e.cy.baseVal.value},
    set: function(val){e.cy.baseVal.value = val; update()}
  });
  update()
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