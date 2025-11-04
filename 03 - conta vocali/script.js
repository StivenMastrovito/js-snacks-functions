/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali 
contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocali(word){
    let conta = 0;
    for(let i = 0; i < word.length; i++){
        if((word[i] === "a") || (word[i] === "A") || (word[i] === "e") || (word[i] === "E") || (word[i] === "i") || (word[i] === "I") || (word[i] === "o") || (word[i] === "O") || (word[i] === "U") || (word[i] === "u")){
            conta++;
        }
    }
    return conta;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(vocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)