const images = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg',
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'
];

let gameBoard = document.getElementById('game-board');
let shuffledImages = images.sort(() => 0.5 - Math.random());
let flippedCards = [];
let matchedPairs = 0;

function createBoard() {
    shuffledImages.forEach((image, index) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = image;
        card.addEventListener('click', flipCard);

        let imgElement = document.createElement('img');
        imgElement.src = `images/${image}`;
        card.appendChild(imgElement);

        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 1000);
        }
    }
}

function checkForMatch() {
    let [firstCard, secondCard] = flippedCards;
    if (firstCard.dataset.image === secondCard.dataset.image) {
        matchedPairs++;
        if (matchedPairs === images.length / 2) {
            setTimeout(() => alert('¡Felicidades! Has encontrado todas las parejas.'), 500);
        }
    } else {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
    }
    flippedCards = [];
}

createBoard();
