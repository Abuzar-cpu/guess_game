let chances = 10;
let won = false;
let lost = false;
let random = Math.ceil(Math.random() * 10);
document.getElementById("remaining").innerHTML = "Remainning chances: " + chances;
chances--;

function userWon() {

    document.getElementById('computer').innerHTML = random;
    document.getElementById("remaining").style.backgroundColor = "lime";
    document.getElementById("remaining").innerHTML = "YOU WON!";
    won = true;
    alert("Congrats");
}

function userLost() {
    lost = true;
    document.getElementById("remaining").innerHTML = "YOU LOST";
}

function reset() {
    random = Math.ceil(Math.random() * 10);
    chances = 10;
    document.getElementById("remaining").style.backgroundColor = "red";
    won = false;
    lost = false;
}


window.addEventListener('keydown', function (e) {
    if (isFinite(e.key)) {
        if (won === true || lost === true) {
            reset();
        }

        document.getElementById("remaining").innerHTML = "Remainning chances: " + chances;
        if (chances > 0) {
            document.getElementById("your").innerHTML = e.key;
            if (e.key == random) {
                userWon();
            }
            else {
                chances -= 1;
            }
        }
        else {
            userLost();
        }
    }

})
