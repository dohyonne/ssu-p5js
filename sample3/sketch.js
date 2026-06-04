let cx = 300, cy = 200, bgColor = 255, cr = 168, cg = 164, cb = 158;
let s1 = true, s2 = true, s3 = true, s4 = true, s5 = true, s6 = true, s7 = true, s8 = true;
let hatState = 0, hatX = 515, hatY = 115, hatDX = 60, hatDY = 50, hatL = 40;
let gState = 0, gX = 515, gY = 205, gDX = 20, gDY = 18, gCX = 25, gCY = 10, gLX = 20;
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(bgColor);
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
  if(s1)line(cx+5, cy+35, cx+10, cy + 45);
  if(s2)line(cx+10, cy+35, cx+15, cy + 45);
  if(s3)line(cx+15, cy+35, cx+20, cy + 45);
  if(s4)line(cx+20, cy+35, cx+25, cy + 45);
  if(s5)line(cx-5, cy+35, cx-10, cy + 45);
  if(s6)line(cx-10, cy+35, cx-15, cy + 45);
  if(s7)line(cx-15, cy+35, cx-20, cy + 45);
  if(s8)line(cx-20, cy+35, cx-25, cy + 45);
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
  fill(cr, cg, cb);  //옷
  arc(cx, cy + 210, 300, 200, PI, TWO_PI, PIE);
  fill(bgColor);
  arc(cx, cy + 210, 220, 140, PI, radians(210));
  arc(cx, cy + 210, 220, 140, radians(330), TWO_PI);
  line(cx-80, cy+165, cx-80, cy+210);
  line(cx+80, cy+165, cx+80, cy+210);
  noStroke();
  fill(cr, cg, cb);
  rect(cx-80, cy+165, 160, 45);
  fill(168, 164, 158);
  fill(160, 120, 90);
  stroke(100, 80, 60);
  strokeWeight(4);  //장식장
  rect(440, 30, 150, 270, 5, 5, 5, 5);
  fill(130, 90, 60);
  rect(430, 20, 170, 20, 10, 10, 0, 0);
  line(440, 120, 590, 120);
  line(440, 210, 590, 210);
  stroke(0);
  fill('#5692d6');  //모자
  if(hatState == 1){
    hatY -= 7;
    if(hatY < -30){
      hatX = cx;
      hatState = 2;
      hatDX = 240;
      hatDY = 200;
      hatL = 160;
    }
  }else if(hatState == 2){
    hatX = cx;
    hatY = constrain(hatY + 7, 0, cy-80);
  }
  arc(hatX, hatY, hatDX, hatDY, PI, TWO_PI, PIE);
  line(hatX-hatL, hatY, hatX, hatY);
  fill(0);
  strokeWeight(2);
  if(gState == 1){  //선글라스
    gY -= 7;
    if(gY < -30){
      gX = cx;
      gState = 2;
      gDX = 50;
      gDY = 44;
      gCX = 45;
      gCY = 0;
    }
  }else if(gState == 2){
    gX = cx;
    gY = constrain(gY + 7, 0, cy-40);
  }
  ellipse(gX - gCX, gY - gCY, gDX, gDY);
  ellipse(gX + gCX, gY - gCY, gDX, gDY);
  line(gX-gLX, gY - gCY, gX+gLX, gY - gCY);
  strokeWeight(1);
  noStroke();
  if(cx-60 <= mouseX && mouseX <= cx + 60 && cy <= mouseY && mouseY<= cy + 80){
    if (mouseY >= cy + 30 && mouseY <= cy + 50) {
    if (mouseX >= cx + 5 && mouseX <= cx + 10) {
      s1 = false;
    } else if (mouseX >= cx + 10 && mouseX <= cx + 15) {
      s2 = false;
    } else if (mouseX >= cx + 15 && mouseX <= cx + 20) {
      s3 = false;
    } else if (mouseX >= cx + 20 && mouseX <= cx + 25) {
      s4 = false;
    } else if (mouseX >= cx - 10 && mouseX <= cx - 5) {
      s5 = false;
    } else if (mouseX >= cx - 15 && mouseX <= cx - 10) {
      s6 = false;
    } else if (mouseX >= cx - 20 && mouseX <= cx - 15) {
      s7 = false;
    } else if (mouseX >= cx - 25 && mouseX <= cx - 20) {
      s8 = false;
    }
    }
    rect(mouseX, mouseY-10, 50, 20);
    for(let i=-5;i<=5;i+=5)
      rect(mouseX-5, mouseY+i, 6, 2);
  }
  if (keyIsDown(LEFT_ARROW)) {
    cx -= 3;
  }else if (keyIsDown(RIGHT_ARROW)) {
    cx += 3;
  }
}
function keyPressed() {
  if (key === 'r' || key === 'R') {
    cr = random(0, 256);
  } else if (key === 'g' || key === 'G') {
    cg = random(0, 256);
  } else if (key === 'b' || key === 'B') {
    cb = random(0, 256);
  } else if(key == '1'){
    saveGif('gif', 10);
  }
}
function mousePressed() {
  if(440 <= mouseX && mouseX <=590){
      if(30 <= mouseY && mouseY <=120){
        if(hatState == 0)
          hatState = 1;
      }else if(120 < mouseY && mouseY <= 210){
        if(gState == 0)
          gState = 1;
      }
  }
}