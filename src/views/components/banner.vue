<template>
  <div class="banner">
    <div class="banner-in">
      <div class="banner-l">
        <h1>专业级直播从未如此简单</h1>
        <p class="tip">支持所有流媒体平台，免费下载使用</p>
        <p class="sub-text">多机位实时切换 | 海量在线字幕使用 | 实时连麦互动</p>
        <div class="btn-l Left">
          <button class="btn-1">正式版</button>
          <span class="btn-sub">版本: V20.11.5.0</span>
        </div>
        <div class="btn-r Left">
          <button class="btn-2">测试版</button>
          <span class="btn-sub">版本: V20.11.5.0</span>
        </div>
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
        margin-top: 30px;
      }
      .sub-text {
        color: #16be1b;
        margin-bottom: 50px;
        font-weight: 500;
        margin-top: 20px;
      }
    }
  }
  .btn-1 {
    display: inline-block;
    cursor: pointer;
    width: 196px;
    height: 60px;
    background: linear-gradient(172deg, #00d658, #2dac37);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    margin: 40px 25px 10px 0;
    border: none;
    float: left;
  }
  .btn-2 {
    border: none;
    display: inline-block;
    cursor: pointer;
    width: 196px;
    height: 60px;
    background: #fff;
    border: 2px solid #2eac38;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #32ab37;
    font-size: 20px;
    margin: 40px 25px 10px 0;
    float: left;
  }
  .btn-sub {
    font-size: 12px;
    color: #000000;
    display: block;
  }
}
</style>