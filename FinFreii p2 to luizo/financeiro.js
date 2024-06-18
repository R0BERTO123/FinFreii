import prompt from "prompt-sync";

let ler =prompt();



export function Depositar(saldo){
     let continuar=true

    for(let i =0;continuar==true;i++){
    console.log("quanto voce deseja depositar?")
    let depositar= Number(ler())

    if(depositar>=1){
        let novoSaldo = saldo+=depositar

        console.log("deseja continuar? para parar digite c")
        let resposta =ler()
        if(resposta=="c"){
            continuar=false
            return novoSaldo
        }
    }

}
}

export function Sacar(saldo){
    let continuar= true

    for(let i = 0;continuar==true;i--){
    console.log("quanto voce deseja sacar?")
    let sacar =Number(ler())

    if(sacar>=1){
       let novoSaldo= saldo+=sacar

        console.log("deseja continuar? para parar digite c")
        let resposta =ler()
        if(resposta=="c"){
            continuar=false
            return novoSaldo
        }

    }
}
}

export function exibirSaldo(saldo,saldoDepositar,saldoSacar){
    let continuar=true

    for(let i =0 ;continuar==true;i++){
    let saldor = (saldo + saldoDepositar)-saldoSacar
    saldo+=saldor
    return saldo

    
    }
    saldoDepositar=0
    saldoSacar=0
}

export function calculoDeInvestimento(dinheiro, juros, tempo) {
    let Decimal = juros / 100
    let Pcalculo = 1 + Decimal  
    let Scalculo = Pcalculo ** tempo
    let Tcalculo = dinheiro * Scalculo
    let Resultado = Tcalculo.toFixed(2)
    return Resultado
}