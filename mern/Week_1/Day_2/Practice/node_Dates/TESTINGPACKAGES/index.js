import { ago, dateformated, daybefore, numbersdate } from "./utils/formatDate.js";
import chalk from "chalk";

console.log (dateformated("2003-08-01T12:34:56Z"))
console.log (dateformated("2003-06-18T12:34:56Z"))
console.log (dateformated("2014-11-15T05:34:56Z"))
console.log (dateformated("2010-11-30T12:34:56Z"))
console.log (dateformated("2019-09-09T12:34:56Z"))
console.log(daybefore("1923-04-01T12:34:56Z"))
console.log(daybefore("2003-01-21T12:34:56Z"))
console.log(daybefore("2016-11-11T05:34:56Z"))
console.log(daybefore("2003-10-24T12:34:56Z"))
console.log(daybefore("2007-07-09T12:34:56Z"))



console.log(chalk.numbersdate("1923-04-01T12:34:56Z"))
console.log(chalk.numbersdate("2003-01-21T12:34:56Z"))
console.log(ago("2024-07-09T12:34:56Z"))
console.log(chalk.red(numbersdate("2021-11-11T05:34:56Z")))
console.log(chalk.blueBright(numbersdate("2003-10-24T12:34:56Z")))
console.log(chalk.numbersdate("2007-07-09T12:34:56Z"))