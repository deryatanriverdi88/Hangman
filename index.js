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
