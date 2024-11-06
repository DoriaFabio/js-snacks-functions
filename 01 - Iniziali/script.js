// Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito.

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.log(names);

// Dichiara la funzione qui.
function iniziali (arrayNomi) {
    let arraynew = [];
    for(let i = 0; i < arrayNomi.length; i++) {
        let inNomi = arrayNomi[i].charAt(0);
        arraynew.push(inNomi);
    }
    return arraynew;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(iniziali(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]