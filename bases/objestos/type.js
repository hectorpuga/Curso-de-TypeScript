"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'clark kent',
        age: 60,
        powers: ['Super velocidad'],
        getName() {
            return this.name;
        }
    };
    console.log(superman.getName());
})();
