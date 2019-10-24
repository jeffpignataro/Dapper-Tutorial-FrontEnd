$("#AddPerson").submit(function (event) {
    event.preventDefault();

    var form = $(this),
        url = form.attr('action'),
        method = form.attr('method');
    var data = {
        "name": FormFieldValue(form, 'inputName'),
        "age": FormFieldValue(form, 'inputAge')
    };
    
    Post(url, method, data).then(function (result) {
        $(".result").html(JSON.stringify(result));
    });
});
