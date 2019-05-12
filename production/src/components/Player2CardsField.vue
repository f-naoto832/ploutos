<template>
  <div v-bind:class="[color]" class="personalCardsField">
    <template v-for="(card,key) in this.$store.state.personalCardsOfPlayer2">
      <CardHolder v-bind:card="card" v-bind:key="key"/>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import Card from './Card.vue';
import CardHolder from './CardHolder.vue';
import { CardOrientation, Player, CardStructure } from '../store';

const fieldCardNumber = 5;

@Component({
  components: {
    Card,
    CardHolder,
  },
})
export default class Player2CardsField extends Vue {
  private player: Player = Player.player2;
  private get color() {
    return this.$store.state.turnPlayer === this.player ? 'yellow' : 'unset';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personalCardsField {
  position: relative;
  width: 40rem;
  margin-left: 20%;
  border: 3px solid #ffffff;
  border-radius: 20px 20px 20px 20px / 20px 20px 20px 20px;
}
.yellow {
  background-color: lightgoldenrodyellow;
}
.unset {
  background-color: unset;
}
</style>
