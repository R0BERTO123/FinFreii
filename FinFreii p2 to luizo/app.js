import prompt from "prompt-sync";

let ler =prompt();

import { menu } from "./menu.js";
import { nome,Opçao } from "./exibiçao.js";
import { Depositar,Sacar,exibirSaldo } from "./financeiro.js";
import {calculoDeInvestimento} from "./financeiro.js";

let continuar=true



let saldo = 0

let saldoDepositar=0
let saldoSacar =0
let investimen=0


for(let i =0;continuar==true;i++){

  


nome()

let resposta =Opçao()


if(resposta=="Depositar"){
    let Depositarr =Depositar(saldo)
      saldoDepositar=Depositarr
}

 else if (resposta=="Sacar"){
    let Sacarr = Sacar(saldo)
    saldoSacar=Sacarr
    
    
}   
    
 else if (resposta=="Teste de Juros"){
 let investimenF = calculoDeInvestimento()
 investimen=investimenF
 
  
  
}  
  
   else if(resposta=="Ver o saldo atual"){
   let exibirSaldoo= exibirSaldo(saldo,saldoDepositar,saldoSacar)
   saldo+=exibirSaldoo
   console.log(saldo)
   break
   }

   
    

 else if (resposta=="Sair"){
    break
}


}