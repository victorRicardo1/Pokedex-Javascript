const offset = 0;
const limit = 10;
const url = `http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url).then((response)=>{
    console.log(response);
}) //Fetch nos retorna promise e o then nos dirá que quando a resposta do fetch for processada ele executará a função
