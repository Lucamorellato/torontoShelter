<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Toronto Shelter Watch"/>
    <NewComponent/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import NewComponent from '@/components/NewComponent.vue'
import axios from 'axios'

export default {
  data(){
    return{
      banana: 'peel',
    }
  },
  name: 'home',
  components: {
    HelloWorld,
    NewComponent
  },
  mounted(){
    console.log("Home mounted")
  }
}

</script>
