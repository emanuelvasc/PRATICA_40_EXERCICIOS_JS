// Exercício 17 - Frete grátis
const prompt = require("prompt-sync")();
const compra = Number(prompt("Total da compra: "));
if (compra >= 150) {
    console.log("Frete grátis");
} else if (compra >= 80) {
    console.log("Frete de R$ 10");
} else {
    console.log("Frete de R$ 15");
}
