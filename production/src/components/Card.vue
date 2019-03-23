<template>
  <div class="card">
    <div id="card-front" v-if="isFrontShow">
      <h1>{{ number }}</h1>
    </div>
    <div id="card-back" v-if="isBackShow">
      <img id="card-design" src="../assets/card-back.jpg">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CardOrientation, CardStructure } from '../store';

@Component
export default class Card extends Vue implements CardStructure {
  @Prop() public number!: number;
  @Prop() public orientation!: CardOrientation;
  private isFrontShow: boolean = this.orientation === CardOrientation.front;
  private isBackShow: boolean = this.orientation === CardOrientation.back;
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
