document.getElementById('levelSubmit').addEventListener('click', function(){
const levelinput = document.getElementById('level');
const levelValue = parseFloat(levelinput.value);

levelList = document.createElement("li")
levelOutput = document.createElement("h2")

console.log(levelValue)
});