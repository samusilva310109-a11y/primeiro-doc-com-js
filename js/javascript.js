
function somar(a, b) {
    return a + b;
}

function calcularJurosSimples(principal, taxa, tempo) {
    return principal * taxa * tempo;
}

function calcularJurosCompostos(principal, taxa, tempo) {
    return principal * Math.pow((1 + (taxa / 100)), tempo);
}

const valor1 = parseFloat(window.prompt("Digite o primeiro número:"));
const valor2 = parseFloat(window.prompt("Digite o segundo número:"));

const resultado = somar(valor1, valor2);

const valorPrincipal = parseFloat(window.prompt("Digite o valor principal para cálculo de juros:"));
const taxaJuros = parseFloat(window.prompt("Digite a taxa de juros:"));
const tempoInvestimento = parseFloat(window.prompt("Digite o tempo do investimento (em anos):"));

const resultadoJurosCompostos = calcularJurosCompostos(valorPrincipal, taxaJuros, tempoInvestimento);
const resultadoJurosCompostosFormatado = resultadoJurosCompostos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

document.write("<p>O valor acumulado com juros compostos é: " + resultadoJurosCompostosFormatado + "</p>");

const resultadoFormatado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
document.write("<p>A soma de " + valor1 + " e " + valor2 + " é: " + resultadoFormatado + "</p>");



