let haha = [];

let smoke;
let b = [];

function preload() {
  smoke = loadImage('b/smoke.png');
  for (let i = 0; i < 5; i++) {
    b[i] = loadImage(`b/stress${i}.png`);
  }
  bomb = loadSound("bomb.mp3");
}

function setup() {
  createCanvas(1400, 650);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(100, 200);

    let b = new Haha(x, y, r);
    haha.push(b);
  }
}

function mousePressed() {
  bomb.play();
  for (let i = 0; i < haha.length; i++) {
    haha[i].clicked(mouseX, mouseY);
  }
}


function draw() {
  background(29,7,7);
  for (let i = 0; i < haha.length; i++) {
    haha[i].move();
    haha[i].show();
  }
}

class Haha {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.stress = random(b);

  }

  clicked(px, py) {

    if (px > this.x && px < this.x + this.r && py > this.y && py < this.y + this.r) {
      this.stress = smoke;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(this.stress, this.x, this.y, this.r, this.r);

  }
}
