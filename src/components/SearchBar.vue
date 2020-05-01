<template>
  <div class="search-bar">
    <input type="text" v-model="search" @input="delay" />
    <!-- <ul class="autocomplete-results">
      <li class="autocomplete-result" v-for="item in autocompleteItems" :key="item.food_name">
        <a @click="routeTo(item.food_name)">{{item.food_name}}</a>
      </li>
    </ul>-->
    <div
      class="result-item clickable"
      v-for="item in autocompleteItems"
      :key="item.food_name"
      @click="routeTo(item.food_name)"
    >{{item.food_name}}</div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "SearchBar",
  data: function() {
    return {
      search: "",
      timer: 0,
      prevSearch: "",
      autocompleteItems: []
    };
  },
  methods: {
    onChange: function() {
      let config = {
        headers: {
          "x-app-id": "49c2f1af",
          "x-app-key": "804fe04628f9383b7eae87e409acf2fc"
        }
      };
      axios
        .get(
          "https://trackapi.nutritionix.com/v2/search/instant?branded=false&query=" +
            this.search,
          config
        )
        .then(response => this.useResponse(response));
    },
    delay: function() {
      clearTimeout(this.timer);
      this.timer = setTimeout(
        function() {
          if (this.prevSearch != this.search) {
            this.prevSearch = this.search;
            this.onChange();
          }
        }.bind(this),
        500
      );
    },
    useResponse: function(response) {
      this.autocompleteItems = response.data.common;
    },
    routeTo: function(food) {
      this.$router.push({ path: "addItem", query: { name: food } });
    }
  }
};
</script>

<style scoped lang="scss">
.result-item {
  text-align: left;
  border-radius: 12px;
  background-color: #333333;
  width: 100%;
  height: 32px;
  line-height: 2;
  margin-bottom: 12px;
  padding: 0 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
@media (max-width: 1180px) {
  .result-item {
    height: auto;
  }
}
// @media (max-width: 990px) {
//   .result-item {
//     height: 32px;
//   }
// }
// @media (max-width: 480px) {
//   .result-item {
//     height: 64px;
//   }
// }
</style>
