<template>
  <div class="meals">
    <h3 style="text-align: left">Meals</h3>
    <div class="meal" v-for="meal in meals" :key="meal.name">
      <div class="meal-name">{{meal.name}}</div>
      <div class="meal-kcal">{{meal.kcal}} kcal</div>
    </div>
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
</style>