

(function() {
    'use strict';
    window.addEventListener('blur', function () {
        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function validName() {
    
    var firstName = $('#exampleFirstName').val();
    var lastName = $('#exampleLastName').val();
    if (firstName === lastName) {
        inValid('#exampleFirstName');
        inValid('#exampleLastName');
    } else if ($('#exampleFirstName').val() == "") {
        inValid('#exampleFirstName');
    } else if ($('#exampleLastName').val() == "") {
        inValid('#exampleLastName');
    } else {
        valid('#exampleFirstName');
        valid('#exampleLastName');
    }
}

//$("#exampleFirstName, #exampleLastName").on("blur", function () {
//    debugger;
//    if ($('#exampleFirstName').val().toUpperCase() === $('#exampleLastName').val().toUpperCase()) {
//        inValid('#exampleFirstName');
//        inValid('#exampleLastName');
//    } else if ($('#exampleFirstName').val().toUpperCase() === $('#exampleLastName').val().toUpperCase()) {
//        inValid('#exampleFirstName');
//        inValid('#exampleLastName');
//    } else if ($('#exampleFirstName').val() == "") {
//        inValid('#exampleFirstName');
//    } else if ($('#exampleLastName').val() == "") {
//        inValid('#exampleLastName');
//    } else {
//        valid('#exampleFirstName');
//        valid('#exampleLastName');
//    }
//});




function valid(val){
    $(val).removeClass("is-invalid");
    $(val).addClass("is-valid");
}


function inValid(val) {
    $(val).removeClass("is-valid");
    $(val).addClass("is-invalid");
}

$("#joinme").on("submit", function () {
    event.preventDefault();
    debugger;
    if (($("#exampleFirstName").val().toUpperCase() === $("#exampleLastName").val().toUpperCase())) {
        $('#invalid-alert').removeClass("d-none");
    } else if ($(".is-invalid")[0]) {
        $('#invalid-alert').removeClass("d-none");
    } else {
        $('#invalid-alert').addClass("d-none");
        addPersonToDB();
    } 
});


function personInserted() {
    $("#invalid-alert").addClass("d-none");
    $("#success-alert").text('Thanks for Joining!');
    $("#success-alert").removeClass("d-none");
}


function checkAdd() {
    //debugger;
    var check = document.querySelector("#checkAddress").value;
    if (check == "No") {
        var address2 = document.querySelector("#address2");
        var city2 = document.querySelector("#city2");
        var state2 = document.querySelector("#state2");
        var country2 = document.querySelector("#country2");
        var h3 = document.createElement("h3"); //Creates new element in DOM tree
        h3.innerText = "Permanent Addess";
        var lbladd1 = document.createElement("label");
        lbladd1.innerText = "Address Line 1 ";
        var add1 = document.createElement("input");
        var lblCity = document.createElement("label");
        lblCity.innerText = "City ";
        var lblState = document.createElement("label");
        lblState.innerText = "State "
        var lblCountry = document.createElement("label");
        lblCountry.innerText = "Country ";
        var city = document.createElement("input");
        var state = document.createElement("input");
        var country = document.createElement("select");
        country.className.value = "bfh-countries";
        country.required;

        address2.appendChild(h3);
        address2.appendChild(lbladd1);
        address2.appendChild(add1);
        city2.appendChild(lblCity);
        city2.appendChild(city);
        state2.appendChild(lblState);
        state2.appendChild(state);
        country2.appendChild(lblCountry);
        country2.appendChild(country);
    }
}

//function Welcome() {
//    var firstName = document.querySelector("#exampleFirstName").value;
//    var data = document.querySelectorAll("input");
//    alert(`Welcome ${firstName}`);
//}

function locationPopulate(json) {
    //debugger;
    // var json = { "zip_code": "10017", "lat": 0.711263, "lng": -1.29106, "city": "New York", "state": "NY", "timezone": { "timezone_identifier": "America\/New_York", "timezone_abbr": "EDT", "utc_offset_sec": -14400, "is_dst": "T" }, "acceptable_city_names": [{ "city": "Grand Central", "state": "NY" }, { "city": "Manhattan", "state": "NY" }, { "city": "Nyc", "state": "NY" }] };
    json = JSON.parse(json);
    var state = document.getElementById("State");
    var city = document.getElementById("City");
    state.value = json.state;
    city.value = json.city;
}

function checkZipcodeWithFile() {

    var zipcode = document.getElementById("zipcode").value;
    var url = "../zipcode.txt";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function (e) {    //Call a function when the state changes.
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var result = xhr.responseText;
            if (result !== null || result !== "" || result !== undefined) {
                if (result.charAt(0) === '"' && result.charAt(result.length - 1) === '"') {
                    result = result.substr(1, result.length - 2);
                }
                debugger;
                locationPopulate(result);
            }

        }
    }
    xhr.send();
}

function checkZipcode() {
    //debugger;
    var zipcode = document.getElementById("zipcode").value;
    var clientKey = "js-WuScLxcZ2oBa71EDWgHrxMPxtqy5XsqNCZg2fFiaQgK9PXqXFoaCO5VXnwh7BavA";
    var url = "https://www.zipcodeapi.com/rest/" + clientKey + "/info.json/" + zipcode + "/radians";
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {    //Call a function when the state changes.
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var result = xhr.responseText;
            if (result !== null || result !== "" || result !== undefined) {
                if (result.charAt(0) === '"' && result.charAt(result.length - 1) === '"') {
                    result = result.substr(1, result.length - 2);
                }
                //debugger;
                locationPopulate(result);
            }

        }
    }
    xhr.send();
}



function serializePerson() {
    //debugger;
    var pid = Date.now();
    let personJson = {
        "Pid": pid,
        "firstName": document.querySelector("#exampleFirstName").value,
        "lastName": document.querySelector("#exampleLastName").value,
        "address": {
            "Pid": pid,
            "houseNum": document.querySelector("#houseNumber").value,
            "street": document.querySelector("#Address1").value,
            "city": document.querySelector("#City").value,
            "country": document.querySelector("#Country").value,
            "zip": document.querySelector("#zipcode").value,
            "state": document.querySelector("#State").value
        },
        "phone": {
            "Pid": pid,
            "countryCode": document.querySelector("#countryCode").value,
            "areaCode": document.querySelector("#areaCode").value,
            "number": document.querySelector("#phone").value
        }
        
    };
        //"address": {
            
        //},
        //"phone": {
        //    "countryCode": document.querySelector("#inlineCountryCode"),

    return personJson;
}



function addPersonToDB() {
    //debugger;
    var stringPerson = JSON.stringify(serializeMessage());
    $.post ({
        url: "https://phoneappwebserviceapi.azurewebsites.net/api/Person",
        crossDomain: true,
        contentType: 'application/json',
        data: stringPerson,
        dataType: 'json',
        success: function () {
            personInserted();
        },
        error: function (response) {
            alert(response.responseText);
            alert(response.status);
        }
    });
}







