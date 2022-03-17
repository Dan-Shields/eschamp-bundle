"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodecg_util_1 = require("./nodecg-util");
const repDefaults = __importStar(require("../replicants"));
const airtable_1 = __importDefault(require("airtable"));
const lodash_1 = __importDefault(require("lodash"));
syncAirtable();
function syncAirtable() {
    if (!process.env.AIRTABLE_API_KEY) {
        (0, nodecg_util_1.get)().log.error('NO AIRTABLE API KEY CONFIGURED');
        return;
    }
    airtable_1.default.configure({
        apiKey: process.env.AIRTABLE_API_KEY,
    });
    const base = airtable_1.default.base('appfSOqFLhZ2iq4GN');
    const bots = (0, nodecg_util_1.get)().Replicant('bots', { defaultValue: repDefaults.bots });
    setInterval(() => {
        const newBots = {};
        base('Bots')
            .select()
            .all((err, records) => {
            records === null || records === void 0 ? void 0 : records.forEach((record) => {
                newBots[record.id] = record.fields;
            });
            if (!err && !lodash_1.default.isEqual(newBots, bots.value)) {
                bots.value = newBots;
            }
        });
    }, 1000);
}
