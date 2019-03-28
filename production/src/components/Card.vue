<template>
  <div class="card">
    <div id="card-front" v-if="isOrientation(front)" v-on:click="flipCards">
      <h1>{{ number }}</h1>
      <img id="card-design" src="../assets/card-front.jpg">
    </div>
    <div id="card-back" v-if="isOrientation(back)" v-on:click="flipCards">
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

  // importしたenumをtemplateで使用できないので、変数に格納
  private front = CardOrientation.front;
  private back = CardOrientation.back;
  // propは直接変更するとwarnが出るので、変数に格納
  private dataOrientation = this.orientation;

  private isOrientation(orientation: CardOrientation): boolean {
      return this.dataOrientation === orientation;
  }

  private flipCards() {
    if ( this.isOrientation(CardOrientation.front) ) {
      this.dataOrientation = CardOrientation.back;
    } else if ( this.isOrientation(CardOrientation.back) ) {
      this.dataOrientation = CardOrientation.front;
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
.card h1 {
  position: absolute;
  margin: 0.2rem;
}
img {
  width:auto;
  height:auto;
  max-width:100%;
  max-height:100%;
}
</style>
