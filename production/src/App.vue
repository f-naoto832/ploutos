<template>
  <div id="app">
    <Menu v-if="shouldMenuBeShown"></Menu>
    <GameField/>
    <div id="debug">
      <button v-on:click="onClickNext">Next(ターン経過の動作確認用ボタン)</button>
      <button v-on:click="gain1">ペアなし(要dist)</button>
      <button v-on:click="gain2">ペア(要dist)</button>
      <button v-on:click="gain3">トリプル(要dist)</button>
      <button v-on:click="onClickDistributionCard">distribution(共用フィールドの動作確認)</button>
      <button v-on:click="gameover">ゲームオーバー</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from './store';
import Menu from './components/Menu.vue';
import Card from './components/Card.vue';
import GameField from './components/GameField.vue';
import PlayButton from './components/PlayButton.vue';
import ReplayButton from './components/ReplayButton.vue';
import { CardOrientation, Scene } from './store';

@Component({
  components: {
    Menu,
    Card,
    GameField,
    PlayButton,
    ReplayButton,
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
    store.dispatch('distributeCards');
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
  // 動作確認用（Sceneを変更するしてリプレイの画面を表示させるだけ）
  private gameover() {
    store.commit('setScene', Scene.finish);
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
#debug {
  margin: 60px;
}
</style>
