<template>
<v-app id="inspire" dark>
    <v-toolbar  fixed app prominent
    >
      <h1>Toronto Shelter Watch</h1>
      <v-spacer></v-spacer>
      
      <v-btn active-class="accent" to="/" style="cursor: pointer">Home</v-btn> |
      <v-btn active-class="accent" to="/about" style="cursor: pointer">About</v-btn>
    </v-toolbar>
    <main>
      <Preloader v-show="!hideLoader" :hideLoader="hideLoader"/>
      <transition name="mainFade">
        <router-view v-show="hideLoader"
        :currentShelterInfo="this.currentShelterInfo"
        :totalBeds="this.totalBeds"
        :occupiedBeds="this.occupiedBeds"
        :shelterTypes="this.shelterTypes"
        :capacityPercentage="this.capacityPercentage"
        ></router-view>
      </transition>
    </main>
    <v-footer fixed height="auto">
      <p>&copy;2019 — <a href="https://lucamorellato.com">Luca Morellato</a></p>
    </v-footer>

</v-app>
</template>

<script>
import axios from "axios"
import Preloader from '@/components/Preloader.vue'

export default {
  data(){
    return{
      currentShelterInfo: [],
      interval: {},
      value: 0,
      hideLoader: false,
      // historicalShelterInfo: [],
    }
  },
  components: {
    Preloader,
  },
  created: function()
  {
    this.fetchData()
  }, 
  computed: {
    lastUpdated(){
      return this.currentShelterInfo[0].OCCUPANCY_DATE
    },
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
    capacityPercentage(){
      let result = ((this.occupiedBeds / this.totalBeds)*100).toFixed(1)
      return `${result}%`
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
    
      //use this if you ever want to use historial data
      // this.historicalShelterInfo = [...data];

      //reverse because I want the LAST 107 entries
      this.currentShelterInfo = [...data].reverse().slice(0, numberOfOpenShelters)
      this.hideLoader = true
    },
  }
}
</script>


<style lang="scss">
/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */ html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}
#inspire {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
}
.clearfix:after {visibility: hidden; display: block; font-size: 0; content: ''; clear: both; height: 0; }

* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }

$accent: #165788;

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
  --accent-color: #165788;
}
body {
  font-size: 1.6rem;
  color: var(--accent-color)
}
a {
  color:lighten( #165788, 25%);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color .2s, border-bottom .2s;
  &:hover {
    color: lighten(#165788, 50%);
    border-color: lighten(#165788, 50%);
  }
}

.v-toolbar {
  h1 {
    font-size: 2.5rem;
    text-align: center;
    @media only screen and (max-width: 600px) { 
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 460px) { 
      display: none;
    }
  }
}
.v-progress-circular {
  margin: 100px auto;
}

.v-footer {
  display: flex;
  justify-content: center;
  p {
    font-size: 1.1rem;
    margin: 0;
  }
}
.mainFade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.mainFade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>