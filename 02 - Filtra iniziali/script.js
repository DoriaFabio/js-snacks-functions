"use strict";
console.clear();
/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.log(names);

// Dichiara la funzione qui.
function vocali(arrayI){
    let lettera = prompt("Inserisci una lettera").toUpperCase();
    console.log("La lettera scelta è " + lettera)
    let arraynew = [];
    for(let i = 0; i < arrayI.length; i++) {
        if(arrayI[i].charAt(0) == lettera) {
            arraynew.push(arrayI[i]);
        } 
    }
    if(arraynew.length == 0) {
        console.log("Non ci sono parole che iniziano con la lettera " + lettera);
    }
    return arraynew;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vocali(names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]