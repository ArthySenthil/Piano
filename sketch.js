// Create global variables for sounds
var piano_A,piano_B,piano_C_sharp,piano_D_sharp,piano_D,piano_E,piano_F,piano_F_sharp,piano_G_sharp,piano_G,piano_A_sharp,piano_C;

// Create variables for all the KEYS. 
var keyC,keyD,keyCsharp,keyE,keyDsharp,keyF,keyG,keyFsharp,keyB,keyAsharp;

function preload(){
  piano_A = loadSound('piano_A.mp3');
  piano_B = loadSound('piano_B.mp3');
  piano_C_sharp = loadSound('piano_C_sharp.mp3');
  piano_D_sharp = loadSound('piano_D_sharp.mp3');
  piano_D = loadSound('piano_D.mp3');
  piano_E = loadSound('piano_E.mp3');
  piano_F_sharp = loadSound('piano_F_sharp.mp3');
  piano_F = loadSound('piano_F.mp3');
  piano_G_sharp = loadSound('piano_G_sharp.mp3');
  piano_G = loadSound('piano_G.mp3');                   piano_C = loadSound('piano_C.mp3');
  piano_A_sharp = loadSound('piano_A_sharp.mp3');
}
 
function setup() {
  createCanvas(400, 400);
  keyC = createSprite(27,200,57,200);
  keyC.shapeColor="white";
  keyD = createSprite(85,200,57,200);
  keyD.shapeColor="white";
  keyCsharp = createSprite(57,180,37,160);
  keyCsharp.shapeColor="black";
  keyE = createSprite(143,200,57,200);
  keyE.shapeColor="white";
  keyDsharp = createSprite(115,180,37,160);
  keyDsharp.shapeColor="black";
  keyF = createSprite(201,200,57,200);
  keyF.shapeColor="white";
  keyG = createSprite(259,200,57,200);
  keyG.shapeColor="white";
 keyFsharp = createSprite(231,180,37,160);
 keyFsharp.shapeColor="black";
  keyA = createSprite(317,200,57,200);
 keyA.shapeColor="white";
  keyGsharp = createSprite(289,180,37,160);
 keyGsharp.shapeColor="black";
  keyB = createSprite(375,200,57,200);
 keyB.shapeColor="white";
  keyAsharp = createSprite(347,180,37,160);
 keyAsharp.shapeColor="black";

  
  
  
}

 

 
function draw() {
  
   background("red");
   
  
   
  if(keyDown("1")){
    piano_C_sharp.play();
  
   }
   if(keyDown("2")){
        piano_D_sharp.play();
  
   }
   if( keyDown("3")){
        piano_F_sharp.play();
  
   }
   if( keyDown("4")){
        piano_G_sharp.play();
  
   }
   if(keyDown("5")){
        piano_A_sharp.play();
  
   }
   if(keyDown ("c")){
        piano_C.play();
  
   }
   if(keyDown ("d")){
        piano_D.play();
  
   }
   if(keyDown ("e")){
        piano_E.play();
  
   }
   
   if(keyDown ("f")){
        piano_F.play();
  
   }
   
  if(keyDown ("g")){
       piano_G.play();
  
   }
  if(keyDown ("a")){
       piano_A.play();
  
  }
   
  if(keyDown ("b")){
       piano_B.play();
  
  }
  
  drawSprites();
  
  fill("black");
  textSize(18);
 
   text("C",27,278);
   text("D",85,278);
   text("E",143,278);
   text("F",201,278);
   text("G",259,278);
   text("A",317,278);
   text("B",375,278);
   
  fill("white");
  textSize(18);
  text("Press the alphabet keys to enjoy Music!",40,50);
  text("Press 1,2,3,4 & 5 for the sharp notes",50,350);
   text("C#",47,228);
   text("D#",105,228);
   text("E#",133,228);
   text("F#",221,228);
   text("G#",279,228);
   text("A#",337,228);
  
   text("1",47,248);
   text("2",105,248);
   text("3",221,248);
   text("4",279,248);
   text("5",337,248);
}
