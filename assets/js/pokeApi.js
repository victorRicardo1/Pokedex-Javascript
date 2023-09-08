const pokeApi = {}

function convertPokeApiDetail(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.id = pokeDetail.id

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.mainType = type;
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
    .then(convertPokeApiDetail)
}

pokeApi.getPokemons = (offset = 0, limit = 12) => {
    const url = `http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((details) => details);
};
