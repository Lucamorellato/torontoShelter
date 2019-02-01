<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Toronto Shelter Watch"/>
    <NewComponent/>
      <div v-for="shelter in currentShelterInfo"> {{ shelter.FACILITY_NAME }} {{ shelter.PROGRAM_NAME }} Total Beds: {{ shelter.CAPACITY }} Beds Taken: {{ shelter.OCCUPANCY }}
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
      word: "WHAT IS THIS"
    }
  },
  props: { 
    currentShelterInfo: 
    {
      type: Array,
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
    }
  },
  updated(){
    this.wowFunction()
  }

}

</script>
