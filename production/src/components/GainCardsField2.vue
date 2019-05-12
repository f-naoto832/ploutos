<template>
  <div class="gainCardsField">
    <h1>{{ this.$store.state.gainCardsOfPlayer2.length }}</h1>
    <h1>point</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Player } from '../store';

@Component
export default class GainCardsField2 extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gainCardsField {
  position: absolute;
  width: 8rem;
  height: 9rem;
  text-align: center;
  font-size: 1rem;
  background-color: lightgreen;
  border: 3px solid #ffffff;
  border-radius: 20px 20px 20px 20px / 20px 20px 20px 20px;
}
</style>
