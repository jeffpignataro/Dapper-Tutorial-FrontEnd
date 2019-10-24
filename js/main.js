function Post(url, method, data) {
    return jQuery.ajax({
        url: url,
        type: method,
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    });
}

function Get(url) {
    return jQuery.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    });
}

function FormFieldValue(form, fieldName) {
    return form.context[fieldName].value;
}
