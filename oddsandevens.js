function play()
{
     playChoice = document.getElementById("oddsevens").value; //gets odds or even choice from the odds or evens textbox
     playNumber = document.getElementById("binary").value;    //gets the number from the number textbox
     numberValue = parseInt(playNumber);                      //converts the number into an integer

     playvalue = document.getElementById("playvalue"); //prepares the display for the number that was chosen by the human player
     computervalue = document.getElementById("computervalue"); //prepares the display for the number that was chosen by the computer
     result = document.getElementById("result");
 
     numbers = [0, 1];
     computerChoice = "";
     computerNumber = 0;
     
     if((playChoice.toLowerCase() == "odds") & (numberValue == 1 || numberValue == 0)) //case where player chose to play odds
     {
        computerChoice = "evens";
        computerNumber = numbers[Math.floor(Math.random() * numbers.length)]; 

        playvalue.innerHTML = "You chose the number " + numberValue + ".";
        computervalue.innerHTML = "Computer chose the number " + computerNumber + ".";

        if(numberValue == computerNumber)
           result.innerHTML = "Sorry, you lose..."; 
        else
           result.innerHTML = "Congratulations, you win!";  
     }
     else if((playChoice.toLowerCase() == "evens") & (numberValue == 1 || numberValue == 0)) //case where player chose to play evens
     {
        computerChoice = "odds";
        computerNumber = numbers[Math.floor(Math.random() * numbers.length)];

        playvalue.innerHTML = "You chose the number " + numberValue + ".";
        computervalue.innerHTML = "Computer chose the number " + computerNumber + ".";

        if(numberValue == computerNumber)
           result.innerHTML = "Congratulations, you win!";
        else
           result.innerHTML = "Sorry, you lose..."; 
     }
}



