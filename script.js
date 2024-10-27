let random_number = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector('#submitGuess');
const input = document.querySelector('#guessInput');
const previous_guesses = document.querySelector('.guesses');
const last_result = document.querySelector('.lastresult');
const lowor_high = document.querySelector('.loworhigh');
const show_status = document.querySelector('.status');

let previous_guesses_list = [];
let num_guesses = 1;
let play_game = true;

// Event listener for guessing
if (play_game) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(input.value);
        validate_guess(guess);
    });
}

// Validate guess input
function validate_guess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100');
        return;
    } else {
        previous_guesses_list.push(guess);
        if (num_guesses >= 10) {
            display_guess(guess);
            display_message(`Game Over! The correct number was ${random_number}.`);
            end_game();
        } else {
            display_guess(guess);
            check_guess(guess);
        }
    }
}

// Check if the guess is correct, too high, or too low
function check_guess(guess) {
    if (guess === random_number) {
        display_message(`Congratulations! You guessed the right number!`);
        end_game();
    } else if (guess < random_number) {
        display_message(`Your guess is too low.`);
    } else {
        display_message(`Your guess is too high.`);
    }
    num_guesses++;
    last_result.innerHTML = `${10 - num_guesses}`;
}

// Display guessed numbers
function display_guess(guess) {
    input.value = '';
    previous_guesses.innerHTML = previous_guesses_list.join(', ');
}

// Display messages
function display_message(message) {
    lowor_high.innerHTML = `<h3>${message}</h3>`;
}

function new_game() {
    random_number = Math.floor(Math.random() * 100) + 1;
    previous_guesses_list = [];
    num_guesses = 1;
    play_game = true;

    input.removeAttribute('disabled');
    input.value = '';
    last_result.innerHTML = '10';
    previous_guesses.innerHTML = '';
    lowor_high.innerHTML = '';
    document.getElementById('game-over')?.remove();

    submit.style.display = 'inline';
    const restartButton = document.querySelector('#newGame');
    if (restartButton) restartButton.remove();
}


function end_game() {
    play_game = false;
    input.setAttribute('disabled', '');
    
    const gameOverMessage = document.createElement('h2');
    gameOverMessage.id = 'game-over';
    gameOverMessage.innerHTML = "Game Over! <br> Click 'New Game' to play again.";
    show_status.appendChild(gameOverMessage);

    submit.style.display = 'none';

    const newGameButton = document.createElement('button');
    newGameButton.id = 'NewGame';
    newGameButton.textContent = 'New Game';
    show_status.appendChild(newGameButton);

    newGameButton.addEventListener('click', new_game);
}































// let random_number = (parseInt(Math.random()*100+1));
// const submit = document.querySelector('#submitGuess')
// const input = document.querySelector('#guessInput')
// const previous_guesses = document.querySelector('.guesses')
// const last_result = document.querySelector('.lastresult')
// const lowor_high = document.querySelector('.loworhigh')
// const show_status = document.querySelector('.status')
// console.log(submit);
// const p = document.createElement('p');
// let previous_guesses_list = [];
// let num_guesses = 1;
// let play_game = true;

// if (play_game){
//     submit.addEventListener('click', function(e) {
//         e.preventDefault();
//         const guess = parseInt(input.value);
//         console.log(guess);
//         validate_guess(guess);
// });
// }


// function validate_guess(guess) {
//    if (isNaN (guess) || guess < 1 || guess > 100) {
//     alert('Please enter a valid number between 1 and 100');
//     return;
//    }else{
//     previous_guesses_list.push(guess);
//     if (num_guesses  > 10) {
//         display_guess(guess)
//         display_message (`end_game. Random number was ${random_number}`)
//         end_game()
//    }else{
//     display_guess(guess)
//     check_guess(guess)
//    }
// }
// }

// function check_guess(guess) {
//     if (guess === random_number)   {
//           display_guess(`you guessed the right number `)
//           end_game()
//     }else if (guess < random_number) {
//           display_message(`you guessed too low`)
//     }else if (guess > random_number) {
//         display_message(`you guessed too high`)
//     }  
// }
// function display_guess(guess) {
//     input.value = '';
//     // guesses.innerHTML +=  `${guess}`
//       previous_guesses.innerHTML += `${guess} ,     `; // Update display element

//     num_guesses++ 
//     last_result.innerHTML = ` ${11-num_guesses}  `
// }

// function display_message(message) {
//     lowor_high.innerHTML = `<h3>${message}</h3>`
// }

// function new_game() {
//     const newGame_button = document.querySelector('#newGame');
//     newGame_button.addEventListener('click', function(e) {
//         random_number = (parseInt(Math.random()*100+1));
//         previous_guesses_list = [];
//         num_guesses = 1;
//         input.value = '';
//         last_result.innerHTML = ` ${11-num_guesses}  `
//         show_status.removeChild(p)
//         play_game = true;

        
//     });
// }



// function end_game() {
//     input.value = '';
//     input.setAttribute('disabled', '');
//     p.classList.add('.button');
//     p.innerHTML = `<h2 id="game-over">Game Over!</h2>`
//     show_status.appendChild(p)
//     play_game = false; 
//     new_game();
// }
























// // const random_number = (parseInt(Math.random() * 100 + 1));
// // const submit = document.querySelector('#submitGuess');
// // const input = document.querySelector('#guessInput');
// // const previous_guesses_display = document.querySelector('.guesses');
// // const last_result = document.querySelector('.lastresult');
// // const lowor_high = document.querySelector('.loworhigh');
// // const show_status = document.querySelector('.status');

// // let previous_guesses_list = [];
// // let num_guesses = 1;
// // let play_game = true;

// // if (play_game) {
// //     submit.addEventListener('click', function (e) {
// //         e.preventDefault();
// //         const guess = parseInt(input.value);
// //         validate_guess(guess);
// //     });
// // }

// // function validate_guess(guess) {
// //     if (isNaN(guess) || guess < 1 || guess > 100) {
// //         alert('Please enter a valid number between 1 and 100');
// //         return;
// //     } else {
// //         previous_guesses_list.push(guess); // Use the correct array here
// //         if (num_guesses > 10) {
// //             display_guess(guess);
// //             display_message(`End game. Random number was ${random_number}`);
// //             end_game();
// //         } else {
// //             display_guess(guess);
// //             check_guess(guess); // Call the function with guess
// //         }
// //     }
// // }

// // function check_guess(guess) {
// //     if (guess === random_number) {
// //         display_guess(`You guessed the right number!`);
// //         end_game();
// //     } else if (guess < random_number) {
// //         display_message(`You guessed too low`);
// //     } else if (guess > random_number) {
// //         display_message(`You guessed too high`);
// //     }
// // }

// // function display_guess(guess) {
// //     input.value = '';
// //     previous_guesses_display.innerHTML += `${guess} `; // Update display element
// //     num_guesses++;
// //     last_result.innerHTML = `${10 - num_guesses}`;
// // }

// // function display_message(message) {
// //     lowor_high.innerHTML = `<h3>${message}</h3>`;
// // }

// // function end_game() {
// //     play_game = false; // Set play_game to false to prevent further guesses
// //     submit.disabled = true; // Optionally disable the submit button after the game ends
// //     // Optionally reset the game or provide a way to restart
// // }
























