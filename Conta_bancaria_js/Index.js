import contaBancaria from './contaBancaria.js';
import contaPoupanca from './contaPoupanca.js';
import contaCorrente from './contaCorrente.js';
import contaUniversitaria from './contaUniversitaria.js';

const minhaContaBancaria = new contaBancaria(12345, 88888444, 'conta bancaria', 1111);
const minhaContaCorrente = new contaCorrente(12346, 88888445, 'conta corrente', 1112);
const minhaContaPoupanca = new contaPoupanca(12347, 88888446, 'conta poupanca', 1113);
const minhaContaUniversitaria = new contaUniversitaria(12348, 88888447, 'conta universitaria', 1114);

console.log(minhaContaBancaria);
console.log(minhaContaCorrente);
console.log(minhaContaPoupanca);
console.log(minhaContaUniversitaria);

const valorSaque = parseFloat(prompt("Quanto você deseja Sacar da sua conta bancária?"));
minhaContaBancaria.sacar(valorDeposito);
console.log(`Seu saldo da conta bancária é: R$ ${minhaContaBancaria.saldo}`);

const valorDeposito = parseFloat(prompt("Quanto você deseja depositar na sua conta bancária?"));
minhaContaBancaria.depositar(valorDeposito);
console.log(`Seu saldo da conta bancária é: R$ ${minhaContabancaria.saldo}`);

const valorSaque2 = parseFloat(prompt("Quanto você deseja Sacar da sua conta corrente?"));
minhaContaCorrente.sacar(valorSaque2); 
console.log(`Seu saldo da conta corrente é: R$ ${minhaContaCorrente.saldo}`);

const valorDeposito2 = parseFloat(prompt("Quanto você deseja Depositar na sua conta corrente?"));
minhaContaCorrente.depositar(valorDeposito2); 
console.log(`Seu saldo da conta corrente é: R$ ${minhaContaCorrente.saldo}`);

const meuCartao = new cartaoCredito('1234567890123488');

console.log(`Número do cartão: ${meuCartao.numero}`); 
meuCartao.numero = '5569'; 

const valorSaque3 = parseFloat(prompt("Quanto você deseja Sacar da sua conta poupança?"));
minhaContaPoupanca.sacar(valorSaque3); 
console.log(`Seu saldo da conta poupança é: R$ ${minhaContaPoupanca.saldo}`);

const valorDeposito3 = parseFloat(prompt("Quanto você deseja Depositar na sua conta poupança?"));
minhaContaPoupanca.depositar(valorDeposito3); 
console.log(`Seu saldo da conta poupança é: R$ ${minhaContaPoupanca.saldo}`);

const valorSaque4 = parseFloat(prompt("Quanto você deseja Sacar da sua conta universitária?"));
minhaContaUniversitaria.sacar(valorSaque4); 
console.log(`Seu saldo da conta universitária é: R$ ${minhaContaUniversitaria.saldo}`);

const valorDeposito4 = parseFloat(prompt("Quanto você deseja Depositar na sua conta universitária?"));
minhaContaUniversitaria.depositar(valorDeposito4); 
console.log(`Seu saldo da conta universitária é: R$ ${minhaContaUniversitaria.saldo}`);