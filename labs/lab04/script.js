
const output = document.getElementById("output")
const numbersButtons = document.querySelectorAll('.num')
const operatorButtons = document.querySelectorAll('.oper')
var currentInput = '', previousInput = ''
var currentOperation, pastOperation

function cls() {
    output.value = ''
    currentInput = ''
    previousInput = ''
}

function append(val){
    if(previousInput != '' & currentInput == ''){
        output.value = ''
    }
    
    if (!(output.value.toString().includes('.') & val == '.')){
        output.value += val
        currentInput = output.value
    }
}

function operation(operator) {
    if (currentInput === '' ) {
        return
    }
    
    if (previousInput !== '') {
        solve(operator)
    }

    previousInput = output.value
    currentInput = ''
}

function solve(operator){
    const num1 = parseFloat(previousInput)
    const num2 = parseFloat(currentInput)

    switch(operator) {
        case '+':
            console.log('adding')
            output.value = num1 + num2
        case '-':
            console.log('subtracting')
            output.value = num1 - num2
        case 'x':
            console.log('multiplying')
            output.value = num1 * num2
        case '÷':
            console.log('dividing')
            output.value = num1 / num2
        default:
            return
    }

    previousInput = output.value
    currentInput = ''
}
numbersButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        append(btn.innerText)
    })
})

operatorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        operation(btn.innerText)
    })
})