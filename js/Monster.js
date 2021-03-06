/* 1 Caracteristics of Monsters
1.1 Monsters should appear randomly from outside of 
the canvas (from the right side).

1.2 But Monsters must stay in the height of canvas : 
so I must substract  the height of the monster

1.3 I must have multiple monsters so I must create
first an empty array in the Game Class : The loop 
will create a monster and push it in the array every 1.5 seconds 
1.4 My monsters should move so I must define the move of the 
monster and call it in the draw of the monster.
1.5 I must call the draw monster in the game but it's an array so I must do a loop */

class Monster {
  constructor(speed) {
    this.width = 100;
    this.height = 100;
    this.x = CANVAS_WIDTH + this.width;
    this.y = random(0, CANVAS_HEIGHT - this.height);
    this.health = 400;
    this.strength = 100;
    const theRealSpeed = 1 * speed;
    this.speed = theRealSpeed;
    this.hasHit = false;
    this.numberOfHits = 0;
    const randomIndex = Math.floor(random(0, MONSTERS_GALLERY.length - 1));

    this.shipImg = MONSTERS_GALLERY[randomIndex];
  }

  draw() {
    const index = this.numberOfHits % this.shipImg.length;
    //  console.log(index);
    const img = this.shipImg[this.numberOfHits % this.shipImg.length];
    image(img, this.x, this.y, this.width, this.height);
    this.x -= this.speed;
  }

  /*We need these values to do the collision check and the get values are 
  computer values and used for external purpose*/
  get bottomSide() {
    return this.y + this.height;
  }

  get topSide() {
    return this.y;
  }

  get leftSide() {
    return this.x;
  }
  get rightSide() {
    return this.x + this.width;
  }
}
