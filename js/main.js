function Post(url, method, data) {
    return jQuery.ajax({
        url: url,
        type: method,
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    });
}

function FormFieldValue(form, fieldName) {
    return form.context[fieldName].value;
}

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