<template>
  <div class="shelter">
    <p>{{ shelter.FACILITY_NAME }} ({{ shelter.PROGRAM_NAME }})</p>
    <h4>Beds Available: {{ shelter.CAPACITY - shelter.OCCUPANCY }}</h4>
    <p>Total Beds: {{ shelter.CAPACITY }}</p>
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
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    margin: 0vh;
    p {
      // margin: 0;
    }
    h4 {
      margin: 0;
    }
  }
</style>
