let sw = [0, 1, 2, 3, 4];

function setup() {
  //saveGif('pic.gif', 10);
}

function draw(){
  let fc = 0;
  createCanvas(600, 400);
  background(191);
  noStroke();
  push();
  fill('#97e9f5');
  quad(0, 30, 0, 400, 123+ 40 * sin(fc/15), 400, 123+ 40 * sin(fc/15), 30);
  pop();
  
  push();
  fill('#ecf597');
  square(40, 90, 290 + sin(fc/40) * 10);
  pop();
  
  push();
  fill('#f597c1');
  square(310, 200, 137);
  pop();
  
  fill('#a1f597');
  square(300+ sin(fc/40) * 10, 30, 180+ cos(fc/30) * 15);
  fill('#f5bf97');
  triangle(600, 220+ sin(fc/20) * 20, 600, 400, 320+ cos(fc/20) * 30, 400);
  fill('#ffffff');
  quad(200, 0, 400, 0, 200, 400, 400, 400);
  quad(0, 100, 0, 300, 600, 100, 600, 300);
  
  push();
  translate(300, 200);
  rotate(8 * sin(fc / 120));
  noStroke();
  fill('#ffa2a2');
  arc(0, -40, 60, 60, radians(120), radians(420), PIE);
  fill('#aaffaa');
  arc(-20*sqrt(3), 20, 60, 60, radians(0), radians(300), PIE);
  fill('#aaaaff');
  arc(20*sqrt(3), 20, 60, 60, radians(240), radians(540), PIE);
  pop();
  
  push();
  let dx = sin(fc/ 30) * 75;
  stroke(30, 120, 120);
  strokeWeight(8);
  //line(260, 260, 340, 260);
  line(230+ dx, 280, 370+ dx, 280);
  line(200+ dx, 300, 400+ dx, 300);
  stroke(30, 40, 80);
  strokeWeight(5+3*sin(fc/45));
  line(0, 0, 100, 400);
  line(600, 0, 500, 400);
  strokeWeight(sw[0]);
  fill('#abcdef');
  quad(300-80+dx, 320, 280-80+dx, 340, 300-80+dx, 360, 320-80+dx, 340);
  quad(300+80+dx, 320, 280+80+dx, 340, 300+80+dx, 360, 320+80+dx, 340);
  strokeWeight(sw[1]);
  fill('#fedcba');
  quad(300-60+dx, 320, 280-60+dx, 340, 300-60+dx, 360, 320-60+dx, 340);
  quad(300+60+dx, 320, 280+60+dx, 340, 300+60+dx, 360, 320+60+dx, 340);
  strokeWeight(sw[2]);
  fill('#abccba');
  quad(300-40+dx, 320, 280-40+dx, 340, 300-40+dx, 360, 320-40+dx, 340);
  quad(300+40+dx, 320, 280+40+dx, 340, 300+40+dx, 360, 320+40+dx, 340);
  strokeWeight(sw[3]);
  fill('#cbacba');
  quad(300-20+dx, 320, 280-20+dx, 340, 300-20+dx, 360, 320-20+dx, 340);
  quad(300+20+dx, 320, 280+20+dx, 340, 300+20+dx, 360, 320+20+dx, 340);
  strokeWeight(sw[4]);
  fill('#eae0fa');
  quad(300+dx, 320, 280+dx, 340, 300+dx, 360, 320+dx, 340);
  pop();
  stroke(30, 40, 80);
  strokeWeight(2);
  fill('#3cbdd5')
  let tx, ty, cx, cy;
  push();
  tx = 135;
  ty = 65;
  translate(tx, ty);
  rotate(fc/10);
  cx = 135;
  cy = 65;
  triangle(100 - cx, 50 - cy, 80 - cx, 100 - cy, 120 - cx, 100 - cy);
  triangle(100 - cx, 50 - cy, 100 - cx, 10 - cy, 150 - cx, 30 - cy);
  triangle(150 - cx, 30 - cy, 190 - cx, 30 - cy, 170 - cx, 80 - cy);
  triangle(170 - cx, 80 - cy, 120 - cx, 100 - cy, 170 - cx, 120 - cy);
  pop();
  push();
  tx = 600-135;
  ty = 65;
  translate(tx, ty);
  rotate(-fc/10);
  cx = 600-135;
  cy = 65;
  triangle(600-100-cx, 50-cy, 600-80-cx, 100-cy, 600-120-cx, 100-cy);
  triangle(600-100-cx, 50-cy, 600-100-cx, 10-cy, 600-150-cx, 30-cy);
  triangle(600-150-cx, 30-cy, 600-190-cx, 30-cy, 600-170-cx, 80-cy);
  triangle(600-170-cx, 80-cy, 600-120-cx, 100-cy, 600-170-cx, 120-cy);
  pop();
  
  noStroke();
  fill('#ffffff');
  circle(600-40+20*sin(fc/30), 340, 30-abs(5*sin(fc/30)));
  circle(600-40-20*sin(fc/30), 340, 30-abs(5*sin(fc/30)));
  circle(600-40, 340+20*sin(fc/30), 30-abs(5*sin(fc/30)));
  circle(600-40, 340-20*sin(fc/30), 30-abs(5*sin(fc/30)));
  noFill();
  strokeWeight(4);
  stroke('#f1fd16');
  ellipse(600-40, 340, 40, 80);
  stroke('#d116fd');
  ellipse(600-40, 340, 80, 40);
  stroke("#bbecf3");
  strokeWeight(3);
  arc(300, 140, 180, 100, radians(180+ sin(fc/8) * 12), radians(310+ sin(fc/8) * 12));
  arc(300, 120, 160, 100, radians(210+sin(fc/10) * 10), radians(375+sin(fc/8) * 10));
  arc(300, 100, 160, 100, radians(180+sin(fc/8) * 5), radians(345+sin(fc/10) * 5));
  strokeWeight(2);
  arc(300, 90, 180, 100, radians(210+cos(fc/10) * 4), radians(330+sin(fc/10) * 5));
  arc(300, 80, 180, 100, radians(220+cos(fc/12) * 3), radians(320+cos(fc/11) * 4));
}
