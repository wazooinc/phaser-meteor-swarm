import Phaser from 'phaser'

export default class Meteor extends Phaser.Physics.Arcade.Image {

  constructor(scene, x, y) {
    super(scene, x, y)

    this.meteorType = Phaser.Math.RND.between(0, 2)
    switch(this.meteorType) {
      case 0:
        this.setTexture('meteor-small')
      break;
      case 1:
        this.setTexture('meteor-med')
      break;
      case 2:
        this.setTexture('meteor-large')
      break;
    }

    this.speed = Phaser.Math.GetSpeed(100, 1)
    this.direction = Phaser.Math.RND.angle()
    this.angleRotation = Phaser.Math.RND.between(0.8, 2.5)
    this.active = false
    this.visible = false
    this.factor = 1

  }

  update(time, delta) {
    if (this.active) {
      this.x += this.factor * Math.cos(this.direction) * this.speed * delta
      this.y += Math.cos(this.direction) * this.speed * delta
      this.angle += this.angleRotation

      if (this.x < 0) {
        this.x = 800
      } else if (this.x > 800) {
        this.x = 0
      }

      if (this.y < 0) {
        this.y = 600
      } else if (this.y > 600) {
        this.y = 0
      }
    }
  }
}