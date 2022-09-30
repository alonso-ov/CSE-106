$results = $('[id^=result]')
$results.hide()

function requestData(method){

    let request = new XMLHttpRequest()
    
    //1: search student grade by name
    if(method == 1) {
        studentName = $('#input-1').val()

        request.open("GET", "https://amhep.pythonanywhere.com:/grades")
        request.send()

        request.onload = () => {

            data = JSON.parse(request.response)

            grade = data[studentName]

            $('#result-1').show()

            if(grade == null) {
                console.log('student does not exist')
            } else {
                console.log('Grade for ' + studentName + ' ' + grade)
            }
        }

    }

    //catch if request fails
    request.onerror = () => {
        console.log('Error: request failed')
    }
}