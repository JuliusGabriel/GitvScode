const formProduto = document.getElementById("formProduto");
const precoCusto = document.getElementById("precoCusto");
const precoVenda = document.getElementById("precoVenda");
const margemLucro = document.getElementById("margemLucro");
const mensagemProduto = document.getElementById("mensagemProduto");

function calcularMargem() {
    const custo = Number(precoCusto.value);
    const venda = Number(precoVenda.value);

    if (precoCusto.value === "" || 
        precoVenda.value === "" ||
        custo <= 0 || 
        venda < 0 ) {
            margemLucro.value = "-";
            return;
    }

    const margem = ((venda - custo) / custo) * 100;

    //converte o numero em uma representação de texto seguindo as conversoes br
    margemLucro.value = margem.toLocaleString("pt-BR", {
        //define que o numero deve ter pelo menos duas casas decimais.
        minimumFractionDigits: 2,
        //define que o numero deve ter no maximo duas casas decimais.
        maximumFractionDigits: 2  
    }) + "%";
}

precoCusto.addEventListener("input", function(){});
precoVenda.addEventListener("input", function(){});

formProduto.addEventListener("reset", function () {
    //agenda a execussao de uma funcao depois de um determinado tempo
    setTimeout(() => {
        margemLucro.value = "0.00%"
        mensagemProduto.textContent = "";
    }, 0); //tempo em milissegundos
});

formProduto.addEventListener("submit", function(event){
    event.preventDefault();

    const codigo = document.getElementById("codigoBarras").value.trim();
    const descricao = document.getElementById(descricaoPtoduto).value.trim();
    const custo = Number(precoCusto.value);
    const venda = Number(precoVenda.value);
    const unidade = document.querySelector('input[name=unidade]:checked');

    //Expressao regular (regex) é um objeto define um pradrão de caracteres usados para buscar/ validar
    //ou substituir textos em string
    if(!/^\d+$/.test(codigo)){
        mensagemProduto.textContent = "informe um código valido"
        return;
    }

    //verificar se a descricao esta preenchida corretamente e validar
    if (!descricao || !Number.isFinite(custo) || 
        !Number.isFinite(venda) || custo <= 0 || venda <= 0) {
            mensagemProduto.textContent = "preencha a descrição e informe preços maiores que zero"

            return;
        }

    if(!unidade) {
        mensagemProduto.textContent = "Selecione uma unidade"
        return;
    }

    //fim das valiações que o cliente digitou


    let produtos;

    try {
        //Essa linha serve para rcuperar a lista de produtos que foi salva e transforma-la
        //novamente em um array em javascript.
        produtos = JSON.parse(localStorage.getItem("produtos") || "[]");

        if(!Array.isArray(produtos)){
            produtos = []
        } 
    } catch {
        produtos = []
    } 

    //some = se encontrar pelo menos UM, retorn True
    //Se nenhum atender é false
    
    //validando que exista somente um codigo de barras pra cada produto
    if(produtos.some(p => 
        String(p.codigoBarras) === codigo
    )) {
        mensagemProduto.textContent = 
        "já existe um produto com esse codigo de barras."
        return;
    }

    const margem = ((venda - custo) / custo) * 100;

    const produto = {
        codigoBarras : codigo,
        descricaoPtoduto : descricao,
        precoCusto : custo,
        precoVenda : venda,
        margem : margem,
        unidade: unidade.value
    };

    produtos.push(produto)

    //localStorage -> É onde o navegador armazena dados localmente
    //setItem() -> serve para salvar informações
    //produtos -> usado para definir dados
    //json.stringify -> transforma lista de produtos em um texto para armazenar
    localStorage.setItem("produtos", JSON.stringify(produtos))

    mensagemProduto.style.color = "#15803d"
    mensagemProduto.textContent = "Produto cadastrado com sucesso!"

    setTimeout(() => {
        window.location.href = "produtos.html"
    }, 700)
});