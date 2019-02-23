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

export default new Vuex.Store({
  state: {
    personalCardsFieldOfPlayer1: null,
    personalCardsFieldOfPlayer2: null,
    commonCardsField: null,
    gainCardsFieldOfPlayer1: null,
    gainCardsFieldOfPlayer2: null,
    turnPlayer: Player.player1,
    counter: 0,
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
  },
  actions: {

  },
});
