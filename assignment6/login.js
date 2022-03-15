window.onload = loginLoad;
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const usernameFl = urlParams.get("username");
	const passwordFl = urlParams.get("password");

function loginLoad(){
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin(){
	var username = document.forms["myLogin"]["username"];
	var password = document.forms["myLogin"]["password"];

	if(username.value != usernameFl || password.value != passwordFl){
		alert("Password incorrect please try again");
		return false;
	}
	else{
		alert("Login successful");
	}
}

			