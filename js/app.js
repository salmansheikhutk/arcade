// Enemies our player must avoid
var enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x position
    // y position
    this.x = x;
    this.y= y + 55;
    this.speed = speed;
    this.step = 101;
    this.boundary = this.step * 5;
    this.resetPos = -this.step;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // If enemy is not passed boundary
    if(this.x < this.step * 4){
      // Move forward
      // Increment x by speed * dt
      this.x += this.speed * dt;
    }

    // else
      // reset pos to start
    else {
      this.x = this.resetPos;
    }

};

// Draw the enemy on the screen, required method for game
enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Place all enemy objects in an array called allEnemies

const beetle1 = new enemy(-101,0, 200);
const beetle2 = new enemy(-101,83, 300);
const beetle3 = new enemy((-101*2.5),83, 300);
const allEnemies = [];
allEnemies.push(beetle1,beetle2,beetle3);
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//Hero class
  //Constructor
    //properties
      // x position
      // y position
      // Sprite image

var Hero = function(){


    this.step = 101;
    this.jump = 83;
    this.startX = this.step * 2;
    this.startY = (this.jump * 4) + 55;
    this.sprite = 'images/char-boy.png';
    this.x = this.startX;
    this.y = this.startY;


    // methods
      // update position
      this.update = function() {
        for(let enemy of allEnemies){
          console.log(enemy);
        }
        console.log(this.y, enemy.y);
      }


        // check collision here

          // did player x and y collide with enemy?

        // check win here?
          // did player x and y reach final tile?
      // render
        // draw player sprite on current x and y coord position
      this.render = function() {
      ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
      }

      // handle keyboard input
        // update player's x and y property according to input
      this.handleInput = function(input){
        switch(input){
          case 'left':
            if(this.x > 0){
              this.x -= this.step;
            }
            break;
          case 'up':
            if(this.y > 0){
              this.y -= this.jump;
            }
            break;
          case 'right':
            if(this.x < 400){
              this.x += this.step;
            }
            break;
          case 'down':
          if(this.y < this.jump*4){
              this.y += this.jump;
          }
            break;
        };

      };
      // reset hero
        // set x and y starting x and y

};



Hero.update();

// Now instantiate your objects.

// Place the player object in a variable called player
const player = new Hero();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
