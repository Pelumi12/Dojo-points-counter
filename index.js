//set initial count
let count = 0;

//select values and buttons from html
let resetvalue = document.getElementById("value");
let btnIncrease = document.querySelector(".btnincrease");
let btnDecrease = document.querySelector(".btndecrease");
let btnReset = document.querySelector(".btnreset");
let enterChildName = document.getElementById("enterchildname");
let childName = document.getElementById("childname");
let enterBtn = document.querySelector(".enterbtn");
let reset = document.getElementById("reset");



// This is the Function to enter Child's name
function child (){
  childName.innerHTML = 'Hello ' + enterChildName.value
}

// This is the function to use the enter key
enterChildName.addEventListener("keyup", e => {
  e.preventDefault();
  if (e.keyCode === 13) {
    enterBtn.click();
  }
});


//this is the function to reset child's name
function resetBtn (){
  childName.innerHTML = ''
  enterChildName.value = ''
}


// This is the Increase button function
function increaseButton() {
  count ++;
  resetvalue.innerHTML = count;
}

// This is the Decrease button function 
function decreaseButton() {
  count --;
resetvalue.innerHTML = count;
 }

 //This is the Reset Button Function
function resetButton() {
  count = 0
  resetvalue.innerHTML = count;
}

//This is the Event Listeners for all buttons
btnReset.addEventListener('click', resetButton);
btnIncrease.addEventListener('click', increaseButton);
btnDecrease.addEventListener('click', decreaseButton);
enterBtn.addEventListener('click', child);
reset.addEventListener('click', resetBtn);


