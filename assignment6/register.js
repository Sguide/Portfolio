window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var firstname = document.forms["myForm"]["firstname"];
    var lastname = document.forms["myForm"]["lastname"];
    var email = document.forms["myForm"]["email"];
    var username = document.forms["myForm"]["username"];
    var password = document.forms["myForm"]["password"];
    var errormsg = document.getElementById("errormsg");
    var result = true;

    if(firstname.value == ""){
        errormsg.innerText = "required firstname";
        result = false;
    }
    if(lastname.value == ""){
        errormsg.innerText = "required lastname";
        result = false;
    }
    if(email.value == ""){
        errormsg.innerText = "required Email";
        result = false;
    }
    if(username.value == ""){
        errormsg.innerText = "required username";
        result = false;
    }
    if(password[0].value != password[1].value){
        errormsg.innerText = "password incorrect please try again";
        result = false;
    }
    return result;
}