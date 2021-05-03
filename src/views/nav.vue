<template>
  <div>
    <div class="con">
      <div class="con-l">logo</div>
      <div class="con-r">
        <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="#2dac37"
          router
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="3" class="submenu">
            <template slot="title">产品中心</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-submenu>
          <el-menu-item index="/laboratory">实验室中心</el-menu-item>
          <el-menu-item index="/help">帮助中心</el-menu-item>
          <el-menu-item index="/aboutme">关于我们</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      console.log('router', this.$route)
    },
  },
}
</script>
<style  lang="scss">
.con {
  .el-menu-demo {
    width: 645px;
    margin-left: 73px;
  }

  .el-menu-item:hover {
    outline: 0 !important;
    color: #2dac37 !important;
    font-weight: bold;
  }
  .el-submenu__title:hover,
  .el-submenu__title:focus {
    font-weight: bold !important;
    color: #2dac37 !important;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    font-weight: bold !important;
    color: #2dac37 !important;
  }
  .el-menu--horizontal .el-menu-item:hover {
    outline: 0 !important;
    color: #2dac37 !important;
    font-weight: bold;
  }
  .el-menu--horizontal .el-menu-item:hover {
    color: red !important;
  }
  .is-active {
    font-weight: bold;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none !important;
  }
  #nav {
    padding: 0;
  }
  width: 1350px;
  margin: 0 auto;
  overflow: hidden;
  .con-l {
    float: left;
    display: inline-block;
    width: 30%;
  }
  .con-r {
    width: 60%;
    float: right;
    display: inline-block;
    padding-right: 0;
  }
}
</style>

