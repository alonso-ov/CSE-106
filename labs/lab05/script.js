let request = new XMLHttpRequest()
let $outputText = null;

function searchByName(){
    let name = $(".input-name").val()

    request.open("GET", "https://amhep.pythonanywhere.com:/grades/" + name)
    request.send()

    request.onload = () => {

        let $outputText = $(".output-text")


        if(request.status == 404){
            $outputText.text("404 error student not found")
        }else{
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

        case "4":
            $editGrades = $("#4")
            $editGrades.show()
            break;

        default:
            break;
    }
}