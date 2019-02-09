<template>
  <div class="shelter">
    <h3>Beds Available: {{ shelter.CAPACITY - shelter.OCCUPANCY }}</h3>
    <p>Total Beds: {{ shelter.CAPACITY }}</p>
    <p>{{ shelter.FACILITY_NAME }} ({{ shelter.PROGRAM_NAME }})</p>
  </div>
</template>

<script>
  export default {
    name: "ShelterCard",
    props: [ 'shelter' ],
  }
</script>

<style scoped lang="scss">
  .shelter {
    margin: 2vh 0;
  }
</style>
