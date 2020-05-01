<template>
  <div class="day">
    <div class="row width-60">
      <div class="box col-lg-5">
        <KcalMeter v-bind:kcal="kcal" v-bind:kcalGoal="kcalGoal" />
      </div>
      <div class="box col-lg-5">
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
      let query = this.$route.query;
      if (!query.day) {
        food.getMealsForToday().then(meals => {
          this.meals = meals;
          this.countCalories();
        });
      } else {
        food.getMealsForDay(query.day).then(meals => {
          this.meals = meals;
          this.countCalories();
        });
      }
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
.width-60 {
  width: 60%;
  margin: 0 auto;
}
@media (max-width: 990px) {
  .width-60 {
    width: 80%;
  }
  @media (max-width: 600px) {
    .width-60 {
      width: 100%;
    }
  }
}
</style>