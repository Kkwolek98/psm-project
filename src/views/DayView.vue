<template>
  <div class="day">
    <div class="box kcal-box">
      <KcalMeter v-bind:kcal="kcal" v-bind:kcalGoal="kcalGoal" />
    </div>
  </div>
</template>

<script>
import KcalMeter from "@/components/KcalMeter.vue";
export default {
  name: "DayView",
  components: {
    KcalMeter
  },
  data: function() {
    return {
      percent: 0,
      kcal: 900,
      kcalGoal: 2100
    };
  },
  methods: {
    setPercentage() {
      this.percent = Math.floor((this.kcal / this.kcalGoal) * 100);
      console.log(this.percent);
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
</style>