//var playerChoice = "";
 // Finds all elements with class name of "clickable"
    //var chooseRock = document.getElementsByClassName("rock").onclick();
    // This runs every time something is clicked
    // And it receives a MouseEvent object describing the nature of that click
    var rock = function(data){
        // Show the recieved MouseEvent object
        console.log(data);
        var playerChoice = "rock";
        WhoWins();
        
        // Turn the thing that was clicked orange
        this.style.backgroundColor = "orange";
    };
    // Specify HTML elements that get wired up to the event handler
    //chooseRock[0].onclick = rock;


// ask for user input
//var playerChoice = prompt("Choose rock, paper or scissors");

//player wins state
var playerWins = false;

// get computer input
var compMathChoice = Math.random();
console.log(compMathChoice);

var compResultChoice = "";
if (compMathChoice >=0 && compMathChoice <= 0.33){
	compResultChoice = "rock";
} else if (compMathChoice >0.33 && compMathChoice <= 0.66){
	compResultChoice = "paper";	
} else {
	compResultChoice = "scissors"
}
//console.log("you chose: "  + playerChoice)


function whoWins(playerChoice) {
	console.log(playerChoice)
	if (playerChoice == "rock" && compResultChoice == "paper"){
		playerWins = false;
		document.getElementById("heading").innerHTML = ("Computer chose paper! Computer wins!");
		console.log("Computer chose paper! Computer wins!");
	} else if (playerChoice == "paper" && compResultChoice == "rock"){
		playerWins = true;
		document.getElementById("heading").innerHTML = ("Computer chose rock! You win!");
		console.log("Computer chose rock! You win!");
	} else if (playerChoice == "paper" && compResultChoice == "scissors"){
		playerWins = false;
		document.getElementById("heading").innerHTML = ("Computer chose scissors! Computer wins!");
		console.log("Computer chose scissors! Computer wins!");
	} else if (playerChoice == "scissors" && compResultChoice == "paper"){
		playerWins = true;
		document.getElementById("heading").innerHTML = ("Computer chose paper! You win!");
		console.log("Computer chose paper! You win!");
	} else if (playerChoice == "scissors" && compResultChoice == "rock"){
		playerWins = false;
		document.getElementById("heading").innerHTML = ("Computer chose rock! Computer wins!");
		console.log("Computer chose rock! Computer wins!");
	} else if (playerChoice == "rock" && compResultChoice == "scissors"){
		playerWins = true;
		document.getElementById("heading").innerHTML = ("Computer chose scissors! You win!");
		console.log("Computer chose scissors! You win!");
	} else {
		playerTie = true;
		document.getElementById("heading").innerHTML = ("You both chose the same! It's a tie!");
		console.log("You both chose the same! It's a tie!");
	}
} 
