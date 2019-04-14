import { CardStructure } from './store';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export enum Player {
  player1,
  player2,
}

export enum Scene {
  preparing,
  playing,
  finish,
}

export enum CardOrientation {
  front,
  back,
}
export interface CardStructure {
  number: number;
  orientation: CardOrientation;
  id: number;
}

interface PloutosState {
  personalCardsOfPlayer1: Array<CardStructure | null>;
  personalCardsOfPlayer2: Array<CardStructure | null>;
  commonCards: Array<CardStructure | null>;
  gainCardsOfPlayer1: CardStructure[];
  gainCardsOfPlayer2: CardStructure[];
  turnPlayer: Player;
  turnCount: number;
  matchedCards: CardStructure[];
  isPrivilegeAvailable: boolean;
  scene: Scene;
  numberOfFlippedCards: number;
  nextUsableID: number;
}

const concatIfNonNull: (cards: CardStructure[], card: CardStructure | null) => CardStructure[] = (cards, card) => {
  if ( card === null ) {
    return cards;
  } else {
    return cards.concat([card]);
  }
};

export default new Vuex.Store<PloutosState>({

  state: {
    personalCardsOfPlayer1: Array<CardStructure | null>(),
    personalCardsOfPlayer2: Array<CardStructure | null>(),
    commonCards: Array<CardStructure | null>(),
    gainCardsOfPlayer1: Array<CardStructure>(),
    gainCardsOfPlayer2: Array<CardStructure>(),
    turnPlayer: Player.player1,
    turnCount: 0,
    matchedCards: Array<CardStructure>(),
    isPrivilegeAvailable: true,
    scene: Scene.preparing,
    numberOfFlippedCards: 0,
    nextUsableID: 0,
  },

  mutations: {
    initCommonCardsField(state) {
      // こういう値はどこかでconfigファイルとかに移したい
      const numberOfCard = 10;

      let cards = Array<CardStructure>();
      for (let i = 1; i < numberOfCard + 1; i++) {
        const newCard: CardStructure = {
          number: i,
          orientation: CardOrientation.back,
          id: state.nextUsableID,
        };
        state.nextUsableID += 1;
        cards = cards.concat(newCard);
      }
      state.commonCards = cards;
    },
    initPersonalCardsField(state) {
      // こういう値はどこかでconfigファイルとかに移したい
      const numberOfCard = 5;
      const initCardsField = (num: number) => {
        let cards = Array<CardStructure>();
        for (let i = 1; i < num + 1; i++) {
          const newCard: CardStructure = {
            number: i,
            orientation: CardOrientation.back,
            id: state.nextUsableID,
          };
          state.nextUsableID += 1;
          cards = cards.concat(newCard);
        }
        return cards;
      };
      state.personalCardsOfPlayer1 = initCardsField(numberOfCard);
      state.personalCardsOfPlayer2 = initCardsField(numberOfCard);
    },
    increment(state) {
      // ここで状態を更新する
      // state.xxx = yyy;
      const a = 1;
    },
    incrementTurnCount(state) {
      state.turnCount++;
    },
    refreshCards(state) {
      state.numberOfFlippedCards = 0;
      const changeOrientation = (card: CardStructure) => {
        card.orientation = card.orientation === CardOrientation.front ?  CardOrientation.back : CardOrientation.front;
        return card;
      };
      const undoFlippingCard = (card: CardStructure | null) => {
        if ( card === null ) {
          return null;
        }
        return  card.orientation === CardOrientation.front ? changeOrientation(card) : card;
      };
      state.commonCards = state.commonCards
        .map(undoFlippingCard);
      state.personalCardsOfPlayer1 = state.personalCardsOfPlayer1
        .map(undoFlippingCard);
      state.personalCardsOfPlayer2 = state.personalCardsOfPlayer2
        .map(undoFlippingCard);
    },
    gainCards(state) {
      if (state.turnPlayer === Player.player1) {
        state.gainCardsOfPlayer1 = state.gainCardsOfPlayer1.concat(state.matchedCards);
      } else if (state.turnPlayer === Player.player2) {
        state.gainCardsOfPlayer2 = state.gainCardsOfPlayer2.concat(state.matchedCards);
      }
      state.matchedCards = [];
    },
    findCardsWithSameNumber(state) {
      const openedCommonCards = state.commonCards
        .reduce(concatIfNonNull, Array<CardStructure>())
        .filter((card) => card.orientation === CardOrientation.front);
      const openedPersonalCards = state.turnPlayer === Player.player1
        ? state.personalCardsOfPlayer1
          .reduce(concatIfNonNull, Array<CardStructure>())
          .filter((card) => card.orientation === CardOrientation.front)
        : state.personalCardsOfPlayer2
          .reduce(concatIfNonNull, Array<CardStructure>())
          .filter((card) => card.orientation === CardOrientation.front);
      const openedCards = openedCommonCards.concat(openedPersonalCards);
      const findCards = (withNumber: number, inCards: CardStructure[]) => {
        return inCards.filter((card) => card.number === withNumber);
      };
      const cardSet = openedCards
        .map((card) => findCards(card.number, openedCards))
        .sort((cards1, cards2) => cards2.length - cards1.length)
        [0];
      const matchingNumber = cardSet[0].number;
      const removeIfMatched  = (card: CardStructure | null) => {
        if ( ( card === null )
          || ( card.number === matchingNumber && card.orientation === CardOrientation.front )  ) {
          return null;
        } else {
          return card;
        }
      };
      if (cardSet.length > 1) {
        state.commonCards = state.commonCards
          .map(removeIfMatched);
        if (state.turnPlayer === Player.player1) {
          state.personalCardsOfPlayer1 = state.personalCardsOfPlayer1
            .map(removeIfMatched);
        } else if (state.turnPlayer === Player.player2) {
          state.personalCardsOfPlayer2 = state.personalCardsOfPlayer2
            .map(removeIfMatched);
        }
        state.matchedCards = cardSet;
      }
    },
    // 動作確認用 1枚一致にする
    makeAloneCards(state) {
      state.commonCards[0] = {number: 1, orientation: CardOrientation.front, id: 0};
      state.commonCards[5] = {number: 5, orientation: CardOrientation.front, id: 0};
      state.personalCardsOfPlayer1[3] = {number: 3, orientation: CardOrientation.front, id: 0};
    },
    // 動作確認用 2枚一致にする
    makePairCards(state) {
      state.commonCards[0] = {number: 3, orientation: CardOrientation.front, id: 0};
      state.commonCards[5] = {number: 5, orientation: CardOrientation.front, id: 0};
      state.personalCardsOfPlayer1[3] = {number: 3, orientation: CardOrientation.front, id: 0};
    },
    // 動作確認用 3枚一致にする
    makeTripleCards(state) {
      state.commonCards[0] = {number: 3, orientation: CardOrientation.front, id: 0};
      state.commonCards[5] = {number: 3, orientation: CardOrientation.front, id: 0};
      state.personalCardsOfPlayer1[3] = {number: 3, orientation: CardOrientation.front, id: 0};
    },
    setScene(state: PloutosState, payload: Scene) {
      state.scene = payload;
    },
    flipCard(state: PloutosState, id: number) {
      state.numberOfFlippedCards += 1;
      const changeOrientation = (card: CardStructure) => {
        card.orientation = card.orientation === CardOrientation.front ?  CardOrientation.back : CardOrientation.front;
        return card;
      };
      const changeCardState = ( card: CardStructure | null ) => {
        if ( card === null ) {
          return null;
        }
        return card.id === id ? changeOrientation(card) : card;
      };
      state.commonCards = state.commonCards
        .map(changeCardState);
      state.personalCardsOfPlayer1 = state.personalCardsOfPlayer1
        .map(changeCardState);
      state.personalCardsOfPlayer2 = state.personalCardsOfPlayer2
        .map(changeCardState);
    },
  },

  actions: {
    confirmTurnFinish({ commit, state }) {
      if ( state.numberOfFlippedCards >= 3 ) {
        commit('findCardsWithSameNumber');
        commit('gainCards');
        commit('refreshCards');
        commit('incrementTurnCount');
      }
    },
  },

});
