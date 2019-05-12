<template>
  <div class="gainCardsField">
    <h1>{{ this.$store.state.gainCardsOfPlayer1.length }}</h1>
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
  width: 6rem;
  height: 9rem;
  margin: 0.4rem;
  text-align: center;
  font-size: 1rem;
  /* background-color: lightgoldenrodyellow; */
  background-size: contain;
  background-image: url("../assets/point.png");
  border: 3px solid #176123;
  border-radius: 5px 5px 5px 5px / 5px 5px 5px 5px;
}
</style>
