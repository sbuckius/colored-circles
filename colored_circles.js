// ===============================
// Global variable declarations
// ===============================

// Declared but not initialized yet — will get values later in setup()
let circleX;
let circleY;
let circleRandom;

// Declared and initialized immediately
let circleDiameter = 50; 

function setup() {
  // Create a canvas that fills the window
  createCanvas(windowWidth, windowHeight);

  // -----------------------------------------------
  // About width and height:
  // -----------------------------------------------
  // In p5.js, 'width' and 'height' are special built-in variables.
  // They automatically store the size of the canvas (in pixels).
  // After createCanvas(w, h):
  //   - width  = w  (the canvas width)
  //   - height = h  (the canvas height)
  //
  //
  // So we can use them to center shapes or position things relative to the canvas.
  // Here we’re setting the circle to start in the center:
  circleX = width / 2;
  circleY = height / 2;

  background(220);
  noStroke();
  circleRandom = random(0,255);
}

function draw() {
   // background(220);
  // Set fill color based on mouse position using modulus (%)
  // % keeps values between 0–254, cycling through colors as the mouse moves
  circleRandom = random(0,255);
  fill(mouseX % 255, mouseY % 255, 100); 

  // Use the circle’s position variable & size variables (circleX, mouseY, circleY) for drawing
  ellipse(circleX, mouseY, circleRandom, circleRandom); 
  
    fill(mouseY % 255, mouseX % 255, 200); 
    ellipse(circleY, mouseX, circleRandom, circleDiameter);
    
    circleX = circleX + 1;
    circleY = circleY + 1;

}

function mousePressed() {
  background(220); // Clear the canvas
}


function windowResized() {
  // When the window changes size, update the canvas dimensions
  resizeCanvas(windowWidth, windowHeight);
}
