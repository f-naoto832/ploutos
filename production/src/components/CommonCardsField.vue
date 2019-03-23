<template>
  <div class="commonCardsField">
    <div class="row">
      <template v-for="(card,key) in this.$store.state.commonCardsField">
        <Card v-bind:number="card.number" v-bind:orientation="card.orientation" v-bind:key="key"/>
      </template>
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
  // public mounted() {
  //   this.$store.watch(
  //     ( state, getters ) => {
  //       return state.commonCardsField;
  //     },
  //     ( newVal, oldVal) => {
  //       const commonCardsField: Card[] = newVal;
  //       commonCardsField.forEach( ( card ) => {
  //         card.$mount('#row');
  //       });
  //     },
  //   );
  // }
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
  text-align: center;
}
</style>
