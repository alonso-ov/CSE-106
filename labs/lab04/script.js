let var1 = 0
let var2 = 0

function append(val){

    let text = document.getElementById("output").value

    if (!(text.includes('.') & val == '.')){
        document.getElementById("output").value += val
    }
}

function cls(){
    document.getElementById("output").value = ''
}

function highlight(operator, unhighlight=false) {

    if (unhighlight == true) {
        document.getElementById(operator).style.backgroundColor = 'lightskyblue'
        return
    }

    document.getElementById(operator).style.backgroundColor = 'gold'
}

function express(operator){
    btns = document.getElementsByClassName('func')
    Array.from(btns).forEach((elem) => {
        if(elem.id != ''){
            highlight(elem.id, true)
        }
    })

    highlight(operator)

    
}