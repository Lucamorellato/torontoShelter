<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Toronto Shelter Watch"/>
    <NewComponent
      :totalBeds="this.totalBeds"
      :occupiedBeds="this.occupiedBeds"
    />
    <button> Show Shelter Info </button>
      <div v-for="shelter in currentShelterInfo"> {{ shelter.FACILITY_NAME }} {{ shelter.PROGRAM_NAME }} Total Beds: {{ shelter.CAPACITY }} Beds Available: {{ shelter.CAPACITY - shelter.OCCUPANCY }}
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
    }
  },
  updated(){
    this.wowFunction()
  }

}

</script>
