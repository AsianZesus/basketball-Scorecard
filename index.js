let home_scoreEL = document.getElementById("home_score")
let guest_scoreEL = document.getElementById("guest_score")

// Assigning data to the variables
let home_count = 0
let guest_count = 0

function icmt_1_hm() {
    home_count += 1 // Incrementing the counter
    home_scoreEL.textContent = home_count // Setting the text to the incremented count
}

function icmt_2_hm() {
    home_count += 2
    home_scoreEL.textContent = home_count
}

function icmt_3_hm() {
    home_count += 3
    home_scoreEL.textContent = home_count
}

function icmt_1_gt() {
    guest_count += 1
    guest_scoreEL.textContent = guest_count
}

function icmt_2_gt() {
    guest_count += 2
    guest_scoreEL.textContent = guest_count
}

function icmt_3_gt() {
    guest_count += 3
    guest_scoreEL.textContent = guest_count
}

function new_game() {
    home_scoreEL.textContent = 0
    guest_scoreEL.textContent = 0
    home_count = 0
    guest_count = 0
}