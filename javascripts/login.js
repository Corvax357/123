function logIn() {
    var email = document.forms["myForm"]["email"].value;
    if ((email.indexOf("@") !== -1) && (email.lastIndexOf(".") !== -1) && (email.lastIndexOf(".") - email.indexOf("@") >= 4)) {
        var pwd = document.forms["myForm"]["pwd"].value;
        if (pwd.length < 5 || pwd === pwd.toLowerCase()) {
            document.getElementById("err-msg-pwd").style.display = "block";
            return false;
        } else { 
            if (pwd.match(/[0-9]/g) !== null) {
                var expdate = new Date();
                expdate.setTime(expdate.getTime() + (365*24*60*60*1000));
                document.cookie = "username=RandomUserName; expires=" + expdate.toUTCString() + "; path=/";
                document.location = "index.html";
                return true;
            } else {
                document.getElementById("err-msg-pwd").style.display = "block";
                return false;
            }   
        }
    } else {
        document.getElementById("err-msg-log").style.display = "block";
        return false;
    }
}    

function signUp() { 
    if (checkFirstName() && checkLastName() && checkEmail() && checkBirthday() && checkPassword() && checkPasswordConf()) {
        return true;
    } else {
        return false;
    }
}

function checkFirstName() {
    if ((document.forms["myForm-2"]["reg-firstname"].value.charAt(1) === "") || (document.forms["myForm-2"]["reg-firstname"].value.match(/[^A-z]/g) !== null)) {
        document.getElementById("err-msg-reg-firstname").style.display = "block";
        return false;
    } else {
        return true;
    }
}

function checkLastName() {
    if ((document.forms["myForm-2"]["reg-lastname"].value.charAt(1) === "") || (document.forms["myForm-2"]["reg-lastname"].value.match(/[^A-z]/g) !== null)) {
        document.getElementById("err-msg-reg-lastname").style.display = "block";
        return false;
    } else {
        return true;
    }
}

function checkEmail() {
    var email = document.forms["myForm-2"]["reg-email"].value;  
    if ((email.indexOf("@") !== -1) && (email.lastIndexOf(".") !== -1) && (email.lastIndexOf(".") - email.indexOf("@") >= 4)) {
        return true; 
    } else {
        document.getElementById("err-msg-reg-email").style.display = "block";
        return false;    
    }
}

function checkBirthday() {
    var dateConv = document.forms["myForm-2"]["reg-birthday"].value.split("-");
    var inputDate = new Date(dateConv[0], dateConv[1]-1, dateConv[2]);
    var currentDate = new Date();
    if (currentDate.getTime() > inputDate.getTime()) {
        return true;
    } else {
        document.getElementById("err-msg-reg-birthday").style.display = "block";   
        return false; 
    }   
}   

function checkPassword() {
    var pwd = document.forms["myForm-2"]["reg-pwd"].value;
    if (pwd.length < 5 || pwd === pwd.toLowerCase()) {
        document.getElementById("err-msg-reg-pwd").style.display = "block";
        return false;
    } else { 
        if (pwd.match(/[0-9]/g) !== null) {
        return true;
        } else {
            document.getElementById("err-msg-reg-pwd").style.display = "block";
            return false;
        }
    } 
}

function checkPasswordConf() {
    if (document.forms["myForm-2"]["reg-pwd"].value === document.forms["myForm-2"]["reg-pwd-conf"].value) { 
        return true;
    } else {
        document.getElementById("err-msg-reg-pwd-conf").style.display = "block";
        return false;
    }
}