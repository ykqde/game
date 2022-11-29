<template>
  <div class="home">
    <el-container>
      <el-header style="height:auto;">
      </el-header>
      <el-main class="layui-container">
        <Menu />
        <el-row type="flex" align="center" :gutter="40" class="content">
          <el-col class="layui-container">
            <el-col :md="15" :xs="{ span: 22, offset: 1 }">
              <el-col>
                <p class="content_txt">2022’s Best Rated Products</p>
              </el-col>
              <span class="content_bg"></span>
            </el-col>
            <el-col :md="9" :xs="{ span: 22, offset: 1 }" class="right_txt">
              <p>Who We Are</p>
              <span>At Buyer Reviews, we strive to make our reviews as objective and precise as possible. The goal is to
                report the truth about what experts and users are saying as well as important developments in each
                product
                category we cover. To achieve this, we foster a unique three-step approach to reviewing the most popular
                products in the online marketplace today.</span>
              <p>Blog Updates</p>
              <span>Buyer Reviews<br />Get all of the hottest reviews right now!</span>
            </el-col>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: { Menu }
};
import Menu from '../components/menu.vue';
</script>

<style lang="scss" scoped>
.el-main {
  margin-bottom: 150px;
  .content {
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;

    .content_txt {
      margin-top: 46px;
      text-align: center;
      font-size: 40px;
      font-family: Inter, Inter-Bold;
      font-weight: 700;
      color: #ffffff;
      line-height: 40px;
    }

    .content_bg {
      width: 100%;
      height: 419px;
      margin-bottom: 0;
      z-index: -1;
      background: url('../../assets/index/main.png') no-repeat center / cover;
    }

    img {
      width: 100%;
    }

    p {
      font-size: 36px;
      font-family: Inter, Inter-Bold;
      font-weight: 700;
      text-align: LEFT;
      color: #222222;
      line-height: 36px;
      margin-bottom: 20px;
    }

    span {
      display: block;
      font-size: 14px;
      font-family: Inter, Inter-Regular;
      font-weight: 400;
      text-align: left;
      color: #666666;
      line-height: 21px;
      margin-bottom: 30px;
    }

    .el-col {
      >span:last-of-type {
        margin-bottom: 0;
      }
    }
  }
  .right_txt{
    padding-top: 40px;
  }
}

@media screen and(max-width: 992px) {
  .content {
    .el-col {
      >p:first-of-type {
        margin-top: 30px;
      }
    }
  }
}

.top {
  height: 100%;
  width: 100%;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, .12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
  background-image: url("../../assets/index/top.png");
  translate: rotate(180deg);
}
</style>