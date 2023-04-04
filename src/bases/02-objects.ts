export const pokemonsIds = [2, 20, 30, 34, 66];

interface Pokemon {
    id: number,
    name: string,
    age: number 
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 2
}


export const charmander:Pokemon = {
    id: 4,
    name: "Charmander",
    age: 3
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulbasaur);
console.log("🚀 ~ file: 02-objects.ts:25 ~ pokemons:", pokemons)
