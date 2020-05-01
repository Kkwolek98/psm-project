<template>
  <div class="profile">
    <div class="box col-md-3" style="margin: 0 auto">
      <h3 style="text-align: left; margin-bottom: 18px">Your information:</h3>
      <div class="information">
        <div class="profile-item">
          Height:
          <input type="number" class="small-input" v-model="height" /> cm
        </div>
        <div class="profile-item">
          Weight:
          <input type="number" class="small-input" v-model="weight" /> kg
        </div>
        <div class="profile-item">
          Kcal goal:
          <input type="number" class="small-input" v-model="kcalGoal" /> kcal
        </div>
      </div>
      <button v-on:click="updateProfileData">Save</button>
    </div>
  </div>
</template>

<script>
import * as profile from "../firebase/profile";
export default {
  name: "Profile",
  data: function() {
    return {
      uid: "",
      height: 0,
      weight: 0,
      kcalGoal: 0
    };
  },
  methods: {
    getUser() {
      let uid;
      if (profile.getLoggedUser()) {
        uid = profile.getLoggedUser().uid;
      }
      if (uid) {
        this.uid = uid;
        this.getProfileData();
      } else {
        console.warn("No user logged in");
        this.$router.push({ path: "login" });
      }
    },
    getProfileData() {
      console.log(profile);
      if (this.uid.length) {
        profile.getProfile().then(data => {
          if (data) {
            this.weight = data.weight;
            this.height = data.height;
            this.kcalGoal = data.kcalGoal;
          }
        });
      }
    },
    updateProfileData() {
      let data = {
        weight: parseInt(this.weight),
        height: parseInt(this.height),
        kcalGoal: parseInt(this.kcalGoal)
      };
      profile.updateProfile(this.uid, data);
    }
  },
  watch: {
    uid: function() {
      this.getProfileData();
    }
  },
  mounted: function() {
    this.getUser();
  }
};
</script>

<style lang="scss">
.small-input {
  width: 94px !important;
  display: inline;
}
</style>