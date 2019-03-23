<template>
  <div class="gainCardsField">
    <h1>{{ this.$store.state.gainCardsOfPlayer1.length }} pairs</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Player } from '../store';

@Component
export default class GainCardsField1 extends Vue {
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
  font-size: 1rem;
  background-color: mediumseagreen;
}
</style>
