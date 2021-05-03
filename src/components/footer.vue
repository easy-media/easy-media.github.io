<template>
  <div class="footer">
    <div class="footer-in">
      <ul>
        <li class="li-tit">联系我们</li>
        <li>移动电话：13501029062</li>
      </ul>
      <div class="bq">版权所有权：</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style  lang="scss">
.footer {
  width: 100%;
  height: 200px;
  background: #060c1f;
  color: #ffffff;
  text-align: left;
  overflow: hidden;
  .footer-in {
    width: 1080px;
    margin: 0 auto;
  }
  ul {
    padding-top: 30px;
    li {
      line-height: 50px;
      font-size: 12px;
      color: #a2a3a6 !important;
    }
  }
  .li-tit {
    font-size: 16px;
    line-height: 20px;
    color: #ffffff !important;
  }
  .bq {
    font-size: 12px;
    color: #a2a3a6 !important;
    border-top: 1px solid #353735;
    text-align: center;
    line-height: 30px;
  }
}
</style>