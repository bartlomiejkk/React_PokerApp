import React from "react";
import Compute from "./common/computes/compute";
import DisplayCards from "./common/displayCards";
import DisplayFeature from "./common/displayFeature";
import WinningsTable from "./common/winningsTable";
import FeatureButton from "./common/buttons/featureButton";
import StartButton from "./common/buttons/startButton";
import DisplayPattern from "./common/displayPattern";
import ToastLoss from "./common/toastLoss";
import { ToastContainer, toast } from "react-toastify";
import { getCards } from "./common/cards";
import {
  getWinningsListByName,
  getWinningsList
} from "./common/winningsList.js";

class Play extends Compute {
  state = {
    cards: [], // All cards
    drawn: [], // Drawn cards
    credit: 100,
    held: [], // Held cards
    index: [], // Initial index of held cards
    finished: true, // Checks whether both draw rounds have finished
    started: false, // Checks whether the game has started
    feature: { status: false, value: 0 }, // Checks whether the feauture is on. value = number of times a new card was revealed
    collect: false, // Switches "Start" to "Collect"
    currentWin: "None", // Potential win. Used for feature winnings
    pattern: "None" // Computed outcome
  };

  componentDidMount() {
    this.setState({ cards: getCards() });
    toast.info("Tip: Click a card to hold it.");
  }

  // --- Initial deal ---------------------------------------------

  handleDeal = () => {
    setTimeout(() => {
      if (this.state.feature.status) {
        this.setState({ currentWin: this.state.pattern }, () =>
          this.handleFeature()
        );
        return;
      }
      let cards = this.state.cards;
      const drawn = [];

      for (let i = 0; i < 5; i++) {
        const index = Math.floor(Math.random() * cards.length);
        const card = cards[index];
        drawn.push(card);
        cards = cards.filter(c => c.name !== card.name);
      }

      const pattern = this.handleCompute(drawn);
      this.setState({
        cards,
        drawn,
        credit: this.state.credit - 1,
        finished: false,
        started: true,
        pattern
      });
    }, 100);
  };

  // --- Cards held during the regular play ------------------------------

  handleHold = card => {
    if (this.state.finished) return;
    let held = [...this.state.held];
    let drawn = [...this.state.drawn];
    let index = [...this.state.index];
    if (!held.includes(card)) {
      held.push(card);
      index.push(drawn.indexOf(card));
    } else {
      held = held.filter(h => h !== card);
      index = index.filter(i => i !== drawn.indexOf(card));
    }

    drawn.forEach(c => (c.opacity = 0.4));
    held.forEach(h => (h.opacity = 1));

    this.setState({ held, index });
  };

  // --- Deal again keeping the held set of cards ----------------------

  handleRedeal = () => {
    setTimeout(() => {
      const { index } = this.state;
      const held = [];
      let cards = [...this.state.cards];

      for (let i = 0; i < 5; i++) {
        if (index.includes(i)) {
          held.push(this.state.drawn[i]);
        } else {
          const newIndex = Math.floor(Math.random() * cards.length);
          const card = cards[newIndex];
          held.push(card);
          cards = cards.filter(c => c.name !== card.name);
        }
      }
      let feature = { status: false, value: 0 };
      const pattern = this.handleCompute(held);
      if (pattern !== "None") feature = { status: true, value: 0 };

      held.forEach(h => (h.opacity = 1));
      this.setState({
        drawn: held,
        finished: true,
        pattern,
        feature
      });
    }, 100);
  };

  // --- High or Low feature --------------------------------------------

