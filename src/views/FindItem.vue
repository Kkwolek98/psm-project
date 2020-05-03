<template>
  <div class="find">
    <div class="box col-md-3">
      <SearchBar />
    </div>
    <div id="quote">{{quote}}</div>
  </div>
</template>

<script>
const axios = require("axios");
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "FindItem",
  data: function() {
    return {
      quote: ""
    };
  },
  components: {
    SearchBar
  },
  mounted: function() {
    axios
      .get("https://type.fit/api/quotes")
      .then(response => {
        console.log(response);
        return response.data;
      })
      .then(data => {
        this.quote = data[Math.floor(Math.random() * 1000)].text;
        let qdiv = document.getElementById("quote");
        qdiv.style.bottom = Math.floor(Math.random() * 30) + 15 + "%";
        qdiv.style.left = Math.floor(Math.random() * 40) + "%";
        if (Math.floor(Math.random() * 50 >= 48)) {
          qdiv.classList.add("animation");
        }
      });
  }
};
</script>

<style lang="scss">
#quote {
  font-size: 22px;
  color: gainsboro;
  position: fixed;
  bottom: 20%;
  opacity: 0.1;
}
@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.animation {
  -webkit-animation: spin 2s linear infinite;
  -moz-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
</style>