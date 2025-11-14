// Regnemodellen starter på 0 for begge lag
let homeScore = 0
let guestScore = 0

// Henter HTML-elementer
let homeScoreBoard = document.getElementById("Home-scoreboard")
let guestScoreBoard = document.getElementById("Guest-scoreboard")

// Sett startscore på skjermen
homeScoreBoard.innerText = homeScore
guestScoreBoard.innerText = guestScore

// Regnefunksjoner

function oneHome() {
    homeScore += 1
    homeScoreBoard.innerText = homeScore
}
    function twoHome() {
    homeScore += 2
    homeScoreBoard.innerText = homeScore
}    
    function threeHome() {
    homeScore += 3
    homeScoreBoard.innerText = homeScore
}
    function oneGuest() {
    guestScore += 1
    guestScoreBoard.innerText = guestScore
}
    function twoGuest() {
    guestScore += 2
    guestScoreBoard.innerText = guestScore
}
    function threeGuest() {
    guestScore += 3
    guestScoreBoard.innerText = guestScore
}