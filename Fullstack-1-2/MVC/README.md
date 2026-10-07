## Projeto MVC

Este documento descreve a estrutura de organização de dados, utilizando arquivos JSON para armazenamento, arquivos de controle em JavaScript e um centralizador de rotas.

Estrutura

├── dados.json          # Base de dados central contendo os arrays principais
├── itens.js            # Lógica e rotas referentes aos itens
├── clientes.js         # Lógica e rotas referentes aos clientes
├── pedidos.js          # Lógica e rotas referentes aos pedidos
└── routes.js           # Centralizador que gerencia e exporta todas as rotas


Estrutura de Dados.json

{
  "itens.dados": [],
  "clientes.dados": [],
  "pedidos.dados": []
}


 Controladores e Rotas.js

1. coloca itens.js, clientes.js e pedidos.js

você pega os js e cria comandos pra cada uma em partes separadas orgqanizado

2. routes.js

O arquivo routes.js atua como o ponto central de despacho (router hub). Ele importa as rotas definidas individualmente em itens.js, clientes.js e pedidos.js e as consolida em um único exportador para ser utilizado pelo servidor principal da aplicação.

Como Executar / Fluxo

Certifique-se de que o dados.json está devidamente estruturado.

Configure as rotas específicas nos arquivos individuais (itens.js, clientes.js, pedidos.js).

Registre e agrupe as rotas no routes.js.

Inicie a aplicação aplicando o arquivo routes.js ao servidor principal
