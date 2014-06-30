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
  if(myHero.state !== 'inTrouble'){
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
  }
  if(helicopter.legPadObj.y > 515 && myHero.status === 'down'){
  	vert = 0;
  }
  
  // Birds!!! Birds!!! Birds!!!
  if(createBirdEle.state === 'alive'){
    for(var i=0;i<birdObj.polyArr.length;i++){
      for(var j=0;j<birdObj.polyArr[i].points.length;j++){
        birdObj.polyArr[i].points[j].x -= birdObj.polyPower;
      }
    }
    for(var i=0,len=birdObj.roundArr.length;i<len;i++){
      birdObj.roundArr[i].x -= birdObj.polyPower;
    }
    
    collideoneWith(helicopter.bladeShadowObj,birdObj.birdBodObj);
  }

  if(createBirdEle.state === 'blownUp'){
    for(var i=0;i<50;i++){
      birdObj.bloodObjArr[i].x += birdObj.bloodObjArr[i].dx;
      birdObj.bloodObjArr[i].y += birdObj.bloodObjArr[i].dy;
    }
  }
  if(createBirdEle.state === 'dead' || createBirdEle.state === 'flownBy'){
  	var time = Math.random() * 1000;
    setTimeout(birdReset,time);
    createBirdEle.state = 'forming'
  }
  // End of Birds!!! Birds!!! Birds!!!
  
  // Start of IceBlocks!!!! IceBlocks!!!
  
  if(iceObj.state === 'alive' || iceObj.state === 'hitBlade'){
  	iceObj.iceBlockObj.x -= 4;
  	if(iceObj.iceBlockObj.right < 0){
  	removeEle(iceEle);
  	iceObj.state = 'passed';
    iceReset();
    }
  }
  possibleBladeCollision(helicopter.bladeShadowObj, iceObj.iceBlockObj);
  
  

  // End of IceBlocks!!!! IceBlocks!!!
  
  
  //Start of Crash!!!!!
  if(iceObj.state === 'hitBlade'){
  	bladeCollision();
  	if(helicopter.legPadObj.y < 515){
  		vert = 10;
  	}
  	else{
  		vert = 0;
  	}	
  }
  if(myHero.state === 'inTrouble'){
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
  	    blades[i].points[j].x += bladeX;
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
  }
  requestAnimationFrame(animate)
}
requestAnimationFrame(animate)