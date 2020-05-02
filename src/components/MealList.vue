<template>
  <div class="meals">
    <h3 style="text-align: left">Meals</h3>
    <div class="meal clickable" v-for="meal in meals" :key="meal.time" @click="openDialog(meal)">
      <div class="meal-name">{{meal.name}}</div>
      <div class="meal-kcal">{{meal.calories.toFixed(0)}} kcal</div>
    </div>
    <div v-if="!meals.length">No meals for that day</div>
  </div>
</template>

<script>
export default {
  name: "MealList",
  props: ["meals"],
  data: function() {
    return {
      showDialog: false,
      selectedMeal: {}
    };
  },
  methods: {
    openDialog(meal) {
      this.$emit("openMealDialog", meal);
    }
  }
};
</script>

<style lang="scss">
.meal {
  display: grid;
  grid-template-columns: 70% 30%;
  border-radius: 12px;
  background-color: #333333;
  width: 100%;
  height: 32px;
  line-height: 2;
  margin-bottom: 12px;
  padding: 0 8px;
  .meal-name {
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
@media (max-width: 1100px) {
  .meal {
    height: 64px;
  }
}
@media (max-width: 990px) {
  .meal {
    height: 32px;
  }
  @media (max-width: 330px) {
    .meal {
      height: 64px;
      grid-template-columns: 65% 35%;
    }
  }
}
</style>