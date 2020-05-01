<template>
  <div class="title" v-if="title">
    <div class="title-small">{{title}}</div>
    <div class="title-big">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "HeaderTitle",
  data: () => {
    return { title: "" };
  },
  methods: {
    getTitle() {
      this.title = this.$route.meta.display;
    }
  },
  watch: {
    $route() {
      this.getTitle();
    }
  },
  mounted: function() {
    this.getTitle();
  }
};
</script>

<style lang="scss" scoped>
.title {
  position: fixed;
  top: 68px;
  left: 50%;
  transform: translateX(-50%);
  text-overflow: ellipsis;
  height: 0;
  z-index: -1;
}
.title-small {
  font-weight: bold;
  font-size: 32px;
  color: #959595;
  z-index: 0;
  float: left;
  margin-left: 12px;
}
.title-big {
  color: rgba(94, 94, 94, 0.1);
  font-size: 102px;
  position: relative;
  top: -112px;
  pointer-events: none;
  user-select: none;
}
@media (max-width: 550px) {
  .title-small {
    font-size: 24px;
  }
  .title-big {
    font-size: 86px;
    top: -100px;
  }
}
@media (max-width: 450px) {
  .title-small {
    font-size: 24px;
  }
  .title-big {
    font-size: 56px;
    top: -70px;
  }
}
</style>