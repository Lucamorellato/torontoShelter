<template>
  <v-card elevation="10">
    <v-card-title primary-title>
      <p>{{ shelter.FACILITY_NAME }} ({{ shelter.PROGRAM_NAME }})</p>
    </v-card-title>
    <div class="card-text">
      <p>Beds Available: {{ shelter.CAPACITY - shelter.OCCUPANCY }}</p>
      <p>Total Beds: {{ shelter.CAPACITY }}</p>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: "ShelterCard",
    props: [ 'shelter' ],
  }
</script>

<style scoped lang="scss">

  .v-card {

    p {
      margin: 0;
    }
    h4 {
      margin: 0;
    }
  }

  .card-text {
      display: flex;
      flex-direction: column;
      // align-items: flex-start;
      // margin: 0 0 10px 10px;
      margin: 5px;
      background: #165788;
    }
</style>
