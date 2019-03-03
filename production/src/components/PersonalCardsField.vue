<template>
  <div class="personalCardsField">
    <Card number=1 v-bind:orientation="orientation"/>
    <Card number=2 v-bind:orientation="orientation"/>
    <Card number=3 v-bind:orientation="orientation"/>
    <Card number=4 v-bind:orientation="orientation"/>
    <Card number=5 v-bind:orientation="orientation"/>
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
export default class PersonalCardsField extends Vue {
    private orientation: CardOrientation = CardOrientation.back;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personalCardsField {
  position: relative;
  width: 60%;
  height: 13rem;
  margin-left: 20%;
  text-align: center;
  background-color: lightgoldenrodyellow;
}
</style>
