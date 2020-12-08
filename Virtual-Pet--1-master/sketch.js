var dog,dogimage,dogimage1
var database
var foodS,foodStock


function preload()

{
dogimage=loadImage("images/dogImg.png")
dogimage1=loadImage("images/dogImg1.png")

}


function setup() {
database= firebase.database()
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150)
  dog.addImage(dogimage)
  dog.scale=0.1
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  textSize(20)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogimage1)
}

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}





