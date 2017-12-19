# intersol-test
Sistema de controle Bancário com Ruby on Rails.

O objetivo do teste é criar um pequeno sistema de controle de conta bancária.

1- Deve ser possível logar no sistema usuando um nome de usuário ou e-mail juntamente com uma senha;

2- O sistema deve conter os seguintes modelos;

  * Usuários (login, senha)
  
  * Agências Bancárias (Número da Agência, Endereço)
  
  * Contas Bancárias (Agência Bancária, Número da Conta, Limite)
  
  * Movimentações da Conta (Conta Bancária, Data da Movimentação, Valor, Tipo de Movimentação, Usuário)
  
  obs.: todos os campos são obrigatórios e devem ter telas para possibilitar o cadastro a edição e a exclusão.


3- Deve ser possível registrar depósitos, saques, estornos e transferências entre contas;

4- Não deve ser possível excluir uma movimentação bancária;

5- Deve ser possível obter o saldo de uma conta bancária (deve aparecer nas views);

6- Uma movimentação não pode ser registrada se ultrapassar o limite da conta;

Itens não obrigatórios mas que contarão como diferenciais:

  * Usar Bootstrap ou Material Design nas views;
  
  * Usar frameworks javascript para melhorar a interação do usuário com os cadastros que deve realizar;
  
  * Utilizar testes;
  
  * Publicar no Heroku.


*** COMMITAR O CÓDIGO EM UM NOVO BRANCH

PRAZO PARA ENVIO
----------------
27/12/2017
