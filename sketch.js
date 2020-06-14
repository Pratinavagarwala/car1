var ob1,ob2,ob3,ob4;
var speed,weight;
var wall;

 function setup() {
  createCanvas(1600,400);

  ob1=createSprite(100,50,90,40);
  ob1.shapeColor="gold";

  ob2=createSprite(100,150,90,40);
  ob2.shapeColor="silver"; 

  ob3=createSprite(100, 250, 90, 40);
  ob3.shapeColor="green";

  ob4= createSprite(100,350,90,40);
  ob4.shapeColor="blue";

  speed = random(55,90);
  weight = random(400,1500);
  
  wall = createSprite(1120,200,50,400);
  wall.shapeColor= "grey";
  

}

function draw() {
  background(0); 

  bounceoff(ob1,wall);
  bounceoff(ob2,wall);
  bounceoff(ob3,wall);
  bounceoff(ob4,wall);
  
  if(isTouching(ob4,wall)){
    
    ob4.shapeColor="silver";
    ob4.velocityX= 0;
    
  }else{
    ob2.shapeColor="silver"; 
    ob1.shapeColor="gold";
  }

   ob4.velocityX=speed;
   ob3.velocityX=speed;
   ob2.velocityX=speed;
   ob1.velocityX=speed;


  drawSprites();
}














