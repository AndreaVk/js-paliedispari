//Palidroma 
//Chiedere all’utente di inserire una parola Creare una 
//funzione per capire se la parola inserita è palindroma

//Pari e Dispari
//L’utente sceglie pari o dispari 
//e inserisce un numero da 1 a 5. Generiamo un numero
//random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri 
//è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

//Palindromo

function isPalindroma(parola) {
    let newWorld = "";
    let palindroma = false;
    for (i = parola.length - 1; i >= 0; i--) {
    newWorld += parola[i];
    }
    if (newWorld == parola) {
    palindroma = true;
    }
    return palindroma;
}

let world = prompt("Inserisci una parola");
if (isPalindroma(world)) {
    console.log(world + " è palindroma");
} else {
    console.log(world + " non è palindroma");
}



