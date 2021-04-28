export default class Snake {
  constructor(scene) {
    this.scene = scene;
    this.scene.add.rectangle(10, 10, 16, 16, 0xff0000);
  }

  update(time) {}
}
