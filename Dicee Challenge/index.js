//for first dice//
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "dice"+randomNumber1+".png";
var randomSrc1 = "images/"+randomImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSrc1);

//for second dice//
var randomNumber2 = (Math.floor(Math.random()*6)+1);
var randomImage2 = "dice"+randomNumber2+".png";
var randomSrc2="images/"+randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSrc2);

//selecting the winner//

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
}
else 
{
    document.querySelector("h1").innerHTML="Draw!";
}

