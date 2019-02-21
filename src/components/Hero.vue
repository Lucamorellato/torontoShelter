<template>
  <div class="hero">
    <v-container>
      <h2>Toronto Shelter Current Numbers</h2>
      <p>There are {{ availableBeds }} beds available</p>
      <p>Shelters are at {{ capacityPercentage }} capacity</p>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "Hero",
    props: {
      totalBeds: {
        type: Number,
        required: true
      },
      occupiedBeds: {
        type: Number,
        required: true
      },
      capacityPercentage: 
      {
        type: String,
        required: true
      },
      shelterTypes:
      {
        type: Object,
        required: true
      }
    },
    computed: {
      availableBeds() {
        return this.totalBeds - this.occupiedBeds
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  // color: white;
  // padding-top: 100px;
}
h3 {
  // margin: 40px 0 0 0;
  // color: blue;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
  &:hover {
    color: lighten (#42b983, 20%);
    text-decoration: underline;
  }
}
</style>
