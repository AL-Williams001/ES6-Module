export default class player {
  constructor(name, health, strenght) {
    this.name = name;
    this.health = health;
    this.strenght = strenght;
  }

  attact(target) {
    target.health -= this.strenght;
    console.log(
      `${this.name} attacked ${target.name} and did ${this.strenght} damage`
    );
  }

  isAlive() {
    return this.health > 0;
  }
}
