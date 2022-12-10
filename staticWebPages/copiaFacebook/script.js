var email = "www.jskda.com";
var password = "2223";

function IniciaSesion(){
	let getEmail = document.getElementById("User").value;
	let getPassword = document.getElementById("password").value;
	if (getEmail == email && getPassword == password) {
		let a = "email Is True";
		let b = "password Is True";
		return(a + ", " + b);
	}
	else{
		let a = "email Is False";
		let b = "password Is False";
		return(a + ", " + b);
	}

}
function Imprime() {
	console.log(IniciaSesion());
}




