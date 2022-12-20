
// PokemonList surrounded by an IIFE
let pokemonRespository = (function () {
    // pokemonList defined as variable with 3 key values as objects in an array
let pokemonList = [
    {name: 'Charmander', height: 0.6, type: 'fire'},
    {name: 'Squirtle', height: 0.5,type: 'water'},
    {name: 'Jigglypuff', height: 0.5,type: ['fairy', 'normal']}
];
//returns all of the items in the pokmonList
function getAll(){
    return pokemonList;
}
// function to add new pokemon to the pokemon list
function add(pokemon){
    pokemonList.push(pokemon);
}
//adding pokemon to the list witht he format of a button
function addListItem(pokemon){
    let pokemonList= document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-pokemon');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    //addEventListener will return pokemon info when button is clicked
    button.addEventListener('click', function() {
        showDetails(pokemon)
    });
    
}
function showDetails(pokemon){
console.log(pokemon)
}

return{
add: add,
getAll: getAll,
addListItem: addListItem,
showDetails: showDetails

}
})();


//forEach loop looping through the addListItem
pokemonRespository.getAll().forEach(function (pokemon) {
    pokemonRespository.addListItem(pokemon); 

});
  


       
        
    

    
    

    
    