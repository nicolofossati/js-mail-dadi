/*  Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

const user_n = Math.floor((Math.random() * 6) + 1);
const computer_n = Math.floor((Math.random() * 6) + 1);

const recap = document.querySelector('#recap_title');
const result = document.querySelector('#result_title');


alert("Tira il dado:");
alert(`Hai tirato: ${user_n}`);

alert("Fai tirare il dado al computer:");
alert(`Il computer ha tirato: ${computer_n}`);


recap.innerHTML = `Te hai tirato: ${user_n} mentre il computer ha tirato: ${computer_n}`;

if(user_n > computer_n){
    result.innerHTML = `Hai vinto!`;
} else if(user_n < computer_n){
    result.innerHTML = `Hai Perso!`;
} else {
    result.innerHTML = `Avete pareggiato!`;
}

