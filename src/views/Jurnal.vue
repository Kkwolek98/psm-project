<template>
  <div class="jurnal">
    <div class="box col-md-3">
      <h3>Last Week</h3>
      <div
        class="day-item clickable"
        v-for="day in lastWeek"
        :key="day.index"
        @click="routeTo(day.date.getTime())"
      >
        <div class="day-name">{{day.date.getDate()}}.{{day.date.getMonth()}}</div>
        <div class="day-calories">{{day.calories}} kcal</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as profile from "../firebase/profile";
import * as food from "../firebase/food";
export default {
  name: "Jurnal",
  methods: {
    getUser() {
      let email = profile.getLoggedUser().email;
      if (email) {
        this.userEmail = email;
        console.log(email);
      } else {
        console.warn("No user logged in");
        //go to home page
      }
    },
    getLastWeek() {
      let today = new Date();
      //   let day = today.getDate();
      let week = new Array(7);
      for (let i = 0; i < 7; i++) {
        week[i] = {
          date: new Date(today.getTime() - 24 * 60 * 60 * 1000 * i),
          calories: 0
        };
        food
          .getCaloriesForDay(week[i].date)
          .then(cal => (week[i].calories = cal));
      }
      this.lastWeek = week;
      console.log(week);
    },
    routeTo(day) {
      this.$router.push({ path: "/day", query: { day } });
    }
  },
  data: function() {
    return {
      userEmail: "",
      lastWeek: []
    };
  },
  created: function() {
    this.getUser();
    this.getLastWeek();
  }
};
</script>

<style lang="scss">
.day-item {
  display: grid;
  grid-template-columns: 60% 40%;
  border-radius: 12px;
  background-color: #333333;
  width: 90%;
  height: 48px;
  line-height: 3;
  margin: 0 auto;
  margin-bottom: 12px;
  padding: 0 8px;
  cursor: pointer;
  .day-name {
    text-align: left;
    font-weight: 600;
  }
}
</style>