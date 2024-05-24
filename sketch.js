function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    stroke("black");
    fill("blue");
  
    if(mouseIsPressed){
      rect(mouseX, mouseY, 5, 20);
    }
  
  }