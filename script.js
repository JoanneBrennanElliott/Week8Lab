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
			result = "Its a tie!"
		}
		else {
			switch(playerChoice){
				case "rock":
					result=(computerChoice ==="scissors") ? "You win!" : "You lose!"
					break;
				case "paper":
					result=(computerChoice ==="rock") ? "You win!" : "You lose!"
					break;
				case "scissors":
					result=(computerChoice ==="paper") ? "You win!" : "You lose!"
					break;
			}
		}
		//playerDisplay.textContent = 'PLAYER: ${playerChoice}';
		//computerDisplay.textContent = 'COMPUTER: ${computerChoice}';
		playerDisplay.textContent = "Player = " +playerChoice;
		computerDisplay.textContent = "Computer = "+computerChoice;
		resultDisplay.textContent = result;
		
	}