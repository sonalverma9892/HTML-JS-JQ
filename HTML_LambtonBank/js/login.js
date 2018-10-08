
// var name = document.getElementById('id');
// var pwd = document.getElementById('pwd');

// localStorage["name"] = document.loginform.usr.value;

function validateLogin(e) {
        var un = document.loginform.usr.value;
        var pw = document.loginform.pword.value;

        if (un == "sonal" && pw == "test") {
          localStorage.setItem('username', 'sonal');
            return true;
        }else if((un == "ankur") && (pw == "test")) {
          localStorage.setItem('username', 'ankur');
            return true;
        }else if((un == "lizza") && (pw == "test")) {
          localStorage.setItem('username', 'lizza');
            return true;
        }else if((un == "marcos") && (pw == "test")) {
          localStorage.setItem('username', 'marcos');
            return true;
        }else if ((un == "admin") && (pw == "admin")) {
          e.preventDefault();
          newDoc();
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
            e.preventDefault();
            return false;
        }
  }

  function newDoc() {
    window.location.assign("admin.html");
}
