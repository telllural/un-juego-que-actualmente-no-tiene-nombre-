var backgroundImage, bg;
var backgroundShop, bs;
var auto1, auto1img, auto1img2;
var auto2, auto2img;

function preload(){
    backgroundImage = loadImage("./assets/pista1.png");
    backgroundShop = loadImage("./assets/Fondo de Tienda.png");
    auto1img = loadAnimation("./assets/rojo1.png","./assets/rojo2.png")
    auto1img2 = loadImage("./assets/rojo2.png")
    auto2img = loadImage("./assets/azul1.png")
}
function setup(){
    createCanvas(windowWidth, windowHeight); 
    //bg = createSprite(900, 300);
    //bg.addImage(backgroundImage);
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
    background(backgroundImage);
    drawSprites();
    if (keyDown("right")) {
        auto1.x+=10
        
    }
    //auto1.x = cameraX

    if (x<0) {
        background.x = height/2
    }
}