"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Amuel L. Jackson',
        ironman: 'robert Downey Jr',
        vision: 'Paul bettany',
        activo: true,
        poder: 1500
    };
    // const { poder, vision } = avengers;
    // console.log(poder.toFixed(), vision.toUpperCase());
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    // printAvenger(avengers);
    const avengersArr = ['Cap. América', true, 150.15];
    const [capitan, ironman, seriaUnNumero] = avengersArr;
    // console.log({ironman,capitan});
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };
    const capitanAmerica = {
        name: 'Capitán América',
        weapon: 'Escudo'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, capitanAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
(() => {
    // console.log('let');
    const nombre = 'Hector';
    const getName = () => {
        console.log('viejo getName');
    };
    // getName=()=>{console.log('Nuevo getName');}
    // getName();
})();
//# sourceMappingURL=main.js.map