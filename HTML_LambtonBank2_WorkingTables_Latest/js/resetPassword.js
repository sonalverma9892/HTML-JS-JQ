
//Change the password. Comapare the entered password if matches stores in local storage.
apply.addEventListener("click", function(event)  {

      event.preventDefault();

      var currentPass = document.getElementById('CurrentPass').value;
      var NewPass = document.getElementById('NewPass').value;
      var NewPassRenter = document.getElementById('NewPassRenter').value;

      if(NewPass == NewPassRenter){
        localStorage.setItem('newPass1', NewPass);
        alert("Password Changed");
        event.preventDefault();
        window.location.assign("menu.html");
      }else{
        alert("Password doesn't match. Please Try Again!!!");
        event.preventDefault();
      }

});
