function isEmail(email) {
    var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
}

function is10digit(number){
    var regex=/^\d{10}$/;
    return regex.test(number);
}

function isStrongPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~]).{8,}$/;
    return regex.test(password);
}

var password=document.getElementById("password");
var eye_img=document.getElementById("eye-close");
eye_img.onclick = function(){
    if(password.type === "password"){
        password.type = "text";
        eye_img.src="eye-open.png";
    }
    else{
        password.type = "password";
        eye_img.src="eye-close.png";
    }
};

$("#submit").click(function() {
    var invalid = "";
    var valid="registered";
    var missing ="";
    var name=$("#name").val();
    var email=$("#email").val();
    var num=$("#number").val();
    var password=$("#password").val();
    var conf_pass=$("#confirm-password").val();
    var eye_img=$("#eye-close").val();

    if(email===""){
        missing += "missing email,";
    }
    else if(!isEmail(email)){
        invalid += "invalid email,";
    }
    
    if(name===""){
        missing+="missing name,";
    }
    else if($.isNumeric(name)){
        invalid+="invalid name,";
    }

    if(num===""){
        missing += "missing number,";
    }
    else if(!$.isNumeric(num)){
        invalid+="invalid number,";
    }
    else if(!is10digit(num)){
        invalid+="required 10 digit number,"
    }


    
    if(password===""){
        missing+="missing password,";
    }
    else if(!isStrongPassword(password)){
        invalid+="password must have atleast one uppercase , special character, number and lower case letter, "
    }
    if(conf_pass===""){
        missing+="missing confirm password";
    }
    if(password!=="" && conf_pass!=="" && password !== conf_pass){
        invalid += "invalid password."
    }
    
    

    if(invalid==="" && missing===""){
        $("#success").html("registered");
        $("#errors").html('');
    }
    else{
        $("#success").html('');
        $("#errors").html(invalid+missing);
    }
});

