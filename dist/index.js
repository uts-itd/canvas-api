"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
const settings_1 = require("./settings");
const helper_1 = require("./helper");
const routes_1 = require("./lib/routes");
function Canvas(domain, token) {
    const settings = (0, settings_1.getDefaultSettings)(domain, token);
    const canvas = (0, routes_1.getRoutes)((0, helper_1.getHelper)(settings));
    return {
        ...canvas,
        settings: settings,
    };
}
exports.Canvas = Canvas;
