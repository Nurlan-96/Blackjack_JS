const originalDeck = [
    { name: "twoHeart", value: 2, image: "SVG-cards/2_of_hearts.svg" },
    { name: "threeHeart", value: 3, image: "SVG-cards/3_of_hearts.svg" },
    { name: "fourHeart", value: 4, image: "SVG-cards/4_of_hearts.svg" },
    { name: "fiveHeart", value: 5, image: "SVG-cards/5_of_hearts.svg" },
    { name: "sixHeart", value: 6, image: "SVG-cards/6_of_hearts.svg" },
    { name: "sevenHeart", value: 7, image: "SVG-cards/7_of_hearts.svg" },
    { name: "eightHeart", value: 8, image: "SVG-cards/8_of_hearts.svg" },
    { name: "nineHeart", value: 9, image: "SVG-cards/9_of_hearts.svg" },
    { name: "tenHeart", value: 10, image: "SVG-cards/10_of_hearts.svg" },
    { name: "jackHeart", value: 10, image: "SVG-cards/jack_of_hearts.svg" },
    { name: "queenHeart", value: 10, image: "SVG-cards/queen_of_hearts.svg" },
    { name: "kingHeart", value: 10, image: "SVG-cards/king_of_hearts.svg" },
    { name: "aceHeart", value: 11, image: "SVG-cards/ace_of_hearts.svg" },
    { name: "twoDiamond", value: 2, image: "SVG-cards/2_of_diamonds.svg" },
    { name: "threeDiamond", value: 3, image: "SVG-cards/3_of_diamonds.svg" },
    { name: "fourDiamond", value: 4, image: "SVG-cards/4_of_diamonds.svg" },
    { name: "fiveDiamond", value: 5, image: "SVG-cards/5_of_diamonds.svg" },
    { name: "sixDiamond", value: 6, image: "SVG-cards/6_of_diamonds.svg" },
    { name: "sevenDiamond", value: 7, image: "SVG-cards/7_of_diamonds.svg" },
    { name: "eightDiamond", value: 8, image: "SVG-cards/8_of_diamonds.svg" },
    { name: "nineDiamond", value: 9, image: "SVG-cards/9_of_diamonds.svg" },
    { name: "tenDiamond", value: 10, image: "SVG-cards/10_of_diamonds.svg" },
    { name: "jackDiamond", value: 10, image: "SVG-cards/jack_of_diamonds.svg" },
    { name: "queenDiamond", value: 10, image: "SVG-cards/queen_of_diamonds.svg" },
    { name: "kingDiamond", value: 10, image: "SVG-cards/king_of_diamonds.svg" },
    { name: "aceDiamond", value: 11, image: "SVG-cards/ace_of_diamonds.svg" },
    { name: "twoClub", value: 2, image: "SVG-cards/2_of_clubs.svg" },
    { name: "threeClub", value: 3, image: "SVG-cards/3_of_clubs.svg" },
    { name: "fourClub", value: 4, image: "SVG-cards/4_of_clubs.svg" },
    { name: "fiveClub", value: 5, image: "SVG-cards/5_of_clubs.svg" },
    { name: "sixClub", value: 6, image: "SVG-cards/6_of_clubs.svg" },
    { name: "sevenClub", value: 7, image: "SVG-cards/7_of_clubs.svg" },
    { name: "eightClub", value: 8, image: "SVG-cards/8_of_clubs.svg" },
    { name: "nineClub", value: 9, image: "SVG-cards/9_of_clubs.svg" },
    { name: "tenClub", value: 10, image: "SVG-cards/10_of_clubs.svg" },
    { name: "jackClub", value: 10, image: "SVG-cards/jack_of_clubs.svg" },
    { name: "queenClub", value: 10, image: "SVG-cards/queen_of_clubs.svg" },
    { name: "kingClub", value: 10, image: "SVG-cards/king_of_clubs.svg" },
    { name: "aceClub", value: 11, image: "SVG-cards/ace_of_clubs.svg" },
    { name: "twoSpade", value: 2, image: "SVG-cards/2_of_spades.svg" },
    { name: "threeSpade", value: 3, image: "SVG-cards/3_of_spades.svg" },
    { name: "fourSpade", value: 4, image: "SVG-cards/4_of_spades.svg" },
    { name: "fiveSpade", value: 5, image: "SVG-cards/5_of_spades.svg" },
    { name: "sixSpade", value: 6, image: "SVG-cards/6_of_spades.svg" },
    { name: "sevenSpade", value: 7, image: "SVG-cards/7_of_spades.svg" },
    { name: "eightSpade", value: 8, image: "SVG-cards/8_of_spades.svg" },
    { name: "nineSpade", value: 9, image: "SVG-cards/9_of_spades.svg" },
    { name: "tenSpade", value: 10, image: "SVG-cards/10_of_spades.svg" },
    { name: "jackSpade", value: 10, image: "SVG-cards/jack_of_spades.svg" },
    { name: "queenSpade", value: 10, image: "SVG-cards/queen_of_spades.svg" },
    { name: "kingSpade", value: 10, image: "SVG-cards/king_of_spades.svg" },
    { name: "aceSpade", value: 11, image: "SVG-cards/ace_of_spades.svg" }
];

