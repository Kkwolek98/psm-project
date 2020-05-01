<template>
  <div class="macro-dialog-overlay">
    <div class="box shadow">
      <h3>Macroelements</h3>
      <div class="macro-item">
        <div class="macro-name">Carbohydrates:</div>
        <div class="macro-ammount">{{carbs.toFixed(2)}}g</div>
      </div>
      <div class="macro-item">
        <div class="macro-name">Fats:</div>
        <div class="macro-ammount">{{fats.toFixed(2)}}g</div>
      </div>
      <div class="macro-item">
        <div class="macro-name">Proteins:</div>
        <div class="macro-ammount">{{proteins.toFixed(2)}}g</div>
      </div>
      <button style="margin-top: 22px;" @click="closeDialog">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MacroDialog",
  props: ["meals"],
  data: function() {
    return {
      carbs: 0,
      fats: 0,
      proteins: 0
    };
  },
  methods: {
    closeDialog() {
      this.$emit("close", true);
    },
    countMacros() {
      this.meals.forEach(meal => {
        this.carbs += meal.carbs;
        this.fats += meal.fats;
        this.proteins += meal.protein;
      });
    }
  },
  mounted: function() {
    this.countMacros();
    console.log(this.meals);
  }
};
</script>
<style lang="scss">
.macro-dialog-overlay {
  background: rgba(200, 200, 200, 0.3);
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  div {
    position: relative;
    top: 30%;
    max-width: 600px;
  }
}
.macro-item {
  display: grid;
  grid-template-columns: 60% 40%;
  font-size: 18px;
  margin-bottom: 8px;
  .macro-name {
    text-align: left;
    margin-left: 8px;
  }
  .macro-ammount {
    text-align: right;
  }
}
</style>