"use strict";
(() => {
    const hero = 'flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batiseñar activada';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
