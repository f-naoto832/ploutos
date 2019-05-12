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
  position: absolute;
  margin-block-start: 6rem;
  font-size: 5rem;
  width: 8rem;
  height: 8rem;
  line-height: 8rem;
  text-align: center;
  background-size: contain;
  background-image: url("../assets/clock.jpg");
  border: 3px solid #ffffff;
  border-radius: 20px 20px 20px 20px / 20px 20px 20px 20px;
}
</style>

