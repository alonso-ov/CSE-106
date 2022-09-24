
const output = document.getElementById("output")
const numbersButtons = document.querySelectorAll('.num')
const operatorButtons = document.querySelectorAll('.oper')
var currentInput = '', previousInput = '', currentOperation = ''

function toggle(text){
    btn = document.getElementById(text)

    if (btn == null)
        return 

    btn.classList.remove('oper')
    btn.classList.add('toggle')
}

function untoggle(){
    operatorButtons.forEach((btn) => {
        btn.classList.remove('toggle')
        btn.classList.add('oper')
    })
}


function cls() {
    output.value = ''
    currentInput = ''
    previousInput = ''
    currentOperation = ''
    untoggle()
}


function append(val){
    untoggle()

    // if we have a past value and have nothing for our current then we must erase the output
    if(previousInput != '' & currentInput.length == 0){
        output.value = ''
    }
    
    if (!(output.value.toString().includes('.') & val == '.')){
        output.value += val
        currentInput = output.value
    }
}

function operation(operator) {
    untoggle()

    // if our current input in empty then return because we cannot do any math with empty values
    if (currentInput === '' ) {
        return
    }

    // at this point we are doing a math operation and need to fill our previous input
    if (previousInput == '') {
        previousInput = currentInput
        currentInput = ''
        currentOperation = operator
    } else if (previousInput !== '') {
        solve(operator)
    }
}

function solve(operator){
    
    let num1 = parseFloat(previousInput)
    let num2 = parseFloat(currentInput)


    switch(operator) {
        case '+':
            output.value = num1 + num2
            break;
        case '-':
            output.value = num1 - num2
            break;
        case 'x':
            output.value = num1 * num2
            break;
        case '÷':
            output.value = num1 / num2
            break;
        case '=':
            solve(currentOperation)
            break;
        default:
            break;
    }

    previousInput = output.value
}

numbersButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        append(btn.innerText)
    })
})

operatorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        operation(btn.innerText)
        toggle(btn.innerText)
    })
})