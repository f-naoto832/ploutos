<template>
  <div class="overlay">
    <PlayButton v-if="isGamePreparing"/>
    <ReplayButton v-if="isGameFinished"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PlayButton from './PlayButton.vue';
import ReplayButton from './ReplayButton.vue';
import store, { Scene } from '../store';

@Component({
  components: {
    PlayButton,
    ReplayButton,
  },
})
export default class Menu extends Vue {
  private get isGamePreparing() {
    return this.$store.state.scene === Scene.preparing;
  }
  private get isGameFinished() {
    return this.$store.state.scene === Scene.finish;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overlay {
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  /* 画面いっぱいに広げる */
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  /* 子要素を上下左右に中央寄せ */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
