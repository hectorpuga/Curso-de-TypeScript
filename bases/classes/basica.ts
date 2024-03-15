(()=>{

    class Avenger{
        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge:number=35;
        static getAvgAge(){

            return this.name;
        }

        constructor(private name:string,private team:string,public realName:string){}


        bio(){
            return `${this.name} (${this.team})`;
        }

    }


    const antman:Avenger=new  Avenger('goku','guerreros z','son goku');
    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(Avenger.getAvgAge());

})()