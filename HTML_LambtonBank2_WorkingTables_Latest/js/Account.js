//Retrieve the data from localStorage

var name = localStorage.getItem('username');
var un = parseInt(document.getElementById('bal').value);
var totalAmount = 0;

window.onload = function() {
       if (name != undefined || name != null){
         document.getElementById('title').innerHTML = "Welcome " + name;
       } else
         document.getElementById('title').innerHTML = "Welcome!";

       if(name == "sonal"){
         document.getElementById('sourceOption').innerHTML = "CHECK01";
         document.getElementById('targetOption').innerHTML = "CHECK02";
       }else if(name == "ankur"){
         document.getElementById('sourceOption').innerHTML = "CHECK02";
         document.getElementById('targetOption').innerHTML = "CHECK01";
       }
    }

  var source = localStorage.getItem('source');
  totalAmount = localStorage.getItem('amount');
  console.log(Number(totalAmount));

  if(name == "sonal" && source == "CHECK01"){
      var sub1 = localStorage.getItem('finalBalanceSonal');
      console.log(sub1);
      if (sub1 != undefined || sub1 != null) {
        document.getElementById('bal').value = sub1;
      }else{
        document.getElementById('bal').value = un;
      }

      var finalCredit = localStorage.getItem('creditAvailSonal');
      console.log(finalCredit);
      if (finalCredit != undefined || finalCredit != null) {
        document.getElementById('available').textContent = finalCredit;
      }else{
        document.getElementById('available').textContent = "1000";
      }

    }else if(name == "ankur" && source == "CHECK01"){

      var sub1 = Number(totalAmount) + un
      console.log(sub1);
      totalAmount = 0;
      if (sub1 != undefined || sub1 != null) {
        document.getElementById('bal').value = sub1;
      }else{
        document.getElementById('bal').value = un;
      }

      var finalCredit = localStorage.getItem('creditAvailUser2');
      console.log(finalCredit);
      if (finalCredit != undefined || finalCredit != null) {
        document.getElementById('available').textContent = finalCredit;
      }else{
        document.getElementById('available').textContent = "1000";
      }

    }else if(name == "sonal" && source == "CHECK02"){
      var remainBal = localStorage.getItem('finalBalanceSonal');
      var sub1 = Number(totalAmount) + parseInt(remainBal);
      console.log(sub1);
      totalAmount = 0;
      if (sub1 != undefined || sub1 != null) {
        document.getElementById('bal').value = sub1;
      }else{
        document.getElementById('bal').value = un;
      }

      var finalCredit = localStorage.getItem('creditAvailUser2');
      console.log(finalCredit);
      if (finalCredit != undefined || finalCredit != null) {
        document.getElementById('available').textContent = finalCredit;
      }else{
        document.getElementById('available').textContent = "1000";
      }

    }else if(name == "ankur" && source == "CHECK02"){
      var sub1 = localStorage.getItem('finalBalanceUser2');
      console.log(sub1);
      if (sub1 != undefined || sub1 != null) {
        document.getElementById('bal').value = sub1;
      }else{
        document.getElementById('bal').value = un;
      }

      var finalCredit = localStorage.getItem('creditAvailUser2');
      console.log(finalCredit);
      if (finalCredit != undefined || finalCredit != null) {
        document.getElementById('available').textContent = finalCredit;
      }else{
        document.getElementById('available').textContent = "1000";
      }
  }

//totalcredit
var totalCredit = parseInt(document.getElementById('total').value);
var balance = parseInt(document.getElementById('finalbal'));
var available = parseInt(document.getElementById('available').textContent);

function CheckValue(val){
  var element=document.getElementById('value');
  if(val=='Other')
    element.style.display='block';
  else
    element.style.display='none';
}

Transfer.addEventListener("click", function(event)  {

  event.preventDefault();
  var source = document.getElementById('sourceOption').innerHTML;
  var target = document.getElementById('targetOption').innerHTML;
  var user = localStorage.getItem('username');

  var amount = document.getElementById('amount').value;

  totalAmount = Number(totalAmount) + parseInt(amount);

  if(amount > 4000 || amount < 100 || amount == "null"){
    console.log("Invalid amount");
    alert("Invalid Amount");
    return false;
  }

  un = parseInt(document.getElementById('bal').value);
  console.log(un);
  console.log(amount);
  console.log(available);
  console.log(totalAmount);

  var sub = un - amount;

  if (amount > un) {
    if (amount > (un + available)) {
      alert("Amount greater than credit limit Available");
      return false;
    } else {
      var finalBalanceAvailable = 0;
      var creditBalanceFinal = (un + available) - amount;

      if(name == "sonal"){
        localStorage.setItem("creditAvailSonal", creditBalanceFinal);
      }else{
        localStorage.setItem("creditAvailUser2", creditBalanceFinal);
      }

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
    var finalBal = document.querySelector('#finalbal');
    finalBal.innerHTML = "";
    var span = document.createElement("span");
    span.textContent = sub;
    finalBal.appendChild(span);
  }

  if(sub < 0){
    sub = 0;
  }

    document.getElementById('bal').value = parseInt(sub);

    localStorage.setItem('username', user);
    localStorage.setItem('source', source);
    localStorage.setItem('target', target);
    localStorage.setItem('initbal', un);
    localStorage.setItem('amount', Number(totalAmount));
    localStorage.setItem('amountEntered', amount);

    var date = "12/06/2017";

    //For each user concantate the date fund transferred and remaining balance
    if(name == "sonal"){
      var transactions = localStorage.getItem('transactionSonal');
      var concantate = date + ";" + amount + ";" + sub;
      console.log(transactions);
        if(transactions != null){
          transactions = transactions +","+ concantate;
          console.log(transactions);
          localStorage.setItem('transactionSonal', transactions);
        }else{
          localStorage.setItem('transactionSonal', concantate);
          console.log(concantate);
        }
      localStorage.setItem('finalBalanceSonal', sub);
    }else {
      var transactions = localStorage.getItem('transactionAnkur');
      var concantate = date + ";" + amount + ";" + sub;
      console.log(transactions);
        if(transactions != null){
          transactions = transactions +","+ concantate;
            console.log(transactions);
          localStorage.setItem('transactionAnkur', transactions);
        }else{
          localStorage.setItem('transactionAnkur', concantate);
          console.log(concantate);
        }
      localStorage.setItem('finalBalanceUser2', sub);
    }
});

logout.addEventListener("click", function(event)  {
  event.preventDefault();
  console.log(name);
  window.location.assign("menu.html");

});
