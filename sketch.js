var hypnoticball , database;
var position;

function setup() {
database = firebase.database();
console.log(database);
createCanvas(500,500)
hypnoticball = createSprite(250,250,10,10)
hypnoticball.shapeColor = "red"
var hypnoticballposition = database.ref('ball/position');
hypnoticballposition.on("value",readPosition,showError)
}

function draw(){
    background("white")
    if(keyDown(LEFT_ARROW)){
       writePosition(-1,0)
    }
    
    if(keyDown(RIGHT_ARROW)){
      writePosition(1,0) 
    } 

    if(keyDown(UP_ARROW)){
        writePosition(0,-1)
    }

    if(keyDown(DOWN_ARROW)){
        writePosition(0,1)
    }
 drawSprites()
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y  
    })
}

function readPosition(data){
    position = data.val();
    console.log(position.x)
    hypnoticball.x = position.x;
    hypnoticball.y = position.y;
}

function showError(){
    console.log("error in writing the database")
}