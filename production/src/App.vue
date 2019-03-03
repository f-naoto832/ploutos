<template>
  <div id="app">
    <Card number=1 v-bind:orientation="orientation"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from './components/Card.vue';
import { CardOrientation } from './store';

@Component({
  components: {
    Card,
  },
})
export default class App extends Vue {
  // 確認用
  private orientation: CardOrientation = CardOrientation.back;
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
