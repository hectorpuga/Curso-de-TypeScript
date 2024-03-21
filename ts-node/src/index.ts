import { Pokemon } from "./decorators/pokemon-class";



const charmander=new Pokemon('Charmander');

// (Pokemon.prototype as any).customName='Pikachu';

// charmander.savePokemonToDb(-1)

charmander.publicApi='https://fernando-herrera.com';
console.log(charmander);