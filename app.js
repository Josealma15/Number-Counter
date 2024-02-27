const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let counter = 0;

// DECREASE
decreaseBtn.onclick = function () {
    
    counter --;
    countLabel.innerHTML = counter;
}


// RESET
resetBtn.onclick = function () {
    counter = 0;
    countLabel.innerHTML = counter;
}



// INCREASE
increaseBtn.onclick = function () {
    counter ++;
    countLabel.innerHTML = counter;
}
