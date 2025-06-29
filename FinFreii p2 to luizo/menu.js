import prompt from "prompt-sync";

let ler =prompt();

import {calculoDeInvestimento} from "./financeiro.js";


export function menu(oi){
    let continuar = true

for(let i = 0;continuar==true;i++){

console.log(` Boas-vindas ao FinFrei ${oi}
    Oque voce deseja fazer?`)
console.log(`
    1-Deposito
    2-Sacar
    3-Saldo atual
    4-simulador de investimento
    5-Sair
    `)
     let resposta= Number(ler())

    if(resposta==5){
        return "Sair"
        
    }
    else if(resposta==1){
      return "Depositar"
    }
    else if(resposta==2){
        return "Sacar"
    }
    else if(resposta==3){
        return "Ver o saldo atual"
    }
    else if(resposta==4){
        console.log("digite a quantia em dinheiro desejada")
        let dinheiroDepositado = Number(ler())
        console.log("digite a taxa que o banco informou")
        let taxaDoJuros = Number(ler())
        console.log("digite quantos meses vc deseja guarda")
        let mesesQueFicouGuardado = Number(ler())
        let calculoDeJurosCompostos = calculoDeInvestimento(dinheiroDepositado, taxaDoJuros, mesesQueFicouGuardado)
        console.log(`No simulado de investimento o reusltado de ${dinheiroDepositado} com taxa de ${taxaDoJuros}% no periodo de ${mesesQueFicouGuardado} meses alavancou-se para ${calculoDeJurosCompostos} R$`)
        return "Teste de Juros"
    }
}
}

