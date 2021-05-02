<template>
  <div class="banner">
    <div class="banner-in">
      <div class="banner-l">
        <h1>专业级直播从未如此简单</h1>
        <p class="tip">支持所有流媒体平台，免费下载使用</p>
        <p class="sub-text">多机位实时切换 | 海量在线字幕使用 | 实时连麦互动</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  height: 600px;
  width: 100%;
  background: url('../../assets/banner.png') no-repeat center center;
  background-size: cover;
  .banner-in {
    width: 1080px;
    margin: 0 auto;
    .banner-l {
      text-align: left;
      overflow: hidden;
      h1 {
        padding-top: 91px;
        font-size: 48px;
        font-weight: 600;
        color: #262727;
        line-height: 48px;
      }
      .tip {
        color: #73797f;
        font-size: 18px;
      }
      .sub-text {
        color: #16be1b;
        margin-bottom: 50px;
        font-weight: 500;
      }
    }
  }
}
</style>