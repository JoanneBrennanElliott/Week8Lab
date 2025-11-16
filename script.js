/* Student Name: Joanne Brennan Elliott 
 Student Number: X23410001
 Web Design and Client Side Scripting 
Week 8 Lab 8.11.2025  

.........*/


	const options = ["rock", "paper", "scissors"]

        const playerDisplay = document.getElementById("playerDisplay");
        const computerDisplay = document.getElementById("computerDisplay");
        const resultDisplay = document.getElementById("resultDisplay");
     

	function playGame(playerChoice){	 

		const computerChoice = options[Math.floor(Math.random() *3)];

		let result = "";
		
		if (playerChoice === computerChoice) {
			result = "It's a tie!"
		}

		else {
			switch(playerChoice){
				case "rock":

					if (String(computerChoice).toLowerCase() === "scissors") {
						result = "You win!";
					} else {
						result = "You lose!";
					}
				break;

				case "paper":
					if (String(computerChoice).toLowerCase() === "rock") {
						result = "You win!";
					} else {
						result = "You lose!";
					}
				break;

				case "scissors":
					if (String(computerChoice).toLowerCase() === "paper") {
						result = "You win!";
					} else {
						result = "You lose!";
					}
				
				break;
			}
		}
		
		playerDisplay.textContent = "Player = " +playerChoice;
		computerDisplay.textContent = "Computer = "+computerChoice;
		resultDisplay.textContent = result;
		
	}