  handleFeature = input => {
    let { pattern, drawn, feature, currentWin } = this.state;
    let cards = getCards();
    const length = getWinningsListByName().indexOf(pattern);
    let lost = false; // checks whether the feature is lost

    const updateState = () => {
      feature = { status: true, value: this.state.feature.value + 1 };
      this.setState({ drawn, feature, collect: true });
    };

    const updateStateLoss = () => {
      feature = { status: false, value: this.state.feature.value + 1 };
      this.setState({ drawn, feature, collect: false }, () =>
        this.handleReset()
      );
    };

    if (feature.value === 0) {
      for (let i = 0; i < length + 1; i++) {
        const i = Math.floor(Math.random() * cards.length); // i = index
        const card = cards[i];
        drawn.push(card);
        cards = getCards().filter(c => c.num !== card.num); // returns all cards excluding the current card
        drawn.forEach(d => (cards = cards.filter(c => c.value !== d.value))); // excludes already drawn cards
      }
    }
    drawn.map(
      (d, index) => (
        (d.hidden = index > feature.value ? true : false), (d.opacity = 1)
      )
    );
    let filtered = drawn.filter(d => !d.hidden);
    let prevCard = filtered[filtered.length - 2]; // get previously revealed card
    filtered = filtered[filtered.length - 1]; // get the latest occurence of a revealed card

    //------ High or Low button inputs ----------------------------------

    switch (input) {
      case 0: // High
        if (filtered.num > prevCard.num) {
          // Loss
          lost = true;
          toast.error(ToastLoss());
          updateStateLoss();
          break;
        } else {
          // Win
          let index = getWinningsListByName().indexOf(currentWin);
          if (index === 0) break;
          currentWin = getWinningsList()[index - 1].name;
          this.setState({ currentWin });
        }
        break;

      case 1: // Low
        if (filtered.num < prevCard.num) {
          // Loss
          lost = true;
          toast.error(ToastLoss());
          updateStateLoss();
          break;
        } else {
          // Win
          let index = getWinningsListByName().indexOf(currentWin);

          if (index === 0) break;
          currentWin = getWinningsList()[index - 1].name;
          this.setState({ currentWin });
        }
        break;

      default:
        toast.info(
          "Guess whether the next card is higher or lower, or collect you winnings"
        );
        break;
    }

    if (!lost) {
      updateState();
    }
  };

  // --- Pay winnings ----------------------------------------------------

  handlePayout = () => {
    let { currentWin, feature } = this.state;
    const index = getWinningsListByName().indexOf(currentWin);
    const payout = getWinningsList()[index].value;
    console.log(payout);
    feature.status = false;
    this.setState({
      feature,
      collect: false,
      credit: this.state.credit + payout
    });
  };

  // --- Reset the game flow ---------------------------------------------

  handleReset = () => {
    if (this.state.collect) this.handlePayout();

    const cards = getCards();
    cards.forEach(card => (card.opacity = 0.4));
    this.setState(
      { cards, drawn: [], held: [], index: [], currentWin: "None" },
      () => this.handleDeal()
    );
  };

  // --- Disable the "Start" button ---------------------------------------

  handleDisable = () => {
    const { credit, finished, feature } = this.state;
    return credit <= 0 && finished && !feature.status ? true : false;
  };

  render() {
    const {
      finished,
      started,
      pattern,
      drawn,
      credit,
      collect,
      currentWin,
      feature
    } = this.state;
    return (
      <div>
        <div id="background">
          <ToastContainer position="bottom-center" autoClose={3000} />

          <div id="table-title">
            <WinningsTable selected={currentWin} />
            <b id="unselectable">EASYPOKER</b>

            <DisplayPattern // e.g. "Two Pairs! Click "Start" to play High or Low."
              credit={credit}
              started={started}
              finished={finished}
              feature={feature}
              pattern={pattern}
              collect={collect}
            />
            <FeatureButton
              onClick={() => this.handleFeature(1)}
              collect={collect}
              action="high"
            />
            <FeatureButton
              onClick={() => this.handleFeature(0)}
              collect={collect}
              action="low"
            />
            <StartButton
              onClick={() =>
                finished === false ? this.handleRedeal() : this.handleReset()
              }
              collect={collect}
              currentWin={currentWin}
              status={this.handleDisable()}
            />
          </div>
          <DisplayFeature feature={feature.status} drawn={drawn} />
          <DisplayCards
            feature={feature.status}
            drawn={drawn}
            onClick={card => this.handleHold(card)}
          />
        </div>

        <div onClick={() => console.log(this.state)} id="table-credit">
          Credit: ${credit}.00
        </div>
      </div>
    );
  }
}

export default Play;
