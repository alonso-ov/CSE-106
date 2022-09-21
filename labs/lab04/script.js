function append(val){

    let text = document.getElementById("output").value

    if (!(text.includes('.') & val == '.')){
        document.getElementById("output").value += val
    }
}

function cls(){
    document.getElementById("output").value = ''
}