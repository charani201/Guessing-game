let input=document.getElementById("input");
let btn=document.getElementById("btn");
let wrng = document.querySelector('.wrng');
let guesses = document.querySelector('.guessno');

let answer = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;

btn.addEventListener("click", ()=>{
    guessNumber();
})
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      guessNumber();
    }
  });
function guessNumber()
{
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) 
        wrng.innerHTML = "Enter Between 1 to 100";
    else{
    numGuesses++;  // Increment the guess counter
    guesses.innerHTML = "Total No of guesses: " + numGuesses;
    if(input.value==answer)
    {
        wrng.innerHTML="Correct guesss after "+numGuesses+" guesses";
        btn.disabled = true;
      setTimeout(()=>{
        resetGame();
      },5000)
    }
    else if(input.value<answer)
    {
        wrng.innerHTML="My guess is higher than this";
    }
    else{
        wrng.innerHTML="My guess is low";
    }
}
};
function resetGame()
{
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = "";
    wrng.innerHTML = "";
    btn.disabled = false;
    guesses.innerHTML = "No. of Guess : 0";
}