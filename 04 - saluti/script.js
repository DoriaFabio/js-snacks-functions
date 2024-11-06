/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const nome = "Mario";

// Dichiara la funzione qui.
// 1 metodo
function hello (name) {
    console.log("Ciao " + name);
}

// 2 metodo (Arrowfunction)
let helloArrow = (name) => "Ciao " + name;


// Invoca la funzione qui e stampa il risultato in console
console.log("1 metodo");
hello(nome);
console.log("2 metodo");
console.log(helloArrow(nome));

//Risultato atteso se si passa 'Mario': // ciao Mario