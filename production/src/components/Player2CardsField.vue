<template>
  <div class="personalCardsField">
    <div class="row">
      <template v-for="(card,key) in this.$store.state.personalCardsOfPlayer2">
        <CardHolder v-bind:card="card" v-bind:key="key"/>
      </template>
    </div>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personalCardsField {
  position: relative;
  width: 80%;
  margin-left: 20%;
  /* background-color: lightgoldenrodyellow; */
}
.row {
  position: relative;
  width: 40rem;
  text-align: right;
}
</style>
