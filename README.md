Intersol - Teste

Repositorio do front-end: https://github.com/edunoroes/intersol-front

Objetivo: Desenvolva um sistema de controle Bancário
Usuário pode criar conta
Usuário pode fazer login
Usuário consegue criar uma conta bancária
Usuário consegue fazer um deposito
Usuário consegue fazer um saque
Usuário consegue fazer uma transferencia
Usuário consegue fazer uma estorno
Usuario consegue sair do site

Banco de dados utilizado:

PostgreSQL

Bibliotecas utilizadas

Express: Express.js é um framework para Node.js que fornece recursos mínimos para construção de servidores web

Axios: Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quando no Node.js.

Bcrypt: O bcrypt é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.

JsownWebToken: Um JWT é um padrão para autenticação e troca de informações definido pela RFC7519. Nele é possível armazenar de forma segura e compacta objetos JSON

Cors: CORS é um mecanismo que permite que recursos restritos em uma página da web sejam recuperados por outro domínio fora do domínio ao qual pertence o recurso que será
recuperado.

Dotenv: O DotEnv é um pacote leve do npm que carrega automaticamente as variáveis de ambiente de um arquivo.

Knex: O knex é um query-builder ou “construtor de consultas” em tradução livre, para Node. js, e que interage com bancos relacionais.

Endpoints

Criar conta na plataforma

POST /cadastro
Esse endpoint deverá criar uma conta no sistema "intersol-teste"

Você deverá, OBRIGATORIAMENTE:

Inserir seu nome

Inserir seu usuario

Inserir seu email

Inserir sua senha

Login no sistema
POST /login
Esse endpoint deverá lhe redirecionar para página de dashboard (OBS: Você só consegue acessar a página de dashboard caso faça login, pois será enviado um TOKEN)

Você deverá, OBRIGATORIAMENTE:

Inserir o email ou usuario cadastrado
Inserir a senha cadastrada
Resposta

Em caso de sucesso, você será redirecionado para a dashboard do site! Em caso de falha na validação, a resposta mostrará uma mensagem de error no próprio site ou na API

POST /agencia
Esse endpoint deverá cadastrar uma agência

Você deverá, OBRIGATORIAMENTE:

Inserir Número da Agência e Endereço

GET /agencias
Esse endpoint deverá listas todas as agências.

POST /conta
Esse endpoint deverá criar uma conta bancária.

Você deverá, OBRIGATORIAMENTE:

Inserir Número da Agência, Número da Conta

GET /contas
Esse endpoint deverá listas todas as contas bancárias.

POST /deposito
Esse endpoint deverá criar uma deposito na conta bancária logada.

Você deverá, OBRIGATORIAMENTE:

Inserir o valor

POST /saque
Esse endpoint deverá criar uma saque na conta bancária logada.

Você deverá, OBRIGATORIAMENTE:

Inserir o valor

POST /transferencia
Esse endpoint deverá criar uma transferencias entre duas contas com o valor partindo da conta logada.

Você deverá, OBRIGATORIAMENTE:

Inserir o valor e a conta que vai receber a transferencia.

POST /estorno
Esse endpoint deverá criar um estorno da ultima transferencia.

Você deverá, OBRIGATORIAMENTE:

Inserir o valor e a conta que foi realizado a transferencia.
