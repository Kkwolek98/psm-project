<template>
  <div id="app">
    <HeaderTitle />
    <div v-bind:class="{ 'router-wrap': !onAboutPage}">
      <router-view class="router" />
    </div>
    <Navigation :user="currentUser" :img="img" />
  </div>
</template>

<style lang="scss">
$primary-font-color: #959595;
$secondary-font-color: rgba(110, 226, 245, 0.9);
$button-font-color: #f3f3f3;
$small-font-color: #5e5e5e;

$button-gradient-first: #6ee2f5;
$button-gradient-second: #6454f0;

.router {
  padding-top: 122px;
  z-index: 4;
}
.router-wrap {
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $primary-font-color;

    &.router-link-exact-active {
      color: $secondary-font-color;
    }
  }
}

body {
  background: #1c1c1c !important;
  color: $primary-font-color !important;
}

.custom-button--large,
button {
  transition: all 0.4s ease-in-out;
  height: 42px !important;
  background-image: linear-gradient(
    105deg,
    $button-gradient-first 9%,
    $button-gradient-second 91%
  );
  width: 130px !important;
  border: 0;
  border-radius: 20px !important;
  color: $button-font-color;
  font-size: 24px !important;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
      105deg,
      darken($button-gradient-first, 3) 9%,
      darken($button-gradient-second, 6) 91%
    );
    transition: all 0.8s ease-in-out;
    -webkit-transition: all 0.8s ease-in-out;
  }
}

.box {
  border-radius: 12px;
  background-color: rgb(46, 46, 46);
  padding: 28px;
  z-index: 10;
  margin: 0 auto;
  margin-bottom: 32px !important;
}
@media (min-width: 400px) {
  .box {
    min-width: 320px;
  }
}
@media (max-width: 600px) {
  .router-wrap {
    padding-bottom: 62px;
  }
}

.box-center {
  width: 15%;
  margin: 0 auto;
}
@media (max-width: 1350px) {
  .box-center {
    width: 28%;
  }
}
@media (max-width: 750px) {
  .box-center {
    width: 55%;
  }
  #nav #img {
    display: none;
  }
}

input {
  width: 100%;
  display: block;
  border: 0;
  height: 38px !important;
  border-radius: 8px !important;
  background-color: rgba(119, 119, 119, 0.2);
  margin-bottom: 32px !important;
  color: $primary-font-color;
}

.clickable {
  cursor: pointer;
}

.font-12 {
  color: $small-font-color;
  font-size: 12px;
}
.font-12--important {
  color: $button-font-color;
  font-size: 12px;
}

h3 {
  text-align: left !important;
}
</style>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";
import Navigation from "@/components/Navigation.vue";
import firebase from "./firebase/init";

export default {
  data: function() {
    return {
      logged: false,
      currentUser: false,
      onAboutPage: false,
      img: ""
    };
  },
  created() {
    if (firebase.auth.currentUser) {
      this.logged = true;
      this.currentUser = firebase.auth.currentUser.email;
    }

    firebase.storage
      .ref("logo.png")
      .getDownloadURL()
      .then(url => {
        this.img = url;
      })
      .catch(err => console.error(err));
  },
  components: {
    HeaderTitle,
    Navigation
  },
  watch: {
    $route(to) {
      console.log(to);
      if (to.name == "About") {
        this.onAboutPage = true;
      } else {
        this.onAboutPage = false;
      }
    }
  }
};
</script>