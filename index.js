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
let uniqueLetters = [];
let drawnLine = [];
let wrongLetters = [];

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

shuffleWords = (array)=> {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
};

let word = '';

function startGame(){
	word = shuffleWords(words)[0];
	drawnLine = [];
	setUnderline();
	uniqueLetters = [];
	setWord();
	clearHangman();
	clickedLetter = [];
	wrongLetters = [];
	correctLetters = [];
    clearStyleForLetters();
}

function setUnderline(){
	underlineDiv.innerHTML = ""
	for(let i=0; i < word.length; i++){
	 underlineDiv.innerHTML += `<span></span>`
 };
}

function setWord(){
	wordDiv.innerHTML = '';
	let splitWord = word.split('');
	uniqueLetters = [...new Set(splitWord)]
	splitWord.map(letter => {
		return  wordDiv.innerHTML += `<span class="word-span">${letter}</span>`
  })
}

function wordDisplay(letter){
    for(let i = 0; i < wordSpan.length; i ++){
       if(wordSpan[i].innerHTML === letter){
       wordSpan[i].style.visibility = 'visible'
       };
    };
};

function drawHangman(l){
    for (let i=0; i < hangman.children.length; i++){
    if(!drawnLine.includes(hangman.children[i])){
            if(!wrongLetters.includes(l)){
                wrongLetters.push(l);
                hangman.children[i].style.visibility = "visible"
                drawnLine.push(hangman.children[i]);
                break;
        };
    };
  };
  lost()
};

function clearHangman(){
	for (let i=0; i < hangman.children.length; i++){
		hangman.children[i].style.visibility = "hidden"
	};
};

function clearStyleForLetters(){
	for (let i=0; i < letters.length; i++){
		letters[i].style.background = "#f58ba7"
	};
};

function lost(){
    if (drawnLine.length === hangman.children.length){
        wordDiv.innerHTML = `${word}`;
        setTimeout(() => {
           let answer = confirm("Game Over! You lost :( Do you wanna play again?");
        if(answer === true){
            startGame();
        } else {
           return;
        }
       }, 50);
    };
};

function won(){
	setTimeout(() => {
		if(correctLetters.length === uniqueLetters.length){
		let answer = confirm("Game Over! You won! Do you wanna play again?");
		 if(answer === true){
			 startGame();
		 } else {
			return;
		}
	 }
	}, 50);
};

startGame();