<template>
  <v-card elevation="10">
    <v-card-title primary-title>
      <p>{{ shelter.FACILITY_NAME }} ({{ shelter.PROGRAM_NAME }})</p>
    </v-card-title>
    <v-card-text>
      <p>Beds Available: {{ shelter.CAPACITY - shelter.OCCUPANCY }}</p>
      <p>Total Beds: {{ shelter.CAPACITY }}</p>
    </v-card-text>
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
    //  height: 150px;
    p {
      margin: 0;
    }
    h4 {
      margin: 0;
    }
  }
</style>
