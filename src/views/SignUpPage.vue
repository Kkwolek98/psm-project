<template>
  <div class="container">
    <form class="signup-form box box-center">
      <label for="signup-email">Email</label>
      <input type="email" id="signup-email" v-model="email" required />
      <label for="signup-password">Password</label>
      <input type="password" id="signup-password" v-model="password" required />
      <label for="signup-repassword">Confirm Password</label>
      <input
        type="password"
        id="signup-repassword"
        v-model="repassword"
        v-on:input="passwordCompare"
        required
      />
      <button v-on:click="registerUser">Sign up</button>
    </form>

    <div id="error">{{error}}</div>
  </div>
</template>

<script>
import firebase from "../firebase/init";

export default {
  name: "SignUpPage",
  data: function() {
    return {
      email: "",
      password: "",
      repassword: "",
      error: ""
    };
  },
  methods: {
    registerUser(e) {
      if (this.passwordCompare()) {
        console.log(firebase.auth);
        console.log(this.email, this.password);
        e.preventDefault();
        firebase.auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(user => {
            console.log(user.user);
          })
          .catch(error => {
            this.error = error;
          });
      }
    },
    passwordCompare() {
      if (this.password != this.repassword) {
        this.error = "Passwords don't match";
        return false;
      }
      this.error = "";
      return true;
    }
  }
};
</script>