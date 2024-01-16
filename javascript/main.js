// Selecteer alle kaarten
const cards = document.querySelectorAll('.card');
let flippedCards = []; // Array om de omgedraaide kaarten bij te houden

cards.forEach(card => {
  card.addEventListener('click', function() {
    // Controleer of de kaart al omgedraaid is of al in de flippedCards array zit, of als er al twee kaarten zijn omgedraaid
    if (
      this.classList.contains('flipped') ||
      flippedCards.includes(this) ||
      flippedCards.length === 2
    ) {
      return; // Stop de functie als de kaart al omgedraaid is of als er al twee kaarten zijn omgedraaid
    }

    this.classList.add('flipped'); // Voeg de "flipped" class toe aan de geklikte kaart
    flippedCards.push(this); // Voeg de geklikte kaart toe aan de flippedCards array

    // Controleer of er twee kaarten zijn omgedraaid
    if (flippedCards.length === 2) {
      // Controleer of de afbeeldingen van de twee omgedraaide kaarten hetzelfde zijn
      if (
        flippedCards[0].querySelector('img').src ===
        flippedCards[1].querySelector('img').src
      ) {
        // De kaarten vormen een match, laat ze omgedraaid staan
        flippedCards = []; // Reset de flippedCards array
      } else {
        // De kaarten vormen geen match, draai beide kaarten weer om na een vertraging
        setTimeout(() => {
          flippedCards.forEach(card => {
            card.classList.remove('flipped'); // Verwijder de "flipped" class van de kaarten
          });
          flippedCards = []; // Reset de flippedCards array
        }, 1000);
      }
    }
  });
});