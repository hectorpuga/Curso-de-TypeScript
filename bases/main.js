"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado';
        }
    }
    class Villanos extends Mutante {
        consquitarMundo() {
            return 'Mundo conquistado';
        }
    }
    // const wolverine=new Xmen ('Wolverine','Logan');
    // const magneto= new Villanos('Magneto','Magnus');
    // // console.log(wolverine.salvarMundo());
    // // console.log(magneto.consquitarMundo());
    // const printName=(character:Mutante)=>{
    //     console.log(character.realName);
    // }
    // printName(wolverine)
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    // private name: string;
    // private team: string;
    // public realName?: string;
    Avenger.avgAge = 35;
    // const antman:Avenger=new  Avenger('goku','guerreros z','son goku');
    // console.log(antman);
    // console.log(Avenger.avgAge);
    // console.log(Avenger.getAvgAge());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado!');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(isMutant, name, realName) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullnameDesdeXmen() {
            // console.log(super.getFullname());
        }
        get fullname() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
    }
    // const wolverine= new Xmen(true,'Wolverine','Logan');
    // wolverine.fullName='Hector';
    // console.log(wolverine.fullname);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis el unico');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    // const apocalipsis=new Apocalipsis('Soy un Apocalipsis..., el unnico');
    const apocalipsis = Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
})();
//# sourceMappingURL=main.js.map