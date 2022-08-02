import { EventEmitter } from "events";

class PrimesGenerator extends EventEmitter {
  constructor() {
    super();
  }

  *generatorPrime(num) {
    yield 2;
    for (let i = 3; i <= num; i = i + 2) {
      if (this.primeCheck(i)) yield i;
    }
  }

  start(num) {
    const generator = this.generatorPrime(num);
    const IntervalID = setInterval(() => {
      const current = generator.next().value;
      if (current) this.emit("prime", current);
      else clearInterval(IntervalID);
    }, 1000);
  }

  primeCheck(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}

export default PrimesGenerator;
