#!/usr/bin/env node

let util  = require("./dist/util");
let config = require("./configs/config");


let shell = require("shelljs");

let npm_config_argv = JSON.parse(process.env.npm_config_argv) || {},
    args = npm_config_argv.original || [];

if (args.length > 2) {
    let context = util.generateContext();
    let command = args[2];
    if(config.tasks.indexOf(command) > -1){
        require("./lib/" + args[2]).main(context);
        return;
    }
};

console.log("Command not Found.");
console.log("Available Commands are listed below.\n");
require("./lib/" + "help").main({});

