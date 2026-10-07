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

## GET

<img width="1084" height="675" alt="Captura de tela 2026-10-07 112308" src="https://github.com/user-attachments/assets/24571457-cbb3-4c2f-9317-08a36a70e779" />

<img width="1157" height="701" alt="Captura de tela 2026-10-07 112328" src="https://github.com/user-attachments/assets/7c60bc78-b934-4dee-9e0b-15b2c78d5d0a" />

<img width="1086" height="481" alt="Captura de tela 2026-10-07 112343" src="https://github.com/user-attachments/assets/cf17aa41-a011-4088-9ae1-3b6b480d5747" />

## Post

<img width="1084" height="586" alt="Captura de tela 2026-10-07 112711" src="https://github.com/user-attachments/assets/82e9d888-5a33-4632-b4b4-7317e6012d5d" />
