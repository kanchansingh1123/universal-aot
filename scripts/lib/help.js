
let chalk = require("chalk");
let config = require("../configs/config");

let helps = config.taskNameHelpers || {};
function main(context){
    for(let key in helps){
        console.log(chalk.underline(chalk.blue(`> Command : ${chalk.green(key)}`)));
        console.log(chalk.magenta(helps[key]));
    }
}
exports.main = main;