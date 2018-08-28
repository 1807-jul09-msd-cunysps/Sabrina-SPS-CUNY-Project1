function serializeMessage() {
    debugger;
    let messageJSON = {
        "firstName": document.querySelector("#FirstName").value,
        "lastName": document.querySelector("#LastName").value,
        "email": document.querySelector("#email").value,
        "message": document.querySelector("#message").value
    };

    var stringJSON = JSON.stringify(messageJSON);
    return stringJSON;
}


function addMessageToDB() {
    debugger;
    $.post({
        url: "https://phoneappwebserviceapi.azurewebsites.net/api/Message",
        contentType: "application/json",
        data: serializeMessage(),
        success: function () {
            alert("Message added to DB!");
        },
        error: function (response) {

            alert(response.responseText);
            alert(response.status);
        }
    });
}