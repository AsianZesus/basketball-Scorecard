let home_scoreEL = document.getElementsByClassName("score");

console.log(home_scoreEL)

let count = 0

function increment() {
    count += 1
    home_scoreEL.textContent = count
    console.log(count)

}