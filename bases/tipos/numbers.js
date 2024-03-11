"use strict";
(() => {
    let avenger = 10;
    console.log(avenger);
    const villians = 20;
    if (avenger < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avenger = Number('55A');
    console.log({ avenger });
})();
