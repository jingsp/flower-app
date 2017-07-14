<template>
	<div class="home-container">
	  <search-bar></search-bar>
	  <div class="content">
          <transition name="fade" mode="out-in">              
              <router-view></router-view>
          </transition>
      </div>
      <tab-bar></tab-bar>
	</div>
</template>

<script>
import SearchBar from '../../components/searchBar/searchBar'
import TabBar from '../../components/tabBar/tabBar'
export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
  	TabBar,
  	SearchBar
  }
}
</script>

<style>
</style>
