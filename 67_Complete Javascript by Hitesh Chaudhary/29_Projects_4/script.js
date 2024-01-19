let randomnumber = Math.floor(Math.random() * 10);

let submit = document.querySelector('#subt');
let userguess = document.querySelector('#guessField');
let previousguesses = document.querySelector('.guesses');
let guessesremaining = document.querySelector('.lastResult');
let result = document.querySelector('.lowOrHi');

let newparaelemt = document.createElement('p');

let playgame = true;

if (playgame) {
     submit.addEventListener('click', (e) => {
          e.preventDefault();
          let gueses = parseInt(userguess.value);
          console.log(gueses);
          checkuserinput(gueses);
     });
}

function checkuserinput(guess) {
     if (isNaN(guess)) {
          alert('Please write Number !');
          userguess.value = '';
     } else if (guess < 1) {
          alert('Please Enter greater than 1 !');
     } else if (guess > 100) {
          alert('Please Enter Less Than 100 !');
     } else {
          checkrandomnumber(guess);
     }
}

function checkrandomnumber(guess) {
     if (guess > randomnumber) {
          displaymessage(`Your Guess is to High !`);
     } else if (guess < randomnumber) {
          displaymessage('Your Guess is to Low');
     } else {
          displaymessage(`Your Guess is Right ${randomnumber}`);
          endgame();
     }
}

function displaymessage(guess_messages) {
     userguess.value = '';
     previousguesses.innerHTML = `${guess_messages}`;
     //
}

function endgame() {
     // here first disable input field because we don't want if user end the game so fill again input
     userguess.value = '';
     userguess.setAttribute('disabled', '');
     // here create a button to start the new game
     newparaelemt.classList.add('button');
     newparaelemt.innerHTML = `<h2 id="newbutton">Start NewGame</h2>`;
     newparaelemt.style.cursor = 'pointer';
     document.body.appendChild(newparaelemt);
     playgame = false;
     newgame();
     previousguesses.value = '';
}

function newgame() {
     let newgamebttn = document.querySelector('#newbutton');
     newgamebttn.addEventListener('click', (e) => {
          previousguesses.innerHTML = ''
          userguess.removeAttribute('disabled');
          document.body.removeChild(newparaelemt);
          playgame = true
          randomnumber = Math.floor(Math.random() * 10);
          if (playgame) {
               submit.addEventListener('click', (e) => {
                    e.preventDefault();
                    let gueses = parseInt(userguess.value);
                    console.log(gueses);
                    checkuserinput(gueses);
               });
          }
     });
}
