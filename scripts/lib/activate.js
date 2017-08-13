let hooks = require("../dist/hooks");

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
        console.log("Available arguments takes [--mobile, --web, --native]");
    }
}
exports.main = main;