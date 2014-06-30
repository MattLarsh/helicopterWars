function createIceEle(){
	var r = {};
	//  createRectElement(width,height,x,y,opacity,fill,stroke,rx)
	// createEllipseElement(cx,cy,rx,ry,color,opacity,stroke)
	r.iceBlock = createEllipseElement(1200,40,200,50,'white',1,0);
	return r;
}

function createIceObj(){
	r = {};
	r.state = 'alive';
  r.iceBlockObj = createEllipseObj(iceEle.iceBlock);
  return r;
}
var iceEle = createIceEle();
var iceObj = createIceObj();
function possibleBladeCollision(one,two){
	if(one.bottom > two.top && one.top < two.bottom &&
	  one.right > two.left && one.left < two.right || one.top < 25){
	  myHero.state = 'inTrouble';
    bladeX = -10;
    iceObj.state = 'hitBlade';
	}
	
}
function bladeCollision(){
	helicopter.bladeShadowObj.x += -10;
}
function iceReset(){
  iceEle = createIceEle();
  iceObj = createIceObj();
}
