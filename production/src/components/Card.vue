<template>
  <div class="card">
    <div id="card-front">
      <h1>{{ number }}</h1>
    </div>
    <div id="card-back">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CardOrientation } from '../store';

@Component
export default class Card extends Vue {
  @Prop() private number!: number;
  @Prop() private orientation!: CardOrientation;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
