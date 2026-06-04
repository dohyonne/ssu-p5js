function setup() {
  createCanvas(600, 400);
  background(255);
  let cx = 300, cy = 200;
  fill(255, 219, 172);  //목, 얼굴
  stroke(210, 160, 120);
  rect(cx-20, cy+80, 40, 30);
  beginShape();
  vertex(cx - 120, cy - 80);
  vertex(cx - 110, cy - 40);
  vertex(cx - 100, cy);
  vertex(cx - 90, cy + 20);
  vertex(cx - 70, cy + 60);
  vertex(cx-30, cy + 90);
  vertex(cx, cy + 100);
  vertex(cx+30, cy + 90);
  vertex(cx + 70, cy + 60);
  vertex(cx + 90, cy + 20);
  vertex(cx + 100, cy);
  vertex(cx + 110, cy - 40);
  vertex(cx + 120, cy - 80);
  vertex(cx + 100, cy - 100);
  vertex(cx + 75, cy - 115);
  vertex(cx + 35, cy - 130);
  vertex(cx - 35, cy - 130);
  vertex(cx - 75, cy - 115);
  vertex(cx - 100, cy - 100);
  endShape(CLOSE);
  fill('#f24987');  //입술
  stroke(0);
  arc(cx, cy + 60, 45, 20, PI, TWO_PI, PIE);
  arc(cx, cy + 62, 40, 15, 0, PI, PIE);
  stroke(50);    //수염
  strokeWeight(3);
  fill('#2e292b');
  line(cx+5, cy+35, cx+10, cy + 45);
  line(cx+10, cy+35, cx+15, cy + 45);
  line(cx+15, cy+35, cx+20, cy + 45);
  line(cx+20, cy+35, cx+25, cy + 45);
  line(cx-5, cy+35, cx-10, cy + 45);
  line(cx-10, cy+35, cx-15, cy + 45);
  line(cx-15, cy+35, cx-20, cy + 45);
  line(cx-20, cy+35, cx-25, cy + 45);
  fill(255);    //눈
  ellipse(cx - 45, cy - 40, 36, 18);
  ellipse(cx + 45, cy - 40, 36, 18);
  fill(100, 60, 30);
  noStroke();
  ellipse(cx - 45, cy - 40, 13, 13);
  ellipse(cx + 45, cy - 40, 13, 13);
  noFill();
  stroke(0);    //안경
  strokeWeight(2);
  ellipse(cx - 45, cy - 40, 50, 44);
  ellipse(cx + 45, cy - 40, 50, 44);
  line(cx-20, cy-40, cx+20, cy-40);
  line(cx-70, cy-40, cx-110, cy-50);
  line(cx+70, cy-40, cx+110, cy-50);
  bezier(cx, cy - 30, cx - 8, cy - 5, cx - 10, cy + 5, cx, cy + 10);  //코
  fill(0);  //머리카락
  beginShape();
  vertex(cx + 120, cy - 80);
  vertex(cx + 100, cy - 100);
  vertex(cx + 75, cy - 115);
  vertex(cx + 35, cy - 130);
  vertex(cx - 35, cy - 130);
  vertex(cx - 75, cy - 115);
  vertex(cx - 100, cy - 100);
  vertex(cx - 120, cy - 80);
  vertex(cx, cy-100);
  endShape(CLOSE);
  beginShape();
  vertex(cx - 110, cy-20);
  vertex(cx -120, cy-80);
  vertex(cx-80, cy - 100);
  endShape(CLOSE);
  beginShape();
  vertex(cx + 125, cy-10);
  vertex(cx +120, cy-80);
  vertex(cx+40, cy - 100);
  endShape(CLOSE);
  beginShape();
  vertex(cx - 105, cy-10);
  vertex(cx -100, cy-80);
  vertex(cx-40, cy - 100);
  endShape(CLOSE);
  fill('#a8a49e');  //
  arc(cx, cy + 210, 300, 200, PI, TWO_PI, PIE);
  fill(255);
  arc(cx, cy + 210, 220, 140, PI, radians(210));
  arc(cx, cy + 210, 220, 140, radians(330), TWO_PI);
  line(cx-80, cy+165, cx-80, cy+210);
  line(cx+80, cy+165, cx+80, cy+210);
  noStroke();
  fill('#a8a49e');
  rect(cx-80, cy+165, 160, 45);
  //saveCanvas();
}