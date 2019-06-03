export class CortiumRate {

  constructor(name) {
    this.name = name;
    this.cortiumLevel = 10000;
  }

  setCortiumDepletion() {
    setInterval(() => {
      this.cortiumLevel--;
    }, 500);
  }
}
