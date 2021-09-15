/* Json: Para que serve?
Troca de dados - formulário para o servidor
criação e consumo - utilizando API´s
formatos de dados - padrão da web atualmente
*/

let dadosJson = '{"nome":"William","sobrenome":"Pantoja","idade":53}';
console.log("Dados em JSON.....: "+dadosJson);
// JSON é um objeto nativo
// desserialização = parsing;
let dadosConvertidosJS = JSON.parse(dadosJson); // CONVERTENDO Json p/ JS (objeto literal)
console.log("Dado original em JS.....: "+dadosConvertidosJS);
// Manipula dados em JS 
//console.log("Dados alterados em JS (toUpperCase()).....: "+dadosConvertidosJS.sobrenome.toUpperCase();
//let dadosAlteradosJS = dadosConvertidosJS.sobrenome.toUpperCase();

// serialização cria um formato JSON
let dadosConvertidosJson = JSON.stringify(dadosConvertidosJS);
console.log("Objeto convertido para JSON......"+dadosConvertidosJson);