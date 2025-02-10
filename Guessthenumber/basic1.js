let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let rnum=Math.ceil(Math.random()*100);
console.log(rnum);
function checkGuess() {
    let num=parseInt(userInput.value);
    if(num>rnum)
    {
        gameResult.textContent="Too High ! , try again";
        gameResult.style.backgroundColor="#1e217c";
    }else if(num<rnum)
    {
        gameResult.textContent="Too low !, try again";
        gameResult.style.backgroundColor="#1e217c";
    }
    else if(num==rnum){
        gameResult.textContent="Congratulations ! You got it.";
        gameResult.style.backgroundColor="green";

    }
    else
    {
        gameResult.textContent="Please,provide a valid number.";
        gameResult.style.backgroundColor="red";
    }
 
}
