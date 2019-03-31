import { CardStructure } from './store';
import Vue from 'vue';
import Vuex from 'vuex';
import Card from './components/Card.vue';

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
}

interface PloutosState {
  personalCardsOfPlayer1: CardStructure[];
  personalCardsOfPlayer2: CardStructure[];
  commonCardsField: CardStructure[];
  gainCardsOfPlayer1: CardStructure[];
  gainCardsOfPlayer2: CardStructure[];
  turnPlayer: Player;
  turnCount: number;
  matchedCards: CardStructure[];
  isPrivilegeAvailable: boolean;
  scene: Scene;
}

export default new Vuex.Store<PloutosState>({

  state: {
    personalCardsOfPlayer1: Array<CardStructure>(),
    personalCardsOfPlayer2: Array<CardStructure>(),
    commonCardsField: Array<CardStructure>(),
    gainCardsOfPlayer1: Array<CardStructure>(),
    gainCardsOfPlayer2: Array<CardStructure>(),
    turnPlayer: Player.player1,
    turnCount: 0,
    matchedCards: Array<CardStructure>(),
    isPrivilegeAvailable: true,
    scene: Scene.preparing,
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
        };
        cards = cards.concat(newCard);
      }
      state.commonCardsField = cards;
    },
    initPersonalCardsField(state) {
      // こういう値はどこかでconfigファイルとかに移したい
      const numberOfCard = 5;

      let cards = Array<CardStructure>();
      for (let i = 1; i < numberOfCard + 1; i++) {
        const newCard: CardStructure = {
          number: i,
          orientation: CardOrientation.back,
        };
        cards = cards.concat(newCard);
      }
      state.personalCardsOfPlayer1 = cards;
      state.personalCardsOfPlayer2 = cards;
    },
    increment(state) {
      // ここで状態を更新する
      // state.xxx = yyy;
      const a = 1;
    },
    incrementTurnCount(state) {
      state.turnCount++;
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
      const openedCommonCards = state.commonCardsField.filter((card) => card.orientation === CardOrientation.front);
      const openedPersonalCards = state.turnPlayer === Player.player1
        ? state.personalCardsOfPlayer1.filter((card) => card.orientation === CardOrientation.front)
        : state.personalCardsOfPlayer2.filter((card) => card.orientation === CardOrientation.front);
      const openedCards = openedCommonCards.concat(openedPersonalCards);
      const findCards = (withNumber: number, inCards: CardStructure[]) => {
        return inCards.filter((card) => card.number === withNumber);
      };
      const cardSet = openedCards
        .map((card) => findCards(card.number, openedCards))
        .sort((cards1, cards2) => cards2.length - cards1.length)
        [0];
      const matchingNumber = cardSet[0].number;
      if (cardSet.length > 1) {
        state.commonCardsField = state.commonCardsField
          .filter((card) => card.number !== matchingNumber || card.orientation !== CardOrientation.front);
        if (state.turnPlayer === Player.player1) {
          state.personalCardsOfPlayer1 = state.personalCardsOfPlayer1
            .filter((card) => card.number !== matchingNumber || card.orientation !== CardOrientation.front);
        } else if (state.turnPlayer === Player.player2) {
          state.personalCardsOfPlayer2 = state.personalCardsOfPlayer2
            .filter((card) => card.number !== matchingNumber || card.orientation !== CardOrientation.front);
        }
        state.matchedCards = cardSet;
      }
    },
    // 動作確認用 1枚一致にする
    makeAloneCards(state) {
      state.commonCardsField[0] = {number: 1, orientation: CardOrientation.front};
      state.commonCardsField[5] = {number: 5, orientation: CardOrientation.front};
      state.personalCardsOfPlayer1[3] = {number: 3, orientation: CardOrientation.front};
    },
    // 動作確認用 2枚一致にする
    makePairCards(state) {
      state.commonCardsField[0] = {number: 3, orientation: CardOrientation.front};
      state.commonCardsField[5] = {number: 5, orientation: CardOrientation.front};
      state.personalCardsOfPlayer1[3] = {number: 3, orientation: CardOrientation.front};
    },
    // 動作確認用 3枚一致にする
    makeTripleCards(state) {
      state.commonCardsField[0] = {number: 3, orientation: CardOrientation.front};
      state.commonCardsField[5] = {number: 3, orientation: CardOrientation.front};
      state.personalCardsOfPlayer1[3] = {number: 3, orientation: CardOrientation.front};
    },
    setScene(state, payload) {
      state.scene = payload;
    },
  },

  actions: {
  },

});
