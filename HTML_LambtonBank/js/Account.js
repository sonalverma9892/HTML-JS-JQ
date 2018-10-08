//Retrieve the data from localStorage
window.onload = function() {
       var name = localStorage.getItem('username');
       if (name != "undefined" || name != "null") {
       document.getElementById('title').innerHTML = "Welcome " + name;
       } else
       document.getElementById('title').innerHTML = "Welcome!";
    }
//un is current balance
var un = parseInt(document.getElementById('bal').value);

//totalcredit
var totalCredit = parseInt(document.getElementById('total').value);
var balance = parseInt(document.getElementById('finalbal'));
var available = parseInt(document.getElementById('available'));


function CheckValue(val){
 var element=document.getElementById('value');
 if(val=='Other')
   element.style.display='block';
 else
   element.style.display='none';
}




Transfer.addEventListener("click", function(event)  {

  event.preventDefault();
  var source = document.getElementById("UserSource").value;
  var target = document.getElementById("UserTarget").value;
  var user = localStorage.getItem('username');

  var amount = document.getElementById('amount').value;

  if(amount > 3000 || amount < 100 || amount == "null"){
    console.log("Invalid amount");
    alert("Invalid Amount");
    return false;
  }

  var sub = un - amount;

  if (amount > un) {
    if (amount > (un + totalCredit)) {
      alert("Amount greater than credit limit Available");
      return false;
    } else {
      var finalBalanceAvailable = 0;
      var creditBalanceFinal = (un + totalCredit) - amount;

      var totalAvaiBal = document.querySelector('#available');
      totalAvaiBal.innerHTML = "";
      var span = document.createElement("span");
      span.textContent = creditBalanceFinal;
      totalAvaiBal.appendChild(span);

      var finalBal = document.querySelector('#finalbal');
      finalBal.innerHTML = "";
      var span = document.createElement("span");
      span.textContent = finalBalanceAvailable;
      finalBal.appendChild(span);
    }
  } else {
    var totalBal = document.querySelector('#finalbal');
    totalBal.innerHTML = "";
    var span = document.createElement("span");
    span.textContent = sub;
    totalBal.appendChild(span);
  }

  console.log(target);
  console.log(user);
    localStorage.setItem('username', user);
    localStorage.setItem('source', source);
    localStorage.setItem('target', target);
    localStorage.setItem('initbal', un);
    localStorage.setItem('amount', amount);


});

logout.addEventListener("click", function(event)  {

  event.preventDefault();
  window.location.assign("test1.html");

});
