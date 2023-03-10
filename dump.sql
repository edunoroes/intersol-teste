create database intersol_teste;

create table usuarios(
	id serial primary key,
  nome text not null,
  username text not null,
  email text not null unique,
  senha text not null
);

create table agencias (
  id serial primary key,
  numero_agencia integer not null unique,
  endereco text not null
)

create table contas(
	id serial primary key,
  agencia_bancaria integer not null references agencias(numero_agencia),
  numero_conta integer not null unique,
  limite integer not null,
  conta_usuario_id integer not null references usuarios(id)
)

create table transacoes (
	id serial primary key,
  conta_bancaria integer not null references contas(numero_conta),
  data_movimentacao date not null,
  valor integer not null,
  tipo text not null,
  usuario integer not null references usuarios(id)  
)


