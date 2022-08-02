import mersenne from "./clients/mersenne.js";
import prime1 from "./clients/prime1.js";
import prime4Digits from "./clients/prime4Digits.js";
import PrimesGenerator from "./publishers/primesGenerator.js";

function run() {
  const prime = new PrimesGenerator();

  prime.on("prime", (num) => mersenne(num));
  prime.on("prime", (num) => prime1(num));
  prime.on("prime", (num) => prime4Digits(num));
  prime.start(1100);
}

run();
