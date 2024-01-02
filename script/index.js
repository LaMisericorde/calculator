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

// Testing

let operandNumber = 1;
let operatorName = "";

const lastOperationDisplay = document.querySelector(".last-display");

const firstOperandDisplay = document.querySelector(".first-operand");
const secondOperandDisplay = document.querySelector(".second-operand");
const operatorDisplay = document.querySelector(".operator-display");

const numberButtons = document.querySelectorAll(".number");
const periodButton = document.querySelector(".period");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const signButton = document.querySelector(".sign");
const clearButton = document.querySelector(".clear");


// Number Buttons

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        addNumberToDisplay(button);       
    });
});

periodButton.addEventListener("click", () => {
    if (operandNumber == 1) {
        if (checkIfNumberStartsWithPeriod()) {
            if (firstOperandDisplay.textContent != "") {
                if (!(firstOperandDisplay.textContent.indexOf(".") >= 0)) {
                    firstOperandDisplay.textContent = firstOperandDisplay.textContent + periodButton.textContent;
                }
            }
        }
    } else if (operandNumber == 2) {
        if (checkIfNumberStartsWithPeriod()) {
            if (secondOperandDisplay.textContent != "") {
                if (!(secondOperandDisplay.textContent.indexOf(".") >= 0)) {
                    secondOperandDisplay.textContent = secondOperandDisplay.textContent + periodButton.textContent;
                }
            }
        }
    }
});


// Based on the format of the last operation display we search for a space to see if it has the form (operand operator operand) or not;

function addNumberToDisplay(button) {
    if (operandNumber == 1) {
        if (lastOperationDisplay.textContent.indexOf(" ") >= 0) {
            lastOperationDisplay.textContent = firstOperandDisplay.textContent;
            firstOperandDisplay.textContent = button.textContent
        } else {
            if (checkIfNumberStartsWithZero(button)) {
                firstOperandDisplay.textContent = firstOperandDisplay.textContent + button.textContent;   
            }
        }
    } else if (operandNumber == 2) {
        if (checkIfNumberStartsWithZero(button)) {
            secondOperandDisplay.textContent = secondOperandDisplay.textContent + button.textContent;
        }
    }
}



function checkIfNumberStartsWithZero(button) {
    if (operandNumber == 1) {
        if (firstOperandDisplay.textContent == "0" && (button.textContent == "0")) {
            return 0;
        } else {
            return 1;
        }
    } else if (operandNumber == 2) {
        if (secondOperandDisplay.textContent == "0" && (button.textContent == "0")) {
            return 0;
        } else {
            return 1;
        }
    }
}

function checkIfNumberStartsWithPeriod() {
    if (operandNumber == 1) {
        if (firstOperandDisplay.textContent == ".") {
            return 0;
        } else {
            return 1;
        }
    } else if (operandNumber == 2) {
        if (secondOperandDisplay.textContent == ".") {
            return 0;
        } else {
            return 1;
        }
    }
}


// Operator Buttons

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (firstOperandDisplay.textContent != "") {
            changeToSecondOperand();
            operatorDisplay.textContent = button.textContent;
            operatorName = getOperatorName(button);
        }
    });
});

// Get the operator by its class not by its content:

function getOperatorName(button) {
    button.classList.remove("operator");
    let operator = button.getAttribute("class");
    button.classList.add("operator");
    return operator;
}

function changeToSecondOperand() {
    if (operandNumber == 1) {        
        operandNumber = 2;
    }
}

// Calculate

equalButton.addEventListener("click", () => {
    operate();
});

function operate() {
    if (operandNumber == 2 && (secondOperandDisplay.textContent != "")) {
        let firstNumber = +firstOperandDisplay.textContent;
        let secondNumber = +secondOperandDisplay.textContent;
        switch(operatorName) {
            case "adition":
                displayLastOperation()
                firstOperandDisplay.textContent = add(firstNumber, secondNumber);
                reset();
                break;
            case "subtraction":
                displayLastOperation()
                firstOperandDisplay.textContent = subtract(firstNumber, secondNumber);
                reset();
                break;
            case "multiplication":
                displayLastOperation()
                firstOperandDisplay.textContent = multiply(firstNumber, secondNumber);
                reset();
                break;
            case "division":
                displayLastOperation()
                firstOperandDisplay.textContent = divide(firstNumber, secondNumber);
                reset();
                break;
            default:
                console.log("Error");
        }
    }
}

function displayLastOperation() {
    lastOperationDisplay.textContent = `${firstOperandDisplay.textContent} ${operatorDisplay.textContent} ${secondOperandDisplay.textContent}`;
}

function reset() {
    operandNumber = 1;
    operatorDisplay.textContent = "";
    secondOperandDisplay.textContent = "";
}

// Clear Button

clearButton.addEventListener("click", () => {
    reset();
    firstOperandDisplay.textContent = "";
    lastOperationDisplay.textContent = "";
});

// Sign Button




