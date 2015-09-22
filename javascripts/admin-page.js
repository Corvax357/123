// Admin-page users
var Master = { login :	"Master", pwd : "Master357" };
var Admin = { login : "Admin", pwd : "Admin357" };
var User = { login : "User", pwd : "User357" };
var MasterMode = false;

// Imaginary list of users with deletion option
var Users = [
  { firstname: "Jack", lastname: "Daniels" },
  { firstname: "John", lastname: "Grants" },
  { firstname: "Johny", lastname: "Walker" },
  { firstname: "Roy", lastname: "Killroy" },
  { firstname: "John", lastname: "Jameson" }
];

// Login function for Admin-page 
function admLogIn() {
  if ($("#adm-log").val() === User.login && $("#adm-pwd").val() === User.pwd) {
    document.location = "index.html";
  } else if ($("#adm-log").val() === Admin.login && $("#adm-pwd").val() === Admin.pwd) {
    document.location = "admin-page.html";
  } else if ($("#adm-log").val() === Master.login && $("#adm-pwd").val() === Master.pwd) {
    document.cookie = "Master";
    document.location = "admin-page.html";
  } else {
    $("#err-msg-adm-log").show();
  }
}

// Checking MasterMode using ccokies 
window.onload = function checkUser() {
  var cookies = document.cookie;
  if (cookies !== "") {
    MasterMode = true;
  } 
}

// Showing Users list if signed in as Master (MasterMode=true)      
function showUsers() {
  if(MasterMode) {
    for (var i=0; i<Users.length; i++) {
      document.getElementById("User"+(i+1)).innerHTML = Users[i].firstname + " " + Users[i].lastname;
      $("#users-list").show();
    }
  }    
}

// This function performs "permanent" deletion because Users list is declared by "var"
function deleteUser(num) {
  delete Users[num];
  $(".list-group li:eq("+ num +")").hide();
}