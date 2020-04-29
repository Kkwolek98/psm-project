<template>
  <div class="profile">
    <div class="box col-md-3" style="margin: 0 auto">
      <h3 style="text-align: left; margin-bottom: 18px">Your information:</h3>
      <div class="information">
        <div class="profile-item">
          Height:
          <input type="number" class="small-input" /> cm
        </div>
        <div class="profile-item">
          Weight:
          <input type="number" class="small-input" /> kg
        </div>
        <div class="profile-item">
          Kcal goal:
          <input type="number" class="small-input" /> kcal
        </div>
      </div>
      <button>Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>

<style lang="scss">
.small-input {
  width: 94px !important;
  display: inline;
}
</style>