<template>
<div class="home" id="app1" >
  <v-content >
    <Hero 
        :totalBeds="this.totalBeds"
        :occupiedBeds="this.occupiedBeds"
        :capacityPercentage="this.capacityPercentage"
        :shelterTypes="this.shelterTypes"
    />
    <v-btn color="accent" large @click="onShow" > Show Shelter Info </v-btn>
    <transition name="fade">
      <v-container grid-list-md v-show="showShelters">
        <v-layout v-bind="binding" row>
          <v-flex xs6 v-for="(shelter, index) in currentShelterInfo" :key="index">
            <transition name="fade">
              <ShelterCard :shelter="shelter" v-show="showShelters" />
            </transition>
          </v-flex>
          <v-card>
            <v-fab-transition>
              <v-btn
                @click="scrollToTopOfScreen"
                v-show="!hiddenButton"
                color="accent"
                dark
                fixed
                right
                fab
                bottom
              >
                <v-icon>fa-arrow-up</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card>
        </v-layout>
      </v-container>  
    </transition>
  </v-content>
</div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import ShelterCard from '@/components/ShelterCard.vue'


export default {
  data(){
    return{
      showShelters: false,
      hiddenButton: true,
      initialHeight: 0,
      app: {},
      // scrollPercent: 0
    }
  },
  computed: {
    binding() {
      const binding = {}
      if (this.$vuetify.breakpoint.mdAndUp) binding.wrap = true
      if (this.$vuetify.breakpoint.smAndDown) binding.column = true
      return binding
    },
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
    },
    capacityPercentage: 
    {
      type: String,
      required: true
    }
  },
  name: 'home',
  components: {
    Hero,
    ShelterCard
  },
  methods: {
    scrollToTopOfScreen(){
      window.scrollTo(1,1)
    },
    onShow(){
      this.showShelters = !this.showShelters;
      this.scrollToTopOfScreen()
      this.showShelters === true ? document.addEventListener('scroll', this.onScroll) : document.removeEventListener('scroll', this.onScroll)

    },
    onScroll(){
      //dividing the distance to top of document to its total height to get a number
      let scrollPercent = (document.documentElement.scrollTop / this.initialHeight)
      //then showing the button when partially scrolled
      scrollPercent < .09 ? this.hiddenButton = true : this.hiddenButton = false
    }
  },
  mounted() {
    //identifying the app element in state
    this.app = document.getElementById('app1')
  },
  updated(){
    //setting the height of initial height of the app on update(when a user hits the show shelters button)
    // this.data = true
    this.initialHeight = this.app.offsetHeight
    // console.log(this.$vuetify.breakpoint)
  },
  destroyed(){
    //removing event listener for performance
    document.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.home {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  min-height: 100vh;
}

.v-card {
  margin:10px 10px;
}
</style>
