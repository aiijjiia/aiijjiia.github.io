var color = prompt("What color is your cat?", "black and white");

if (color == "black and white") {
   document.getElementById("output").innerHTML = "valid color";
   } 
else { 
   document.getElementById("output").innerHTML = "invalid color";
   }