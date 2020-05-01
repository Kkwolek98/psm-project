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
  name: 'Navigation',
  props: ['user', 'img'],
  computed: {
    routes: function() {
      return this.user ? this.loggedInRoutes : this.loggedOutRoutes;
    },
    loggedInRoutes: function() {
      return [
        ['/', '<img alt="FoodLog" src=' + this.img + ' width="50px" height="50px">'],
        ['/about', 'About'],
        ['/findItem', 'Log Item'],
        ['/journal', this.user],
        ['/logout', 'Log Out']
      ]
    },
    loggedOutRoutes: function() {
      return [
        ['/login', '<img id="img" :src="img" >'],
        ['/login', 'Log In'],
        ['/signup', 'Register']
      ]
    }
  }
}
</script>
