/*const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const currentNumber = "" // Número que o usuário está digitando
const previousNumber = "" // Número armazenado antes de um operador
const operator = "" // Operador selecionado (+, -, *, /)

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        document.querySelector("#last-calc").textContent += number.textContent;
        document.querySelector("#result span").textContent += number.textContent;
        
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if(currentNumber === "") return;

        previousNumber = currentNumber;
        currentNumber = "";
        operator = operator.value

        document.querySelector("#last-calc").textContent = previousNumber + " " + operator;
    });
});*/

let currentNumber = ""; // Número que o usuário está digitando
let previousNumber = ""; // Número armazenado antes de um operador
let operator = ""; // Operador selecionado (+, -, *, /)

// Selecionar os números
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        currentNumber += number.textContent; // Adiciona o número ao atual
        document.querySelector("#last-calc").textContent = currentNumber; // Mostra no display
    });
});

// Selecionar os operadores
const operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (currentNumber === "") return; // Evita que operadores sejam usados sem números

        previousNumber = currentNumber; // Armazena o número atual
        currentNumber = ""; // Reseta o número atual
        operator = op.value; // Define o operador selecionado

        // Atualiza o display para mostrar o operador
        document.querySelector("#last-calc").textContent = previousNumber + " " + operator;
    });
});

// Botão de igual
document.querySelector("#equals").addEventListener("click", () => {
    if (currentNumber === "" || previousNumber === "" || operator === "") return;

    // Calcula o resultado
    const result = calculate(Number(previousNumber), Number(currentNumber), operator);

    // Mostra o resultado no display
    document.querySelector("#result span").textContent = result;

    // Reseta os valores para uma nova operação
    currentNumber = result.toString();
    previousNumber = "";
    operator = "";
});

// Função para realizar o cálculo
function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Erro"; // Evita divisão por zero
        default:
            return 0;
    }

    return Number(result.toFixed(2));
}

// Botão de "C" (Clear)
document.querySelector(".secondary").addEventListener("click", () => {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    document.querySelector("#last-calc").textContent = "";
    document.querySelector("#result span").textContent = "0";
});
