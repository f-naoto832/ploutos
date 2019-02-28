<template>
  <div class="turnCounter">
    <h1>{{ this.$store.state.turnCount }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class TurnCounter extends Vue { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

