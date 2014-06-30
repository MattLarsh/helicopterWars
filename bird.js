function createBirdEle(){
  r = {};
  createBirdEle.state = 'alive';
  r.birdBodEle = createEllipseElement(1212,308,18,15,'#D8B67C');
  r.birdEyeEle = createEllipseElement(1204,302,4.75,6,'white');
  r.birdEyeColorEle = createEllipseElement(1203,303,1,1,'#1E181A');
  r.birdBeakEle = createPolyElement('1185,304 1198,312 1198,302',"orange");
  r.birdWingEle = createPolyElement('1245,309 1212,315 1212,302',"#695B5A");

  return r;
}
function createBirdObj(){
  r = {}
  r.polyPower = 10 * Math.random() + 2;
  r.roundArr = [];
  r.bloodEleArr = [];
  r.bloodObjArr = [];
  r.polyArr = [birdEle.birdBeakEle,birdEle.birdWingEle];
  r.birdBodObj = createEllipseObj(birdEle.birdBodEle);
  r.birdEyeObj = createEllipseObj(birdEle.birdEyeEle);
  r.birdEyeColorObj = createEllipseObj(birdEle.birdEyeColorEle);
  r.polyArr = [birdEle.birdBeakEle,birdEle.birdWingEle];
  for(var key in r){
    if(r[key].dx !== undefined){
      r.roundArr.push(r[key]);
    }
  }
  return r;
}
var birdEle = createBirdEle();
var birdObj = createBirdObj();
birdLocation();

function birdExplosion(){
  var x;
  for(var i=0,len=birdObj.roundArr.length;i<len;i++){
    if(Math.random() > 0.5){
      x = 14;
    }
    else{
      x = -14;
    }
    birdObj.roundArr[i].dx = x * Math.random();
    birdObj.roundArr[i].dy = x * Math.random();
  }
  if(Math.random() > 0.5){
      birdObj.polyPower = 14;
  }
  else{
    birdObj.polyPower = 14;
  }
}

function birdReset(){
  birdEle = createBirdEle();
  birdObj = createBirdObj();
  birdLocation();
}
function birdLocation(){
  var randY = Math.random() * 200;
  if(Math.random() > 0.5){
    randY *= -1;
  }
  for(var i=0;i<birdObj.polyArr.length;i++){
    for(var j=0;j<birdObj.polyArr[i].points.length;j++){
      birdObj.polyArr[i].points[j].y += randY;
    }
  }
  for(var i=0,len=birdObj.roundArr.length;i<len;i++){
    birdObj.roundArr[i].y += randY;;
  }
}
function collideoneWith(one,two) {
  // console.log(two.right);
  if(one.bottom > two.top && one.top < two.bottom &&
     one.right > two.left && one.left < two.right && createBirdEle.state === 'alive'){
    createBlood(birdObj.bloodEleArr,birdObj.bloodObjArr,birdObj.birdBodObj.x,birdObj.birdBodObj.y);
    bloodExplosion(birdObj.bloodObjArr);
    createBirdEle.state = 'blownUp';
    removeEle(birdEle);
    setTimeout(removeEle,500,birdObj.bloodEleArr);
    setTimeout(function(){createBirdEle.state = 'dead'},500);
    // setTimeout(birdReset,2000);
  }
  else if(birdObj.birdBodObj.x < 0){
    createBirdEle.state = 'flownBy';
    removeEle(birdEle);

  }
}