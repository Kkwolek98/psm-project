<template>
  <div class="day">
    <div class="row width-60">
      <div class="box col-lg-5">
        <KcalMeter v-bind:kcal="kcal" v-bind:kcalGoal="kcalGoal" />
        <div class="macro" @click="showMacroDialog = true">Macroelements</div>
      </div>
      <div class="box col-lg-5">
        <div class="date-text">{{displayDate()}}</div>
        <div class="add-item" v-if="displayDate() == 'Today'">
          <hr />
          <button @click="addMeal()">Add meal</button>
        </div>
      </div>
      <div class="box col-lg-5">
        <MealList @openMealDialog="openMealDialog" v-bind:meals="meals" />
      </div>
    </div>
    <MacroDialog v-if="showMacroDialog" @close="showMacroDialog = false" v-bind:meals="meals" />
    <MealDialog v-if="showMealDialog" @close="showMealDialog = false" v-bind:meal="selectedMeal" />
  </div>
</template>

<script>
import KcalMeter from "@/components/KcalMeter.vue";
import MealList from "@/components/MealList.vue";
import MacroDialog from "@/components/MacroDialog.vue";
import MealDialog from "@/components/MealDialog.vue";
import * as food from "../firebase/food";
import * as profile from "../firebase/profile";
export default {
  name: "DayView",
  components: {
    KcalMeter,
    MealList,
    MacroDialog,
    MealDialog
  },
  data: function() {
    return {
      percent: 0,
      kcal: 0,
      kcalGoal: 0,
      meals: [],
      selectedMeal: {},
      showMacroDialog: false,
      showMealDialog: false
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
    },
    displayDate() {
      let time = parseInt(this.$route.query.day);
      let string;
      let date = new Date(time);
      if (!time || date.getDate() == new Date().getDate()) {
        string = "Today";
      } else {
        string = `
        ${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${
          date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
        }`;
      }
      return string;
    },
    addMeal() {
      this.$router.push("/findItem");
    },
    openMealDialog(meal) {
      console.log(meal);
      this.selectedMeal = meal;
      this.showMealDialog = true;
    }
  },
  mounted: function() {
    this.getMeals();
    this.getUserKcalGoal();
  },
  watch: {
    $route: function() {
      this.getMeals();
      this.getUserKcalGoal();
    }
  },
  computed: {
    macros: function() {
      return 12;
    }
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
.date-text {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 12px;
}
.macro {
  margin-top: 18px;
  font-size: 20px;
  color: darken(#6ee2f5, 7);
}
</style>