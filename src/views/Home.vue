<template>
  <div class="home">
    <Hero
        :totalBeds="this.totalBeds"
        :occupiedBeds="this.occupiedBeds"
    />
    <button @click.prevent="onShow"> Show Shelter Info </button>
    <div class="poopdaddy">
      <div class="poop" v-for="(shelter, index) in currentShelterInfo" :key="index">
        <transition name="fade">
          <ShelterCard :shelter="shelter" v-show="showShelters" />
        </transition>
      </div>
    </div>  
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
    console.log("updated()")
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
.poop {
  background: #fee;
  width: 45%;
  margin: 10px 10px;
  border-radius: 10px;
}
.poopdaddy {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>