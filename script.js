let userInput = document.querySelector("#user-input");
let todoListElement = document.querySelector("#todo-list");

let storedTodos = localStorage.getItem("todos"); // fiffig liten trio av koder, studer og memoriser dette
let convertedTodos = JSON.parse(storedTodos); // JSON.parse Converts a JavaScript Object Notation (JSON) string into an object.
let todos = convertedTodos;

renderTodos (); // kjører denne funksjonen kjører hver gang siden oppdateres

// Dette er det som skal skje når brukeren trykker på
// Legg til knappen
function handleSubmit(event) { // event er et navn
  event.preventDefault();  // Forhindrer den forhåndsdefinerte nettsiden og lastes inn på nytt (refresh)

  console.log("Creating Todo Object...");
  let newTodo = createTodoObject(userInput); // createTodoObject er en funksjon som er definert nedenfor



  console.log("Append new todo to todo list...");
  todos.push(newTodo); // sender NewTodo innhold inn i todos variabelen som hittil er tom



  console.log("Updating the stored list...")
  let jsonTodos = JSON.stringify(todos); // JSON.stringify referer til jacascript sin database av informasjon,
  // og her lar vi todos variabelen oppdatere seg utifra javascript stringen
  localStorage.setItem("todos", jsonTodos);
  console.log(jsonTodos);

renderTodos (); // sier at denne funksjonen (som er definert lenger nede) skal kjøre på slutten av denne funksjonen
}

userInput.addEventListener("submit", handleSubmit);

// Denne leser av dataen i et form element
// og lager et JavaScript objekt for Gjøremålene
function createTodoObject(form) { // form er et navn (tror jeg)
  let todo = form.querySelector("#todo");
  let todoValue = todo.value;

  let todoObject = {
    title: todoValue,
  };

  return todoObject;
}

function createTodoCard(todoObject) {
  // Lage alle elementene vi trenger
  let todoCard = document.createElement("li");
  let titleElement = document.createElement("h2");

  // Sett de sammen til ett element
  todoCard.append(titleElement);

  // Konfigure elementene med korrekte verdier
  titleElement.textContent = todoObject.title;

  return todoCard;
}

// Denne funksjoner har som formål å oppdatere HTML utifra gjøremålene
function renderTodos() {
  console.log("Clearing out the old todos from the document...");
  todoListElement.innerHTML = "";

  console.log("Appending all todos to the Document...");
  todos.forEach((todo, index) => {

    // Lager HTML elementet for dette gjøremålet
    let newTodoCard = createTodoCard(todo); 

    // Legg det nye html element til i Dokumentet
    todoListElement.append(newTodoCard);
  });
}