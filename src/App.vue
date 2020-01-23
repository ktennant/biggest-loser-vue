<template>
  <div id="app">
    <b-icon icon="fire" size="is-large" type="is-primary"></b-icon>
    <router-view name="competitionStats" />
    <router-view />
    <router-view name="weekly" />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
