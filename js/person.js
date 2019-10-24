$("#AddPerson").submit(function (event) {
    event.preventDefault();

    var form = $(this),
        url = form.attr('action');
    var data = {
        "name": FormFieldValue(form, 'inputName'),
        "age": FormFieldValue(form, 'inputAge')
    };

    Post(url, data).then(function (result) {
        $(".result").html(JSON.stringify(result));
    });
});

$("#UpdatePerson").submit(function (event) {
    event.preventDefault();

    var form = $(this),
        url = form.attr('action'),
        method = form.attr('method');
    var data = {
        "id": FormFieldValue(form, 'hiddenId'),
        "name": FormFieldValue(form, 'inputName'),
        "age": FormFieldValue(form, 'inputAge')
    };

    Put(url, data).then(function (result) {
        $(".result").html(`${JSON.stringify(result)} Row(s) udpated.`);
        window.location = "/person/list.html";
    });
});

function DeletePerson(id) {
    Delete(`https://localhost:5001/api/Person/${id}`).then(function () {
        window.location = "/person/list.html";        
    });
}