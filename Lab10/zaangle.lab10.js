let choice;
// myFunction();
window.onload=function(){
    const element1 = document.getElementById("rock")
    element1.addEventListener("click", rockClick);

    const element2 = document.getElementById("paper")
    element2.addEventListener("click", paperClick);

    const element3 = document.getElementById("scissors")
    element3.addEventListener("click", scissorsClick);
}

function rockClick(){
    choice = "rock";
    myFunction();
}

function paperClick(){
    choice = "paper";
    myFunction();
}

function scissorsClick(){
    choice = "scissors";
    myFunction();
}

function myFunction(){
    let ranChoice;

    let ranNum = Math.floor(Math.random() * 3);

    let response;

    if (ranNum == 0){
        ranChoice = "rock";
    }
    else if (ranNum == 1){
        ranChoice = "paper";
    }
    else{
        ranChoice = "scissors";
    }

    if (choice == "rock" && ranChoice == "scissors" || choice == "paper" && ranChoice == "rock" || choice == "scissors" && ranChoice == "paper"){
        response = "Congradulations, you won!";
    }
    else if(ranChoice == "rock" && choice == "scissors" || ranChoice == "paper" && choice == "rock" || ranChoice == "scissors" && choice == "paper"){
        response = "I'm sorry, you lost!";
    }
    else{
        response = "It was a tie!";
    }
    document.getElementById("text").innerText = "You chose " + choice + " and the computer chose " + ranChoice + ". " + response;
    
}


