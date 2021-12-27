let chances = 10;
let won = false;
let random = Math.ceil(Math.random() * 10);
document.getElementById("remaining").innerHTML = "Remainning chances: " + chances;
chances--;
window.addEventListener('keydown', function(e){
    if(won === true)
    {
        random = Math.ceil(Math.random() * 10);
        chances = 10;
        reset();
        won = false;
    }

    document.getElementById("remaining").innerHTML = "Remainning chances: " + chances;
    if(chances > 0)
    {
        document.getElementById("your").innerHTML = e.key;        
        if (e.key == random)
        {
            document.getElementById('computer').innerHTML = random;
            document.getElementById("remaining").style.backgroundColor  = "lime";
            document.getElementById("remaining").innerHTML = "YOU WON!";
            won = true;
            alert("Congrats");
        }
        else{
            chances -= 1;
        }
    }
    else{
        won = true;
        document.getElementById("remaining").innerHTML = "YOU LOST";
    }
    
})


function reset() {
    document.getElementById("remaining").style.backgroundColor  = "red";
}