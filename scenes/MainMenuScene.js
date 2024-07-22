import Phaser from 'phaser'
import Meteor from '../entities/Meteor'

export default class MainMenuScene extends Phaser.Scene {

  constructor() {
    super('main-menu-scene')
  }

  preload() {
  }

  create() {
    const width = this.cameras.main.width
    const height = this.cameras.main.height

    this.background = this.add.image(0, 0, 'starfield').setOrigin(0,0)

    const titleText = this
    .add
    .bitmapText(width /2, height / 2 - 50, 'arcade', 'Meteor Swarm', 40)
    .setOrigin(0.5)
    .setDepth(1)

    this.startText = this
    .add
    .bitmapText(width / 2, height / 2 + 50, 'arcade', 'Press Space to Start', 30)
    .setOrigin(0.5)
    .setDepth(1)

    this
    .add
    .bitmapText(width / 2, height - 100, 'arcade', 'Made with Phaser', 18)
    .setOrigin(0.5)
    .setDepth(1)


    this.startTextVisible = true
    const timer = this.time.addEvent({
      delay: 800,                // ms
      callback: () => {
        this.startTextVisible = !this.startTextVisible
        this.startText.setVisible(this.startTextVisible)
      },
      callbackScope: this,
      loop: true
    })

    // generate our meteors
    this.meteorGroup = this.physics.add.group()
    this.meteorArray = []

    for (let i = 0; i < 10; i++) {
      const meteor = new Meteor(this, 300, 300)

      const xPos = Phaser.Math.RND.between(0, 800)
      const yPos = Phaser.Math.RND.between(0, 600)
      meteor.setPosition(xPos, yPos)
      meteor.setActive(true)
      meteor.setVisible(true)

      this.meteorGroup.add(meteor, true)
      this.meteorArray.push(meteor)
    }
    

    this.cursors = this.input.keyboard.createCursorKeys()
  }

  update(time, delta) {
    if (this.cursors.space.isDown) {
      this.scene.switch('play-scene')
    }

    for (const meteor of this.meteorArray) {
      meteor.update(time, delta)
    }
  }
}