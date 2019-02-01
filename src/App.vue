<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data(){
    return{
      currentShelterInfo: [],
      historicalShelterInfo: [],
    }
  },
  created: function()
  {
    console.log("app created")
  },
  mounted(){
    console.log("App mounted")
    this.fetchItems();
    console.log("after fetchItems()")
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
      
      //map through res and push results into state and start counting index
      result.data.map(res => {
        this.currentShelterInfo.push(res)
        this.historicalShelterInfo.push(res)
        index++
      })
      this.currentShelterInfo.splice(0, (index - numberOfOpenShelters))  
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
