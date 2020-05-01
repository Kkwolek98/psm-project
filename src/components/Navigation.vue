<template>
  <div id="nav">
    <nav class="navbar fixed-bottom navbar-dark bg-dark">
      <router-link
        v-for="route in routes"
        :key="route[1]"
        :to="route[0]"
        class="navbar-brand"
        v-html="route[1]"
      />
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: ["user", "img"],
  computed: {
    routes: function() {
      return this.user ? this.loggedInRoutes : this.loggedOutRoutes;
    },
    loggedInRoutes: function() {
      return [
        ["/", '<img alt="FoodLog" src=' + this.img + ' class="logo">'],
        ["/about", "About"],
        ["/profile", "Profile"],
        ["/findItem", "Add Meal"],
        ["/journal", "Journal"],
        ["/logout", "Log Out"]
      ];
    },
    loggedOutRoutes: function() {
      return [
        ["/login", '<img alt="FoodLog" src=' + this.img + ' class="logo">'],
        ["/about", "About"],
        ["/signup", "Register"]
      ];
    }
  }
};
</script>

<style lang="scss">
.logo {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
@media (max-width: 600px) {
  .navbar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>