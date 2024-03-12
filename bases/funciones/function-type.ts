
(()=>{

    const addNumber=(a:number,b:number)=> a+b;
    const greet= (name:string)=>`Hola ${name}`;
    const savetheWorld=()=>`El mundo está salvado`;

    let myFunction: ()=>void;

    // myFunction=10;



    // console.log(myFunction);

    // myFunction=addNumber;
    // console.log(myFunction(1,3));

    // myFunction=greet;
    // console.log(myFunction('hector'));
    
    myFunction=savetheWorld;
    console.log(myFunction());
})()