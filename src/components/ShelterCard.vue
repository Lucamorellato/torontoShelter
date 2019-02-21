<template>
  <v-card elevation="10">
    <v-card-title >
      <p>{{ shelter.FACILITY_NAME }} ({{ shelter.PROGRAM_NAME }})</p>
    </v-card-title>
    <div class="card-text">
      <p>Beds Available: {{ shelter.CAPACITY - shelter.OCCUPANCY }}</p>
      <p>Total Beds: {{ shelter.CAPACITY }}</p>
      <p>Shelter Capacity: {{ shelterPercentage }}</p>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: "ShelterCard",
    props: [ 'shelter' ],
    computed: {
      shelterPercentage(){
        let result = ((this.shelter.OCCUPANCY / this.shelter.CAPACITY)*100).toFixed(1)
        return `${result}%`
      }
    },
    
  }
</script>

<style scoped lang="scss">

  .v-card {


  }
  .v-card {
    p {
      margin: 0 auto;
      font-size: 1.5rem;
      text-align: center;
      background: #393939;
      padding: 10px;
      border-radius: 4px;
    }
  }

  .card-text {
      display: flex;
      flex-direction: column;
      P {
        padding: 5px 0;
        // margin: 5px 0;
        background: transparent;
      }
      p:last-child {
        padding-bottom: 15px;
      }
    }
</style>
