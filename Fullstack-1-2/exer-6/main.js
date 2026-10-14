const tabela = {
    "segunda": 150,
    "terca": 300,
    "quarta": 100,
    "quinta":200,
    "sexta": 250,
}

/*
const chaves = Object.keys(tabela);
const total = Object.values(tabela).reduce((acumular, total) =>  {
    return typeof total === 'number' ? acumular + total : acumular;
})

//forma do professor

const chave = Object.keys(tabela)
let toto = 0;

for(let i = 0; i < chave.length; i++){
    toto = toto + tabela[chave[i]]
}


console.log(total)
*/

const usuario = {
    "nome": "Pedro",
    "email": "pedro@gmail.com",
    "idade": 25,
    "cidade": 'jaguariuna',
}

const chave = Object.keys(usuario)

for(let i = 0; i < chave.length; i++){
    const chaves = chave[i];

    if(chaves == "email" || chaves == "cidade"){
        console.log(chaves + ":" + usuario[chaves]);
    }
}

/*
console.log(usuario.email, usuario.cidade)
console.log(chave[1], chave[3]);
*/

console.log()
console.log()