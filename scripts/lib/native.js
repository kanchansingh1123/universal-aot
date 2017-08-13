
let Q = require("q");
let util  = require("../dist/util");
let build = require("../dist/build");
let hooks = require("../dist/hooks");
let shell = require("shelljs");

let EXECUTION_PIPE = [];
let currentSate = hooks.getModuleStates();

function main(context){
    if(context.isAndroid){
        EXECUTION_PIPE.push({
            type: "NativeBuild",
            platform: "android"
        });
    }
    if(context.isIos){
        EXECUTION_PIPE.push({
            type: "NativeBuild",
            platform: "ios"
        });
    }
    // if(context.isWindows){
    //     EXECUTION_PIPE.push({
    //         type: "NativeBuild",
    //         platform: "windows"
    //     });
    // }

    executePipe(context);
}
exports.main = main;

function executePipe(context){
    if(EXECUTION_PIPE.length == 0){
        hooks.buildComplete(currentSate);
        return;
    }
    let script = EXECUTION_PIPE.shift(),
        scriptName = script.type,
        platform =  script.platform;

    hooks["pre" + scriptName](context);

    util.runNativeScript(scriptName, platform, context)
    .then(() => {
        hooks[scriptName](context);
        hooks["post" + scriptName](context);
    })
    .catch(() => {
        hooks["post" + scriptName](context);
        shell.echo(`Sorry, unable to build ${scriptName} for platform ${platform}.`);
        shell.exit(1);
    })
    .finally(() => {
        executePipe(context);
    })
}