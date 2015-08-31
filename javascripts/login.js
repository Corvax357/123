function logIn() {
    var pwd=document.forms["myForm"]["pwd"].value;
    if(pwd.length<5 || pwd==pwd.toLowerCase()) {
        alert("Password must contain 5 or more symbols including at least 1 upper-case letter and 1 digit!");
        return false;
    } else { 
        var patt = /[0-9]/g;
        var res = pwd.match(patt);
        if(res!==null) {
            alert("You are welcome!(^_^)");
            document.cookie="username=RandomUserName; expires=Thu, 31 Dec 2015 00:00:00 UTC; path=/";
            return true;
        } else {
            alert("Password must contain 5 or more symbols including at least 1 upper-case letter and 1 digit!");
            return false;
        }
    } 
}