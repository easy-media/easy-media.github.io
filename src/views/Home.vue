<template>
  <div class="home">
    <Banner></Banner>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/views/components/banner'

export default {
  name: 'Home',
  components: {
    Banner,
  },
}
</script>

