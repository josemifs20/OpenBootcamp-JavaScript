import chalk from 'chalk';
import { suma, multiplica } from "./controller.js";
// import suma, { multiplica } from "./controller.js";

// console.log(suma(1,2));
// const log = chalk.bold.green;
// console.log(log(multiplica(4,5)));
console.log(multiplica(suma(1, 2), suma(4, 5)));
console.log(chalk.green(multiplica(suma(1, 2), suma(4, 5))))

// import * as myController from "./controller.js";

// console.log(myController.suma(1,2));
// console.log(myController.multiplica(4,5));