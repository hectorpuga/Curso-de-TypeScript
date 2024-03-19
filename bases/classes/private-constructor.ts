(()=>{

    class Apocalipsis{
        static instance:Apocalipsis;
        private constructor(public name:string){}

        static callApocalipsis():Apocalipsis{

                if(!Apocalipsis.instance){
                    Apocalipsis.instance=new Apocalipsis('Soy Apocalipsis el unico');
                }
                return Apocalipsis.instance;

        }

        changeName(newName:string):void{
            this.name=newName;
        }
    }

    // const apocalipsis=new Apocalipsis('Soy un Apocalipsis..., el unnico');
 const apocalipsis=Apocalipsis.callApocalipsis();
    console.log(apocalipsis);
})()