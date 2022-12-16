
//IIFE
let pokemonRespository = (function () {
let pokemonList = [
    {name: 'Charmander', height: 0.6, type: 'fire'},
    {name: 'Squirtle', height: 0.5,type: 'water'},
    {name: 'Jigglypuff', height: 0.5,type: ['fairy', 'normal']}
];
function getAll(){
    return pokemonList;
}
function add(pokemon){
    pokemonList.push(pokemon);
}

return{
add: add,
getAll: getAll
}
})();


//When adding more pokemons to the list 
//pokemonRespository.add({name: '', height: '' ,  type: '  '})



//forEach loop looping through pokemonList
pokemonRespository.getAll().forEach(function (entry) {
document.write(entry.name + ' ' + entry.height );
if (entry.height >= 0.6){
    document.write(' Wow! That´s big!');
} 
document.write ('<br>')
});
  

//for loop
// for (let i = 0; i < pokemonList.length; i++){
//     if (pokemonList[i].height >= 0.6){
//        document.write(
//         `${pokemonList[i].name} (height: ${pokemonList[i].height}) - Wow! That is big <br>`);
//     } else {
//        document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})<br>`);
       
        
    

    
    

    
    