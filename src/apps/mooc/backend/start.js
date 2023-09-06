"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MoocBackendApp_1 = require("./MoocBackendApp");
try {
    new MoocBackendApp_1.MoocBackendApp().start();
}
catch (e) {
    console.log(e);
    process.exit(1);
}
process.on('uncaughtException', function (err) {
    console.log('uncaughtException', err);
    process.exit(1);
});
