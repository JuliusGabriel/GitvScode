## Projeto MVC

Este documento descreve a estrutura de organização de dados, utilizando arquivos JSON para armazenamento, arquivos de controle em JavaScript e um centralizador de rotas.

Estrutura

├── dados.json          
├── itens.js            
├── clientes.js        
├── pedidos.js          
└── routes.js           


Estrutura de Dados.json

{
  "itens.dados"
  "clientes.dados"
  "pedidos.dados"
}


 Controladores e Rotas.js

1. coloca itens.js, clientes.js e pedidos.js

você pega os js e cria comandos pra cada uma em partes separadas orgqanizado

2. routes.js

o routes vai ser como uma rota do servidos pra cada js indicando e passando pro thunder indentificar junto da porta 

Como Executar / Fluxo

Certifique-se de que o dados.json está devidamente estruturado.

Configure as rotas específicas nos arquivos individuais (itens.js, clientes.js, pedidos.js).

Registre e agrupe as rotas no routes.js.

Inicie a aplicação aplicando o arquivo routes.js ao servidor principal
