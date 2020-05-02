<template>
  <div class="find">
    <div class="box col-md-3">
      <SearchBar />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "FindItem",
  components: {
    SearchBar
  }
};
</script>

<style scoped lang="scss">
</style>