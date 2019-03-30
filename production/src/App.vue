<template>
  <div id="app">
    <Menu v-if="shouldMenuBeShown"></Menu>
    <GainCardsField1/>
    <player1CardsField/>
    <CommonCardsField/>
    <GainCardsField2/>
    <player2CardsField/>
    <TurnCounter />
    <button v-on:click="onClickNext">Next(ターン経過の動作確認用ボタン)</button>
    <button v-on:click="gain1">ペアなし(要dist)</button>
    <button v-on:click="gain2">ペア(要dist)</button>
    <button v-on:click="gain3">トリプル(要dist)</button>
    <button v-on:click="onClickDistributionCard">distribution(共用フィールドの動作確認)</button>
    <PlayButton />
    <ReplayButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from './store';
import Menu from './components/Menu.vue';
import TurnCounter from './components/TurnCounter.vue';
import Card from './components/Card.vue';
import Player1CardsField from './components/Player1CardsField.vue';
import Player2CardsField from './components/Player2CardsField.vue';
import GainCardsField1 from './components/GainCardsField1.vue';
import GainCardsField2 from './components/GainCardsField2.vue';
import CommonCardsField from './components/CommonCardsField.vue';
import PlayButton from './components/PlayButton.vue';
import ReplayButton from './components/ReplayButton.vue';
import { CardOrientation, Scene } from './store';

@Component({
  components: {
    Menu,
    TurnCounter,
    Card,
    Player1CardsField,
    Player2CardsField,
    GainCardsField1,
    GainCardsField2,
    PlayButton,
    ReplayButton,
    CommonCardsField,
  },
})
export default class App extends Vue {
  private get shouldMenuBeShown() {
    return this.$store.state.scene !== Scene.playing;
  }
// 確認用
  private orientation: CardOrientation = CardOrientation.back;
  // 動作確認用関数
  private onClickNext() {
    store.commit('incrementTurnCount');
  }
  private onClickDistributionCard() {
    store.commit('initCommonCardsField');
    store.commit('initPersonalCardsField');
  }
  // 動作確認用関数 1枚一致
  private gain1() {
    store.commit('makeAloneCards');
    setTimeout(() => {
      store.commit('findCardsWithSameNumber');
      store.commit('gainCards');
    }, 500);
  }
  // 動作確認用関数 2枚一致
  private gain2() {
    store.commit('makePairCards');
    setTimeout(() => {
      store.commit('findCardsWithSameNumber');
      store.commit('gainCards');
    }, 500);
  }
  // 動作確認用関数 3枚一致
  private gain3() {
    store.commit('makeTripleCards');
    setTimeout(() => {
      store.commit('findCardsWithSameNumber');
      store.commit('gainCards');
    }, 500);
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
