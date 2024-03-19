

(()=>{

   abstract class Mutante{
        constructor(public name:string, public realName:string){}
    }

    class Xmen extends Mutante{

            salvarMundo():string{
                return 'Mundo salvado';
            }
    }

    class Villanos extends Mutante{

        consquitarMundo():string{
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

})()