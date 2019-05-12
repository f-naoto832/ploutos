<template>
  <div class="cardHolder">
    <template v-if="cardExist">
      <Card v-bind:number="card.number" v-bind:orientation="card.orientation" v-bind:id="card.id"/>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CardStructure } from '../store';
import Card from './Card.vue';

@Component({
  components: {
    Card,
  },
})
export default class CardHolder extends Vue {
  @Prop() public card!: CardStructure;
  private get cardExist(): boolean {
    return this.card != null;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardHolder {
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 9rem;
  margin: 0.2rem;
  transition: all 0.2s ease;
  border: 3px solid #ffffff;
}
</style>
