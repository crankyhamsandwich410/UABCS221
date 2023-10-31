function myFunction(){
    let ranChoice;
    let choice = prompt("Please enter Rock, Paper, or Scissors").toLowerCase();
    if (choice != "rock" || choice != "paper" || choice != "scissors"){
        choice = prompt("Invalid input, please enter Rock, Paper, or Scissors.");
    }
    console.log("You chose " + choice + ".");

    let ranNum = Math.floor(Math.random() * 3);

    if (ranNum == 0){
        ranChoice = "rock";
    }
    else if (ranNum == 1){
        ranChoice = "paper";
    }
    else{
        ranChoice = "scissors";
    }

    console.log("The computer chose " + ranChoice + ".");

    if (choice == "rock" && ranChoice == "scissors" || choice == "paper" && ranChoice == "rock" || choice == "scissors" && ranChoice == "paper"){
        console.log("Congradulations, you won!")
    }
    else if(ranChoice == "rock" && choice == "scissors" || ranChoice == "paper" && choice == "rock" || ranChoice == "scissors" && choice == "paper"){
        console.log("I'm sorry, you lost!");
    }
    else{
        console.log("It was a tie!")
    }
    let rematch = confirm("Would you like to play again?");
    if (rematch == true){
        myFunction();
    }
    else{
        console.log("No rematch? Ok.")
    }
}

myFunction();

