let request = new XMLHttpRequest()
let $outputText = null;


function editGrade(){
    let name = $("#input-4").val()
    let $outputText = $("#output-text-4")

    request.open("GET", "https://amhep.pythonanywhere.com:/grades/" + name)

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

                let newData = {
                    name: newGrade
                }

                var json = JSON.stringify(newData)

                request.open("PUT", "https://amhep.pythonanywhere.com:/grades/" + name)
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');


                request.send(json)
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

    request.open("GET", "https://amhep.pythonanywhere.com:/grades/" + name)

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
    request.open("GET", "https://amhep.pythonanywhere.com:/grades")
    request.send()

    request.onload = () => {
        data = $.parseJSON(request.response)

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