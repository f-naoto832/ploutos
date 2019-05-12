<template>
  <div class="gameField">
    <GainCardsField1/>
    <player1CardsField/>
    <TurnCounter/>
    <CommonCardsField/>
    <GainCardsField2/>
    <player2CardsField/>
  </div>
</template>

<script lang="ts">
import Player1CardsField from './Player1CardsField.vue';
import Player2CardsField from './Player2CardsField.vue';
import GainCardsField1 from './GainCardsField1.vue';
import GainCardsField2 from './GainCardsField2.vue';
import CommonCardsField from './CommonCardsField.vue';
import TurnCounter from './TurnCounter.vue';
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component({
    components: {
        Player1CardsField,
        Player2CardsField,
        GainCardsField1,
        GainCardsField2,
        CommonCardsField,
        TurnCounter,
    },
}) export default class GameField extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gameField {
    margin-left: 10%;
    text-align: center;
    /* background-color: lightblue; */
}
</style>
