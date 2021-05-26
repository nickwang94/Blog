<template>
  <div id="app">
      <Home></Home>
  </div>
</template>

<script>
import Home from "@/components/Home/Home";
export default {
  name: 'App',
  components: {
      Home
  }
}
</script>

<style>
#app {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
