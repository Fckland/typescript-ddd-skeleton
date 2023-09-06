"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
var glob = require("glob");
function registerRoutes(router) {
    var routes = glob.sync("".concat(__dirname, "/**/*.route.*"));
    routes.map(function (route) { return register(route, router); });
}
exports.registerRoutes = registerRoutes;
function register(routePath, router) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
    var register = require(routePath).register;
    register(router);
}
