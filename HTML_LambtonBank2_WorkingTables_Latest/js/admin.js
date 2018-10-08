
  var initbalance = parseInt(document.getElementById('InittialBal').value);

  //execute the js onload of webpage
  window.onload = function() {
      var name = localStorage.getItem('username');
      console.log(name);

      if (name != "undefined" || name != "null") {
        document.getElementById('user').value = name;
      } else
        document.getElementById('user').value = "";

       var source = localStorage.getItem('source');
       var target = localStorage.getItem('target');
       var initbal = localStorage.getItem('initbal');
       var amount = localStorage.getItem('amount');
       var finalbalancetarget = parseInt(initbalance) + parseInt(amount);
       var finalbalsource = parseInt(initbal) - parseInt(amount);

       console.log(source);
       console.log(initbal);
       console.log(amount);
       console.log(target);
       console.log(initbalance);
       console.log(finalbalancetarget);

       if(finalbalsource < 0){
         finalbalsource = 0;
       }

       document.getElementById('source').value = source;
       document.getElementById('InitialBalance').value = initbal;
       document.getElementById('ActualBalance').value = finalbalsource;
       document.getElementById('target').value = target;
       document.getElementById('InittialBal').value = initbalance;
       document.getElementById('ActualBal').value = finalbalancetarget;

    }

    logout.addEventListener("click", function(event)  {

      event.preventDefault();
      window.location.assign("menu.html");

});
