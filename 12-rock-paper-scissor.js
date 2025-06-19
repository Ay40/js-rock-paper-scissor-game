        let score = JSON.parse(localStorage.getItem('score'));
        if(score === null){
            score = {
                wins : 0,
                losses : 0,
                ties : 0,
            };
        }

       updateScore();

       let autoPlaying = false;
       let intervalID
       function autoPlay() {
        if (!autoPlaying) {
            intervalID = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
         autoPlaying = true;
        } else {
            clearInterval(intervalID);
            autoPlaying = false
        }
       
       }

       function playGame(playerMove) {
            const computerMove = pickComputerMove();
            let result = '';
            if (playerMove === 'scissors') {
                 if (computerMove === 'rock') {
                    result = 'You Lose';
                }else if(computerMove === 'paper') {
                    result = 'You Win';
                } else if(computerMove === 'scissors') {
                    result = 'Tie';
                }
            } else if (playerMove === 'paper') {
                if (computerMove === 'rock') {
                    result = 'You Win';
                }else if(computerMove === 'paper') {
                    result = 'Tie';
                } else if(computerMove === 'scissors') {
                    result = 'You Lose';
                }
            } else if (playerMove === 'rock') {
                 if (computerMove === 'rock') {
                         result = 'Tie';
            }else if(computerMove === 'paper') {
                        result = 'You Lose';
            } else if(computerMove === 'scissors') {
                        result = 'You Win';
            }
                }
           
            if(result == 'You Win'){
                score.wins += 1; 
            }else if(result == 'You Lose'){
                score.losses += 1;
            }else if(result == 'Tie'){
                score.ties += 1;
            }

            localStorage.setItem('score',JSON.stringify(score));

            // check 
            updateScore();

            document.querySelector('.js-result').innerHTML = `${result}`;
            document.querySelector('.js-move').innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="player" class="move-icon"><img src="images/${computerMove}-emoji.png" alt="computer" class="move-icon">Computer`;
       }
        function pickComputerMove() {
            let computerMove = '';
            let randomNumber = (Math.random());
            if(randomNumber >= 0 && randomNumber < 1/3) {
                computerMove = 'rock';
            }else if(randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'paper';
            }else if(randomNumber >= 2/3 && randomNumber < 1){
                computerMove = 'scissors';
            }
            return computerMove;
        }

        function updateScore(){
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }
        
        
        
    