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
      // Array: [
      //     {
      //       FACILITY_NAME: "wow"
      //     },
      //     {
      //       FACILITY_NAME: "wow"
      //     },
      //     {
      //       FACILITY_NAME: "wow"
      //     },
      //     {
      //       FACILITY_NAME: "poo"
      //     },{
      //       FACILITY_NAME: "loo"
      //     },
      //     {
      //       FACILITY_NAME: "wow"
      //     },
      //     {
      //       FACILITY_NAME: "poo"
      //     },
      //     {
      //       FACILITY_NAME: "apple"
      //     },
      //   ],
      info: [],
      fakeInfo: [],
      count: 0,
      massagedInfo: {
        name: "",
        totalBeds: 0,
        openBeds: 0
      }
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
    this.fakeInfo.reverse()
    console.log("after reverse")
  },
  Mounted(){
    console.log("App MOUNTED")
  },
  methods: {
    fetchItems() {
    axios.get('https://secure.toronto.ca/c3api_data/v2/DataAccess.svc/ssha/extractssha?$format=application/json;odata.metadata=none&unwrap=true&$top=100000&$select=OCCUPANCY_DATE,ORGANIZATION_NAME,SHELTER_NAME,SHELTER_ADDRESS,SHELTER_CITY,SHELTER_PROVINCE,SHELTER_POSTAL_CODE,FACILITY_NAME,PROGRAM_NAME,SECTOR,OCCUPANCY,CAPACITY&$orderby=OCCUPANCY_DATE,ORGANIZATION_NAME,SHELTER_NAME,FACILITY_NAME,PROGRAM_NAME')
      .then(response => {
        response.data.map(res => {
          let results = res.splice(0, 105)
          this.info.push(results)
        })



        // this.massagedInfo = {
        //   name: this.info[2898].FACILITY_NAME,
        //   totalBeds: this.info[2898].CAPACITY,
        //   openBeds: this.info[2898].OCCUPANCY - this.info[2898].CAPACITY,
        // }
        console.log("API DONE")

      })
      .catch(error => console.log(error))
      // .then(results => {
      //   this.fakeInfo.splice(0, 104)
      //   console.log("2nd then done")
      // })
    
    },
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
