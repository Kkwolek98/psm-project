<template>
  <div class="find">
    <div class="box box-center">
      <SearchBar />
      <div>...or scan barcode.</div>
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