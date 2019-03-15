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

export default new Vuex.Store({
  state: {
    personalCardsFieldOfPlayer1: null,
    personalCardsFieldOfPlayer2: null,
    commonCardsField: null,
    gainCardsFieldOfPlayer1: null,
    gainCardsFieldOfPlayer2: null,
    gainCardsOfPlayer1: [{Card: new Card()}],
    gainCardsOfPlayer2: [{Card: new Card()}],
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
    incrementGainCardsOfPlayer1(state) {
      const newCard = new Card({ propsData: {
        number: 4,
        orientation: CardOrientation.front,
      }});
      state.gainCardsOfPlayer1.push({Card: newCard});
    },
  },
  actions: {

  },
});
