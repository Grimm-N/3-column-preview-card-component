function toggleCard(cardId) {
  var allCards = document.querySelectorAll('.card__item');

  allCards.forEach(function(card) {
    if (card.id === cardId) {
      card.classList.toggle('open'); 
    } else {
      card.classList.remove('open');
    }
  });
}
