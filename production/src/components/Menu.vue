<template>
  <div class="overlay">
    <div class="prepare" v-if="isGamePreparing">
      <PlayButton/>
    </div>
    <template v-if="isGameFinished">
      <div class="title">
        対戦結果
      </div>
      <div class="info">
        <div class="result">
          <div class="message">
            {{getResultMessage}}
          </div>
          <div>
            プレイヤー１の得点：　{{$store.state.gainCardsOfPlayer1.length}}
          </div>
          <div>
            プレイヤー２の得点：　{{$store.state.gainCardsOfPlayer2.length}}
          </div>
        </div>
      <ReplayButton/>
      </div>
    </template>
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
  private get getResultMessage(): string {
    if (this.$store.state.gainCardsOfPlayer1.length > this.$store.state.gainCardsOfPlayer2.length) {
      return 'プレイヤー1の勝利';
    } else if (this.$store.state.gainCardsOfPlayer1.length < this.$store.state.gainCardsOfPlayer2.length) {
      return 'プレイヤー2の勝利';
    } else {
      return '引き分け';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overlay {
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  /* 画面いっぱいに広げる */
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  /* 子要素を上下左右に中央寄せ */
  display: flex;
  align-items: center;
  flex-flow: column;
}
.prepare {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.title {
  background: saddlebrown;
  color: white;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 200%;
  margin-top: 5%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 3rem;
  padding-right: 3rem;
  font-weight: bold;
}
.info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  height: 100%;
  width: 100%;

}
.result {
  background: white;
  padding: 0rem 6rem 6rem 6rem;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}
.message {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: brown;
  font-weight: bold;
}
</style>
