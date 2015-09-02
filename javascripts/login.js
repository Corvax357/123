function logIn() {
    var email = document.forms["myForm"]["email"].value;
        var pos1 = email.indexOf("@"); 
        var pos2 = email.lastIndexOf(".");
        if ((pos1 !== -1) && (pos2 !== -1) && (pos2 - pos1 >= 4)) {
            var pwd = document.forms["myForm"]["pwd"].value;
            if (pwd.length < 5 || pwd === pwd.toLowerCase()) {
                document.getElementById("error-msg-pwd").style.display = "block";
                return false;
            } else { 
                if (pwd.match(/[0-9]/g) !== null) {
                    var expdate = new Date();
                    expdate.setTime(expdate.getTime() + (365*24*60*60*1000));
                    document.cookie = "username=RandomUserName; expires=" + expdate.toUTCString() + "; path=/";
                    document.location = "index.html";
                    return true;
                } else {
                    document.getElementById("error-msg-pwd").style.display = "block";
                    return false;
                }   
            }
        } else {
            document.getElementById("error-msg-log").style.display = "block";
            return false;
        }
    }    