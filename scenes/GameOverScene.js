import Phaser from 'phaser'

export default class GameOverScene extends Phaser.Scene {

  constructor() {
    super('game-over-scene')
  }

  preload() {
  }

  create() {
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.background = this.add.image(0, 0, 'starfield').setOrigin(0,0)

    const titleText = this.add
    .bitmapText(width /2, height / 2 - 50, 'arcade', 'GAME OVER', 40)
    .setOrigin(0.5)
  }

}