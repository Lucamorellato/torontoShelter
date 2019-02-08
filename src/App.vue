<template>
  <div id="app">
    <div id="nav">
      <h1>Toronto Shelter Watch</h1>
      <router-link to="/">Home</router-link>|
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
import axios from "axios";

export default {
  data() {
    return {
      currentShelterInfo: [],
      historicalShelterInfo: []
    };
  },
  created: function() {
    console.log("app created");
    this.fetchData();
    console.log("after fetchItems()");
  },
  mounted() {
    console.log("App mounted");
  },
  Mounted() {
    console.log("App MOUNTED");
  },
  methods: {
    fetchData: async function() {
      const result = await axios.get(
        "https://secure.toronto.ca/c3api_data/v2/DataAccess.svc/ssha/extractssha?$format=application/json;odata.metadata=none&unwrap=true&$top=100000&$select=OCCUPANCY_DATE,ORGANIZATION_NAME,SHELTER_NAME,SHELTER_ADDRESS,SHELTER_CITY,SHELTER_PROVINCE,SHELTER_POSTAL_CODE,FACILITY_NAME,PROGRAM_NAME,SECTOR,OCCUPANCY,CAPACITY&$orderby=OCCUPANCY_DATE,ORGANIZATION_NAME,SHELTER_NAME,FACILITY_NAME,PROGRAM_NAME"
      );
      const { data } = result;

      // count index to find out how many entries are in the API call
      // creating variable for number of currently open shelters
      let totalShelters = data.length;
      let numberOfOpenShelters = 107;
      
      this.currentShelterInfo = [...data];
      this.currentShelterInfo.splice(0, totalShelters - numberOfOpenShelters);

    }
  },
  computed: {
    totalBeds() {
      return this.currentShelterInfo.reduce((acc, currentValue) => {
        return acc + currentValue.CAPACITY;
      }, 0);
    },
    occupiedBeds() {
      return this.currentShelterInfo.reduce((acc, currentValue) => {
        return acc + currentValue.OCCUPANCY;
      }, 0);
    },
    shelterTypes() {
      return this.currentShelterInfo.reduce((tally, type) => {
        tally[type.SECTOR] = (tally[type.SECTOR] || 0) + 1;
        return tally;
      }, {});
    }
  }
};
</script>



<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
