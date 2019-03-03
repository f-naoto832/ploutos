<template>
  <div class="personalCardsField">
    <img id="personal-cards-field" src="../assets/personal-cards-field.png">
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
  width: 80%;
  height: 20rem;
  text-align: center;
}
img {
  width:auto;
  height:auto;
  max-width:100%;
  max-height:100%;
}
</style>
