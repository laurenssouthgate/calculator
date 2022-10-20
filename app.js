const calculator = document.querySelector('.buttons')
const output = document.querySelector('.output')
let buttonPressed;
let number = '0';
let operator;
let firstNumber = '';
let secondNumber = '';
let answer;


calculator.addEventListener("click", calculate)

function calculate(e) {
    buttonPressed = e.target.innerText;
    if (buttonPressed === 'C'){
        clearOutput();
    }
    else if (
            buttonPressed === '1' ||
            buttonPressed === '2' ||
            buttonPressed === '3' ||
            buttonPressed === '4' ||
            buttonPressed === '5' ||
            buttonPressed === '6' ||
            buttonPressed === '7' ||
            buttonPressed === '8' ||
            buttonPressed === '9' ||
            buttonPressed === '0'
            ) {
                handleNumbers();
            }
    else if (
            buttonPressed === '+' ||
            buttonPressed === '-' ||
            buttonPressed === 'x' ||
            buttonPressed === '÷'
            ) {
                storeFirstNumber();
            }
    else if (buttonPressed === '←'){
        handleBackSpace()
    }
    else if (buttonPressed === '='){
        handleSum()
    }
    return buttonPressed;
}

function clearOutput() {
    number = '0';
    firstNumber = ''
    secondNumber = ''
    output.innerHTML = number;
}

function handleNumbers() {
    if (firstNumber === '') {
        if (number === '0' || ''){
            number = buttonPressed;
        }
        else {
            number = number + buttonPressed;
        }
        output.innerHTML = number;
    }
    else if (firstNumber !== '') {
        if (secondNumber === '0' || ''){
            secondNumber = buttonPressed;
        }
        else {
            secondNumber = secondNumber + buttonPressed;
        }
        output.innerHTML = secondNumber;
    }
}

function storeFirstNumber() {
    operator = buttonPressed;
    firstNumber = number;
    number = '0'
}

function handleBackSpace(){
    if (firstNumber === '') {
        if(number !== '0' || number !== '')
            number = number.slice(0, -1)
        else if (number === '0' || number === ''){
            number = '0';
        }
        output.innerHTML = number;
    }
    else if (firstNumber !== '') {
        if (secondNumber !== '0' || secondNumber !== '')
            secondNumber = secondNumber.slice(0, -1)
        else if (secondNumber === '0' || secondNumber === ''){
            secondNumber = '0';
        }
        output.innerHTML = secondNumber;
    }
}

function handleSum() {
    if (operator === '+'){
        answer = parseInt(firstNumber) + parseInt(secondNumber)
    }
    else if (operator === '-'){
        answer = parseInt(firstNumber) - parseInt(secondNumber)
    }
    else if (operator === 'x'){
        answer = parseInt(firstNumber) * parseInt(secondNumber)
    }
    else if (operator === '÷'){
        answer = parseInt(firstNumber) / parseInt(secondNumber)
    }
    output.innerHTML = answer;
    number = answer;
    firstNumber = ''
    secondNumber = ''
}



