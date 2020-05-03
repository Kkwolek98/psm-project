<template>
  <div class="profile">
    <div class="box col-md-3" style="margin: 0 auto">
      <h3 style="text-align: left; margin-bottom: 18px">Your information:</h3>
      <div class="information">
        <div class="profile-item" style="margin-bottom: 12px">Your friend code: {{this.uid}}</div>
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
    <div class="box col-md-3" style="margin: 0 auto">
      <h3>Your friends today</h3>
      <div v-if="!friends.length">You have no friends, add your first friend</div>
      <div class="friend clickable" v-for="friend in friendsWithKcal" :key="friend.name">
        <div class="friend-name">{{friend.name}}</div>
        <div class="friend-kcal">{{friend.calories}} kcal</div>
      </div>
      <label style="margin-top: 18px" for="friend">Friend's code</label>
      <input type="e-mail" id="friend" v-model="friendCode" />
      <label style="margin-top: 8px" for="friendName">Friend's name</label>
      <input type="e-mail" id="friendName" v-model="friendName" />
      <button @click="addFriend">Add friend</button>
    </div>
  </div>
</template>

<script>
import * as profile from "../firebase/profile";
import * as food from "../firebase/food";
export default {
  name: "Profile",
  data: function() {
    return {
      uid: "",
      height: 0,
      weight: 0,
      kcalGoal: 0,
      friends: [],
      friendsWithKcal: [],
      friendName: "",
      friendCode: "",
      name: ""
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
            this.friends = data.friends;
            this.name = data.name;
            this.getFriendsWithKcal();
            console.log(data);
          }
        });
      }
    },
    updateProfileData() {
      let data = {
        weight: parseInt(this.weight),
        height: parseInt(this.height),
        kcalGoal: parseInt(this.kcalGoal),
        friends: this.friends,
        name: this.name
      };
      console.log(data);
      profile.updateProfile(this.uid, data);
      this.$router.push({ path: "/day" });
    },
    addFriend() {
      this.friends.push({
        code: this.friendCode,
        name: this.friendName
      });
      let data = {
        weight: parseInt(this.weight),
        height: parseInt(this.height),
        kcalGoal: parseInt(this.kcalGoal),
        friends: this.friends,
        name: this.name
      };
      profile.updateProfile(this.uid, data);
    },
    getFriendsWithKcal() {
      let arr = [];
      for (let i = 0; i < this.friends.length; i++) {
        let obj = { name: "", calories: 0 };
        obj.name = this.friends[i].name;
        food
          .getCaloriesForDayForUser(new Date(), this.friends[i].code)
          .then(kcal => {
            obj.calories = kcal.toFixed(0);
            arr.push(obj);
          });
        this.friendsWithKcal = arr;
      }
    }
  },
  watch: {
    uid: function() {
      this.getProfileData();
    },
    friends: function() {
      this.getFriendsWithKcal();
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
.friend {
  display: grid;
  grid-template-columns: 70% 30%;
  border-radius: 12px;
  background-color: #333333;
  width: 100%;
  height: 32px;
  line-height: 2;
  margin-bottom: 12px;
  padding: 0 8px;
  .friend-name {
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
@media (max-width: 1100px) {
  .friend {
    height: 64px;
  }
}
@media (max-width: 990px) {
  .friend {
    height: 32px;
  }
  @media (max-width: 330px) {
    .friend {
      height: 64px;
      grid-template-columns: 65% 35%;
    }
  }
}
</style>