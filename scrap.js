//definerer en beholder:

let listeBeholder = document.querySelector("body");

// Knytter knapp med 'click' funksjon som leser verdi og lager liste/m element:

document.getElementById('levelSubmit').addEventListener('click', function(){
let levelinput = document.getElementById('level');
let levelValue = parseFloat(levelinput.value);
console.log(levelValue)

let levelList = document.createElement("li");
let levelOutput = document.createElement("h2");

levelOutput.textContent = levelValue

levelList.append(levelOutput);
listeBeholder.append(levelList);
listeBeholder.append(levelOutput);

// Styling:
levelList.className = "min-w-full h-12";
levelOutput.className = "text-center text-yellow-500 text-3xl animate-pulse";
});