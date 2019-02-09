<template>
  <div id="app">
    <div id="nav">
      <h1>Toronto Shelter Watch</h1>
      <router-link  to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view 
    :currentShelterInfo="this.currentShelterInfo"
    :totalBeds="this.totalBeds"
    :occupiedBeds="this.occupiedBeds"
    :shelterTypes="this.shelterTypes"
    ></router-view>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data(){
    return{
      currentShelterInfo: [],
      historicalShelterInfo: [],
    }
  },
  created: function()
  {
    this.fetchData()
  }, 
  computed: {
    totalBeds() {
      return this.currentShelterInfo.reduce((acc, currentValue) => {
        return acc + currentValue.CAPACITY
      }, 0);
    },
    occupiedBeds() {
      return this.currentShelterInfo.reduce((acc, currentValue) => {
        return acc + currentValue.OCCUPANCY
      }, 0);
    },
    shelterTypes() {
      //creating a tally of the different types of shelters and passing to data
      return this.currentShelterInfo.reduce((tally, type) => {
        tally[type.SECTOR] = (tally[type.SECTOR] || 0) + 1 ;

        return tally;
      } , {});
    }
  },
  methods: {
    fetchData: async function(){
      let endpoint = "https://secure.toronto.ca/c3api_data/v2/DataAccess.svc/ssha/extractssha?$format=application/json;odata.metadata=none&unwrap=true&$top=100000&$select=OCCUPANCY_DATE,ORGANIZATION_NAME,SHELTER_NAME,SHELTER_ADDRESS,SHELTER_CITY,SHELTER_PROVINCE,SHELTER_POSTAL_CODE,FACILITY_NAME,PROGRAM_NAME,SECTOR,OCCUPANCY,CAPACITY&$orderby=OCCUPANCY_DATE,ORGANIZATION_NAME,SHELTER_NAME,FACILITY_NAME,PROGRAM_NAME";
      const result = await axios.get(endpoint);
      const { data } = result;
    
      let totalShelters = result.data.length
      let numberOfOpenShelters = 107
    
      this.historicalShelterInfo = [...data];
      //reverse because I want the LAST 107 entries
      this.currentShelterInfo = [...data].reverse().slice(0, numberOfOpenShelters)
    },
  }
}
</script>



<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  scroll-behavior: smooth;
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
