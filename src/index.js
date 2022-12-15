import { heroes } from './bases/data/heroes'

// const getHeroesById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id) {
//             return true;
//         }else {
//             return false;
//         }
//     });
// }

const getHeroesById = (id) => {
    return heroes.find( (heroe) => heroe.id === id );
}

console.log( getHeroesById(2) );

//find?, funcion filter

const getHeroesByOwner = ( owner ) => heroes.filter ( ( heroe ) => heroe.owner === owner );

console.log( getHeroesByOwner ( 'Marvel') );