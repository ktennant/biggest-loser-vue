<template>
  <div class="container stats">
    <div>
      <b-icon icon="currency-usd" custom-class="money"></b-icon>
      {{ totalMonies }} pot!
    </div>
    <div>
      <b-icon icon="pig" custom-class="weight-loss"></b-icon>
      {{ totalWeightLoss }} pounds lost! ({{ totalPercentageLoss }}%)
    </div>
  </div>
</template>

<style>
.money {
  color: #459c45;
}
.weight-loss {
  color: #ffa1d5;
}
.stats {
  font-size: 1.5rem;
}
</style>

<script>
import data from "../assets/data.json";

var currentWeek = 0;
while (data[0].weighins[currentWeek] != undefined) {
  currentWeek++;
}
currentWeek = currentWeek - 1;

var totalStartWeight = 0,
  totalCurrentWeight = 0;

data.forEach(p => {
  totalStartWeight += p.weighins[0];
  totalCurrentWeight += p.weighins[currentWeek];
});

// todo: get this from data
var penalties = 6, // ? Annie 1, Helen 1, Sarah 3, Keith 1
  numContestants = Object.keys(data).length,
  weeklyEntryFee = 2;

var totalMonies = (
  numContestants * currentWeek * weeklyEntryFee +
  penalties
).toFixed(2);
var totalWeightLoss =
  Math.round((totalStartWeight - totalCurrentWeight) * 10) / 10;
var totalPercentageLoss = Math.abs(
  Math.round(((totalCurrentWeight / totalStartWeight) * 100 - 100) * 100) / 100
);

export default {
  data() {
    return {
      totalMonies,
      totalWeightLoss,
      totalPercentageLoss
    };
  }
};
</script>