<template>
  <div id="app">
    <el-container class="main">
      <el-header class="main-header" style="height: auto">
        <el-row type="flex" justify="center" align="middle" class="layui-container">
          <el-col :lg="8" :sm="{ span: 24 }">
            <div class="title">
              <router-link to="/">
                BUYER <span>REVIEWS</span>
                <div class="txt">
                  Celebrating 17 Years Of Excellence
                </div>
              </router-link>
            </div>
          </el-col>
          <el-col :lg="16" :sm="{ span: 24 }">
            <el-menu class="el-menu-top" mode="horizontal" text-color="#fff" active-text-color="#fff">
              <el-menu-item index="1">
                <img src="@/assets/index/search.png" style="width: 50px;height: 50px;">
                <span>Examine<br />Scientific<br />Research</span>
              </el-menu-item>
              <el-menu-item index="2">
                <img src="@/assets/index/information.png" style="width: 50px;height: 50px;">
                Analyze<br />Verified<br />Reviews
              </el-menu-item>
              <el-menu-item index="3">
                <img src="@/assets/index/light.png" style="width: 50px;height: 50px;">
                Discover<br />Quality<br />Products
              </el-menu-item>
              <el-menu-item index="4">
                <img src="@/assets/index/champion.png" style="width: 50px;height: 50px;">
                Recommend<br />Top Rated<br />Brands
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <router-view></router-view>
      <el-footer class="main-footer">
        <el-row type="flex" align="center" class="layui-container">
          <el-row type="flex" align="start" class="footer-menu">
            <el-col :sm="11" :xs="24">
              <div class="title">
                <router-link to="/">
                  BUYER <span>REVIEWS</span>
                  <div class="txt">
                    Celebrating 17 Years Of Excellence
                  </div>
                </router-link>
              </div>
            </el-col>
            <el-col :sm="13" :xs="24">
              <el-row>
                <el-col :lg="18" :md="17" :sm="15" :xs="{ span: 11, offset: 1 }">
                  <ul class="footer_right">
                    <li>
                      <router-link to="/review">Our Review Process</router-link>
                    </li>
                    <li>
                      <router-link to="/contact">Contact Us</router-link>
                    </li>
                    <li>
                      <router-link to="disclosure">Disclosure Statement</router-link>
                    </li>
                  </ul>
                </el-col>
                <el-col :lg="6" :md="7" :sm="9" :xs="{ span: 11, offset: 1 }">
                  <ul class="footer_right1">
                    <li>
                      <router-link to="privacy">Privacy Policy</router-link>
                    </li>
                    <li>
                      <router-link to="terms">Terms Of Servive</router-link>
                    </li>
                  </ul>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <div class="line"></div>
            </el-col>
          </el-row>

          <el-row type="flex" align="center" class="layui-container">
            <el-col :lg="24" :sm="{ span: 24 }">
              <div class="footer_copy">
                Copyright © 2022 BuyerReviews.org. All Rights Reserved.
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" align="center" class="layui-container">
            <el-col :lg="24" :sm="{ span: 24 }">
              <div class="advertise">
                *The information contained within this site is not intended as a substitute for professional medical
                advice. If you have, expect to have, or suspect you may have any medical condition, you are urged to
                consult with a health care provider. These statements have not been evaluated by the Food and Drug
                Administration. These products are not intended to diagnose, treat, cure or prevent any diseases or
                medical conditions. Results are based on the Buyer Reviews Ranking System and do not necessarily reflect
                typical results from the use of these products. Please visit product websites for more information.
              </div>
            </el-col>
          </el-row>
        </el-row>
      </el-footer>
    </el-container>
  </div>

</template>

<script>
export default {
  data() {
    return {
      activeIndex: '{{item}}',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() { },
};
import 'element-ui/lib/theme-chalk/display.css';
import '../src/api/request'
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body,
html {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.el-menu.el-menu--horizontal {
  border: none !important;
}

.el-header,
.el-footer {
  .title {
    width: 300px;
    font-size: 36px;
    font-family: Inter, Inter-Bold;
    font-weight: 700;
    text-align: left;
    color: #fff;

    a {
      color: #fff;
    }

    span {
      color: #216CFF;
      line-height: 60px;
    }
  }
}

.main {

  >.el-header {
    background-color: #222222;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;

    .el-row {
      padding: 10px 0 10px 0;
      flex-wrap: wrap;
    }

    .el-col {
      border-radius: 4px;
    }

    .bg-purple-dark {
      background: #99a9bf;
    }

    .bg-purple {
      background: #d3dce6;
    }

    .bg-purple-light {
      background: #e5e9f2;
    }

  }

  .el-main {
    color: #333;
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
  }
}


.txt {
  width: 300px;
  height: 18px;
  font-size: 15px;
  font-family: Inter, Inter-Bold;
  font-weight: 700;
  text-align: LEFT;
  color: #ffffff;
  line-height: 0px;
}

.main-header {
  .el-menu-top {
    background-color: #222222;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .el-menu-item {
      flex: 1;
      display: flex;
      text-align: left;
      padding: 0;
      font-size: 15px;
      font-family: Inter, Inter-Bold;
      font-weight: 700;
      text-align: LEFT;
      color: #ffffff;
      line-height: 17px;
      border: none !important;
      cursor: default;
      background: none !important;
    }

    .is-active {
      background-color: #222222 !important;
    }

    .el-menu-item:hover {
      background-color: #222 !important;

    }


    .el-menu-item img {
      margin-right: 20px;
    }


  }
}

.main-footer {
  display: flex;
  height: auto !important;
  background-color: #222222;
  text-align: center;
  padding: 0 !important;

  .el-row {
    flex-wrap: wrap;
  }


  >.layui-container {
    padding: 75px 0 0 0 !important;
  }

  .footer-menu {
    width: 100%;
    overflow: hidden;

    .title {
      margin-bottom: 30px;
    }

    .footer_right,
    .footer_right1 {
      width: 160px;
      font-size: 15px;
      font-family: Inter, Inter-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;

      li {
        padding-top: 30px;

        a {
          color: #ffffff;
        }
      }

      li:first-of-type {
        padding-top: 0;

      }
    }

    .line {
      margin-top: 60px;
      border: 1px solid #216CFF;
      border-radius: 1px;
    }
  }



  .footer_copy {
    margin-top: 40px;
    font-size: 15px;
    font-family: Inter, Inter-Bold;
    font-weight: 400;
    color: #216cff;
    line-height: 20px;
  }

  .advertise {
    font-size: 14px;
    font-family: Inter, Inter-Regular;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
    line-height: 21px;
    margin-top: 50px;
    margin-bottom: 70px;
  }
}

// rate all page
.el-rate {
  display: flex;
  width: 135px;

  .el-rate__item {
    width: 27px;

    .el-rate__icon {
      text-align: center;
      flex: 1;
      font-size: 30px;
      margin-right: 0;
    }
  }
}
</style>
