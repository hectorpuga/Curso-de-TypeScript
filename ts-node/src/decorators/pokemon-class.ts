
function printToConsole(constructor:Function){

    console.log(constructor);

}

function CheckValidPokemonId(){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
const originalMethod= descriptor.value;
        descriptor.value=(id:number)=>{
            if(id<1||id>800){
                return console.error('El id del pokemon debe de esar entre 1 y 800');
            }else{
              return  originalMethod(id);
            }
        }
    }
}

const printToConsoleConditional=(print:boolean=false):Function=>{

    if(print){

        return printToConsole;
    }
    return ()=> {};
}

const bloquearPrototipo=function(constructor:Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);

}

function readonly(isWritable:boolean=true):Function{
    return function(target:any,propertyKey:string){

        const descriptor:PropertyDescriptor={
            get(){
                console.log(this,'get');
return 'Fernando';
            },
            set(this,val){
                Object.defineProperty(this,propertyKey,{
                    value:val,
                    writable:!isWritable,
                    enumerable:false
                });
            }
        }
        return descriptor;
    }
}

@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon{
    @readonly()
    public publicApi:string='https://pokeapi.co';
    constructor(public name:string){}

    @CheckValidPokemonId()
    savePokemonToDb(id:number){
        console.log('Pokemon guardado en DB ',id);
    }
}