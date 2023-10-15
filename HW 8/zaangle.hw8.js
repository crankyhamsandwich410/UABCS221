let letterGrade; 
let grade = prompt("Enter your numeric grade here:");
console.log("Your grade is: " + grade);     //Here is the prompt line

// Here are my letter grade conversions
if(grade >= 90){
    letterGrade = "A";
    console.log("Your letter grade is an A! Congratulations!")
}
else if(grade >=80 && grade < 90){
    letterGrade = "B";
    console.log("Your letter grade is a B! Great work!")
}
else if(grade >= 70 && grade < 80){
    letterGrade = "C";
    console.log("Your letter grade is a C. You're passing.")
}
else if(grade >= 60 && grade < 70){
    letterGrade = "D";
    console.log("Your letter grade is a D. You can do better than that!")
}
else if(grade < 60){
    letterGrade = "F";
    console.log("Your letter grade is an F. You're failing, you need to study harder!")
}
else{
    console.log("Invalid input, please enter a different grade.")
}

//Here are my reward statements
if(letterGrade == "A"){
    console.log("Your reward is a piece of candy!")
}
else if(letterGrade == "B"){
    console.log("Your reward is an apple!")
}
else if(letterGrade == "C"){
    console.log("Your reward is a mint.")
}
else if(letterGrade == "D"){
    console.log("Your reward is a pencil.")
}
else if(letterGrade == "F"){
    console.log("Your reward is an awkward conversation with your parents!")
}