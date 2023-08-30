/*
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/

const shoppingList = []

console.log(shoppingList);

const ulEl = document.querySelector('ul');

let i = 0;

while (i < 5) {
    
    const elementList = prompt("type ingredient's of your shopping list here");

    console.log(elementList);

    shoppingList.push(elementList);
    
    const liEl = document.createElement('li');
    
    liEl.append(elementList);

    console.log(liEl);

    ulEl.append(liEl);

    i++
    
}

