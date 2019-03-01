<template>
  <div id="app">
    <TurnCounter />
    <button v-on:click="onClickNext">Next(ターン経過の動作確認用ボタン)</button>
    <Card number=1 />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from './store';
import TurnCounter from './components/TurnCounter.vue';
import Card from './components/Card.vue';

@Component({
  components: {
    TurnCounter,
    Card,
  },
})
export default class App extends Vue {
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
