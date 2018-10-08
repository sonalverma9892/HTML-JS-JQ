
//Checks User Validation
function validateLogin(e) {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pword.value;

        //Retrieve the newPassword which is stored during changed password.
        var pwd = localStorage.getItem('newPass1');
        console.log(pwd);

        //Default user and password
        if (un == "sonal" && pw == "test") {
          localStorage.setItem('username', 'sonal');
          return true;

        //User with changed password
        }else if (un == "sonal" && pw == pwd) {
          localStorage.setItem('username', 'sonal');
          return true;

        }else if((un == "ankur") && (pw == "test")) {
          localStorage.setItem('username', 'ankur');
          return true;

        }else if (un == "ankur" && pw == pwd) {
          localStorage.setItem('username', 'ankur');
          return true;

        }else if((un == "admin") && (pw == "admin")){
          e.preventDefault();
          newDoc();

        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
            e.preventDefault();
            return false;
        }
  }

  //Move to admin page
  function newDoc() {
    window.location.assign("admin.html");
}
