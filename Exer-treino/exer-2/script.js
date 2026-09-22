function verificar(){
    let numeros = [];

    numeros.push(Number(document.getElementById("n1").value));
    numeros.push(Number(document.getElementById("n2").value));
    numeros.push(Number(document.getElementById("n3").value));
    numeros.push(Number(document.getElementById("n4").value));
    numeros.push(Number(document.getElementById("n5").value));

    let maior = numeros[0];
    let menor = numeros[0];

    let soma = 0;

    let impar = 0;
    let par = 0;

    for (let i = 0; i < numeros.length; i++){
        let numero = numeros[i];

        soma = soma + numeros;

        if (numero > maior){
            maior = numero;
        }

        if (numero < menor){
            menor = numero;
        }

        if (numero % 2 === 0){
            par++;
        }else {
            impar++
        }
    }

    let media = soma / numeros.length;

    document.getElementById("resultado").innerHTML
    "Maior número: " + maior +
    "<br>Menor número: " + menor +
    "<br>Soma: " + soma +
    "<br>Média: "  + media +
    "<br>Quantidade de Pares: " + par + 
    "<br>Quantidade de Impares: " + impar;
}