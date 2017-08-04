<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
//	TabBar
  }
}
</script>

<style lang="scss">
	@import '../static/css/common';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  /*text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
  position: relative;
  max-width: 17rem;
  margin: 0 auto;
}
</style>
