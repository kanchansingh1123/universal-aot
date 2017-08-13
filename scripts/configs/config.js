

let DEV_SERVER_COMPLETION_STRING = 'build dev finished';
exports.DEV_SERVER_COMPLETION_STRING = DEV_SERVER_COMPLETION_STRING;

let scriptYargs = {
    mobile : "--mobile",
    web : "--web",
    prod: "--prod",
    native: "--native"
}
exports.scriptYargs = scriptYargs;

let yargEnv = {
    "--env=dev" : "dev",
    "--env=developer" : "developer",
    "--env=uat" : "uat",
    "--env=prod" : "prod",
    "default" : "developer",
}
exports.yargEnv = yargEnv;

let scriptNameMappings = {
    MobileBuild : "build",
    WebBuild : "build",
    NativeBuild: scriptYargs.native,
    Prod : scriptYargs.prod,
    Serve : "ionic:serve",
    Build : "build"
}
exports.scriptNameMappings = scriptNameMappings;

let staticFilePaths = {
    INDEX_HTML : "./src/index.html",
    INDEX_WEB_HTML : "./src/index-web.html",
    INDEX_MOBILE_HTML : "./src/index-mobile.html",
    INDEX_NATIVE_HTML : "./src/index-native.html",

    MAIN_TS : "./src/app/main.ts",
    MAIN_WEB_TS : "./src/app/main-web.ts",
    MAIN_MOBILE_TS : "./src/app/main-mobile.ts",
    MAIN_NATIVE_TS : "./src/app/main-native.ts"
}
exports.staticFilePaths = staticFilePaths;

let taskNames = [
    "build",
    "activate",
    "serve",
    "help"
];
exports.tasks = taskNames;

let taskNameHelpers = {
    build: `
        npm run task build --prod --web --mobile
        npm run task build --prod --web
        npm run task build --prod --mobile

        npm run task build --native --ios --env=uat
        npm run task build --native --ios --env=dev
        npm run task build --native --ios --env=prod
        npm run task build --native --android --env=dev
    `,
    activate: `
        npm run task activate --web
        npm run task activate --mobile
        npm run task activate --native
    `,
    serve: `
        npm run task serve --web
        npm run task serve --mobile
        npm run task serve --native
    `
};
exports.taskNameHelpers = taskNameHelpers;