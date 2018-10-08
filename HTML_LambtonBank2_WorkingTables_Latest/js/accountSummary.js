$(document).ready(function() {

  var name = localStorage.getItem('username');
  var source = localStorage.getItem('source');
  var creditleftSonal = localStorage.getItem('creditAvailSonal');
  var creditleftUser2 = localStorage.getItem('creditAvailUser2');
  var finalBalLeft = localStorage.getItem('finalBalanceSonal');
  var finalBalLeftUser2 = localStorage.getItem('finalBalanceUser2');
  var totalAmount = localStorage.getItem('amount');
  var transferredAmount = 0;


  console.log(name);
  console.log(source);

  var bodyTable = $("#summary").find("tbody");
  var bodyTableUser2 = $("#summaryUser2").find("tbody");

  if(name == "sonal" ){
    $("#summaryUser2").hide();
    var line = newLine();

  }else if(name == "ankur") {
    $("#summary").hide();
    var line = newLine();
  }


  function newLine(){

    if((name == "sonal" && source == "CHECK01") || (name == "ankur" && source == "CHECK01")){
      var transaction = localStorage.getItem('transactionSonal');
      console.log(transaction);
    }else{
      var transaction = localStorage.getItem('transactionAnkur');
      console.log(transaction);
    }

    var transOne = transaction.split(",");
    console.log(transOne);

    $.each(transOne, function( index, value ) {

      if(value != 0 ){
        var splitEachValue = value.split(";", 3);

        console.log(splitEachValue);

        var line = $("<tr>");

        var columnDate   = $("<td>").text(splitEachValue[0]);
        console.log(columnDate);
        if(name == "sonal"){
          if(source == "CHECK01"){
            var columnOut  = $("<td>").text(splitEachValue[1]);
            var columnIn = $("<td>").text(0);
            var columnBal  = $("<td>").text(splitEachValue[2]);

          }else if (source == "CHECK02") {
            var columnIn  = $("<td>").text(splitEachValue[1]);
            var columnOut = $("<td>").text(0);
            console.log(transferredAmount);
            transferredAmount = transferredAmount + parseInt(splitEachValue[1]);
            console.log(transferredAmount);
            var totalBalAfterInSonal = Number(transferredAmount) + parseInt(finalBalLeft);
            var columnBal  = $("<td>").text(totalBalAfterInSonal);
          }

        }else if(name == "ankur"){
          if(source == "CHECK02"){
            var columnOut  = $("<td>").text(splitEachValue[1]);
            var columnIn = $("<td>").text(0);
            var columnBal  = $("<td>").text(splitEachValue[2]);

          }else if (source == "CHECK01") {
            var columnIn  = $("<td>").text(splitEachValue[1]);
            var columnOut = $("<td>").text(0);
            console.log(transferredAmount);
            transferredAmount = transferredAmount + parseInt(splitEachValue[1]);
            console.log(transferredAmount);
            var totalBalAfterInAnkur = Number(transferredAmount) + 1000;
            var columnBal  = $("<td>").text(totalBalAfterInAnkur);
          }
        }

        console.log(columnOut);
        console.log(columnIn);
        console.log(columnBal);

        line.append(columnDate);
        line.append(columnOut);
        line.append(columnIn);
        line.append(columnBal);

        if(name == "sonal"){
          bodyTable.prepend(line);
          return line;
        }else{
          bodyTableUser2.prepend(line);
          return line;
        }
      }
    });
  }
});

$('#backbtn').click(function(event){
  event.preventDefault();
  window.location.assign("menu.html");
});
