<template>
  <a class="btn-flat-stripe">PLAY</a>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class PlayButton extends Vue { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-flat-stripe {
  position: relative;
  display: inline-block;
  font-weight: bold;
  padding: 0.5em 1em;
  text-decoration: none;
  border-left: solid 4px #668ad8;
  border-right: solid 4px #668ad8;
  color: #668ad8;
  text-shadow: 0 0 5px white;
  padding: 0.5em 1em;
  background: repeating-linear-gradient(-45deg, #cce7ff, #cce7ff 3px,#e9f4ff 3px, #e9f4ff 7px);
  transition: .4s;
}

.btn-flat-stripe:hover {
  background: repeating-linear-gradient(-45deg, #cce7ff, #cce7ff 5px,#e9f4ff 5px, #e9f4ff 9px);
}
</style>