import PrimesGenerator from "./publishers/primesGenerator.js";

const prime = new PrimesGenerator();

prime.on("prime", (num) => console.log(num));
prime.start(10);
