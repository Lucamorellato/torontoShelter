<template>
  <div class="hello">
    <h2>There are {{ availableBeds }} beds available in Toronto Shelters tonight.</h2>
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
      }
    },
    computed: {
      availableBeds() {
        return this.totalBeds - this.occupiedBeds
      },
      availbleBedsPercentage() {
        
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
  color: blue;
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
}
</style>
