class contaBancaria {
    constructor(agencia, numero, tipo = 'conta bancaria', saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }
   
   get saldo() {
    return this._saldo;
   }

   set saldo(novoSaldo) {

    if (novoSaldo.length >= 0) {
        this._saldo = novoSaldo;
    }
    else {
        console.log("Infelizmente seu saldo não é suficiente");
    }
   }

   sacar(valor) {
    if(valor > 0 && valor <= this.saldo) {
        this._saldo -= valor;
        console.log(`Saque de R${valor} realizado com sucesso! `);
    }
    else {
        console.log("Infelizmente o seu saldo não é suficiente ou valor de saque está inválido");
    }
   }

   depositar(valor) {
   
    if(valor > 0) {
        this._saldo += valor;
        console.log(`Depósito no valor de R${valor} realizado com sucesso!`);
    }
    else {
        console.log('Infelizmente esse valor de depósito é inválido!');
    }
   }

}
export default contaBancaria;