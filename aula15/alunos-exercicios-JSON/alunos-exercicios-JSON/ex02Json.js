// Convertendo objeto JSON em JS (PARSE)
// Convertendo objeto JS em JSON (STRINGIFY)

// objeto literal em JSON
let frutas = '{"Fruta":"Banana", "Preço":8.50,"Tipo":"nanica", "Origem":"Brasil"}';
console.log(frutas);

//Convertendo para JS
let frutasConvertidasJS = JSON.parse(frutas);
console.log(frutasConvertidasJS);

//convertendo para JSON
let frutasConvertidasJSON = JSON.stringify(frutasConvertidasJS);
console.log(frutasConvertidasJSON);

