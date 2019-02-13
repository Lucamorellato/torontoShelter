<template>
    <v-container>
      <div class="about">
        <h2>About</h2>
        <div class="about-content">
          <p>Housing and Shelter demand is a major issue in Toronto. This is a simple way to present all of the data we have on the privately and publicly shelters within the City of Toronto and their respective availability.</p>
          <p>All of the data here is provided by the <a href="https://www.toronto.ca/city-government/data-research-maps/open-data/" target="_blank">Open Data Project</a> by the City of Toronto. Numbers are updated every two days. If you need access to a Shelter please go to: <a href="https://www.toronto.ca/community-people/housing-shelter/" target="_blank"> Housing & Shelter</a></p>
        </div>
      </div>
    </v-container>
</template>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  &-content {
    width: 80%;
    text-align: left;
  }
  
  a {
  color: #42b983;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color .2s, border-bottom .2s;
  &:hover {
    color: lighten(#42b983, 25%);
    border-color: lighten(#42b983, 25%);
  }
}
}
</style>

