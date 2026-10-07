/*const dados = require("./dados.json")

const busca = dados.find((d) => d.id == 2);

const alteracao = {
    telefone: "678-423-120",
    senha: "senhaborabiluda"
};

const chaves = Object.keys(alteracao)

console.log(busca);

chaves.forEach((chave) => {
    console.log(chave)
    console.log(busca[chave])
    busca[chave] = alteracao[chave]
    console.log(busca[chave])
});

console.log(busca);*/

//simulando back-end
const alaterar = (req, res) => {
    const id = req.params.id;
    const info = req.body; //(chave: valor, chave: valor)

    const busca = dados.find((dado) = dado.id == id);

    Object.keys(info).forEach((i) => {
        busca[i] = info[i];
    })
    res.send("atualizado com sucesso").end();
};