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

export default new Vuex.Store({
  state: {
    personalCardsFieldOfPlayer1: null,
    personalCardsFieldOfPlayer2: null,
    commonCardsField: null,
    gainCardsFieldOfPlayer1: null,
    gainCardsFieldOfPlayer2: null,
    gainCardsNumberOfPlayer1: 0,
    gainCardsNumberOfPlayer2: 0,
    turnPlayer: Player.player1,
    turnCount: 0,
    openedCards: 0,
    isPrivilegeAvailable: true,
    scene: Scene.preparing,
  },
  mutations: {
    increment(state) {
      // ここで状態を更新する
      // state.xxx = yyy;
      const a = 1;
    },
    incrementTurnCount(state) {
      state.turnCount++;
    },
    incrementGainCardsNumberOfPlayer1(state) {
      state.gainCardsNumberOfPlayer1++;
    },
    incrementGainCardsNumberOfPlayer2(state) {
      state.gainCardsNumberOfPlayer2++;
    },
  },
  actions: {

  },
});
