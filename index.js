let home_scoreEL = document.getElementsByClassName("home_score")

console.log(home_scoreEL)

let count = 0

function increment_1() {
    count += 1
    home_scoreEL.textContent = count
    console.log(count)

}

function increment_2() {
    count += 2
    home_scoreEL.textContent = count
    console.log(count)
}

function increment_3() {
    count += 3

    console.log(count)
}