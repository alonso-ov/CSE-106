let request = new XMLHttpRequest()
let $outputText = null;

function createStudent(){
    let name = $("#input-3-1").val()
    let grade = $("#input-3-2").val()

    let data = {
        "name": name,
        "grade": grade
    }

    var json = JSON.stringify(data)

    request.open("POST", "http://127.0.0.1:5000/grades")
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    request.send(json)

}

function setGrade(name, newGrade){
    request = new XMLHttpRequest()

    let newData = {
        "grade" : newGrade
    }

    var json = JSON.stringify(newData)

    request.open("PUT", "http://127.0.0.1:5000/grades/" + name)
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    request.send(json)
}

function editGrade(){
    let name = $("#input-4").val()
    let $outputText = $("#output-text-4")

    request.open("GET", "http://127.0.0.1:5000/grades/" + name, true)

    request.send()

    request.onload = () => {
        console.log(request.status)

        if(request.status == 404){
            $outputText.text("404 error: student not found")
        } else {
            let data = $.parseJSON(request.response)
            $outputText.text(name + ": " + data[name])

            $(".input-4-2").show()
            $("#input4-1-2").click(() => {

                let newGrade = $("#input-4-1").val()
                name = String(name)
                newGrade = String(newGrade)

                setGrade(name , newGrade);
            })
        }
    }

    request.onerror = () => {
        console.log('Error: request failed')
    }
}

function searchByName(){
    let name = $("#input-1").val()
    let $outputText = $("#output-text-1")

    request.open("GET", "http://127.0.0.1:5000/grades/" + name)

    request.send()

    request.onload = () => {

        if(request.status == 404){
            $outputText.text("404 error: student not found")
        } else {
            let data = $.parseJSON(request.response)
            $outputText.text(name + ": " + data[name])
        }
    }

    request.onerror = () => {
        console.log('Error: request failed')
    }
}


function getAllGrades(){
    request.open("GET", "http://127.0.0.1:5000/grades")
    request.send()

    request.onload = () => {
        data = $.parseJSON(request.response)

        $('#output-table').empty()

        $(function() {
            $.each(data, function(name, grade) {
                var $tr = $('<tr>').append(
                    $('<td>').text(name),
                    $('<td>').text(grade),
                ).appendTo('#output-table');
            });
        });
    }

    request.onerror = () => {
        console.log('Error: request failed')
    }
}

function deleteStudent(){
    let name = $("#input-5").val()

    request.open("DELETE", "http://127.0.0.1:5000/grades/" + name, true)

    request.send(null)
}

function switchSelect(action){
    $outputs = $(".output")
    $outputs.hide()

    switch(action){
        
        case "1":
            $searchByName = $("#1")
            $searchByName.show()
            break;

        case "2":
            getAllGrades()
            $seeAllGrades = $("#2")
            $seeAllGrades.show()
            break;

        case "3":
            $createStudent = $("#3")
            $createStudent.show()
            break;

        case "4":
            $editGrade = $("#4")
            $editGrade.show()
            break;

        case "5":
            $deleteGrade = $("#5")
            $deleteGrade.show()       

        default:
            break;
    }
}