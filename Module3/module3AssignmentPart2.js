function forLoopDemo()
{
  let text="";
  var myNum = document.getElementById("input").value;

  if(parseInt(myNum) < 5)
  document.getElementById("forLoop").innerHTML = "<b>ERROR:<b> Number must be between 5 and 20. Try Again.";

  else if (!Number.isInteger(parseInt(myNum)))
  document.getElementById("forLoop").innerHTML = "<b>ERROR:<b> Invalid input. Try Again.";

  else
{
    myNum = parseInt(myNum);
    for (i = 5; i <= myNum; i++)
    {
      text += "This is iteration #" + i + "<br>";
    }
    document.getElementById("forLoop").innerHTML = text;
  }
}
