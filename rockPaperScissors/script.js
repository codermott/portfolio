function runGame () {
    let p1 = playerOne()
    let p2 = playerTwo()
    winnerCalculate(p1,p2)
}

function playerOne () {
    console.log("Raw input value:", document.querySelector('input[name="p1"]:checked'));
    let input = document.querySelector('input[name="p1"]:checked').value;
    if(input === "Rock"){
        document.querySelector("#playerOne img").setAttribute("src", "./imgs/icons8-rock-100.png")
        console.log("Player 1 input:", input);
        return 1
        }else if(input === "Paper"){
            document.querySelector("#playerOne img").setAttribute("src", "./imgs/icons8-paper-100.png")
            console.log("Player 1 input:", input);
            return 2
        }else {
            document.querySelector("#playerOne img").setAttribute("src", "./imgs/icons8-scissor-100.png")
            console.log("Player 1 input:", input);
            return 3
        }
    }

function playerTwo () {
    let input = Math.floor(Math.random() * 3) + 1
    if(input === 1){
        document.querySelector("#playerTwo img").setAttribute("src", "./imgs/icons8-rock-100.png")
        return input
    }else if(input === 2){
        document.querySelector("#playerTwo img").setAttribute("src", "./imgs/icons8-paper-100.png")
        return input
    }else {
        document.querySelector("#playerTwo img").setAttribute("src", "./imgs/icons8-scissor-100.png")
        return input
    }
}

function winnerCalculate(p1,p2) {
    const title = document.querySelector("h1");
        if(p1 === p2){
            document.querySelector("h1").textContent = "Its a Tie"
        }else if(
            (p1 == 1 && p2 == 3) || // Rock beats Scissors
            (p1 == 2 && p2 == 1) || // Paper beats Rock
            (p1 == 3 && p2 == 2)){
            title.textContent = "Player 1 Wins"
        }else {
            title.textContent = "Player 2 Wins"
        }
}