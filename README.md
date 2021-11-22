# Coodesh-Back-end-Challenge

Desafio [Back-end Challenge](https://lab.coodesh.com/moacirmascarenha86/back-end-challenge-2021).

# Descrição

A empresa Pharma Inc, está trabalhando em um projeto em colaboração com sua base de clientes para facilitar a gestão e visualização da informação dos seus pacientes de maneira simples e objetiva em um Dashboard onde podem listar, filtrar e expandir os dados disponíveis.
O seu objetivo nesse projeto, é trabalhar no desenvolvimento da REST API da empresa Pharma Inc seguindo os requisitos propostos neste desafio.

## Especificação do desafio
  - A API deve importar dados utilizando https://randomuser.me/documentation, utilizando um cron-job.

  - Criar um CRUD com os endpoints:

        GET /: Retornar uma mensagem "REST Back-end Challenge 20201209 Running"

        PUT /users/:userId: Será responsável por receber atualizações dos dados

        DELETE /users/:userId: Remover o user da base

        GET /users/:userId: Obter a informação somente de um user da base de dados

        GET /users: Listar todos os usuários da base de dados

## Tecnologias Utilizadas:
  - Nodejs
  - Typescript
  - express
  - Docker
  - docker-compose
  - Mongodb
  - Jest

## Instruções de uso

1. Clonar o repositorio:

    ``git clone https://github.com/MoacirMSJ/Coodesh-Back-end-Challenge.git``

2. No diretorio raiz do projeto(coodesh-back-end-challenge) crie o arquivo .env:
    
  - **DB_USER**= Usuário de serviço para o mongodb.
  - **DB_PASS**= Usuário de serviço para o mongodb.
  - **DB_NAME**= Nome do database do mongodb.
  - **DB_PORT**= Porta do para acesso ao mongodb.
  - **DB_HOST**= Hsot onde se encontra o mongodb.
  - **APPLICATION_PORT**= Porta para a aplicação.
  - **NUMBER_OF_REQUEST_RANDOM_USERS**= Define o numero de chamadas a api [random users](https://randomuser.me/documentation).
  - **NUMBER_OF_USERS_FROM_RANDOM_USERS**= Define a quantidade de usuários que serão buscados a cada chamada a api [random users](https://randomuser.me/documentation).
  - **CRON**= Define o horário([sintax](https://www.npmjs.com/package/node-cron)) que o cron-job executará, requisitando os usuários em [random users](https://randomuser.me/documentation)
  
  Exemplo de .env:

    DB_USER=user
    DB_PASS=pass
    DB_NAME=pharma
    DB_PORT=27017
    DB_HOST=db_pharma
    APPLICATION_PORT=8080
    NUMBER_OF_REQUEST_RANDOM_USERS=10
    NUMBER_OF_USERS_FROM_RANDOM_USERS=3
    CRON='0 0 * * *'

3. Suba e acesse aplicação:
  
    Comando para subir:

        docker-compose up -d
    
    Acesse:

        http://localhost:<APPLICATION_PORT>/
    
    Acesse a documentação:

        http://localhost:<APPLICATION_PORT>/api-docs

4. Parando aplicação:
  
      Somente parar:
        
        docker-compose stop

      Para e apagar container:

        docker-compose down 


5. Executar Testes:

      Comando:

        npm run test


## Referencia
  challenge by coodesh  
  