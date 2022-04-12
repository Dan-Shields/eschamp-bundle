"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gauntletBracket = exports.finalsBracket = exports.losersBracket = exports.mainBracket = exports.matches = exports.introBot = exports.patrons = exports.scoreboard = exports.bots = exports.timers = exports.ticker = void 0;
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
exports.matches = Array.from({ length: 4 }, () => ({
    bot1: null,
    bot2: null,
}));
const generateBracketMatch = () => ({
    bot1: {
        id: null,
        score: 0,
    },
    bot2: {
        id: null,
        score: 0,
    },
});
exports.mainBracket = (() => {
    const rounds = 4;
    return Array.from({ length: rounds }, (_, index) => {
        return Array.from({ length: Math.pow(2, rounds - 1 - index) }, () => generateBracketMatch());
    });
})();
exports.losersBracket = Array.from({ length: 4 }, (_, index) => {
    return Array.from({ length: index < 2 ? 4 : 2 }, () => generateBracketMatch());
});
exports.finalsBracket = Array.from({ length: 3 }, (_, index) => {
    return Array.from({ length: index < 2 ? 1 : 2 }, () => generateBracketMatch());
});
exports.gauntletBracket = Array.from({ length: 7 }, () => [
    generateBracketMatch(),
]);
