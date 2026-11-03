
-- Exclui o banco de dados "lacadora", caso ele exista.
-- Atenção: "lacadora" é diferente de "locadora".
DROP DATABASE IF EXISTS lacadora;

-- Cria o banco de dados chamado locadora.
CREATE DATABASE locadora;

-- Seleciona o banco de dados que será utilizado.
USE locadora;


-- Cria a tabela de usuários.
CREATE TABLE usuarios (
    -- Identificador único de cada usuário.
    -- AUTO_INCREMENT gera um número automaticamente.
    -- PRIMARY KEY define a chave primária.
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,

    -- Armazena o nome do usuário, com até 100 caracteres.
    -- NOT NULL impede que o campo fique vazio (NULL).
    nome VARCHAR(100) NOT NULL,

    -- Armazena o CPF, com até 14 caracteres.
    -- UNIQUE impede que dois usuários tenham o mesmo CPF.
    cpf VARCHAR(14) NOT NULL UNIQUE,

    -- Armazena o e-mail do usuário.
    -- UNIQUE impede e-mails duplicados.
    email VARCHAR(100) NOT NULL UNIQUE,

    -- Armazena a senha do usuário.
    senha VARCHAR(100) NOT NULL
);


-- Cria a tabela de filmes.
CREATE TABLE filmes (
    -- Identificador único do filme.
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,

    -- Armazena o nome do filme.
    nome_filme VARCHAR(100) NOT NULL,

    -- Armazena o idioma do filme.
    idioma VARCHAR(100) NOT NULL,

    -- Armazena a quantidade de cópias disponíveis.
    quantidade INT NOT NULL
);


-- Cria a tabela de locações.
CREATE TABLE locacoes (
    -- Identificador único de cada locação.
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,

    -- Registra automaticamente a data e hora da locação.
    -- CURRENT_TIMESTAMP utiliza a data e hora atuais.
    data_locacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    -- Armazena a data e hora prevista ou efetiva da devolução.
    data_devolucao TIMESTAMP null,

    -- Guarda o ID do filme alugado.
    id_filme INT,

    -- Guarda o ID do usuário que alugou o filme.
    id_usuarios INT,

    -- Cria uma chave estrangeira que relaciona
    -- o filme alugado ao ID da tabela filmes.
    CONSTRAINT fk_filmes_locacoes
    FOREIGN KEY (id_filme) REFERENCES filmes(id),

    -- Cria uma chave estrangeira que relaciona
    -- o usuário ao ID da tabela usuarios.
    CONSTRAINT fk_usuarios_locacoes
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
);
 -- Inserindo usuários na tabela usuarios
INSERT INTO usuarios
VALUES
(DEFAULT, 'joardson', '123.456.789.00', 'joardson58@gmail.com', '1234'),
(DEFAULT, 'joao', '128.056.889.00', 'joao58@gmail.com', '4578');


-- Inserindo filmes na tabela filmes
INSERT INTO filmes
VALUES
(DEFAULT, 'casa monstro', 'portugues', 3),
(DEFAULT, 'it acoisa', 'ingles', 2);

insert into locacoes values 
(default, default, null, 2,1);

insert into locacoes (id_usuarios, id_filmes) values (2,1);


