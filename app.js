let buffer = '0';
let runningTotal = 0;
let previousOperator = null;
const screen = document.querySelector('.output');

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

function handleNumber(number){
    if (buffer === '0') {
        buffer = number;
    } else {
        buffer += number;
    }
}

function handleMath(value) {
    if (buffer === '0') {
        // do nothing
        return;
    }

    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = value;
    buffer = '0'
}

function flushOperation (intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer
    } else if (previousOperator === 'x') {
        runningTotal *= intBuffer
    } else if (previousOperator === '÷') {
        runningTotal /= intBuffer
    } 

}

function handleSymbol(symbol){
    switch (symbol) {
        case 'C':
            buffer = '0';
            break;
        case '=':
            if (previousOperator === null) {
                return
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length -1);
            }
            break;
        case '+':
        case '-':
        case '÷':
        case 'x':
            handleMath(symbol);
            break;
    }
}

function init() {
    document
    .querySelector('.buttons')
    .addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
    })
}

function rerender() {
    if (buffer === 'Infinity' || buffer === 'NaN') {
        screen.innerText = 'Error'
    }   else {
        screen.innerText = buffer;
    }
}

init();


