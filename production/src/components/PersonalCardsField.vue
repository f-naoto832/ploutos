<template>
  <div class="personalCardsField">
    <div class="gainCards">
      <GainCardsField v-bind:player="player" />
    </div>
    <div class="ownCards">
      <Card number=1 v-bind:orientation="orientation"/>
      <Card number=2 v-bind:orientation="orientation"/>
      <Card number=3 v-bind:orientation="orientation"/>
      <Card number=4 v-bind:orientation="orientation"/>
      <Card number=5 v-bind:orientation="orientation"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import Card from './Card.vue';
import GainCardsField from './GainCardsField.vue';
import { CardOrientation } from '../store';
import { Player } from '../store';

@Component({
  components: {
    Card,
    GainCardsField,
  },
})
export default class PersonalCardsField extends Vue {
    private orientation: CardOrientation = CardOrientation.back;
    private player: Player = Player.player1;
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
