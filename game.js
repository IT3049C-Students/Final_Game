var gameSettings = {
  playerSpeed: 125,
  maxPowerups: 3,
  powerUpVel: 55,
}

var config = {
  width: 512,
  height: 544,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade:{
        debug: false,
        debugShowVelocity: false
    }
  }
}


var game = new Phaser.Game(config);
