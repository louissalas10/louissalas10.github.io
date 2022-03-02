let subjects = ["Accounting", " Algebra", " Programming", " Art", " Data Analytics"];

var output = "[";

subjects.forEach((subjects, index) => {
  if (index == subjects.length - 1)
    output += subjects + "]";
  else
    output += subjects + ", ";
});

document.getElementById("arrayContents").innerHTML = output;
