var playerName
var betAmount
const playerCardsDiv = document.getElementById("playerCardElement")
const openDialogue = document.getElementById("nameDia")
const gameWindow = document.getElementById("gameWindowElement")
const playBtn = document.getElementById("play")
const standBtn = document.getElementById("standBtnElement")
const hitBtn = document.getElementById("hitBtnElement")
const sumLabel = document.getElementById("playerSumElement")
const dealerSumLabel = document.getElementById("dealerSumElement")
const betBtn = document.getElementById("setAmount")
const betDialogue = document.getElementById("betWindowElement")
const playerMovesDiv = document.getElementById("playerMoveDiv")
const playerNameDiv = document.getElementById("playerNameDivElement")
const betInput = document.getElementById("betAmountTxtBox")
const dealerCardsDiv = document.getElementById("dealerCardElement")
var playerSum
var playerCards
var playerCash = 5000
var dealerCards
var dealerSum
const retryButton = document.createElement("button")
const winOrLose = document.createElement("h3")
retryButton.innerHTML = "Retry"
retryButton.addEventListener("click", retry)

class Player {
    constructor(playerName, playerMoney, playerCards) {
        this.playerName = playerName
        this.playerMoney = playerMoney
        this.playerCards = playerCards
    }
}

/* You can do this for constructing an object too:
function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
} */

class Cards {
    cardTypes = ["clubs", "diamonds", "hearts", "spades"]
    randCardType = this.cardTypes[Math.floor(Math.random() * (4 - 0) + 0)] 
    cardset = {
        2:`2_of_${this.randCardType}.png`,
        3:`3_of_${this.randCardType}.png`,
        4:`4_of_${this.randCardType}.png`,
        5:`5_of_${this.randCardType}.png`,
        6:`6_of_${this.randCardType}.png`,
        7:`7_of_${this.randCardType}.png`,
        8:`8_of_${this.randCardType}.png`,
        9:`9_of_${this.randCardType}.png`,
        10:`10_of_${this.randCardType}.png`,
        11:`ace_of_${this.randCardType}.png`
    }
    constructor(cardValue) {
        this.cardValue = cardValue 
    }

    cardHtml() {
        let cardInfo = this.cardset[this.cardValue]
        return `<img class="cardImg" src="cards/${cardInfo}" title="${cardInfo}">`
    }

    cardProperties() {
        return this.cardset[this.cardValue]
    }

    static cardVal(card) {
        return card.cardValue
    }
}

function initPlayerCards() {
    playerCards = [new Cards(Math.floor(Math.random() * (12 - 2) + 2)), new Cards(Math.floor(Math.random() * (12 - 2) + 2))]
}

function initDealerCards() {
    dealerCards = [new Cards(Math.floor(Math.random() * (12 - 2) + 2)), new Cards(Math.floor(Math.random() * (12 - 2) + 2))]
}

playBtn.addEventListener("click", function(){
    if (openDialogue.className==="openDialogue") {
        openDialogue.className += " clicked"
        betDialogue.className += " betNotSet"
        playerName = document.getElementById("nameTxtBox").value
    } else {
        openDialogue.className = "openDialogue"
        gameWindow.className = "gameWindow"
        console.log("reverting")
    }
})

betBtn.addEventListener("click", function(){
    if (betDialogue.className==="betDialogue betNotSet" && betInput.value.match("^[0-9]*$")) {
        betDialogue.className = "betDialogue betSet"
        gameWindow.className += " active"
        betAmount = betInput.value
        document.getElementById("playerNameElement").innerHTML = `${playerName}: ${playerCash}`
        document.getElementById("playerBetAmount").innerHTML = `Bet: ${betAmount}`
        initPlayerCards()
        initDealerCards()
        renderCards(playerCardsDiv, playerCards)
        renderCards(dealerCardsDiv, dealerCards)
    } else {
        betDialogue.className = "betDialogue betNotSet"
        gameWindow.className = "gameWindow" 
        alert(`'Please enter a valid bet amount'`)
    }
 })

function hitMove() {
    let newCard = new Cards(Math.floor(Math.random() * (12 - 2) + 2))
    playerCards.push(newCard)
    playerCardsDiv.innerHTML += newCard.cardHtml()
    renderPlayerSum()
    renderGame()
}

function standMove() {
    let newCard = new Cards(Math.floor(Math.random() * (12 - 2) + 2))
    
}

function renderCards(cardsDiv, cards) {
    cardsDiv.innerHTML = ""
    for (let i = 0; i < playerCards.length; i++) {
        cardsDiv.innerHTML += cards[i].cardHtml()
    }
    renderPlayerSum()
    renderDealerSum()
}

function renderPlayerSum() {
    playerSum = 0
    for (let i = 0;  i < playerCards.length; i++) {
        playerSum += Cards.cardVal(playerCards[i])
    }
    sumLabel.innerHTML = `Sum: ${playerSum}`
}

function renderDealerSum() {
    dealerSum = 0
    for (let i = 0; i < dealerCards.length; i++) {
        dealerSum += Cards.cardVal(dealerCards[i])
    }
    dealerSumLabel.innerHTML = `Sum: ${dealerSum}`
}

function renderGame() { 
    if (playerSum > 21) {
        loseEvent()
    } 
}

function loseEvent() {
    winOrLose.innerHTML = "You lose"
    playerCash -= betAmount
    playerMovesDiv.appendChild(retryButton)
    playerNameDiv.appendChild(winOrLose)
    hitBtn.disabled = true
    standBtn.disabled = true
}

 function retry() {
    betDialogue.className = "betDialogue betNotSet"
    gameWindow.className = "gameWindow"
    playerCards = []
    playerMovesDiv.removeChild(retryButton)
    playerNameDiv.removeChild(winOrLose)
    hitBtn.disabled = false
    standBtn.disabled = false
 }


function winEvent() {

}

function betPrompt() {
    
}