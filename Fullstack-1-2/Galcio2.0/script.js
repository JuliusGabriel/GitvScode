let totalCompra = 0;

function adicionarCarrinho(nome, preco) {
    const lista = document.getElementById("listaCarrinho");

    const item = document.createElement("li");
    item.textContent = nome + " - R$ " + preco.toFixed(2);

    lista.appendChild(item);

    totalCompra = totalCompra + preco;

    atualizarTotal();
}

function atualizarTotal(){
    const total = document.getElementById("total")

    total.textContent = "total: R$" + totalCompra.toFixed(2)
}

function FinalizarCompra(){
    if (totalCompra === 0){
        alert("Adicione pelo menos um produto ao carrinho!!");
    }else {
        alert("Compra finalizada! R$ " + totalCompra.toFixed(2));

        document.getElementById("listaCarrinho").innerHTML = "";

        totalCompra = 0;

        atualizarTotal();
    }
}

function apagarCarrinho(){
    if (totalCompra === 0){
        alert("Carrinho ja esta vazio");
    
    } else {
    document.getElementById("listaCarrinho").innerHTML = "";

    totalCompra = 0;

    atualizarTotal();
    }
}
