const jsonData = require("./response_ability.json")


console.log(jsonData.results);


function buscarPokemon(pokemon){

    if(typeof pokemon == "string"){
        let resultado = jsonData.results.filter(elemento => {if(elemento.name == pokemon){return elemento;}});
        return resultado.url;
    }else if (resultado == []){
        return "Ese pokemon no se encuenta aqui"
    }else 
    { return "Datos ingresados incorrectos"}
}

let pokemonEncontrado = buscarPokemon("volt-absorb");

console.log(pokemonEncontrado);

// function esNum(param){
    
//     if(typeof param == "string"){
//         return "HOLa"
//     }else if (typeof param == "number"){
//         return "ERROR"
//     }
// }
