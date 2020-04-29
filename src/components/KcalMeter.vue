<template>
  <div>
    <div class="kcal-text">{{kcal}} / {{kcalGoal}} kcal</div>
    <div class="meter">
      <div id="inner-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KcalMeter",
  props: ["kcal", "kcalGoal"],
  methods: {
    setInnerBar() {
      let bar = document.getElementById("inner-bar");
      let barWidth = (this.percent = Math.floor(
        (this.kcal / this.kcalGoal) * 100
      ));
      bar.style.width = barWidth + "%";
    }
  },
  mounted: function() {
    this.setInnerBar();
  }
};
</script>

<style lang="scss">
.meter {
  width: 256px;
  height: 20px;
  border-radius: 12px;
  background: #a3a3a3;
  margin: 0 auto;
  #inner-bar {
    border-radius: 12px;
    height: 100%;
    width: 0%;
    background: linear-gradient(to right, #6ee2f5 -1%, #6454f0 100%);
  }
}
.kcal-text {
  font-size: 22px;
  margin-bottom: 18px;
}
</style>