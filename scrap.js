
// Originalen
let toStore = [1, 2, 3, 4];

// Oversett og lagre i LocalStorage
let jsonToStore = JSON.stringify(toStore);
localStorage.setItem("todos", jsonToStore); // knytter item til ny value
console.log(jsonToStore);

// Hent ut og oversett tilbake til JavaScript
let storedItem = localStorage.getItem("todos");
let omformet = JSON.parse(storedItem);

// typeof gjør at man logger type variabel og ikke innholdet i variabelen
console.log(typeof toStore); 
console.log(toStore);
console.log(typeof omformet);
console.log(omformet);