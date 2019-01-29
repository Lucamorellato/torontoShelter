<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <NewComponent />
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import NewComponent from '@/components/NewComponent.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    NewComponent
  }
}
</script>
