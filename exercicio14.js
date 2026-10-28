// Exercício 14 - Entrada autorizada
const prompt = require("prompt-sync")();
const idade = Number(prompt("Idade: "));
const inscrito = prompt("Inscrito? (S/N): ").toUpperCase();
if (idade >= 16 && inscrito === "S") {
    console.log("Pode entrar.");
} else {
    console.log("Entrada não autorizada.");
}
console.log("Verificação encerrada.");
