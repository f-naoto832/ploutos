<template>
  <div class="card">
    <div id="card-front" v-if="isFrontShow" v-on:click="flipCards">
      <img id="card-design" :src="getImagePath">
    </div>
    <div id="card-back" v-if="isBackShow" v-on:click="flipCards">
      <img id="card-design" src="../assets/card-back.jpg">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CardOrientation, CardStructure } from '../store';

declare function require(x: string): any;

@Component
export default class Card extends Vue implements CardStructure {
  @Prop() public number!: number;
  @Prop() public orientation!: CardOrientation;
  @Prop() public id!: number;

  private get getImagePath(): any {
    return require('../assets/card-front-' + this.number + '.jpg');
  }

  private get isFrontShow(): boolean {
    return this.orientation === CardOrientation.front;
  }
  private get isBackShow(): boolean {
    return this.orientation === CardOrientation.back;
  }

  private flipCards() {
    if ( this.orientation === CardOrientation.back ) {
      this.$store.dispatch('flipCardIfFulfillCondition', this.id);
      this.$store.dispatch('confirmTurnFinish');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  position: relative;
  display: inline-block;
  width: 8rem;
  height: 12rem;
  margin: 0.2rem;
  transition: all 0.2s ease;
  border: 3px solid #176123;
}

img {
  width:auto;
  height:auto;
  max-width:100%;
  max-height:100%;
}
</style>
