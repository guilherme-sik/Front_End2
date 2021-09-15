document.addEventListener("onload", executarRotinas() ); //Carregamento e execução de Rotinas
function executarRotinas() {
    
    //LocalStorage -> Leitura de Window, propriedade que permite salvar valores e consultá-los mesmo depois 
    //de um regarregamento de página
    let localStorageKeyName = 'data';

    carregarDoLocalStorage();
    //Evento de botão, que permite por meio de uma função adicionar nome, email, idade
    document.querySelector("#btn-add").addEventListener('click', function () {
        let nome = document.getElementById("nome"),
            email = document.getElementById("email"),
            idade = document.getElementById("idade");

        // Validação de dados 
        if (nome.value.length === 0 || email.value.length === 0 || !parseInt(idade.value)) return;
        //Dados inseridos pelo usuário
        let usuario = {
            nome: nome.value,
            email: email.value,
            idade: idade.value
        };

        // Limpar dados
        nome.value = '';
        email.value = '';
        idade.value = '';

        // Adicionar ao localStorage
        adicionarAoLocalStorage(usuario);
    })
    //Função  que permite adicionar a uma array list os dados enviados para o local storage.

    function adicionarAoLocalStorage(obj) {
        let usuarios = [],
            dadosNoLocalStorage = localStorage.getItem(localStorageKeyName);
            //Se o campo não estiver vazio, ele é adicionado 
            if (dadosNoLocalStorage !== null) {
                usuarios = JSON.parse(dadosNoLocalStorage);
        }
        // (push) dentro do Obj
        usuarios.push(obj);

        localStorage.setItem(localStorageKeyName, JSON.stringify(usuarios));

        carregarDoLocalStorage();
    }
    
    // Função carrega local storage em um novo array com os elementos já guardados em Json
    
    function carregarDoLocalStorage() {
        let usuarios = [],
            dadosNoLocalStorage = localStorage.getItem(localStorageKeyName),
            gridBody = document.querySelector("#grid tbody");
        if (dadosNoLocalStorage !== null) {
            usuarios = JSON.parse(dadosNoLocalStorage);
        }   

        // Insere uma nova linha e novas celulas, e preenche com os dados digitados
        //Disposto em linhas e colunas.
        gridBody.innerHTML = '';
        // Pega os elementos e dispõe em matriz pelo seu índice de forma crescente
        usuarios.forEach(function (x, i) {
            let tr = document.createElement("tr"),
                tdName = document.createElement("td"),
                tdJob = document.createElement("td"),
                tdAge = document.createElement("td"),
                tdRemove = document.createElement("td"),
                btnRemove = document.createElement("button");
            //Organizando em lista crescente
            tdName.innerHTML = x.nome;
            tdJob.innerHTML = x.email;
            tdAge.innerHTML = x.idade;
            //Limpa os campos depois de adicionado
            btnRemove.textContent = 'Remove';
            btnRemove.className = 'btn btn-xs btn-danger';
            btnRemove.addEventListener('click', function(){
                removeFromLocalStorage(i);
            });

            tdRemove.appendChild(btnRemove);

            tr.appendChild(tdName);
            tr.appendChild(tdJob);
            tr.appendChild(tdAge);
            tr.appendChild(tdRemove);

            gridBody.appendChild(tr);
        });
    }
    // Remove do localStorage
    function removeFromLocalStorage(index){
       // Get do localStorage, salva numa variável em um array.
        let usuarios = [],
            dadosNoLocalStorage = localStorage.getItem(localStorageKeyName);

        usuarios = JSON.parse(dadosNoLocalStorage);

        usuarios.splice(index, 1);

        localStorage.setItem(localStorageKeyName, JSON.stringify(usuarios));

        carregarDoLocalStorage();
    }
}