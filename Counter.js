var number = 0
var changeNumber = document.querySelector('.number')

function decreaseButton(){
    changeNumber.textContent =  (number -= 1);
}

function resetButton(){
    changeNumber.textContent =  (number = 0);
}

function increaseButton(){
    changeNumber.textContent = (number += 1);
}