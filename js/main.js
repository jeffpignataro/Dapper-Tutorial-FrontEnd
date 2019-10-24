function Post(url, data) {
    return apiCall(url, "POST", data);
}
function Put(url, data) {
    return apiCall(url, "PUT", data);
}
function Delete(url) {
    return apiCall(url, "DELETE", '');
}


function Get(url) {
    return jQuery.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    });
}

function apiCall(url, method, data){
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

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);

    return (results !== null) ? results[1] || 0 : false;
}