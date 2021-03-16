window.onload = pageLoad;
var Input_regis = [];
function pageLoad(){
	var form = document.getElementById("myForm");
 	form.onsubmit = validateForm;
    
}

function myFormfunction(){
    alert("OK");
    var pass = document.forms["myForm"]["password"];
    var repass = document.forms["myForm"]["Retypepassword"];
}
function validateForm() {
    var pass = document.forms["myForm"]["password"];
    var repass = document.forms["myForm"]["Retypepassword"];
    if(pass.value == repass.value)
    {
        myFormfunction();
    }
    else if(pass.value != repass.value)
    {
        alert(" password not match with Retypepassword ");
        
        return false;
    }
    
    
    
}
