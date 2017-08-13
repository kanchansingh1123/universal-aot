
let Q = require("q");
let util  = require("../dist/util");
let build = require("../dist/build");
let hooks = require("../dist/hooks");
let shell = require("shelljs");

let EXECUTION_PIPE = [];
let currentSate = hooks.getModuleStates();

function main(context){

    if(context.isNative){ // Pass the control to the native
        return require("./native").main(context);
    }

    if(context.isWeb){
        EXECUTION_PIPE.push("WebBuild");
    }
    if(context.isMobileWeb){
        EXECUTION_PIPE.push("MobileBuild");
    }

    executePipe(context);
}
exports.main = main;

function executePipe(context){
    if(EXECUTION_PIPE.length == 0){
        hooks.buildComplete(currentSate);
        return;
    }
    let script = EXECUTION_PIPE.shift();

    hooks["pre" + script](context);

    util.runScript(script, context)
    .then(() => {
        hooks[script](context);
        hooks["post" + script](context);
    })
    .catch(() => {
        hooks["post" + script](context);
        shell.echo(`Sorry, unable to build ${scriptName}.`);
        shell.exit(1);
    })
    .finally(() => {
        executePipe(context);
    })
}


