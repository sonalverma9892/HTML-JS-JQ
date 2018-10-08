
//Retrieve the User Name
window.onload = function(){
  var username = localStorage.getItem('username');
  document.getElementById('cardHolderName').innerHTML = username;
}
