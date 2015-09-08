function logIn() {
    var email = $("#email").val();
    var pwd = $("#pwd").val();
    if (checkEmail(email) && checkPassword(pwd)) {
        var expdate = new Date();
        expdate.setTime(expdate.getTime() + (365*24*60*60*1000));
        document.cookie = "username=RandomUserName; expires=" + expdate.toUTCString() + "; path=/";
        document.location = "index.html";
        return true;    
    } else { 
        return false;
    }   
}   

function signUp() {
    var usr1 = new User();
    if(usr1.valid()) {
        alert("Success!");
        return true;  // ...new User properties could be saved 
    } else {
        return false; // ...new User properties could be erased
    }
}

function User() {
    this.firstname = $("#reg-firstname").val();
    this.lastname = $("#reg-lastname").val();
    this.email = $("#reg-email").val();
    this.birthday = $("#reg-birthday").val();
    this.password = $("#reg-pwd").val();
    this.valid = function regValidation() { return (checkName(this.firstname, this.lastname) && checkEmail(this.email) && checkBirthday(this.birthday) && checkPassword(this.password) && checkPasswordConf(this.password, $("#reg-pwd-conf").val())) }
}
    
function checkName(firstname, lastname) {
    if (firstname.charAt(1) === "" || /[^A-z]/.test(firstname)) {
        $("#err-msg-reg-firstname").show();
        return false;
    } else {
        if (lastname.charAt(1) === "" || /[^A-z]/.test(lastname)) {
            $("#err-msg-reg-lastname").show();
            return false;
        } else {
            return true;
        }    
    }
}

function checkEmail(email) { 
    if (/@/.test(email)) {
        return true; 
    } else {
        $("#err-msg-reg-email, #err-msg-email").show();
        return false;    
    }
}

function checkBirthday(birthday) {
    var inputDate = new Date(birthday.split("-")[0], birthday.split("-")[1]-1, birthday.split("-")[2]);
    var currentDate = new Date();
    if (currentDate.getTime() > inputDate.getTime()) {
        return true;
    } else {
        $("#err-msg-reg-birthday").show();   
        return false; 
    }   
}   

function checkPassword(pwd) {
    if (pwd.length > 4 && pwd !== pwd.toLowerCase() && /[0-9]/.test(pwd)) {
        return true;
    } else { 
        $("#err-msg-reg-pwd, #err-msg-pwd").show();
        return false;
    }
} 

function checkPasswordConf(pwd, pwdConf) {
    if (pwd === pwdConf) { 
        return true;
    } else {
        $("#err-msg-reg-pwd-conf").show();
        return false;
    }
}

 