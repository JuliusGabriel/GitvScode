CREATE DATABASE bibli;

USE bibli;

CREATE TABLE Aluno(
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    id_titulo VARCHAR(100) NOT NULL,
    nome_aluno VARCHAR(100) NOT NULL,
    email_aluno VARCHAR(100) NOT NULL,
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

USE biblioteca;

INSERT INTO a_alunos (nome_alunos, email_alunos, curso) VALUES
("Takeo", "takeo@gmail.com", "DS");

INSERT INTO a_alunos (nome_alunos, email_alunos, curso) VALUES
("Julio", "julio@gmail.com", "CyberSegurança");

INSERT INTO a_alunos (nome_alunos, email_alunos, curso) VALUES
("Sayuri", "Sayuri@gmail.com", "Mecatronica");

SELECT * FROM biblioteca;

USE a_alunos;

INSERT INTO a_livros (autor, anop, titulo) VALUES
("VMZ", "2026-09-30", "Opera de Meias");

INSERT INTO a_livros (autor, anop, titulo) VALUES
("Jennie", "2026-10-23", "Move Like Jennie");

INSERT INTO a_livros (autor, anop, titulo) VALUES
("Platão", "2026-11-01", "Insignificancia");

SELECT * FROM biblioteca;

USE a_livros;

INSERT INTO a_emprestimo (id_alunos, id_livros, dt_entrega, dt_devolucao) VALUES
(1, 1, "2026-09-30", "2026-10-01");

INSERT INTO a_emprestimo (id_alunos, id_livros, dt_entrega, dt_devolucao) VALUES
(3, 2, "2021-07-26", "2021-07-31");

INSERT INTO a_emprestimo (id_alunos, id_livros, dt_entrega, dt_devolucao) VALUES
(2, 3, "2001-02-23", "2001-03-07");

SELECT * FROM a_emprestimo

USE bibli;

ALTER TABLE a_emprestimo
ADD CONSTRAINT fk_a_emprestimo_alunos
FOREIGN KEY (id_aluno) 
REFERENCES a_alunos(id_alunos);

USE bibli;

ALTER TABLE a_emprestimo
ADD CONSTRAINT fk_a_emprestimo_livros
FOREIGN KEY (id_livros) 
REFERENCES a_livros(id_livros);

USE bibli;

USE bibli;

ALTER TABLE a_alunos
ADD CONSTRAINT uk_a_alunos_unico UNIQUE (email_alunos);