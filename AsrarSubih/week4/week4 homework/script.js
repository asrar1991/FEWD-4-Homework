function myFunction() {
    var x = document.getElementById("MyNumber").value;
    var greeting;
     if (x%3 == 0)  {
      greeting = "Pling";}
      else if (x%5 == 0)  {
      greeting = "plong";}
      else if (x%7 == 0)  {
      greeting = "plang";}
      else {
      greeting = x;
    }
  document.getElementById("demo").innerHTML = greeting;}