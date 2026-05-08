let bg;
let img1, img2, img3, img4, img5, img6;
let cursor;

function setup(){
  bg = loadImage('assets/waterbackground.png');
  img1 = loadImage('assets/clownfish.png');
  img2 = loadImage('assets/copperstripe.png');
  img3 = loadImage('assets/magmafish.png');
  img4 = loadImage('assets/royalgamma.png');
  img5 = loadImage('assets/surgeonfish.png');
  img6 = loadImage('assets/tigerbarb.png');
  cursor = loadImage('hook.png');
  createCanvas(720,400);
  noCursor();
}
function isHovered(x,y,w,h){
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}
function drawFish(img,x,y,w,h){
  let hovered = isHovered(x,y,w,h);
  push();
    translate(x + w / 2, y + h / 2);
    if (hovered) rotate(HALF_PI);
    image(img, -w / 2, -h / 2, w, h);
  pop();
}
function draw(){
  background(bg);
  drawFish(img1,10,2,200,200);
  drawFish(img2,500,70,200,200);
  drawFish(img3,350,250,200,200);
  drawFish(img4,170,100,200,200);
  drawFish(img5,310,3,200,200);
  drawFish(img6,20,200,200,200);
  drawFish(cursor, mouseX, mouseY,80,80);
}










