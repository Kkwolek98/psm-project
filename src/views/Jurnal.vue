<template>
  <div class="jurnal">
    <div class="box col-md-3">
      <h3>Jurnal</h3>
      <div class="day" v-for="day in dayList" :key="day.day">
        <div class="day-name">{{day.day}}</div>
        <div class>Total: {{day.kcal}} kcal</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jurnal",
  data: function() {
    return {
      dayList: [
        {
          day: "12.07",
          kcal: 1200
        },
        {
          day: "13.07",
          kcal: 1290
        },
        {
          day: "14.07",
          kcal: 1211
        },
        {
          day: "15.07",
          kcal: 2200
        },
        {
          day: "16.07",
          kcal: 1230
        },
        {
          day: "17.07",
          kcal: 1200
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.day {
  display: grid;
  grid-template-columns: 70% 30%;
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