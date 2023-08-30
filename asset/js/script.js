/*
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

Strumenti.

- prompt
- log
- const / let
- while
- document.createElement
- document.querySelector
- array
- append

*/

// creo un array vuoto (dentro il quale andranno gli elementi della lista spesa)
const shoppingList = []
// grazie al log vedro in console gli elementi della spesa all'interno dell'array una volta inseriti
console.log(shoppingList);
// creo una costante dentro la quale voglio vedere stampati in pagina gli elementi della lista in pagina
const ulEl = document.querySelector('ul');
// ciclo while
let i = 0;

while (i < 5) {
    
    const elementList = prompt("type ingredient's of your shopping list here");

    console.log(elementList);

    if(elementList === null) {

        i--

    } else {

        shoppingList.push(elementList);

        i++

    }
    
    const liEl = document.createElement('li');
    
    liEl.append(elementList);

    console.log(liEl);

    ulEl.append(liEl);

}

