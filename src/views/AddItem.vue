<template>
  <div class="add">
    <div class="box box-center">
        {{ this.food.name }}<br>
        Calories: {{ this.calories.toFixed(1) }}<br>
        Fats: {{ this.fats.toFixed(1) }}<br>
        Protein: {{ this.protein.toFixed(1) }}<br>
        Carbs: {{ this.carbs.toFixed(1) }}<br>
        Set weight(g): <input v-model="size" type=number>
        <button @click="log">Log!</button>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: "AddItem",
  data: function () {
    return {
      food: {
        name: '',
        calories: '',
        fats: '',
        protein: '',
        carbs: '',
        serving_size: 0
      },
      size: 0
    }
  },
  computed: {
    calories: function() {
      return (this.food.calories * this.size / this.food.serving_size) || 0;
    },
    fats: function() {
      return (this.food.fats * this.size / this.food.serving_size) || 0;
    },
    protein: function() {
      return (this.food.protein * this.size / this.food.serving_size) || 0;
    },
    carbs: function() {
      return (this.food.carbs * this.size / this.food.serving_size) || 0;
    },
  },
  methods: {
    handleResponse: function (response) {
      let responseFood = response.data.foods[0]
      this.food.name = responseFood.food_name.charAt(0).toUpperCase() + responseFood.food_name.slice(1);
      this.food.calories = responseFood.nf_calories;
      this.food.fats = responseFood.nf_total_fat;
      this.food.protein = responseFood.nf_protein;
      this.food.carbs = responseFood.nf_total_carbohydrate;
      this.food.serving_size = responseFood.serving_weight_grams * responseFood.serving_qty;
      this.size = responseFood.serving_weight_grams * responseFood.serving_qty;
    },
    log: function () {
      let toBeLogged = {
        name: this.food.name,
        calories: this.food.calories,
        fats: this.food.fats,
        protein: this.food.protein,
        carbs: this.food.carbs,
        email: 'set this',
        time: (new Date()).getTime()
      }
      console.log(toBeLogged);
      //zapisac w bazie
      //przekierowac do ekranu sukces/do startu
    }
  },
   mounted: function() {
    let config = {
        headers: {
        'x-app-id': '49c2f1af',
        'x-app-key': '804fe04628f9383b7eae87e409acf2fc'
        }
    }
    let body = {
      'query': this.$route.query.name
    }
    axios
        .post('https://trackapi.nutritionix.com/v2/natural/nutrients', body, config)
        .then(response => this.handleResponse(response));
   }
}
</script>

<style scoped lang="scss">
</style>