import shuffle from './shuffle';

const symbols = ['🐶', '🐱', '🐨', '🐵', '🐸', '🐷'];
export const newGame = () => ({
  cards: shuffle(symbols.concat(symbols)),
  correctAnswers: [],
  selectedCards: [],
  timerActive: false,
});
export const clearSelectedCards = () => ({
  timerActive: false,
  selectedCards: [],
});
export const showCard = (state, index) => {
  const { selectedCards } = state;
  return {
    selectedCards: selectedCards.concat(index),
  };
};
export const activateTimer = () => ({
    timerActive: true,
})
