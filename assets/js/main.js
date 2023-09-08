const loadMoreButton = document.getElementById('load-more');
const pokemonList = document.getElementById('pokemonList')
const limit = 6;
let offset = 0;


function convertPokemonTypes(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="${typeSlot.type.name}">${typeSlot.type.name}</li>`) 
}

function loadPokemonItens(offset, limit){
     pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon)=> 
        ` 
        <li class="pokemon ${pokemon.mainType} general">
        <span class="number">#00${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>
        <div class="details">
            <ol class="types">
                ${pokemon.types.map((type)=> `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
         </li>`
        ).join('')
        pokemonList.innerHTML += newHtml;
     })
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', ()=>{
    offset += limit
    loadPokemonItens(offset, limit);
})