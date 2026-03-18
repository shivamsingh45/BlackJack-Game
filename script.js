let cards = []
let sum = 0
let count = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")

function getRandomCard() {
    let val =  Math.floor(Math.random()*13) + 1
    if(val === 1) {
        return 11
    } else if(val > 10) {
        return 10
    }
    else {
        return val
    }

}

function startGame() {
    isAlive = true
    if(count === 0 ) {
        let firstCard = getRandomCard()
        cards.push(firstCard)
        let secondCard = getRandomCard()
        cards.push(secondCard)
        sum = firstCard + secondCard
        renderGame()
        count ++
    }
    else {
        count = 0
        cards = []
        startGame()
    }
}

function renderGame() {

    cardsEl.textContent = "Card: "
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    }  else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newcard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum = sum + card
        cards.push(card)
        renderGame()
    }
}
