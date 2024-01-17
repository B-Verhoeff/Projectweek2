// Selecteer alle kaarten
const cards = document.querySelectorAll('.card');

let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkMatch();
}

function checkMatch() {
  let isMatch = firstCard.dataset.imgAlt === secondCard.dataset.imgAlt;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  firstCard.classList.add('match');
  secondCard.classList.add('match');

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [flippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 24);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

document.querySelector('.resetButton').addEventListener('click', function() {
  window.location.href = "index.html"; // Verwijs naar index.html
});