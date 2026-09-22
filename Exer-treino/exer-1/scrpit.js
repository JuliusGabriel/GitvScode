const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", function (){

    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    
    const mensagem = document.getElementById("resultado");

    if (nome === "login" && senha === "123"){
        mensagem.innerText = "Login feito com sucesso!";
    }else{
        mensagem.innerText = "Login recusado!";
    }

    console.log(nome)
    console.log(senha)
});