// FS --> File System

const fs = require('fs'); 
let frutas = '{"Fruta":"Banana", "Preço":8.50,"Tipo":"nanica", "Origem":"Brasil"}';

fs.writeFileSync('teste.txt', frutas);

// ler arquivo
let lerJson = fs.readFileSync('teste.txt','utf-8'); // codificação de caracteres
//console.log(lerJson);

// converter JSON para JS
let converterJsonParaJS = JSON.parse(lerJson);
console.log(converterJsonParaJS);