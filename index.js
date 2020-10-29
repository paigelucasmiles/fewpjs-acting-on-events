// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftString = dodger.style.left.replace("px", "");
    let leftNumber = parseInt(leftString, 10);
    if (leftNumber > 0) {
        dodger.style.left = `${leftNumber - 1}px`;
    }
}

function moveDodgerRight() {
    let leftString = dodger.style.left.replace("px", "");
    let leftNumber = parseInt(leftString, 10);
    if (leftNumber > 0) {
        dodger.style.left = `${leftNumber + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});