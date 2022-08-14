function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    
    
}
function draw() {
    circle(50, 50, 60);
    stroke(255, 0, 0);
    fill(255, 0, 0)
    circle(590, 50, 60);
    circle(590, 430, 60);
    circle(50, 430, 60);
    rect(22, 30, 55, 400);
    rect(560, 30, 55, 400);
    
}

function take_snapshot() {
    save('my pic.png');
}