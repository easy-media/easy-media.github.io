<template>
  <div id="app">
    <NavList />
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import NavList from './views/nav.vue'
import Footer from './components/footer'
export default {
  components: {
    NavList,
    Footer,
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
