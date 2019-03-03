<template>
  <div class="personalCardsField">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class PersonalCardsField extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personalCardsField {
  position: absolute;
  width: 80rem;
  height: 12rem;
  margin-left: 20%;
  text-align: center;
  background-color: lightgoldenrodyellow;
}
</style>
