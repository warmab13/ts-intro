export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.png`;
    }

    constructor( 
        public readonly id: number, 
        public name: string,
    ){}
}

export const charmander = new Pokemon(4, 'Charmander');

// charmander.id = 10;
// charmander.name = 'Pikachu';

console.log(charmander.imageUrl);