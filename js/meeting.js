$("#AddMeeting").submit(function (event) {
    event.preventDefault();

    var form = $(this),
        url = form.attr('action');
    var data = {
        "name": FormFieldValue(form, 'inputName')
    };

    Post(url, data).then(function (result) {
        $(".result").html(JSON.stringify(result));
    });
});

$("#UpdateMeeting").submit(function (event) {
    event.preventDefault();

    var form = $(this),
        url = form.attr('action'),
        method = form.attr('method');
    var data = {
        "id": FormFieldValue(form, 'hiddenId'),
        "name": FormFieldValue(form, 'inputName')
    };

    Put(url, data).then(function (result) {
        $(".result").html(`${JSON.stringify(result)} Row(s) udpated.`);
        window.location = "/meeting/list.html";
    });
});

function DeleteMeeting(id) {
    Delete(`https://localhost:5001/api/Meeting/${id}`).then(function () {
        window.location = "/meeting/list.html";        
    });
}