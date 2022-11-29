<template>
  <div>
    <el-row class="el-menu-center">
      <el-col :lg="24" :sm="{ span: 24 }" class="hidden-md-and-down">
        <el-menu class="main_menu" :default-active="activeIndex" :router="true" mode="horizontal">
          <el-menu-item v-for="(item, index) in menu" :index="item.path" :key="index">
            {{ item.name }}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :xs="{ span: 22, offset: 1 }" class="hidden-lg-and-up">
        <el-menu class="el-menu-sm">
          <el-submenu index="1">
            <template slot="title">
              <h3>
                {{ activemenu }}
                <slot></slot>
              </h3>
            </template>
            <el-menu class="menu-sm" :router="true" :default-active="activeIndex">
              <el-menu-item v-for="(item, index) in menu" :index="item.path" :key="index">
                {{ item.name }}
              </el-menu-item>
            </el-menu>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path,
      activemenu: '',
      menu: [
        { name: "Home", path: "/" },
        { name: "Male Enhancement", path: "/MaleEnhancement" },
        { name: "Health & Wellness", path: "/health" },
        { name: "Review Process", path: "/review" },
        { name: "Contact Us", path: "/contact" },
      ],
    };
  },
  mounted() {
    let that = this;
    this.menu.forEach(function (i) {
      if (i.path == that.activeIndex) {
        that.activemenu = i.name
      }
    })
  },
}
</script>
<style lang="scss" scoped>
.el-menu-center {
  font-family: Inter, Inter-Bold;
  font-weight: 700;
  color: #222222;
  line-height: 24px;
  margin: 30px auto 40px;


  .main_menu {
    display: flex;
    justify-content: space-between;
    justify-self: flex-start;
    justify-items: flex-start;
    // margin: 50px auto 30px;
    font-family: Inter, Inter-Bold;
    font-weight: 400;
    color: #222222;
    border: none;

    .el-menu-item {
      height: 56px;
      line-height: 24px;
      font-size: 28px;
      color: #303133;
      padding: 0 20px;
      list-style: none;
      cursor: pointer;
      position: relative;
      transition: border-color .3s, background-color .3s, color .3s;
      box-sizing: border-box;
      white-space: nowrap;
      border: none;
    }

    .is-active {
      font-weight: 700;
      letter-spacing: -0.65px;
    }

    .is-active::after {
      content: '';
      width: 100%;
      height: 8px;
      margin-top: 9px;
      display: block;
      background: #216cff;
      border-radius: 4px;
    }
  }

  .el-menu-sm {
    width: calc(100% - 2px);
    height: auto;
    border: none;
    box-shadow: 0 0 0 1px #e4e4e4;
    position: relative;
    left: 1px;

    .el-menu {
      text-align: center;
      border-top: 1px solid #e4e4e4;

      .el-menu-item {
        padding: 0;
        font-size: 28px;
      }
    }

    .el-submenu::v-deep {
      .el-submenu__title {
        h3 {
          font-size: 24px;
          font-weight: 700;
          text-align: center;
          color: #409EFF;
        }
      }
    }


  }

}
</style>