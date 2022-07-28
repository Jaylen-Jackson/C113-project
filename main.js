function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
  fill(0, 128, 0);
  circle(50, 50, 70);
  fill(0, 128, 0);
  circle(550, 450, 70);
  fill(0, 128, 0);
  circle(590, 50, 70);
  fill(0, 128, 0);
  circle(50, 450, 70);
}

function draw() {
  Image(video, 0, 0, 640, 480);
}

function take_snapshot(){    
  save('student_name.png');
}