const buttoncalcular = document.getElementById("button")

const SubtotalRes = Number (document.getElementById("Subtotal").value)
const DescontoRes = Number (document.getElementById("Desconto").value)
const TotalRes = Number (document.getElementById("Total").value)


buttoncalcular.addEventListener("click", function(){
    const valor = Number (document.getElementById("preco").value)
    const qtd = Number (document.getElementById("quantidade").value)

    if ((valor === "") || (isNaN(qtd)) || (isNaN("pagamento"))) {
    alert("!Preencha todas as notsas");

    return
    }

    SubtotalRes = valor * qtd;

        if (valor = Dinheiro){ 
            (DescontoRes = qtd / 0.01);
        }else if (valor = Pix){ 
            (DescontoRes = qtd / 0.005);
        }else {
            (DescontoRes = qtd / 0);
        }

    TotalRes = DescontoRes + SubtotalRes / 2;
})

Subtotal.textcont = `O resultado é: ${SubtotalRes}`
Desconto.textContent = `"O resultado é:" ${DescontoRes}`
Total.textContent = `"O resultado é:"  ${TotalRes}`