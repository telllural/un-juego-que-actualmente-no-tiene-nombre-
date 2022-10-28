var backgroundImage, bg;
var backgroundShop, bs;
var auto1, auto1img, auto1img2;
var auto2, auto2img;

function preload(){
    backgroundImage = loadImage("./assets/pista2.png");
    backgroundShop = loadImage("./assets/Fondo de Tienda.png");
    auto1img = loadAnimation("./assets/rojo1.png","./assets/rojo2.png")
    auto1img2 = loadImage("./assets/rojo2.png")
    auto2img = loadImage("./assets/azul1.png")
}
function setup(){
    createCanvas(windowWidth, windowHeight); 
    //console.log(windowWidth, windowHeight)
    bg = createSprite(width/2, height/2, 2560, 969);
    bg.velocityX=-4
    bg.addImage(backgroundImage);
    bg2 = createSprite(3840, height/2, 2560, 969);
    bg2.velocityX=-4
    bg2.addImage(backgroundImage);
    auto1 = createSprite(100, height-70, 10, 10)
    auto1.addAnimation("move", auto1img)
    auto1.scale = 3
    auto2 = createSprite(100, height-200, 10, 10)
    auto2.addImage(auto2img)
    auto2.scale = 3
    //bs = createSprite(200, 300, 100, 50)
    //bs.addImage(backgroundShop);
    //bs.scale = 2.23

    
}
function draw(){
    background(0);
    drawSprites();
    if (keyDown("right")) {
        auto1.x+=10
        
    }
    camera.position.x = auto1.x

    if (bg.x<-1280) {
        bg.x = 3835
    }
    if (bg2.x<-1280) {
        bg2.x = 3835
    }
}