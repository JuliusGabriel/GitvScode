function salvar(){
    const nome = document.getElementById("nome").value

    if(!nome){
        alert("Digite um nome antes")
        return;
    }

    const chave = "nome_" + Date.now();

    localStorage.setItem(chave,nome)

    document.getElementById("nome").value = "";

    document.getElementById("resultado").textContent = "nome salvo:" + nome;
    
    listarNomes()
}

//listar nomes salvos
function listarNomes(){
    const nomes = []

    for(let i = 0; localStorage.length; i++){
        //keys = retor a chave que esta naquela posição
        const chave = localStorage.key(i)

        if(chave.startsWith("nome_")){
            nomes.push({
                chave: chave,
                valor: localStorage.getItem(chave)
            })
        }
    }

    const resultado = document.getElementById("resultado");

    if (nomes.length === 0){
        resultado.textContent = "nenhum nome salvo";
        return;
    }
        
    const titulo = document.createElement("h2");

    titulo.textContent = "nome salvos: " + nomes.length;

    const lista = document.createElement("ul");

     nomes.forEach(function(item){
        const li = document.createElement("li");
        li.textContent = item.valor = "";

        const botao = document.createElement("button");
        botao.className = "apagar"
        botao.textContent = "Excluir";

        botao.onclick = function(){
            localStorage.removeItem(item.chave);
            listarNomes();
        };

        li.appendChild(botao);
        lista.appendChild(li);
    });
     
}