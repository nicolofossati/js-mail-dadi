/*  Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

let mails = ['nicofossa01@gmail.com', 'boh@gmail.com', 'nonsaprei@yahoo.it'];

const mail_input = prompt("Inserisci la tua Email");
let check = false;
 
for(let i = 0; i < mails.length; i++){
    if(mails[i] == mail_input){
        check = true;
    }
}

const h1dom = document.querySelector('#output');

if(check == true){
    h1dom.innerHTML = "Questa mail fa parte della lista!";
} else {
    h1dom.innerHTML = "Questa mail NON fa parte della lista!";
}