function serializeMessage() {
    debugger;
    let messageJSON = {
        "firstName": document.querySelector("#FirstName").value,
        "lastName": document.querySelector("#LastName").value,
        "email": document.querySelector("#email").value,
        "message": document.querySelector("#message").value
    };

    return messageJSON;
}

function valid(val) {
    $(val).removeClass("is-invalid");
    $(val).addClass("is-valid");
}


function inValid(val) {
    $(val).removeClass("is-valid");
    $(val).addClass("is-invalid");
}

$("#email").on("blur", function () {
    var emailExp = new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$');
    if (emailExp.test($("#email").val())) {
        inValid("#email");
    } else {
        valid("#email");
    }
});


$("contactus").on("submit", function () {
    event.preventDefault();
    if ($(".is-invalid")[0]) {
        $('#invalid-alert').removeClass("d-none");
    } else {
        $('#invalid-alert').addClass("d-none");
        addMessageToDB();
    }
})

function messageInserted() {
    $("#invalid-alert").addClass("d-none");
    $("#success-alert").text('Thanks for Joining!');
    $("#success-alert").removeClass("d-none");
}

function addMessageToDB() {
    debugger;
    var strMessage = JSON.stringify(serializeMessage());
    $.post({
        url: "https://phoneappwebserviceapi.azurewebsites.net/api/Message",
        contentType: "application/json",
        data: strMessage,
        success: function () {
            messageInserted();
        },
        error: function (response) {

            alert(response.responseText);
            alert(response.status);
        }
    });
}