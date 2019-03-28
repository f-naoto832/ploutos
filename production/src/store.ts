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
}

interface PloutosState {
  personalCardsOfPlayer1: CardStructure[];
  personalCardsOfPlayer2: CardStructure[];
  commonCardsField: CardStructure[];
  gainCardsOfPlayer1: CardStructure[];
  gainCardsOfPlayer2: CardStructure[];
  turnPlayer: Player;
  turnCount: number;
  openedCards: number;
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
    openedCards: 0,
    isPrivilegeAvailable: true,
    scene: Scene.preparing,
  },
  mutations: {
    initCommonCardsField(state) {
      // こういう値はどこかでconfigファイルとかに移したい
      const numberOfCard = 10;

      for (let i = 1; i < numberOfCard + 1; i++) {
        const newCard: CardStructure = {
          number: i,
          orientation: CardOrientation.front,
        };
        state.commonCardsField.push(newCard);
      }
    },
    initPersonalCardsField(state) {
      // こういう値はどこかでconfigファイルとかに移したい
      const numberOfCard = 5;

      for (let i = 1; i < numberOfCard + 1; i++) {
        const newCard: CardStructure = {
          number: i,
          orientation: CardOrientation.back,
        };
        state.personalCardsOfPlayer1.push(newCard);
        state.personalCardsOfPlayer2.push(newCard);
      }
    },
    increment(state) {
      // ここで状態を更新する
      // state.xxx = yyy;
      const a = 1;
    },
    incrementTurnCount(state) {
      state.turnCount++;
    },
    incrementGainCardsOfPlayer1(state) {
      const newCard: CardStructure = {
        number: 4,
        orientation: CardOrientation.front,
      };
      state.gainCardsOfPlayer1.push(newCard);
    },
  },
  actions: {

  },
});
