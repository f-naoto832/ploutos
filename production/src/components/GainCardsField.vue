<template>
  <div class="gainCardsField">
    <Card number=1 v-bind:orientation="orientation"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import Card from './Card.vue';
import { CardOrientation } from '../store';

@Component({
  components: {
    Card,
  },
})
export default class GainCardsField extends Vue {
    private orientation: CardOrientation = CardOrientation.front;
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
  background-color: mediumseagreen;
}
</style>
