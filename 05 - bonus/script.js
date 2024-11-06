/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nome = 'Mario';


// Dichiara la funzione qui.
function hellohour(name) {
    const date = new Date();
    console.log(date);
    const hour = date.getHours();
    if(hour >= 6 && hour < 13) {
        return "Buongiorno " + name;
    } else if (hour >= 13 && hour < 17) {
        return "Buon pomeriggio " + name;
    } else if (hour >= 17 || hour < 6) {
        return "Buonasera " + name;
    }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(hellohour(nome));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.