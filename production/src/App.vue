<template>
  <div id="app">
    <player1CardsField/>
    <CommonCardsField/>
    <player2CardsField/>
    <TurnCounter />
    <button v-on:click="onClickNext">Next(ターン経過の動作確認用ボタン)</button>
    <button v-on:click="onClickNumberOfPlayer1">Next(取得カード数の動作確認用ボタン)</button>
    <button v-on:click="onClickDistributionCard">distribution(共用フィールドの動作確認)</button>
    <PlayButton />
    <ReplayButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from './store';
import TurnCounter from './components/TurnCounter.vue';
import Card from './components/Card.vue';
import Player1CardsField from './components/Player1CardsField.vue';
import Player2CardsField from './components/Player2CardsField.vue';
import CommonCardsField from './components/CommonCardsField.vue';
import PlayButton from './components/PlayButton.vue';
import ReplayButton from './components/ReplayButton.vue';
import { CardOrientation } from './store';

@Component({
  components: {
    TurnCounter,
    Card,
    Player1CardsField,
    Player2CardsField,
    PlayButton,
    ReplayButton,
    CommonCardsField,
  },
})
export default class App extends Vue {
// 確認用
  private orientation: CardOrientation = CardOrientation.back;
  // 動作確認用関数
  private onClickNext() {
    store.commit('incrementTurnCount');
  }
  // 動作確認用関数
  private onClickNumberOfPlayer1() {
    store.commit('incrementGainCardsOfPlayer1');
  }
  private onClickDistributionCard() {
    store.commit('initCommonCardsField');
    store.commit('initPersonalCardsField');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
