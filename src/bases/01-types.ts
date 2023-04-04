export let name: string = 'Alonso';
export const age: number = 35;
export const isValid: boolean = true;

//Type Safety 

name = 'Melissa';

export const templateString = ` Esto es un string
multilinea 
que puede tener 
"" dobles
' simples
inyectar valores ${ name }
expresiones ${ 1 + 1 }
numeros: ${ age }
booleanos: ${ isValid }`;
console.log("🚀 ~ file: 01-types.ts:18 ~ templateString:", templateString)
