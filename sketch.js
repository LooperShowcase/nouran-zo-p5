function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background(255, 241, 230);

  let seconds = second();
  let minutes = minute();
  let hours = hour();

  //seconds

  translate(width / 2, height / 2);
  rotate(-90);

  noFill();
  strokeWeight(8);
  stroke(254, 200, 154);
  let secondsArc = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondsArc);

  //minutes
  stroke(189, 224, 254);
  let minutesArc = map(minutes, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, minutesArc);

  //hours
  stroke(253, 226, 228);
  let hourArc = map(hours % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hourArc);

  push();
  stroke("white");
  rotate(secondsArc);
  line(0, 0, 150, 0);
  pop();

  push();
  stroke(226, 236, 233);
  rotate(minutesArc);
  line(0, 0, 125, 0);
  pop();

  push();
  stroke(223, 231, 253);
  rotate(hourArc);
  line(0, 0, 100, 0);
  pop();

  stroke(255, 202, 212);
  strokeWeight(1);
  rotate(90);
  text("12", 0, -165);

  stroke(255, 202, 212);
  strokeWeight(1);
  text("3", 165, 0);

  stroke(255, 202, 212);
  strokeWeight(1);
  text("6", 0, 165);

  stroke(255, 202, 212);
  strokeWeight(1);
  text("9", -165, 0);

  push();
  point(0, 0);
  stroke("white");
  strokeWeight(20);
  pop();
}
