<template>
<div class="home">
  <v-content>
    <Hero
        :totalBeds="this.totalBeds"
        :occupiedBeds="this.occupiedBeds"
        :capacityPercentage="this.capacityPercentage"
    />
    <v-btn color="primary" large @click.prevent="onShow"> Show Shelter Info </v-btn>
    <v-container>
      <section class="shelter-gallery">
        <div class="shelter" v-for="(shelter, index) in currentShelterInfo" :key="index">
          <transition name="fade">
            <ShelterCard :shelter="shelter" v-show="showShelters" />
          </transition>
        </div>
      </section>
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
      showShelters: false
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
   onShow(){
      console.log("clicked")
      this.showShelters = !this.showShelters;
    }
  },
  updated(){
    window.scrollTo(0,0)
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

.shelter {
  width: 45%;
  margin: 10px 10px;
  border-radius: 10px;
}
.shelter-gallery {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
