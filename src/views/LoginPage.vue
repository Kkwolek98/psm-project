<template>
  <div class="app-container">
    <form class="login-form box col-md-3" @submit.prevent="loginUser">
      <label for="login-email">Username or Email</label>
      <input type="email" id="login-email" v-model="email" required />
      <label for="login-password">Password</label>
      <input type="password" id="login-password" v-model="password" required />
      <button>Log in</button>
      <p class="font-12">or</p>
      <router-link to="/signup" class="font-12--important clickable">create an account</router-link>
    </form>
    <p>{{errors}}</p>
  </div>
</template>

<script>
import firebase from "../firebase/init";
import Vue from "vue";
export default {
  name: "LoginPage",
  data: function() {
    return {
      errors: "",
      email: "",
      password: ""
    };
  },
  methods: {
    loginUser() {
      firebase.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user.user.email);
          this.goToHome();
        })
        .catch(error => (this.errors = error));

      if (this.password && this.email) {
        this.errors = "";
      }
    },
    goToHome() {
      Vue.prototype.$email = this.email;
      this.$router.push("/day");
    }
  }
};
</script>

<style lang="scss">
</style>