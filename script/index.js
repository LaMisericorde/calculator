// Variables

// let firstNumber;
// let secondNumber;
// let operator;


// Operations:

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Operate function

function operate(operator, a, b) {
    let result;
    switch(operator) {
        case "adition":
            result =  add(a, b);
            break;
        case "subtraction":
            result =  subtract(a, b);
            break;
        case "multiplication":
            result = multiply(a, b);
            break;
        case "division":
            result = divide(a, b);
            break;
        default:
            result =  "Eroor";
    }
    return result;
}


// Testing

let operandNumber = 1;
let firstNumberString = "";
let secondNumberString = "";

const currentDsiplay = document.querySelector(".current-display");
const firstOperand = document.querySelector(".first-operand");
const secondOperand = document.querySelector(".second-operand");
const operator = document.querySelector(".operator-display");

const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        addNumberToDisplay(button);
    });
});

function addNumberToDisplay(button) {
    if (operandNumber == 1) {
        if (firstNumberString.length < 15) {
            if (checkIfNumberStartsWithZero(button)) {
                firstOperand.textContent = firstOperand.textContent + button.textContent;
                firstNumberString = firstOperand.textContent;
            }

        }
    } else if (operandNumber == 2) {
        if (secondNumberString.length < 15) {
            if (checkIfNumberStartsWithZero(button)) {
                secondOperand.textContent = secondOperand.textContent + button.textContent;
                secondNumberString = secondOperand.textContent;
            }
        }
    }
}

function checkIfNumberStartsWithZero(button) {
    if (operandNumber == 1) {
        if (firstNumberString == "0" && (button.textContent == "0")) {
            return 0;
        } else {
            return 1;
        }
    }
    if (operandNumber == 2) {
        if (secondNumberString == "0" && (button.textContent == "0")) {
            return 0;
        } else {
            return 1;
        }
    }
}

const operators = document.querySelectorAll(".operator");

operators.forEach((button) => {
    button.addEventListener("click", () => {
        nextTerm(button);
    });
});

function nextTerm(button) {
    if (operandNumber == 1) {
        operator.textContent = button.textContent;
        operandNumber = 2;
    }
}


const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    calculate();
});

function calculate() {
    if (operandNumber == 2 && (secondNumberString != "")) {
        let firstNumber = +firstNumberString;
        let secondNumber = +secondNumberString;
        switch(operator.textContent) {
            case "+":
                displayLast()
                firstOperand.textContent = operate("adition", firstNumber, secondNumber);
                reset();
                break;
            case "-":
                displayLast()
                firstOperand.textContent = operate("subtraction", firstNumber, secondNumber);
                reset();
                break;
            case "×":
                displayLast()
                firstOperand.textContent = operate("multiplication", firstNumber, secondNumber);
                reset();
                break;
            case "÷":
                displayLast()
                firstOperand.textContent = operate("division", firstNumber, secondNumber);
                reset();
                break;
            default:
                console.log("error");
        }
    }
}

const lastDisplay = document.querySelector(".last-display");

function displayLast() {
    lastDisplay.textContent = `${firstOperand.textContent} ${operator.textContent} ${secondOperand.textContent}`;
}


function reset() {
    operandNumber = 1;
    operator.textContent = "";
    secondOperand.textContent = "";
}



