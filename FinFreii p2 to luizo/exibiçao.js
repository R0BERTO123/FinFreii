import prompt from "prompt-sync";

let ler =prompt();

import { menu } from "./menu.js";

export function nome (){
    console.log("Qual e seu nome?")
}

export function Opçao(){
    let opçao= menu(ler())

console.log(opçao)
return opçao
}