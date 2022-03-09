function calculate()
{
  var text1 = "", text2 = "", text3 = "";
  var amount = document.getElementById("dollarAmount").value;

if(parseFloat(amount) < 5)
   document.getElementById("servicePrice").innerHTML = "<b>Error:</b> Servie Price must be at least $5.00. Try Again.";
else if(parseFloat(amount) > 500)
  document.getElementById("servicePrice").innerHTML = "<b>Error:</b> Servie Price must be less than $500. Try Again.";
else if(Number.isNaN(parseFloat(amount)))
document.getElementById("servicePrice").innerHTML = "<b>Error:</b> Must be a number. Try Again.";
else{
  var servicePrice = parseFloat(amount);

  var tipAmount, finalPrice;

  if (document.getElementById("Great").checked)
  {
    tipAmount = servicePrice * 0.20;
    text2 += "<b>Service Quality: <b>Great </b>";
  }
  else if(document.getElementById("Ok").checked)
  {
    tipAmount = servicePrice * 0.15;
    text2 += "<b>Service Quality: <b>Ok </b>";
  }
  else if (document.getElementById("Poor").checked)
  {
    tipAmount = servicePrice * 0.10;
    text2 += "<b>Service Quality: <b>Poor </b>";
  }
  finalPrice = finalPrice + tipAmount;

  servicePrice = servicePrice.toFixed(2);
  tipAmount = tipAmount.toFixed(2);
  finalPrice = finalPrice.toFixed(2);

  text1 += "<b>Service Price: </b>$" + servicePrice;
  text2 += "<b>Tip Amount: </b>$" + tipAmount;
  text3 += "<b>Final Price: </b>$" + finalPrice;

  document.getElementById("servicePrice").innerHTML = text1;
  document.getElementById("tipAmount").innerHTML = text2;
  document.getElementById("finalPrice").innerHTML = text3;
 }
}
