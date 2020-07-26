//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImage;
function preload(){

  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog  = createSprite(250,300,150,150);
  dog.addImage(dogImage);
  dog.scale = 0.15;
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })

}

