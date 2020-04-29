<template>
  <div class="day">
    <div class="row width-60">
      <div class="box kcal-box">
        <KcalMeter v-bind:kcal="kcal" v-bind:kcalGoal="kcalGoal" />
      </div>
      <div class="box kcal-box">
        <MealList v-bind:meals="meals" />
      </div>
    </div>
  </div>
</template>

<script>
import KcalMeter from "@/components/KcalMeter.vue";
import MealList from "@/components/MealList.vue";

export default {
  name: "DayView",
  components: {
    KcalMeter,
    MealList
  },
  data: function() {
    return {
      percent: 0,
      kcal: 900,
      kcalGoal: 2100,
      meals: [
        {
          name: "McNuggets 6pcs",
          kcal: 320
        },
        {
          name: "McNuggets 7pcs",
          kcal: 370
        },
        {
          name: "McNuggets 8pcs",
          kcal: 720
        }
      ]
    };
  },
  methods: {
    setPercentage() {
      this.percent = Math.floor((this.kcal / this.kcalGoal) * 100);
    }
  },
  mounted: function() {
    this.setPercentage();
  }
};
</script>

<style lang="scss">
.kcal-box {
  width: 360px;
  margin: 0 auto;
}
.width-60 {
  width: 60%;
  margin: 0 auto;
}
</style>