<template>
    <v-container>
      <div class="about">
        <h2>About</h2>
        <div class="about-content">
          <p>Housing and Shelter demand is a major issue in Toronto. This is a simple way to present all of the data we have on the privately and publicly shelters within the City of Toronto and their respective availability.</p>
          <p>All of the data here is provided by the <a href="https://www.toronto.ca/city-government/data-research-maps/open-data/" >Open Data Project</a> by the City of Toronto. Numbers are updated every two days. If you need access to a Shelter please go to: <a href="https://www.toronto.ca/community-people/housing-shelter/" > Housing & Shelter</a></p>
        </div>
      </div>
    </v-container>
</template>

<style lang="scss">
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
  
}
</style>

