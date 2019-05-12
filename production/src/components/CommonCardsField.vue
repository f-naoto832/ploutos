<template>
  <div class="commonCardsField">
    <div class="row">
      <template v-for="(card,key) in this.$store.state.commonCards">
        <CardHolder v-bind:card="card" v-bind:key="key"/>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import Card from './Card.vue';
import CardHolder from './CardHolder.vue';
import { CardOrientation, CardStructure, Player } from '../store';

const fieldCardNumber = 10;

@Component({
  components: {
    Card,
    CardHolder,
  },
})
export default class CommonCardsField extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.commonCardsField {
  position: relative;
  width: 80%;
  margin-left: 20%;
  /* background-color: lightgoldenrodyellow; */
}
.row {
  position: relative;
  margin-top: 3%;
  margin-bottom: 3%;
  width: 40rem;
  background-color: lightgoldenrodyellow;
  border: 3px solid #ffffff;
  border-radius: 20px 20px 20px 20px / 20px 20px 20px 20px;
}
</style>
