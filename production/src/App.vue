<template>
  <div id="app">
    <Card number=1 v-bind:orientation="orientation"/>
    <TurnCounter />
    <button v-on:click="onClickNext">Next(ターン経過の動作確認用ボタン)</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from './store';
import TurnCounter from './components/TurnCounter.vue';
import Card from './components/Card.vue';
import PersonalCardsField from './components/PersonalCardsField.vue';
import { CardOrientation } from './store';

@Component({
  components: {
    TurnCounter,
    Card,
    PersonalCardsField,
  },
})
export default class App extends Vue {
  // 確認用
  private orientation: CardOrientation = CardOrientation.back;
  // 動作確認用関数
  private onClickNext() {
    store.commit('incrementTurnCount');
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
