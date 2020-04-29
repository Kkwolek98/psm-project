<template>
  <!-- <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->


  <div>
    <form>
      <label for="name">name</label>
      <input type="text" v-model="name" placeholder="ex. egg">
      <button v-on:click="saveData()">submit</button>
    </form>

    <ul>
      <li v-for="(el, index) in entries" v-bind:key="index">{{el}}</li>
    </ul>
    

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import {addData, realTimeListener} from '../firebase/add';

export default {
  name: 'Home',
  props: ['email'],
  // components: {
  //   HelloWorld
  // }
  data: function(){
    return {
      name: '',
      entries: []
    }
  },
  methods: {
    saveData(){
      addData(1,1,1,1,this.name,1,'kasia@xd.pl')
    }
  },
  mounted() {
    realTimeListener((doc) => {
      this.entries.push(doc);
    })
  }
}
</script>
