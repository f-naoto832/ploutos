<template>
  <div class="gainCardsField">
    <div id="number-of-cards-player1" v-if="isPlayer1">
      <h1>{{ this.$store.state.gainCardsOfPlayer1 }}</h1>
    </div>
    <div id="number-of-cards-player2" v-if="isPlayer2">
      <h1>{{ this.$store.state.gainCardsOfPlayer2 }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Player } from '../store';

@Component
export default class GainCardsField extends Vue {
  @Prop() private player!: Player;
  private isPlayer1: boolean = this.player === Player.player1;
  private isPlayer2: boolean = this.player === Player.player2;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gainCardsField {
  position: absolute;
  width: 9rem;
  height: 13rem;
  margin-left: 3%;
  text-align: center;
  font-size: 0.5rem;
  background-color: mediumseagreen;
}
</style>
