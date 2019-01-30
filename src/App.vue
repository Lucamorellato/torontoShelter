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
      info: [],
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
    this.fetchItems();
    console.log("app created")
  },
  mounted(){
    console.log("App mounted")
  },
  Mounted(){
    console.log("App MOUNTED")
  },
  methods: {
    fetchItems() {
    axios.get('https://secure.toronto.ca/c3api_data/v2/DataAccess.svc/ssha/extractssha?$format=application/json;odata.metadata=none&unwrap=true&$top=100000')
      .then(response => {
        response.data.map(res => {
          // console.log(res)
          this.info.push(res)

  
          // const newArray = this.info
          // const backwardsArray = newArray.reverse()


        })
        this.massagedInfo = {
            name: this.info[0].FACILITY_NAME,
            totalBeds: this.info[0].CAPACITY,
            openBeds: this.info[0].OCCUPANCY - this.info[0].CAPACITY,
          }
      })
      // .catch(error => console.log(error))
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
