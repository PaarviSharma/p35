
var dog,dogImg, happyDog, database, foodS, foodStock;

function preload() {
    dogImg = loadImage ("images/dogImg.png ");
    happyDog = loadImage("images/dogImg1.png");
}

function setup() {
    database = firebase.database();
    
    createCanvas(500,500);
    dog =createSprite(250,300,150,150);
    dog.addImage(dogImg);
    dog.scale=0.15;
    foodStock=database.ref("Food");
    foodStock.on("value", readStock )
    
}  
function draw(){
    background(46,139,87)
    if(keyWentDown(UP_ARROW)){
        writeStock(foodS)
        dog.addImage(happyDog)
    }
    drawSprites()
    fill("white")
    stroke("black")
    text("food remaining: "+foodS,170,200)
    textSize(13)
text("Note: press UP_ARROW key to feed Milk",130,10,300,20)
}
function readStock(data){
foodS= data.val()
}
function writeStock(x){
if(x<=0){
    x=0
}
else{
    x=x-1
}
database.ref("/").update({
    Food:x
})
}
