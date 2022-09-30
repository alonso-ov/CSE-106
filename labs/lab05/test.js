function requestGrade(name) {
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", "https://amhep.pythonanywhere.com:/grades")

    xhttp.send()

    xhttp.onload = () => {
        data = JSON.parse(xhttp.response)
        console.log(data)
    }

    xhttp.onerror = () => {
        console.log('An error has ocurred')
    }
}

function getGrade(name){
    $message = $('#message')
    $input = $('input')

    name = $input.val()

    //reset input value
    $input.val('')

    grade = requestGrade(name)

    if (grade == null) {
        $message.text('No record for that student')
    } else {
        $message.text('Grade for ' + name + grade[name])
    }
}