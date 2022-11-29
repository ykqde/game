<template>
  <div class="home">
    <el-container>
      <el-header style="height:auto;">
      </el-header>
      <el-main class="layui-container">
        <!-- menu -->
        <el-row>
          <el-col :xs="{ span: 22, offset: 1 }" class="hidden-lg-and-up">
            <el-menu class="el-menu-sm">
              <el-submenu index="1">
                <template slot="title">
                  <h3>FAQ</h3>
                </template>
                <el-menu class="menu-sm" :router="true" :default-active="activeIndex">
                  <el-menu-item v-for="(item, index) in menu" :index="item.path" :key="index">
                    {{ item.name }}
                  </el-menu-item>
                </el-menu>
              </el-submenu>
            </el-menu>
          </el-col>
          <el-col :span="24" class="hidden-md-and-down">
            <el-menu mode="horizontal" :router="true" :default-active="activeIndex">
              <el-menu-item v-for="(item, index) in menu" :index="item.path" :key="index">
                {{ item.name }}
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
        <!-- menu end -->
        <!-- content -->
        <el-row>
          <el-col :lg="{ span: 24 }" :xs="{ span: 22, offset: 1 }" class="content">
            <div class="title">FAQ’s - MALE ENHANCEMENT SUPPLEMENTS</div>

            <div class="faq-box">
              <el-collapse v-model="activeNames">
                <el-collapse-item v-for="(item, index) in faq_list" class="faq-title" :name="index" :key="index">
                  <template slot="title">
                    <p>{{ item.a }}</p>
                  </template>
                  <div class="faq-content" v-html="item.q"></div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-col>
        </el-row>
        <!-- content end -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path,
      activeNames: [0],
      menu: [
        { name: "Men's Health Guide", path: "/MaleEnhancement" },
        { name: "Male Enhancement Reviews", path: "/MaleEnhancement/mer" },
        { name: "FAQ", path: "/MaleEnhancement/faq" },
        { name: "Our Rating Process", path: "/MaleEnhancement/orp" },
        { name: "Contact Us", path: "/MaleEnhancement/cu" },
      ],
      faq_list: [
        { a: "1. What is a male enhancement supplement?", q: "Men of all ages can suffer with sexual performance issues. Studies have shown that around 1 in 3 men of all ages have had an issue with gaining an erection or maintaining it. Around 80% of men over the age of 40 have done some research into male enhancements in one way or another.*<br /><br />Male enhancement supplements use natural ingredients, such as herbs, vitamins, minerals and amino acids in an attempt to boost libido and improve the flow of blood to the penis. Most products provide a temporary boost in this area while other products make claims that they can permanently increase the size of the male member – a claim that is without foundation. The only way to achieve this is through surgery.*" },
        { a: "2. Why are there products out there that Do Not Work?", q: "Men of all ages can suffer with sexual performance issues. Studies have shown that around 1 in 3 men of all ages have had an issue with gaining an erection or maintaining it. Around 80% of men over the age of 40 have done some research into male enhancements in one way or another.*<br /><br />Male enhancement supplements use natural ingredients, such as herbs, vitamins, minerals and amino acids in an attempt to boost libido and improve the flow of blood to the penis. Most products provide a temporary boost in this area while other products make claims that they can permanently increase the size of the male member – a claim that is without foundation. The only way to achieve this is through surgery.*" },
        { a: "3. Which is the best male enhancement product for me?", q: "Men of all ages can suffer with sexual performance issues. Studies have shown that around 1 in 3 men of all ages have had an issue with gaining an erection or maintaining it. Around 80% of men over the age of 40 have done some research into male enhancements in one way or another.*<br /><br />Male enhancement supplements use natural ingredients, such as herbs, vitamins, minerals and amino acids in an attempt to boost libido and improve the flow of blood to the penis. Most products provide a temporary boost in this area while other products make claims that they can permanently increase the size of the male member – a claim that is without foundation. The only way to achieve this is through surgery.*" },
        { a: "4. What is the best way to go about buying from an online seller?", q: "Men of all ages can suffer with sexual performance issues. Studies have shown that around 1 in 3 men of all ages have had an issue with gaining an erection or maintaining it. Around 80% of men over the age of 40 have done some research into male enhancements in one way or another.*<br /><br />Male enhancement supplements use natural ingredients, such as herbs, vitamins, minerals and amino acids in an attempt to boost libido and improve the flow of blood to the penis. Most products provide a temporary boost in this area while other products make claims that they can permanently increase the size of the male member – a claim that is without foundation. The only way to achieve this is through surgery.*" },
        { a: "5. How Do I spot a Scam?", q: "Men of all ages can suffer with sexual performance issues. Studies have shown that around 1 in 3 men of all ages have had an issue with gaining an erection or maintaining it. Around 80% of men over the age of 40 have done some research into male enhancements in one way or another.*<br /><br />Male enhancement supplements use natural ingredients, such as herbs, vitamins, minerals and amino acids in an attempt to boost libido and improve the flow of blood to the penis. Most products provide a temporary boost in this area while other products make claims that they can permanently increase the size of the male member – a claim that is without foundation. The only way to achieve this is through surgery.*" },
        { a: "6. Is there any Science behind a male enhancement product?", q: "Men of all ages can suffer with sexual performance issues. Studies have shown that around 1 in 3 men of all ages have had an issue with gaining an erection or maintaining it. Around 80% of men over the age of 40 have done some research into male enhancements in one way or another.*<br /><br />Male enhancement supplements use natural ingredients, such as herbs, vitamins, minerals and amino acids in an attempt to boost libido and improve the flow of blood to the penis. Most products provide a temporary boost in this area while other products make claims that they can permanently increase the size of the male member – a claim that is without foundation. The only way to achieve this is through surgery.*" },
        { a: "7. Are there any safety issues?", q: "Men of all ages can suffer with sexual performance issues. Studies have shown that around 1 in 3 men of all ages have had an issue with gaining an erection or maintaining it. Around 80% of men over the age of 40 have done some research into male enhancements in one way or another.*<br /><br />Male enhancement supplements use natural ingredients, such as herbs, vitamins, minerals and amino acids in an attempt to boost libido and improve the flow of blood to the penis. Most products provide a temporary boost in this area while other products make claims that they can permanently increase the size of the male member – a claim that is without foundation. The only way to achieve this is through surgery.*" },
        { a: "8. Can I take a Male enhancement product with Alcohol?", q: "Men of all ages can suffer with sexual performance issues. Studies have shown that around 1 in 3 men of all ages have had an issue with gaining an erection or maintaining it. Around 80% of men over the age of 40 have done some research into male enhancements in one way or another.*<br /><br />Male enhancement supplements use natural ingredients, such as herbs, vitamins, minerals and amino acids in an attempt to boost libido and improve the flow of blood to the penis. Most products provide a temporary boost in this area while other products make claims that they can permanently increase the size of the male member – a claim that is without foundation. The only way to achieve this is through surgery.*" },
        { a: "9. Can you recommend any male enhancement supplements?", q: "Men of all ages can suffer with sexual performance issues. Studies have shown that around 1 in 3 men of all ages have had an issue with gaining an erection or maintaining it. Around 80% of men over the age of 40 have done some research into male enhancements in one way or another.*<br /><br />Male enhancement supplements use natural ingredients, such as herbs, vitamins, minerals and amino acids in an attempt to boost libido and improve the flow of blood to the penis. Most products provide a temporary boost in this area while other products make claims that they can permanently increase the size of the male member – a claim that is without foundation. The only way to achieve this is through surgery.*" },
      ]
    };
  },
  created() { },
};
</script>

