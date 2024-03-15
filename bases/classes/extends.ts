(()=>{

    class Avenger{
        constructor(public name: string, public realName:string){

            console.log('Constructor Avenger llamado!');

        }
        protected getFullname(){
            return `${this.name} ${this.realName}`
        }

        
    }


    class Xmen extends Avenger{

        constructor(public isMutant:boolean, name:string, realName:string){
            super(name,realName);

        }

        getFullnameDesdeXmen(){
            // console.log(super.getFullname());
        }

        get fullname(){
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name:string){
            this.name=name;
        }

    }

    const wolverine= new Xmen(true,'Wolverine','Logan');

    wolverine.fullName='Hector';
    // console.log(wolverine.fullname);
    

})()