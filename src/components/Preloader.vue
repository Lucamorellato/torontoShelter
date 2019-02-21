<template> 
<div class="preloader" v-show="!hideLoader" >
<v-content >
   <v-layout row justify-center>
      <v-dialog v-model="loading" fullscreen content-class="loading-dialog">
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular indeterminate :size="70" :width="7" color="accent"></v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>
</v-content>
</div>

</template>

<script>
  export default {
   name: "Preloader",
   data() {
      return{
      dialog: false,
      loading: true,
      }
   },
   props: {
      hideLoader: {
         type: Boolean,
         required: true
      }
   },
   updated(){
      this.loading = false
   }
  }
</script>
<style scoped lang="scss">

.preloader {
   // pointer-events: none;
   cursor: pointer;
}
.v-dialog {
   cursor: pointer;
}
.loading-dialog {
  background-color: #303030;

}

</style>