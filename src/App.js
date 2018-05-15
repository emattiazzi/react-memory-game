import React, { Component } from 'react';
import withTimeout from './components/HoC/withTimeout';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Wrapper from './components/Wrapper/Wrapper';
import { newGame, clearSelectedCards, showCard, activateTimer } from './utils/update-state';

const styles = {
  textAlign: 'center',
  padding: '1.25rem',
};
class Memory extends Component {
  state = newGame();
  newGame = () => {
    this.setState(newGame(), this.props.clearTimeout);
  };
  showCard = index => {
    this.setState(showCard(this.state, index), () => {
        this.updateResult(...this.state.selectedCards);
    });
  };
  updateResult = (firstCardIndex, secondCardIndex) => {
    const { cards, selectedCards } = this.state;
    const { correctAnswers } = this.state;

    if (selectedCards.length !== 2) {
      return false;
    }

    if (cards[firstCardIndex] === cards[secondCardIndex]) {
      return this.setState({
        correctAnswers: correctAnswers.concat(firstCardIndex, secondCardIndex),
        selectedCards: [],
      });
    }
    this.setState(
      activateTimer(),
      () => {
        this.props.addTimeout(this.clearSelection, 2000);
      },
    );
  };
  clearSelection = () => {
    this.setState(clearSelectedCards, this.props.clearTimeout());
  };
  render() {
    const { cards } = this.state;
    const { correctAnswers, selectedCards, timerActive } = this.state;
    return (
      <div style={styles}>
        <Button onClick={this.newGame} label="New game" />
        <Wrapper>
          {cards.map((card, index) => (
            <Card
              key={`Card-${index}`}
              isDisabled={timerActive}
              isActive={
                correctAnswers.includes(index) || selectedCards.includes(index)
              }
              showCard={() => {
                this.showCard(index);
              }}
            >
              {card}
            </Card>
          ))}
        </Wrapper>
      </div>
    );
  }
}
export default withTimeout(Memory);
