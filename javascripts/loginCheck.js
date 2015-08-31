window.onload=function checkCookies() {
    var cookies=document.cookie;
    if(cookies=="") {
        document.location="login-page.html";
    }
}

