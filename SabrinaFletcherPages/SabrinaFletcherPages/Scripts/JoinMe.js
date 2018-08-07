//import { start } from "repl";

//var addrElem = document.querySelector("#checkAddress");
//checkAddr.onblur = checkAdd();


(function () {
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
    debugger;
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


function validFirstName() {
    var fName = document.forms["ContactForm"]["firstName"];
    fName.required = true;
    if (fName.value != "") {
        fName.removeClass("is-invalid");
        fName.addClass("is-valid");
        fName.focus();
        return true;
        //alert("Enter a  first name");
    }
    return false;

}

function validLastName() {
    var lName = document.forms["ContactForm"]["lastName"];
    lName.required = true;
    if (lName.value != "") {
        lName.removeClass("is-invalid");
        lName.addClass("is-valid");
        lName.focus();
        return true;
    }
    return false;
}

function validAge() {
    debugger;
    var age = document.forms["ContactForm"]["Age"];
    //age.title = "Please enter a valid age."
    age.required = true;
    if (age.value > 18 || age.value < 100) {
        age.removeClass("is-invalid");
        age.addClass("is-valid");
        age.focus();
        return true;
    }
    return false;
}

function validGender() {
    //debugger;
    var gender = document.forms["ContactForm"]["gender"];
    gender.required = true;
    if (gender.value != 0) {
        gender.removeClass("is-invalid");
        gender.addClass("is-valid");
        gender.focus();
        return true;
    }
    return false;

}

function validHouse() {
    var house = document.forms["ContactForm"]["houseNum"];
    house.required = true;
    if (house.value != "") {
        house.removeClass("is-invalid");
        house.addClass("is-valid");
        house.focus();
        return true;
    }
    return false;
}

function validStreet() {
    var street = document.forms["ContactForm"]["street1"];
    street.required = true;
    if (house.value != "") {
        street.removeClass("is-invalid");
        street.addClass("is-valid");
        street.focus();
        return true;
    }
    return false;
}

function validCity() {
    var city = document.forms["ContactForm"]["city"];
    city.required = true;
    if (city.value != "") {
        city.removeClass("is-invalid");
        city.addClass("is-valid");
        city.focus();
        return true;
    }
    return false;
}

function validState() {
    var state = document.forms["ContactForm"]["state"];
    state.required = true;
    if (state.value != "") {
        state.removeClass("is-invalid");
        state.addClass("is-valid");
        state.focus();
        return true;
    }
    return false;
}

function validCountry() {
    var country = document.forms["ContactForm"]["country"];
    country.required = true;
    if (country.value != 0) {
        country.removeClass("is-invalid");
        country.addClass("is-valid");
        country.focus();
        return true;
    }
    return false;
}

function validCountryCode() {
    var countryCode = document.forms["ContactForm"]["countryCode"];
    country.required = true;
    if (country.value != 0) {
        country.removeClass("is-invalid");
        country.addClass("is-valid");
        country.focus();
        return true;
    }
    return false;
}


function validAreaCode() {
    var areaCode = document.forms["ContactForm"]["areaCode"];
    var pattern = new RegExp("^[0-9]{3}$");
    areaCode.required = true;
    if (areaCode.value != "") {
        if (pattern.test(areaCode.value)) {
            areaCode.removeClass("is-invalid");
            areaCode.addClass("is-valid");
            areaCode.focus();
            return true;
        }
        else { return false; }
    }
    return false;
}

function validPhone() {
    var phone = document.forms["ContactForm"]["phone"];
    var pattern = new RegExp("^[0-9]{7,18}$");
    phone.required = true;
    if (phone.value != "") {
        if (pattern.test(phone.value)) {
            phone.removeClass("is-invalid");
            phone.addClass("is-valid");
            phone.focus();
            return true;
        }
        else { return false; }
    }
    return false;
}

function validZip() {
    var zip = document.forms["ContactForm"]["zip"];
    zip.required = true;
    var pattern = new RegExp("^[0-9]{5,10}$");
    if (zip.value != "") {
        if (pattern.test(zip.value)) {
            zip.removeClass("is-invalid");
            zip.addClass("is-valid");
            zip.focus();
            return true;
        }
        else {
            return false;
        }
    }
    return false;
}


function checkValidForm() {
    if (validFirstName()) {
        if (validLastName()) {
            if (validAge()) {
                if (validGender()) {
                    if (validZip()) {
                        if (validHouse()) {
                            if (validStreet()) {
                                if (validCity()) {
                                    if (validState()) {
                                        if (validCountry()) {
                                            if (validCountryCode()) {
                                                if (validAreaCode()) {
                                                    if (validPhone()) {
                                                        alert("Person Subscribed");
                                                        return true;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    alert("Person failed");
    return false;

}



function validate() {
    var fName = document.forms["ContactForm"]["firstName"];
    var lName = document.forms["ContactForm"]["lastName"];
    var age = document.forms["ContactForm"]["Age"];
    var gender = document.forms["ContactForm"]["gender"];
    var zip = document.forms["ContactForm"]["zip"];
    var address = document.forms["ContactForm"]["address1"];
    var state = document.forms["ContactForm"]["state"];
    var city = document.forms["ContactForm"]["city"];
    var country = document.forms["ContactForm"]["country"];
    var countryCode = document.forms["ContactForm"]["countryCode"];
    var areaCode = document.forms["ContactForm"]["areaCode"];
    var phone = document.forms["ContactForm"]["phone"];
    var ext = document.forms["ContactForm"]["ext"];
    fName.required = true;
    lName.required = true;
    age.required = true;
    gender.required = true;
    zip.required = true;
    address.required = true;
    if (country.value == "US") {
        state.required = true;
    } else {
        state.required = false;
    }

    city.required = true;
    country.required = true;
    countryCode.required = true;
    if (country.value == "US") {
        areaCode.required = true;
    } else {
        areaCode.required = false;
    }
    phone.required = true;

    var numbers = /^[0-9]+$/;

    if ((fName.value == lName.value)) {
        window.alert("Please enter different first and last names.");
        fName.focus();
        lName.focus();
        return false;
    }

    if (age.value < 15) {
        window.alert("Please enter a valid age.");
        age.focus();
        return false;
    }

    if (zip.value.match(numbers)) {
        window.alert("Please enter only numbers.");
        zip.focus();
        return false;
    }

    if (areaCode.value.match(numbers)) {
        window.alert("Please enter only numbers");
        areaCode.focus();
        return false;
    }

    if (phone.value.match(numbers)) {
        window.alert("Please enter only numbers");
        phone.focus();
        return false;
    }

    if ((ext.value != "") && (ext.value.match(numbers))) {
        window.alert("Please enter numbers only");
    }
}

