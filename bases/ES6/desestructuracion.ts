(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    const avengers:Avengers = {
        nick: 'Amuel L. Jackson',
        ironman: 'robert Downey Jr',
        vision: 'Paul bettany',
        activo: true,
        poder: 1500

    }


    // const { poder, vision } = avengers;

    // console.log(poder.toFixed(), vision.toUpperCase());

    const printAvenger=({ironman,...resto}:Avengers)=>{

        console.log(ironman,resto);
    }

    // printAvenger(avengers);
    const avengersArr:[string,boolean,number]=['Cap. América',true,150.15];

    const [capitan,ironman,seriaUnNumero]=avengersArr;
    // console.log({ironman,capitan});
})()