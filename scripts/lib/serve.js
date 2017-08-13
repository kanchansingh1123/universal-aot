
let hooks = require("../dist/hooks");
let util  = require("../dist/util");

function main(context){
    
    if(context.isWeb){
        hooks.preWebBuild(context);
    }
    else if(context.isMobileWeb){
        hooks.preMobileBuild(context);
    }
    else if(context.isNative){
        hooks.preNativeBuild(context);
    }
    else{
        hooks.preWebBuild(context);
        //console.log("Available arguments takes [--mobile, --web, --native]");
        //return;
    }
    execute("Serve", context);
}
exports.main = main;

function execute(script, context){

    util.runScript(script, context)
    .then(() => {
    })
    .catch((error) => {
        shell.echo(`> Error \n ${error}.`);
        shell.exit(1);
    })
    .finally(() => {
        executePipe(context);
    })
}

