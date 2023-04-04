export class Pokemon {
    constructor( 
        public readonly id: number, 
        public name: string,
        public imageUrl: string,
    ){}
}

export const charmander = new Pokemon(4, 'Charmander', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png');

// charmander.id = 10;
// charmander.name = 'Pikachu';

console.log(charmander);