function resetDeck() {
    return originalDeck.map(card => ({ ...card }));
}

let deck = resetDeck();
let playerValue = 0;
let dealerValue = 0;
let playersCards = [];
let playerArea = document.querySelector(".player-space");
let dealersCards = [];
let dealerArea = document.querySelector(".dealer-space");
let hit = document.querySelector(".hit");
hit.disabled = true;
let stand = document.querySelector(".stand");
stand.disabled = true;
let bet = 0;
let rounds = 0;
let balance = 1000;
document.querySelector(".balance").value = balance;

let betBtn = document.querySelector(".bet-btn");
betBtn.addEventListener("click", function () {
    bet = parseInt(document.querySelector(".bets").value);
    balance -= bet;
    document.querySelector(".balance").value = balance;
    document.querySelector(".bets").disabled = true;
    hit.disabled = false;
    stand.disabled = false;
});

function Compare() {
    if ((playerValue > dealerValue) && (playerValue <= 21)) {
        var alertDiv = document.querySelector(".alert");
        alertDiv.innerText = "Player Wins!";
        alertDiv.style.display = "block";
        setTimeout(function () {
            alertDiv.style.display = "none";
        }, 4000);
        balance += bet * 2;
        document.querySelector(".balance").value = balance;
    } else if ((dealerValue > playerValue) && (dealerValue <= 21)) {
        var alertDiv = document.querySelector(".alert");
        alertDiv.innerText = "Dealer Wins!";
        alertDiv.style.display = "block";
        setTimeout(function () {
            alertDiv.style.display = "none";
        }, 4000);
    } else if (playerValue == dealerValue) {
        var alertDiv = document.querySelector(".alert");
        alertDiv.innerText = "Push";
        alertDiv.style.display = "block";
        setTimeout(function () {
            alertDiv.style.display = "none";
        }, 4000);
        balance += bet;
        document.querySelector(".balance").value = balance;
    }
    if (playerValue == 21) {
        var alertDiv = document.querySelector(".alert");
        alertDiv.innerText = "BLACKJACK";
        alertDiv.style.display = "block";
        setTimeout(function () {
            alertDiv.style.display = "none";
        }, 4000);
        balance += bet * 2.5;
        document.querySelector(".balance").value = balance;
    }
    bet = 0;
    betBtn.disabled = false;
    playersCards = [];
    dealersCards = [];
    playerArea.innerHTML = '';
    dealerArea.innerHTML = '';
    document.querySelector(".bets").disabled = false;
}

function play() {
    startRound();

    hit.addEventListener("click", function () {
        giveCardPlayer();
        if (playerValue > 21) {
            endRound("Player Goes Bust");
        }
    });

    stand.addEventListener("click", function () {
        while (dealerValue < 17) {
            giveCardDealer();
        }
        if (dealerValue > 21 || playerValue > dealerValue) {
            endRound("Player Wins!");
        } else if (playerValue < dealerValue) {
            endRound("Dealer Wins!");
        } else {
            endRound("Push");
        }
    });
}

function startRound() {
    if (rounds == 3) {
        deck = resetDeck();
        rounds = 0;
    }
    giveCards();
}

function giveCards() {
    giveCardPlayer();
    giveCardDealer();
    giveCardPlayer();
    giveCardDealer();
}

function giveCardPlayer() {
    let cardIndex = Math.floor(Math.random() * deck.length);
    let card = deck.splice(cardIndex, 1)[0];
    playersCards.push(card);
    playerArea.innerHTML += `<img src="${card.image}" alt="${card.name}">`;
    CalculatePlayer();
}

function giveCardDealer() {
    let cardIndex = Math.floor(Math.random() * deck.length);
    let card = deck.splice(cardIndex, 1)[0];
    dealersCards.push(card);
    dealerArea.innerHTML += `<img src="${card.image}" alt="${card.name}">`;
    CalculateDealer();
}

function CalculatePlayer() {
    playerValue = 0;
    playersCards.forEach(card => {
        playerValue += card.value;
        if (playerValue > 21 && card.name.includes("ace") && card.value == 11) {
            playerValue -= 10;
            card.value = 1;
        }
    });
}

function CalculateDealer() {
    dealerValue = 0;
    dealersCards.forEach(card => {
        dealerValue += card.value;
        if (dealerValue > 21 && card.name.includes("ace") && card.value == 11) {
            dealerValue -= 10;
            card.value = 1;
        }
    });
}

function endRound(message) {
    var alertDiv = document.querySelector(".alert");
    alertDiv.innerText = message;
    alertDiv.style.display = "block";
    setTimeout(function () {
        alertDiv.style.display = "none";
    }, 4000);
    Compare();
    rounds++;
    playersCards = [];
    dealersCards = [];
    playerArea.innerHTML = '';
    dealerArea.innerHTML = '';
    if (rounds <= 3) {
        startRound();
    }
}

play();
