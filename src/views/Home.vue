<template>
  <div class="home">
    <Banner></Banner>
    <template v-for="(item ,i) in list">
      <div class="home-list" :class="{'list-bg' :item.type}" :key="item.tit">
        <div class="home-tit">{{item.tit}}</div>
        <div class="home-samll-tit">{{item.sub}}</div>
        <img :src="item.img" />
      </div>
    </template>
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
  data() {
    return {
      list: [
        {
          tit: '轻松视频连线，实时连麦互动毫秒间',
          sub: '支持桌面端，APP多设备实时互动，满足跨空间直播需求',
          img: require('../assets/sy1.png'),
          type: true,
        },
        {
          tit: '支持多网聚合模式，一次直播分发多个平台如此简单',
          sub: '支持有线、WIFI、4G（全网通）接入，提供可靠高速网络保障',
          img: require('../assets/sy2.png'),
          type: false,
        },
        {
          tit: '实时多路切换，自定义转场动效，专业导播轻松实现',
          sub: '支持快捷键设置，MDI设置，专业音频控制台满足你的操作习惯',
          img: require('../assets/sy3.png'),
          type: true,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.home-list {
  overflow: hidden;
  img {
    display: block;
    margin: 0 auto;
  }
}
.list-bg {
  background: #f5f6f7;
}
.home-samll-tit {
  font-size: 18px;
  font-weight: 400;
  color: #6a7b8c;
  line-height: 25px;
  margin-bottom: 30px;
}
.home-tit {
  margin-top: 40px;
  font-size: 42px;
  font-weight: 600;
  color: #222;
  line-height: 59px;
  text-align: center;
  margin-bottom: 20px;
}
</style>

