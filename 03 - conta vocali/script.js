"use strict";
console.clear();
/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

// Primo metodo
function numeroVocali(parola) {
    let contVocali = 0;
    const vocali = ["a", "A", "E", "e", "I", "i", "O", "o", "U", "u" ];
    for(let i = 0; i < parola.length; i++) {
        for(let j = 0; j < vocali.length; j++) {
            if(parola[i] == vocali[j]) {
                contVocali++;
                console.log("Vocale: " + parola[i]);
            }
        }
    }
    return contVocali;
}

// Secondo metodo
function numeroVocali2 (parola1) {
    let contVocali1 = 0;
    const vocals = ["a", "A", "E", "e", "I", "i", "O", "o", "U", "u" ];
    for(let i = 0; i < parola1.length; i++) {
            if(vocals.includes(parola1[i])) {
                contVocali1++;
                console.log("Vocale: " + parola1[i]);
            }
    }
    return contVocali1;
}

// Invoca la funzione qui e stampa il risultato in console
console.log("1 metodo: ");
console.log("Il numero di vocali presenti nella parola " + word + " è " + numeroVocali(word));
console.log("2 metodo: ");
console.log("Il numero di vocali presenti nella parola " + word + " è " + numeroVocali2(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)