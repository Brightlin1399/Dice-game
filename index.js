var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdice1="images/dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdice1);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomdice2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdice2);
if(randomdice1>randomdice2){
    document.querySelector("h1").innerHTML="Player 1 won";
}
else if(randomdice1<randomdice2){
    document.querySelector("h1").innerHTML="Player 2 won";
}
else{
    document.querySelector("h1").innerHTML="Oops it's a draw";

}
