function mersenne(num) {
  for (let i = 1; i < num; i++) {
    if (2 ** i - 1 === num) console.log(`IT'S a MERSENNE NUMBER ${num}`);
  }
}

export default mersenne;
