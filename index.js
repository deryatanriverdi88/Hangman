let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

let words = [ 'APPLE', "HELLO", "OCEAN", 'SUMMER'];

let hangman = document.querySelector('.hangman');
let letterDiv = document.querySelector('.letters');
let wordDiv = document.querySelector('.word-div');
let underlineDiv = document.querySelector('.underline-div');
let letters = document.getElementsByClassName('letter');
let wordSpan = document.getElementsByClassName('word-span');

letterDiv.innerHTML = alphabet.map(letter => {
	return `<button class="letter">${letter}</button>`
}).join('');

let clickedLetter = [];
let correctLetters = [];

for(let i=0; i < letters.length; i++){
    letters[i].addEventListener('click', function(event){
        let targetted = event.target;
        let letter = event.target.innerText;
        if(!clickedLetter.includes(letter)){
            clickedLetter.push(letter);
            targetted.style.background = '#e6aebd'
        }
        if(word.includes(letter)){
            correctLetters.push(letter);
            correctLetters = [...new Set(correctLetters)];
            wordDisplay(letter);
            won();
        }else {
            drawHangman(letter);
        };
    });
   };
