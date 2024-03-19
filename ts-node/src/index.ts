// import { Hero as SuperHero,Hero2 } from "./classes/Hero";
import *as HeroClasses from "./classes/Hero";
import { powers } from "./data/powers";


const ironman= new HeroClasses.Hero('Ironman',100,34);
console.log(ironman);
powers.forEach((power)=>{
console.log(power);
});







