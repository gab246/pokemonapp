
let pokemonList = [
    {name: 'Charmander', height: 0.6, type: 'fire'},
    {name: 'Squirtle', height: 0.5,type: 'water'},
    {name: 'Jigglypuff', height: 0.5,type: ['fairy', 'normal']}
];

  
for (let i = 0; i < pokemonList.length; i++){
    if (pokemonList[i].height >= 0.6){
        document.write(
        `${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow! That is big <br>`);
    } else {
        document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})<br>`);
        
    }
    }


