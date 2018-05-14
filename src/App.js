import React, { Component } from "react";
import Timer from "./components/Timer/Timer";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import shuffle from "./utils/shuffle";
const symbols = ["🐶", "🐱", "🐨", "🐵", "🐸", "🐷"];

const styles = {
  textAlign: "center",
  padding: "1.25rem"
};

class Memory extends Component {
  state = {
    cards: shuffle(symbols.concat(symbols)),
    correctAnswers: [],
    selectedCards: [],
    timerActive: false
  };

  newGame = () => {
    this.setState({
      cards: shuffle(symbols.concat(symbols)),
      correctAnswers: [],
      selectedCards: [],
      timerActive: false
    });
  };

  showCard = index => {
    const { selectedCards } = this.state;
    this.setState(
      {
        selectedCards: selectedCards.concat(index)
      },
      () => {
        if (this.state.selectedCards.length === 2) {
          this.updateResult(...this.state.selectedCards);
        }
      }
    );
  };

  updateResult = (firstCardIndex, secondCardIndex) => {
    const { cards } = this.state;
    const { correctAnswers } = this.state;
    if (cards[firstCardIndex] === cards[secondCardIndex]) {
      return this.setState({
        correctAnswers: correctAnswers.concat(firstCardIndex, secondCardIndex),
        selectedCards: []
      });
    }

    this.setState({
      timerActive: true
    });
  };

  clearSelection = () => {
    this.setState({
      timerActive: false,
      selectedCards: []
    });
  };
  render() {
    const { cards } = this.state;
    const { correctAnswers, selectedCards, timerActive } = this.state;
    return (
      <div style={styles}>
        <Button onClick={this.newGame} label="New game" />
        {timerActive && <Timer onFired={this.clearSelection} />}
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

export default Memory;
