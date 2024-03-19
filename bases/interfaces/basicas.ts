

(()=>{

    interface Hero{name:string,age:number,powers:string[],getName?:()=>string,}
    let flash:Hero={
        name:'Barry Allen',
        age:24,
        powers:['Super velocidad','Viajar en el tiempo']
    }


    
    let superman:Hero={
        name:'clark kent',
        age:60,
        powers:['Super velocidad'],
        getName(){
           return this.name
        }

    }



    // console.log(superman.getName!());
})()