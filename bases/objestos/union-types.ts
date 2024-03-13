(() => {
    type Hero = { name: string, age: number, powers: string[], getName?: () => string, }


    let myCumtomVariable: (string | number | Hero) = 'Héctor';

    console.log(typeof myCumtomVariable);

    myCumtomVariable=20;
    console.log(typeof myCumtomVariable);
    
    myCumtomVariable={
        name:'Bruce',
        age:42,
        powers:['Hola']
    }
    console.log(typeof myCumtomVariable);


})()