let currentNumber = ""; // Número que o usuário está digitando
let previousNumber = ""; // Número armazenado antes de um operador
let operator = ""; // Operador selecionado (+, -, *, /)
let decimalAdded = false; // Controle para evitar múltiplas vírgulas no mesmo número

// Selecionar os números
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        currentNumber += number.value; // Adiciona o número ao atual
        document.querySelector("#last-calc").textContent = currentNumber; // Mostra no display
    });
});

// Adicionar a vírgula
document.querySelector(".decimal").addEventListener("click", () => {
    if (!decimalAdded) {
        currentNumber += ","; // Adiciona a vírgula ao número atual
        decimalAdded = true; // Marca que a vírgula foi adicionada
        document.querySelector("#last-calc").textContent = currentNumber; // Mostra no display
    }
});

// Selecionar os operadores
const operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (currentNumber === "") return; // Evita operadores sem números

        // Substituir vírgula por ponto para trabalhar com decimais
        currentNumber = currentNumber.replace(",", ".");
        previousNumber = currentNumber; // Armazena o número atual
        currentNumber = ""; // Reseta o número atual
        operator = op.value; // Define o operador selecionado
        decimalAdded = false; // Reseta o controle da vírgula

        // Atualiza o display para mostrar o operador
        document.querySelector("#last-calc").textContent = previousNumber + " " + operator;
    });
});

// Botão de igual
document.querySelector("#equals").addEventListener("click", () => {
    if (currentNumber === "" || previousNumber === "" || operator === "") return;

    // Substituir vírgula por ponto para trabalhar com decimais
    currentNumber = currentNumber.replace(",", ".");

    // Calcula o resultado
    const result = calculate(parseFloat(previousNumber), parseFloat(currentNumber), operator);

    // Mostra o resultado no display
    document.querySelector("#result span").textContent = Number(result.toFixed(2)).toString().replace(".", ",");

    // Reseta os valores para uma nova operação
    currentNumber = result.toString();
    previousNumber = "";
    operator = "";
    decimalAdded = false; // Permite nova vírgula
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
}

// Botão de "C" (Clear)
const clear = document.querySelectorAll(".clear");
clear.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentNumber = "";
        previousNumber = "";
        operator = "";
        decimalAdded = false; // Permite nova vírgula
        document.querySelector("#last-calc").textContent = "";
        document.querySelector("#result span").textContent = "0";
    });
});
