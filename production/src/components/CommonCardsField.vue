<template>
  <div class="commonCardsField">
    <div class="row">
      <Card number=1 v-bind:orientation="orientation"/>
      <Card number=2 v-bind:orientation="orientation"/>
      <Card number=3 v-bind:orientation="orientation"/>
      <Card number=4 v-bind:orientation="orientation"/>
      <Card number=5 v-bind:orientation="orientation"/>
    </div>
    <div class="row">
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
import { CardOrientation } from '../store';
import { Player } from '../store';

@Component({
  components: {
    Card,
  },
})
export default class CommonCardsField extends Vue {
    private orientation: CardOrientation = CardOrientation.back;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.commonCardsField {
  position: relative;
  width: 60%;
  margin-left: 20%;
  text-align: center;
  background-color: lightgoldenrodyellow;
}
.row {
  position: relative;
  width: 50rem;
  height: 13rem;
  text-align: center;
}
</style>
