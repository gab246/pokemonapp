
// PokemonList surrounded by an IIFE
let pokemonRespository = (function () {
    // pokemonList defined as variable with 3 key values as objects in an array
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';


// function to add new pokemon to the pokemon list
function add(pokemon){
    pokemonList.push(pokemon);
}

//returns all of the items in the pokmonList
function getAll(){
    return pokemonList;
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
    button.addEventListener('click', function(event) {
        showDetails(pokemon)
    });
}
    

function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
function showDetails (item){
    pokemonRespository.loadDetails(item).then(function(){
        console.log(item);
    });
}

return{
add: add,
getAll: getAll,
addListItem: addListItem,
loadList: loadList,
loadDetails: loadDetails

};
})();


//forEach loop looping through the addListItem
pokemonRespository.loadList().then(function() {
pokemonRespository.getAll().forEach(function (pokemon) {
    pokemonRespository.addListItem(pokemon); 
    });
}); 
  


       
        
    

    
    

    
    