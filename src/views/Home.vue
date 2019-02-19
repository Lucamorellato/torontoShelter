<template>
<div class="home">
  <v-content>
    <Hero
        :totalBeds="this.totalBeds"
        :occupiedBeds="this.occupiedBeds"
        :capacityPercentage="this.capacityPercentage"
    />
    <v-btn color="accent" large @click="onShow" > Show Shelter Info </v-btn>
    <v-container grid-list-md>
      <v-layout v-bind="binding" row wrap>
        <v-flex xs6 v-for="(shelter, index) in currentShelterInfo" :key="index">
          <transition name="fade">
            <ShelterCard :shelter="shelter" v-show="showShelters" />
          </transition>
        </v-flex>
        <v-card>
          <v-card-text>
            <v-fab-transition>
              <v-btn
                v-show="!hidden"
                color="accent"
                dark
                fixed
                bottom
                right
                fab
              >
                <v-icon>fa-arrow-up</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-container>  
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
    }
  },
  computed: {
    binding() {
      const binding = {}

      if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

      return binding
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
    scrollFunction(){
      window.scrollTo(1,1)
    },
    onShow(){
      this.showShelters = !this.showShelters;
      this.scrollFunction()
    }
  },
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
