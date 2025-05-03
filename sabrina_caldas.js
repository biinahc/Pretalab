// Atividade 1 - Imprimindo Números Pares
function imprimePares(N) {
    for (let i = 0; i <= N; i += 2) {
        console.log(i);
    }
}

// Atividade 2 - Soma dos Números de um Array
function somaArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// Atividade 3 - Identificar Número Primo
function ePrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Atividade 4 - FizzBuzz
function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

// Atividade 5 - Contador de Vogais
function contaVogais(str) {
    return (str.match(/[aeiouáéíóúâêîôûàèìòùãõü]/gi) || []).length;
}

// Atividade 6 - Tabuada de um Número
function tabuada(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// Atividade 7 - Inverter String
function inverteString(str) {
    return str.split("").reverse().join("");
}

// Atividade 8 - Encontre o Maior Número
function maiorNumero(arr) {
    return Math.max(...arr);
}

// Atividade 9 - Palíndromo
function ePalindromo(str) {
    const formatada = str.toLowerCase().replace(/[^a-záéíóúâêîôûàèìòùãõü]/gi, "");
    return formatada === formatada.split("").reverse().join("");
}

// Atividade 10 - Média de Notas
function calculaMedia(notas) {
    const media = notas.reduce((total, num) => total + num, 0) / notas.length;
    return media >= 7 ? `Aprovado - Média: ${media.toFixed(1)}` : `Reprovado - Média: ${media.toFixed(1)}`;
}

console.log("Teste imprimePares:");
imprimePares(10);

console.log("Teste somaArray:");
console.log(somaArray([1, 2, 3, 4, 5]));

console.log("Teste ePrimo:");
console.log(ePrimo(7));
console.log(ePrimo(10));

console.log("Teste fizzBuzz:");
fizzBuzz();

console.log("Teste contaVogais:");
console.log(contaVogais("Node.js é incrível"));

console.log("Teste tabuada:");
tabuada(5);

console.log("Teste inverteString:");
console.log(inverteString("hello"));

console.log("Teste maiorNumero:");
console.log(maiorNumero([3, 10, 6, 2]));

console.log("Teste ePalindromo:");
console.log(ePalindromo("Ame a ema"));
console.log(ePalindromo("Olá mundo"));

console.log("Teste calculaMedia:");
console.log(calculaMedia([8, 7, 6]));
console.log(calculaMedia([5, 6, 4]));