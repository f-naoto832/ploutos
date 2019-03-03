<template>
  <div class="turnCounter">
    {{ this.$store.state.turnCount }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class TurnCounter extends Vue { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.turnCounter {
    font-size: 6rem;
    width: 10rem;
    height: 10rem;
    line-height: 10rem;
    text-align: center;
    background-size: contain;
    background-image: url("../assets/clock.jpg");
}
</style>

