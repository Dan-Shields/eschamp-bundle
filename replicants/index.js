"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.introBot = exports.patrons = exports.scoreboard = exports.bots = exports.timers = exports.ticker = void 0;
exports.ticker = {
    topText: '',
    bottomText: '',
    speed: 5,
};
exports.timers = {
    nextMatchPlaying: false,
    nextMatch: 300,
};
exports.bots = {};
exports.scoreboard = {
    bot1: {
        id: '',
        score: 0,
    },
    bot2: {
        id: '',
        score: 0,
    },
};
exports.patrons = [];
exports.introBot = null;
