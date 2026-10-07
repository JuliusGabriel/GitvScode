CREATE DATABASE biblioteca;

CREATE TABLE cliente(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    id_titulo VARCHAR(100) NOT NULL,
    nome_cliente VARCHAR(100) NOT NULL,
    email_cliente VARCHAR(100) NOT NULL,
    curso_aluno VARCHAR(100) NOT NULL
);

CREATE TABLE livro(
    id_titulo INT PRIMARY KEY AUTO_INCREMENT,
    autor VARCHAR(100) NOT NULL,
    ano_post DATE NOT NULL
);

CREATE TABLE emprestimo (
    id_emprestimo DATE PRIMARY KEY AUTO_INCREMENT,
    dt_devolucao DATE NOT NULL
);