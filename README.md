# intersol-test
Sistema de controle Bancário

O objetivo do teste é criar um pequeno sistema de controle de conta bancária, o exemplo foi extraído de uma pequena parte projeto que está em desenvolvimento.

1- Deve ser possível logar no sistema usuando um nome de usuário ou e-mail juntamente com uma senha;

2- O sistema deve conter os seguintes modelos;

  * Usuários (login, senha)
  
  * Agências Bancárias (Número da Agência, Endereço)
  
  * Contas Bancárias (Agência Bancária, Número da Conta, Limite)
  
  * Movimentações da Conta (Conta Bancária, Data da Movimentação, Valor, Tipo de Movimentação, Usuário)
  
  obs.: todos os campos são obrigatórios e devem ter telas para possibilitar o cadastro a edição e a exclusão.
  
3- Deve ser possível registrar depósitos, saques e transferências entre contas;

4- Deve ser possível obter o saldo de uma conta bancária (deve aparecer nas views);

5- Uma movimentação não pode ser registrada se ultrapassar o limite da conta;

Itens não obrigatórios mas que contarão como diferenciais:

  * Usar Bootstrap ou Material Desing nas views;
  
  * Usar frameworks javascript para melhorar a interação do usuário com os cadastros que deve realizar;
  
  * Utilizar testes;
