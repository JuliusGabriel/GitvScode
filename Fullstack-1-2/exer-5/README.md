# API PROJETO CRUD - EMPRESA E ITEMS
---
Projeto de CRUD em uma aula de exercícios em um sistema que pede somente backend utilizando dados

* Dados.json
  ```
  [
   {
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-01",
    "valor": 3500.00,
    "patrimonio": "PAT-00125"
   },
  {
    "id": 2,

    "item": "Projetor Epson",
    "local": "Sala 03",
    "dataRegistro": "2026-09-03",
    "valor": 2800.00,
    "patrimonio": "PAT-00126"
  }
 
[Sistema Dados.json](https://github.com/JuliusGabriel/GitvScode/blob/main/Fullstack-1-2/exer-5/dados.json)
---
Tecnologias
---
* VsCode
* Node.js
* Javascrpit
* Json

Passos de como se faz
---

* 1 Clone o repositório
  
* 2 Abra o VsCode com pasta cliente e servidor e com um terminal CMD ou BASH digite:
  
```
npm init -y
npm install express
```
e para o server funcionar
```
npm run dev
```

* 3 Teste as rotas com a extensão **Thunder Client** do VsCode

# Para testar o Front-End
* Abra o servidor client/index.html com a extensão **Live Server** do Vscode

# Rotas
---
```
Post times: http://localhost:3000
Get times: http://localhost:3000
Put time: http://localhost:3000/:id
Delete time: http://localhost:3000/:id
```

# Exemplos de requisicões
---
* Create POST: [http://localhost:3000/times](http://localhost:3000)
* Corpo
```
 "item": "Notebook Dell",
 "local": "Laboratório 01",
 "dataRegistro": "2026-09-01",
 "valor": 3500.00,
 "patrimonio": "PAT-00125"
```
* Reposta
```
  "item": "Notebook Dell",
  "local": "Laboratório 01",
  "dataRegistro": "2026-09-01",
  "valor": 3500.00,
  "patrimonio": "PAT-00125"
```
* Update PUT: [http://localhost:3000/4](http://localhost:3000/4)
```
  "item": "Mouse gamer",
  "local": "Laboratório 67",
  "dataRegistro": "2026-11-21",
  "valor": 380.00,
  "patrimonio": "PAT-00145"
```
* Resposta
```
  "id": 4,
  "item": "Mouse gamer",
  "local": "Laboratório 67",
  "dataRegistro": "2026-11-21",
  "valor": 380.00,
  "patrimonio": "PAT-00145"
```
# Testes com extensão Thunder Cliente do VsCode
---
<img width="1155" height="650" alt="Captura de tela 2026-09-23 112529" src="https://github.com/user-attachments/assets/21d123f7-43ce-4b3b-a701-9424b6190a4c" />

<img width="1157" height="628" alt="Captura de tela 2026-09-23 112913" src="https://github.com/user-attachments/assets/3667e360-5bf7-4510-8b42-b3459bd105c8" />

<img width="1159" height="637" alt="Captura de tela 2026-09-23 113119" src="https://github.com/user-attachments/assets/b2b8f100-7360-4587-9160-defe8506c292" />

<img width="1151" height="608" alt="Captura de tela 2026-09-23 132254" src="https://github.com/user-attachments/assets/ba2efff5-aa2b-4c93-8e7d-9446df6f81c8" />
