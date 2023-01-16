// PokemonList surrounded by an IIFE
let pokemonRespository = (function () {
    // pokemonList defined as variable with key values as objects in an array
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=52';


// function to add new pokemon to the pokemon list
function add(pokemon){
    pokemonList.push(pokemon);
}

//returns all of the items in the pokmonList
function getAll(){
    return pokemonList;
}

//adding pokemon to the list with the format of a button
function addListItem(pokemon){
    let pokemonList= document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('button-pokemon');
      button.dataset.target = "#pokemonModal";
      button.dataset.toggle = "modal";

    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    //addEventListener will return pokemon info when button is clicked
   button.addEventListener('click', function(e) {
        showDetails(pokemon)
    });
}
    
//loads data from API using promise
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

  //load data from API defined by item name
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Get height, weight etc of each pokemon from api
      item.imageUrlFront = details.sprites.front_default;
      item.imageUrlBack = details.sprites.back_default;
      item.height = details.height;
      item.weight = details.weight;
    }).catch(function (e) {
      console.error(e);
    });
  }


  //shows modal to view pokemon details
  function showDetails (item){
    loadDetails(item).then(function(){
    showDetailsModal(item);
    });
  }  

  //information for each pokemon in modal
function showDetailsModal (item){
  let modalTitle= $(".modal-title");
  let modalBody = $(".modal-body");
  
  
  modalTitle.empty();
  modalBody.empty();

  let name= $("<h1>" + item.name + "</h1>");
  let detailHeight= $("<p>" + "height: " + item.height + "</p>");
  let detailWeight = $("<p>" + "weight: " + item.weight + "</p>");
  let imagefront = $('<img class="modal-img" src="' + item.imageUrlFront + '"/>');
  let imageBack = $('<img class="modal-img" src="' + item.imageUrlBack + '"/>')


modalTitle.append(name);
modalBody.append(detailHeight);
modalBody.append(detailWeight);
modalBody.append(imagefront);
modalBody.append(imageBack);

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
  


       
        
    

    
    

    
    