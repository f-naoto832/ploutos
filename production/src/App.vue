<template>
  <div id="app">
    <Menu v-if="shouldMenuBeShown"></Menu>
    <GameField v-if="isSenePlaying"></GameField>
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
  private get isSenePlaying() {
    return this.$store.state.scene === Scene.playing;
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
