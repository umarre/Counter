var display = document.querySelector('.counterDisplay');
const increaseBtn = document.querySelector('.increase'); 
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');

let string = display.innerHTML;
function increaseCount (){
    string = +string + 1;
    display.innerHTML = string;
}
function decreaseCount (){
    string = +string - 1;
    display.innerHTML = string;
}
function reset(){
    string = +string - +string;
    display.innerHTML = string;
}

increaseBtn.addEventListener('click', increaseCount);
decreaseBtn.addEventListener('click', decreaseCount);
resetBtn.addEventListener('click', reset);