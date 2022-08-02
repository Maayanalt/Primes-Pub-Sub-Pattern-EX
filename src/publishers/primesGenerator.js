import MyEvent from "../common/MyEvent.js";

class PrimesGenerator extends MyEvent {
  constructor() {
    super();
  }

  start(num) {
    let count = 1;
    for (let i = 2; i <= num; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        setTimeout(() => this.emit("prime", i), count * 1000);
        count++;
      }
    }
  }
}

export default PrimesGenerator;
