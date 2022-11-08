
let random;
let guess;

function randomGen() {
    random = Math.floor(Math.random() * 100)
    console.log(random);
}
randomGen();


function numCheck() {
    guess = document.getElementById("inp").value
    if (guess == random) {
        document.getElementById("alert").innerHTML = "Perfect match ! you won"
    } else if (guess < random && guess != "") {
        document.getElementById("alert").innerHTML = "you have entered a lower number"

    } else if (guess > random) {
        document.getElementById("alert").innerHTML = "you have entered a higher number"
    }


}

var button = document.getElementById("clickBtn")
count = 5;

function chanceCounter() {
    count -= 1;
    if (count >= 0) {
        document.getElementById("chance").innerHTML = `${count} chances left`
    }
    if (count == 0 && guess != random) {
        document.getElementById("result").innerHTML = `you are out of chances;the answer is ${random}`
        document.getElementById("result").style.color = "#ff0000"
        randomGen();
    }
}


