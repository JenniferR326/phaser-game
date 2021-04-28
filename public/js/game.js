import MainScene from './MainScene.js';

// Creating game space in div with id phaser-game
const config = {
  width: 640,
  height: 640,
  type: Phaser.AUTO,
  parent: 'phaser-game',
  scene: [MainScene],
};

// Create phaser game
new Phaser.Game(config);
