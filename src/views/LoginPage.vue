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
    <button v-on:click="logInWithGoogle">Log in with Google</button>
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
      console.log('dupa');

      this.$router.push("/day");
      
    },
    logInWithGoogle(){
      let provider = new firebase.firebase.auth.GoogleAuthProvider();
      firebase.auth.signInWithPopup(provider).then(() => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // console.log(result.credential.accessToken);
        
        // The signed-in user info.
        // console.log(result.user);
        
        // ...

        this.goToHome()
      }).catch(function() {
        // Handle Errors here.
        // console.log(error.code);  
        // console.log(error.message);
  
        // The email of the user's account used.
        // console.log(error.email);
  
        // The firebase.auth.AuthCredential type that was used.
        // console.log(error.credential);
          // ...
      });
    }
  }
};
</script>


 