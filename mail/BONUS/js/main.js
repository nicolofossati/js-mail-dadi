/*  Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

let mails = ['nicofossa01@gmail.com', 'boh@gmail.com', 'nonsaprei@yahoo.it'];


const textDom = document.querySelector('#text_input');
const buttonDom = document.querySelector('#bttn');
let mail_input;


buttonDom.addEventListener('click', 
    function(){
        mail_input = textDom.value;
        console.log(mail_input);
        const output = document.createElement('h1');
        output.classList.add('output');

        let check = false;

        for(let i = 0; i < mails.length; i++){
            if(mails[i] == mail_input){
                check = true;
            }
        }

        if(check == true){
            output.innerHTML = "Questa mail fa parte della lista!";
            console.log("Questa mail fa parte della lista!");
        } else {
            output.innerHTML = "Questa mail NON fa parte della lista!";
            console.log("Questa mail NON fa parte della lista!");
        }
    }
);