<template>
  <div class="home">
    <HelloWorld msg="Toronto Shelter Watch"/>
    <NewComponent
      :totalBeds="this.totalBeds"
      :occupiedBeds="this.occupiedBeds"
    />
    <button @click.prevent="onShow"> Show Shelter Info </button>
      <div 
      v-for="shelter in currentShelterInfo">
      <transition name="fade">
        <div v-show="showShelters === true"> 
          <p> {{ shelter.FACILITY_NAME }} {{ shelter.PROGRAM_NAME }} Total Beds: {{ shelter.CAPACITY }} Beds Available: {{ shelter.CAPACITY - shelter.OCCUPANCY }}</p>
        </div>
      </transition>
      </div>    
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import NewComponent from '@/components/NewComponent.vue'
import axios from 'axios'

export default {
  data(){
    return{
      showShelters: false
    }
  },
  props: { 
    currentShelterInfo: 
    {
      type: Array,
      required: true
    },
    totalBeds: 
    {
      type: Number,
      required: true
    },
    occupiedBeds: 
    {
      type: Number,
      required: true
    },
    shelterTypes:
    {
      type: Object,
      required: true
    }
  },
  name: 'home',
  components: {
    HelloWorld,
    NewComponent
  },
  methods: {
    wowFunction(){
      console.log(this.currentShelterInfo[3].OCCUPANCY)
    },
    onShow(){
      console.log("clicked")
      if(this.showShelters === false) {
        this.showShelters = true;
      } else {
        this.showShelters = false;
      }
    }
  },
  updated(){
    this.wowFunction()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s ease;

}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>