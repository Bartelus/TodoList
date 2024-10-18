let userInput = document.querySelector("#user-input");
let todoListElement = document.querySelector("#todo-list");
userInput.addEventListener("submit", handleSubmit);
let storedTodos = localStorage.getItem("todos"); // fiffig liten trio av koder, studer og memoriser dette
let convertedTodos = JSON.parse(storedTodos); // JSON.parse Converts a JavaScript Object Notation (JSON) string into an object.

let todos;
if (storedTodos === null) {
  // Viss det er første besøk på siden, lag en ny liste
  todos = [];
} else {
  // Viss det var noe lagret i LocalStorage, bruk det
  todos = convertedTodos;
}


renderTodos (); // kjører denne funksjonen kjører hver gang siden oppdateres

// Dette er det som skal skje når brukeren trykker på
// Legg til knappen
function handleSubmit(event) { // event er et navn

  /** 
* @param {HTMLFormElement} form
*  @returns
*/
  
event.preventDefault();  // Forhindrer den forhåndsdefinerte nettsiden og lastes inn på nytt (refresh) dette gjør at man ikke legger itl hele listen på nytt hver gang
  console.log("Creating Todo Object...");
  let newTodo = createTodoObject(userInput); // createTodoObject er en funksjon som er definert nedenfor


  console.log("Append new todo to todo list...");
  todos.push(newTodo); // sender NewTodo innhold inn i todos variabelen som hittil er tom



  console.log("Updating the stored list...")
  let jsonTodos = JSON.stringify(todos); // JSON.stringify referer til jacascript sin database av informasjon,
  // og her lar vi todos variabelen oppdatere seg utifra javascript stringen
  localStorage.setItem("todos", jsonTodos);
  console.log(jsonTodos);

console.log("Resetting form element")
userInput.reset(); // resetter form elementet userInput

renderTodos (); // sier at denne funksjonen (som er definert lenger nede) skal kjøre på slutten av denne funksjonen
}



// Denne leser av dataen i et form element
// og lager et JavaScript objekt for Gjøremålene
function createTodoObject(form) { // form er et navn (tror jeg)
  let entodo = form.querySelector("#todo");
  let todoValue = entodo.value;

  let todoObject = {
    title: todoValue,
    createAt: new Date().toISOString(), 
  };

  return todoObject;
}

function createTodoCard(todoObject) //(todoObject) matcher denne funksjonen med egendefinert variabel 
{
  // Lage alle elementene vi trenger
  let todoCard = document.createElement("li");
  let titleElement = document.createElement("h2");
  let deleteButton = document.createElement("div");
  let kryss = document.createElement("img");


  // putter titleElement og deleteButton inn under todoCard
  todoCard.append(titleElement);
  todoCard.append(deleteButton);
  deleteButton.append(kryss);

  // Konfigure elementene med korrekte verdier
  todoCard.className = "bg-slate-500 rounded-xl";
titleElement.className = "underline";
deleteButton.className = "bg-red-800 w-14 px-2 rounded hover:bg-red-700 hover:shadow-lg hover:shadow-black";

  titleElement.textContent = todoObject.title;

  kryss.src = "images/forbudt.svg";
  deleteButton.addEventListener("click", () => {
    console.log("Deleting todo...");

    // Fjern "todoObject" fra "todos" listen
    let filteredTodos = todos.filter((entodo) => {
      if (entodo.createAt === todoObject.createAt) { // bruke createAt til å filtrere ut
        return false;
      } else {
        return true;
      }
    });

    console.log(filteredTodos);

    todos = filteredTodos;

    let jsonTodos = JSON.stringify(todos);
    localStorage.setItem("todos", jsonTodos);

    renderTodos();
  });

  return todoCard;
}

// Denne funksjoner har som formål å oppdatere HTML utifra gjøremålene
function renderTodos() {
  console.log("Clearing out the old todos from the document...");
  todoListElement.innerHTML = "";

  console.log("Appending all todos to the Document...");
  todos.forEach((entodo, index) => {

    // Lager HTML elementet for dette gjøremålet
    let newTodoCard = createTodoCard(entodo); 

    // Legg det nye html element til i Dokumentet
    todoListElement.append(newTodoCard);
  });
}

// Hente level value fra scrapt.js
let importLevel = localStorage.getItem('levelExport')