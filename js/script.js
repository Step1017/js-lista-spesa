// Creo lista elementi (array)
const items = ['Pane', 'Pasta', 'Pollo', 'Uova', 'Carne', 'Latte', 'Birra'];

// Creo una variabile contatore
let i = 0;

// Prendo elemento dal DOM 
const shoppingList = document.querySelector('#shoppingList');


//Creo un ciclo while
do {

    // Creazione nuovo elemento HTML
    const newLi = document.createElement('li');
    newLi.innerHTML = items[i];
    shoppingList.append(newLi);

    // Incremento elemento lista della lista
    i++;

} while (i < items.length)