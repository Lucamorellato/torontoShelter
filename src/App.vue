<template>
  <div id="app">
    <div id="nav">
      <router-link  to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view :currentShelterInfo="this.currentShelterInfo"></router-view>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return{
      currentShelterInfo: [],
      historicalShelterInfo: [],
      totalBeds: 0,
      occupiedBeds: 0
    }
  },
  created: function()
  {
    console.log("app created")
     this.fetchItems()
     console.log("after fetchItems()")
  },
  mounted(){
    console.log("App mounted")
  },
  Mounted(){
    console.log("App MOUNTED")
  },
  methods: {
    fetchItems: async function(){
      const result = await axios.get('https://secure.toronto.ca/c3api_data/v2/DataAccess.svc/ssha/extractssha?$format=application/json;odata.metadata=none&unwrap=true&$top=100000&$select=OCCUPANCY_DATE,ORGANIZATION_NAME,SHELTER_NAME,SHELTER_ADDRESS,SHELTER_CITY,SHELTER_PROVINCE,SHELTER_POSTAL_CODE,FACILITY_NAME,PROGRAM_NAME,SECTOR,OCCUPANCY,CAPACITY&$orderby=OCCUPANCY_DATE,ORGANIZATION_NAME,SHELTER_NAME,FACILITY_NAME,PROGRAM_NAME');
      const data = result.data
    
      // count index to find out how many entries are in the API call
      // creating variable for number of currently open shelters 
      let index = 0
      let numberOfOpenShelters = 107
      //map through res and push results into data and start counting index
      result.data.map(res => {
        this.currentShelterInfo.push(res)
        this.historicalShelterInfo.push(res)
        index++
      })
      //turn currentShelterInfo into a smaller array using the two variables
      this.currentShelterInfo.splice(0, (index - numberOfOpenShelters))  


      // starting a function that will add up all beds and all occupied beds and assign to Data
      let totalBeds = this.currentShelterInfo.reduce((acc, currentValue) => {
        return acc + currentValue.CAPACITY
      }, 0);
      let occupiedBeds = this.currentShelterInfo.reduce((acc, currentValue) => {
        return acc + currentValue.OCCUPANCY
      }, 0);

      this.totalBeds = totalBeds
      this.occupiedBeds = occupiedBeds

      let count = this.currentShelterInfo.reduce((tally, type) => {
        tally[type.SECTOR] = (tally[type.SECTOR] || 0) + 1 ;
        return tally;
      } , {})
      console.log(count)
    }
  }
}
</script>



<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
