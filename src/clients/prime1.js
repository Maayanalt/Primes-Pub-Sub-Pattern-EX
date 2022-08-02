import chalk from "chalk";

function prime1(num) {
  if (num % 10 === 1) console.log(chalk.red(num));
}

export default prime1;
