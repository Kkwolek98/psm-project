<template>
  <div>
    <div class="kcal-text">{{kcal.toFixed(0)}} / {{kcalGoal}} kcal</div>
    <div class="meter" v-bind:class="{'meter-limit' : barWidth >= 95}">
      <div id="inner-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KcalMeter",
  props: ["kcal", "kcalGoal"],
  data: function() {
    return {
      barWidth: 0
    };
  },
  methods: {
    setInnerBar() {
      let bar = document.getElementById("inner-bar");
      let barWidth = (this.percent = Math.floor(
        (this.kcal / this.kcalGoal) * 100
      ));
      this.barWidth = barWidth;
      if (barWidth <= 100) {
        bar.style.width = barWidth + "%";
      } else {
        bar.style.width = 100 + "%";
      }
    }
  },
  mounted: function() {
    this.setInnerBar();
  },
  watch: {
    kcal: function() {
      this.setInnerBar();
    },
    kcalGoal() {
      this.setInnerBar();
    }
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
.meter-limit {
  #inner-bar {
    background: linear-gradient(to right, #fbd72b -1%, #f9484a 100%);
  }
}
.kcal-text {
  font-size: 22px;
  margin-bottom: 18px;
}
@media (max-width: 1450px) {
  .meter {
    width: 90%;
  }
}
</style>