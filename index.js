

var randomvariable = Math.floor(Math.random() * 6) + 1;

var randomimage="images/dice"+randomvariable+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);

var randomvariable2 = Math.floor(Math.random() * 6) + 1;

var randomimage2="images/dice"+randomvariable2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);

if(randomvariable>randomvariable2)
{
    document.querySelector("h1").innerHTML="Player 1 is the winner"
}
else if(randomvariable2>randomvariable)
{
    document.querySelector("h1").innerHTML="Player 2 is the winner";
}
else{
    document.querySelector("h1").innerHTML="It's a tie";
}