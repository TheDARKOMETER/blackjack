var playerName
const playerCardsDiv = document.getElementById("playerCardElement")
const openDialogue = document.getElementById("opDia")
const gameWindow = document.getElementById("gameWindowElement")
const playBtn = document.getElementById("play")
const standBtn = document.getElementById("standBtnElement")
const hitBtn = document.getElementById("hitBtnElement")
const sumLabel = document.getElementById("playerSumElement")

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

var playerCards = [new Cards(Math.floor(Math.random() * (12 - 2) + 2)), new Cards(Math.floor(Math.random() * (12 - 2) + 2))]

playBtn.addEventListener("click", function(){
    if (openDialogue.className==="dialogueDiv") {
        openDialogue.className += " clicked"
        gameWindow.className += " active"
        playerName = document.getElementById("nameTxtBox").value
        document.getElementById("playerNameElement").innerHTML = `${playerName}:`
        renderCards(playerCards)
    } else {
        openDialogue.className = "dialogueDiv"
        gameWindow.className += "gameWindow"
        console.log("reverting")
    }
})


function hitMove() {
    let newCard = new Cards(Math.floor(Math.random() * (12 - 2) + 2))
    playerCards.push(newCard)
    playerCardsDiv.innerHTML += newCard.cardHtml()
    renderSum(playerCardElement)
}

function standMove() {

}

function renderCards(playerCards) {
    for (let i = 0; i < playerCards.length; i++) {
        playerCardsDiv.innerHTML += playerCards[i].cardHtml()
    }
    renderSum(playerCardElement)
}

function renderSum(playerCardElement) {
    let sum = 0
    for (let i = 0;  i < playerCards.length; i++) {
        sum += Cards.cardVal(playerCards[i])
    }
    sumLabel.innerHTML = `Sum: ${sum}`
}


function renderGame() { 
    
}

function loseEvent() {

}

function winEvent() {

}

function betPrompt() {
    
}