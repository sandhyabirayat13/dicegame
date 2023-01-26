var player1=prompt("enter player 1 name");

var player2=prompt("enter player 2 name");

var player3=prompt("enter player 3 name");

var player4=prompt("enter player 4 name");

document.querySelectorAll("p")[0].innerHTML=player1;

document.querySelectorAll("p")[1].innerHTML=player2;

document.querySelectorAll("p")[2].innerHTML=player3;

document.querySelectorAll("p")[3].innerHTML=player4;


var randomNumber1=Math.floor(Math.random()*6+1);

var randomDiceImage1="dice" + randomNumber1 + ".png";

var randomImageSource1="images/"+randomDiceImage1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);

var randomNumber2=Math.floor(Math.random()*6+1);

var randomDiceImage2="dice" + randomNumber2 + ".png";

var randomImageSource2="images/"+ randomDiceImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

var add1=randomNumber1+randomNumber2;

var randomNumber3=Math.floor(Math.random()*6+1);

var randomDiceImage3="dice" + randomNumber3 + ".png";

var randomImageSource3="images/"+randomDiceImage3;

var image3=document.querySelectorAll("img")[2];

image3.setAttribute("src",randomImageSource3);

var randomNumber4=Math.floor(Math.random()*6+1);

var randomDiceImage4="dice" + randomNumber4 + ".png";

var randomImageSource4="images/"+ randomDiceImage4;

var image4=document.querySelectorAll("img")[3];

image4.setAttribute("src",randomImageSource4);

var add2=randomNumber3+randomNumber4

var randomNumber5=Math.floor(Math.random()*6+1);

var randomDiceImage5="dice" + randomNumber5 + ".png";

var randomImageSource5="images/"+randomDiceImage5;

var image5=document.querySelectorAll("img")[4];

image5.setAttribute("src",randomImageSource5);

var randomNumber6=Math.floor(Math.random()*6+1);

var randomDiceImage6="dice" + randomNumber6 + ".png";

var randomImageSource6="images/"+ randomDiceImage6;

var image6=document.querySelectorAll("img")[5];

image6.setAttribute("src",randomImageSource6);

var add3=randomNumber5+randomNumber6

var randomNumber7=Math.floor(Math.random()*6+1);

var randomDiceImage7="dice" + randomNumber7 + ".png";

var randomImageSource7="images/"+randomDiceImage7;

var image7=document.querySelectorAll("img")[6];

image7.setAttribute("src",randomImageSource7);

var randomNumber8=Math.floor(Math.random()*6+1);

var randomDiceImage8="dice" + randomNumber8 + ".png";

var randomImageSource8="images/"+ randomDiceImage8;

var image8=document.querySelectorAll("img")[7];

image8.setAttribute("src",randomImageSource8);

var add4=randomNumber7+randomNumber8

// if(addplayer1>addplayer2)
// {
//     document.querySelector("h1").innerHTML= player1 + "  win !";
// }
// else if(addplayer2>addplayer1){
//     document.querySelector("h1").innerHTML=player2 + "win !";
// }
// else if(addplayer1>addplayer3){
//     document.querySelector("h1").innerHTML= player1 + "  win !";
// }
// else if(addplayer1>addplayer4)
// else{
//     document.querySelector("h1").innerHTML="draw"
// }
if(add1>add2&&add1>add3&&add1>add4)
{
    document.querySelector("h1").innerHTML= player1 + "  win !";
}
else if(add2>add1&&add2>add3&&add2>add4)
{
    document.querySelector("h1").innerHTML= player2 + "  win !";
}
if(add3>add1&&add3>add2&&add3>add4)
{
    document.querySelector("h1").innerHTML= player3 + "  win !";
}
else if(add4>add2&&add4>add2&&add4>add3){
    document.querySelector("h1").innerHTML= player4 + "  win !";
}