<template>
  <div class="meals">
    <h3 style="text-align: left">Meals</h3>
    <div class="meal" v-for="meal in meals" :key="meal.time">
      <div class="meal-name">{{meal.name}}</div>
      <div class="meal-kcal">{{meal.calories}} kcal</div>
    </div>
    <div v-if="!meals.length">No meals for that day</div>
  </div>
</template>

<script>
export default {
  name: "MealList",
  props: ["meals"]
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
  }
}
@media (max-width: 1180px) {
  .meal {
    height: 64px;
  }
}
@media (max-width: 990px) {
  .meal {
    height: 32px;
  }
}
@media (max-width: 480px) {
  .meal {
    height: 64px;
  }
}
</style>