<style lang="scss" scoped>
.el-col-xs-top-0 {
  margin-top: 0;
}

.el-header {
  padding: 0;
}

.el-main {
  padding: 0 !important;
  margin-bottom: 150px;
  overflow: unset;

  .el-menu-sm {
    h3 {
      text-align: center;
      font-size: 24px;
      font-weight: 700;
      color: #409EFF;
    }

    .el-submenu {
      width: 100%;
      background-color: #f8f8f8;
      border: 1px solid #e7e7e7;
    }

    .el-submenu::after {
      content: none !important;
    }

    .menu-sm {
      display: flex;
      flex-direction: column;
      margin-top: 0;
      margin-bottom: 0;

      .el-menu-item {
        width: 100% !important;
        height: 50px !important;
        line-height: 50px !important;
        text-align: center !important;
      }

      .el-menu-item::after {
        content: none !important;
      }
    }

  }

  .el-menu::after,
  .el-menu::before {
    content: none;
  }

  .el-menu {
    display: flex;
    justify-content: space-between;
    justify-self: flex-start;
    justify-items: flex-start;
    margin: 50px auto 30px;
    font-family: Inter, Inter-Bold;
    font-weight: 400;
    color: #222222;
    border: none;

    .el-menu-item {
      height: 55px;
      padding: 0;
      float: none;
      text-align: justify;
      line-height: 24px;
      font-size: 24px;
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


  .content {
    margin-bottom: 30px;

    >.title {
      font-size: 36px;
      margin-bottom: 45px;
      font-family: Inter, Inter-Bold;
      font-weight: 700;
      text-align: LEFT;
      color: #222222;
      line-height: 36px;
    }

    .faq-box {
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.10);



      .faq-title::v-deep {
        .el-collapse-item__header {
          height: auto;
          line-height: normal;
          padding: 20px 45px;
          font-size: 18px;
          font-family: Inter, Inter-Regular;
          font-weight: 400;
          text-align: LEFT;
          color: #222831;
          line-height: 18px;
        }

        .el-collapse-item__arrow::before {
          content: '';
          width: 21px;
          height: 28px;
          display: inline-block;
          background: url(../../assets/me/arrow.png) no-repeat center;
        }

        .is-active {
          font-family: Inter, Inter-Bold;
          font-weight: 700;
          text-align: LEFT;
          color: #216cff;
        }
      }

      .faq-content {
        padding: 0 45px;
        font-size: 14px;
        font-family: Inter, Inter-Regular;
        font-weight: 400;
        text-align: justify;
        color: #666666;
        line-height: 21px;
      }
    }

    >p {
      font-size: 14px;
      font-family: Inter, Inter-Bold;
      text-align: justify;
      color: #666666;
      line-height: 21px;
      margin-top: 23px;
    }

  }
}
</style>