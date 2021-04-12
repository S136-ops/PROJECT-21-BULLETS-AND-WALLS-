function setup() {

speed=random(223,321)
weight=random(30,52)
thickness=random(22,83)


  createCanvas(1600,400);
  bullet=createSprite(50,200,40,5)
bullet.shapeColor=color(255);
bullet.velocityX=speed;
wall=createSprite(1100,200,thickness,height/2)

}

function draw() {
  background("black"); 
 
if( isTouching(wall,bullet)){

if(damage<=10){
wall.shapeColor=color(0,255,0)

}

if(damage>10){
  wall.shapeColor=color(255,0,0)
  
  }

}




  drawSprites();
}


function isTouching(a,b){
  if(a.x-b.x<(a.width+b.width)/2){
  b.velocityX=0;
  
  
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  
  if(damage<=10){
    return true;
    
    }
   
    if(damage>10){
      return true;
      
      }
  
  
  }
  }