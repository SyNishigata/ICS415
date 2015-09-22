/**
 * Created by Sy on 9/21/2015.
 */

function getClasses(elem) {
    var elements = document.getElementsByTagName(elem);
    var elemList = [];

    for(var i = 0; i<elements.length; i++){
        elemList.push(elements[i].className);
    }
    alert(elemList);
    return elemList;
}

function addClass(elem, className){
    var element = document.getElementById(elem);
    if(element.hasAttribute("class")){
        element.className = element.className + " " + className;
    }
    else{
        element.className = className;
    }
}

function validateForm(){
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var confirm = document.forms["myForm"]["confirm"].value;
    if (name == null || name == "") {
        document.getElementById("form_error").innerHTML = "User Name must be filled out";
        document.getElementById("username").style.borderColor = "red";
        return false;
    }else{
        document.getElementById("username").style.borderColor = "green";
    }

    if (email == null || email == "") {
        document.getElementById("form_error").innerHTML = "Email must be filled out";
        document.getElementById("email").style.borderColor = "red";
        return false;
    }else{
        document.getElementById("email").style.borderColor = "green";
    }

    if (password == null || password == "") {
        document.getElementById("form_error").innerHTML = "Password must be filled out";
        document.getElementById("password").style.borderColor = "red";
        return false;
    }else{
        document.getElementById("password").style.borderColor = "green";
    }

    if (confirm == null || confirm == "") {
        document.getElementById("form_error").innerHTML = "Confirm Password must be filled out";
        document.getElementById("confirm").style.borderColor = "red";
        return false;
    }else{
        document.getElementById("confirm").style.borderColor = "green";
    }

    if (password != confirm){
        document.getElementById("form_error").innerHTML = "Password and Confirm Password do not match";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("confirm").style.borderColor = "red";
        return false;
    }else{
        document.getElementById("password").style.borderColor = "green";
        document.getElementById("confirm").style.borderColor = "green";
    }

}
