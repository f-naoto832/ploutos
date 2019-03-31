<template>
  <div class="personalCardsField">
    <div class="ownCards">
      <template v-for="(card,key) in personalCardsOfPlayer1">
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
export default class Player1CardsField extends Vue {
  private player: Player = Player.player1;
  private get personalCardsOfPlayer1(): Array<CardStructure | null> {
    const personalCards: Array<CardStructure | null> = [ ...this.$store.state.personalCardsOfPlayer1];
    for (let i = 0; i < fieldCardNumber - this.$store.state.personalCardsOfPlayer1.length; i++ ) {
      personalCards.push(null);
    }
    return personalCards;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personalCardsField {
  position: relative;
  width: 60%;
  height: 13rem;
  margin-left: 20%;
  text-align: center;
}
.gainCards {
  position: absolute;
  width: 10rem;
  height: 13rem;
  text-align: center;
  background-color: lightgoldenrodyellow;
}
.ownCards {
  position: absolute;
  width: 50rem;
  height: 13rem;
  margin-left: 20%;
  text-align: center;
  background-color: lightgoldenrodyellow;
}
</style>
