"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const nodecg_util_1 = require("./nodecg-util");
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../.env'),
});
module.exports = (nodecg) => {
    (0, nodecg_util_1.set)(nodecg);
    require('./timers');
    require('./airtable');
};
