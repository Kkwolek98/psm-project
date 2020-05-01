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
import * as food from "../firebase/food";
import * as profile from "../firebase/profile";
export default {
  name: "DayView",
  components: {
    KcalMeter,
    MealList
  },
  data: function() {
    return {
      percent: 0,
      kcal: 0,
      kcalGoal: 0,
      meals: []
    };
  },
  methods: {
    getMeals() {
      food.getMealsForToday().then(meals => {
        this.meals = meals;
        this.countCalories();
      });
    },
    countCalories() {
      this.meals.forEach(meal => {
        this.kcal += meal.calories;
      });
    },
    getUserKcalGoal() {
      profile.getProfile().then(profile => {
        console.log(profile);
        this.kcalGoal = profile.kcalGoal;
      });
    }
  },
  mounted: function() {
    this.getMeals();
    this.getUserKcalGoal();
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