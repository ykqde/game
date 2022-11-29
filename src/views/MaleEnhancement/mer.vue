<template>
  <div class="home">
    <el-container>
      <el-header style="height:auto;">
        <div class="banner">
          <p>Male Enhancement Reviews</p>
        </div>
      </el-header>
      <el-main class="layui-container">
        <!-- menu -->
        <el-row>
          <el-col :xs="{ span: 22, offset: 1 }" class="hidden-lg-and-up">
            <el-menu class="el-menu-sm">
              <el-submenu index="1">
                <template slot="title">
                  <h3>Male Enhancement Reviews</h3>
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
          <!-- left -->
          <el-col :lg="{ span: 15 }" :xs="{ span: 22, offset: 1 }" class="content">
            <p>You don’t want to waste your money. There are so many male enhancement products to choose from and you
              need to know what will work for you. There are too many scams and ineffective products in the male
              enhancement supplement market just waiting to taking your money from you.</p>
            <p>It doesn’t have to be this way.</p>
            <p>We know that choice isn’t necessarily a good thing. Having hundreds of products to consider when looking
              for a male enhancement solution just leaves you wondering what the right one is. We have looked at all the
              products available on the market today so that you can understand what works and what doesn’t.</p>
            <p>We have considered all of the important elements that go into making a decision on what will work for
              you, including -</p>
            <ul>
              <li><span>Whether the product is safe to take and meets FDA requirements</span></li>
              <li><span>How effective the ingredients are</span></li>
              <li><span>The scientific studies associated with the ingredients</span></li>
              <li><span>What people who have taken the supplement have to say</span></li>
              <li><span>Whether it offers value for money</span></li>
            </ul>
            <p>We have conducted this painstaking approach to male enhancement supplements to give you the best advice
              of what will work for you. There is no more guesswork. We have looked in depth at all of the products
              available to you so that you have the peace of mind when choosing a product that it will do what you need,
              when you need it.*</p>
            <p>Below are the top ten proudest based on our comprehensive criteria. This is the best that the market has
              to offer. Read the reviews and make your choice.*</p>
            <p>*Results are based on the Buyer Reviews Ranking System and do not necessarily reflect typical results
              from the use of these products. Please visit product website for more information.</p>
            <div class="bold-title">Top Rated Brands By Buyer Reviews*</div>
            <el-row class="item">
              <el-col :xs="{ span: 22, offset: 1 }" :sm="{ span: 11, offset: 1 }" :lg="{ span: 24, offset: 0 }">
                <el-row class="flex-box1" :gutter="30">
                  <el-col :lg="10" :xs="24">
                    <a><img src="@/assets/me/drug1.png" alt=""></a>
                  </el-col>
                  <el-col :lg="14" :xs="24">
                    <div class="f-title">
                      <p>AVG Rating</p>
                      <span><strong>9.6</strong> / 10</span>
                    </div>
                    <div class="flex-content">
                      <p><span>Stronger Erections*</span>
                        <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled score-template="{value}">
                        </el-rate>
                      </p>
                      <p><span>Improves Stamina*</span>
                        <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled score-template="{value}">
                        </el-rate>
                      </p>
                      <p><span>Enhances Libido*</span>
                        <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled score-template="{value}">
                        </el-rate>
                      </p>
                      <p><span>Boosts Testosterone*</span>
                        <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled score-template="{value}">
                        </el-rate>
                      </p>
                      <p><span>Quality Ingredients*</span>
                        <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled score-template="{value}">
                        </el-rate>
                      </p>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="flex-box2" :gutter="30">
                  <el-col :lg="10" :xs="{ span: 24, top: 0 }">
                    <p>#1 Viril-X By Dignity Bio-Labs</p>
                  </el-col>
                  <el-col :lg="14" :xs="24">
                    <a>Read full review</a>
                    <span>*Individual Results May Vary</span>
                  </el-col>
                </el-row>
              </el-col>

              <el-col :xs="{ span: 22, offset: 1 }" :sm="{ span: 11, offset: 1 }" :lg="{ span: 24, offset: 0 }">
                <el-row class="flex-box1" :gutter="30">
                  <el-col :lg="10" :xs="24">
                    <a><img src="@/assets/me/drug2.png" alt=""></a>
                  </el-col>
                  <el-col :lg="14" :xs="24">
                    <div class="f-title">
                      <p>AVG Rating</p>
                      <span><strong>9.6</strong> / 10</span>
                    </div>
                    <div class="flex-content">
                      <p><span>Stronger Erections*</span>
                        <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled score-template="{value}">
                        </el-rate>
                      </p>
                      <p><span>Improves Stamina*</span>
                        <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled score-template="{value}">
                        </el-rate>
                      </p>
                      <p><span>Enhances Libido*</span>
                        <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled score-template="{value}">
                        </el-rate>
                      </p>
                      <p><span>Boosts Testosterone*</span>
                        <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled score-template="{value}">
                        </el-rate>
                      </p>
                      <p><span>Quality Ingredients*</span>
                        <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled score-template="{value}">
                        </el-rate>
                      </p>
                    </div>
                  </el-col>
                </el-row>
                <el-row class="flex-box2" :gutter="30">
                  <el-col :lg="10" :xs="{ span: 24, top: 0 }">
                    <p>#2 Extenze</p>
                  </el-col>
                  <el-col :lg="14" :xs="24">
                    <a>Read full review</a>
                    <span>*Individual Results May Vary</span>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
          <!-- left end -->
          <!-- right -->
          <el-col :lg="{ span: 8, offset: 1 }" :md="{ span: 24, offset: 0 }" class="aside">
            <el-row>
              <el-col :lg="{ span: 24, offset: 0 }" :xs="{ span: 20, offset: 2 }" :sm="{ span: 20, offset: 2 }">
                <div class="link-tag">
                  CLICK TO SEE THE 100+ MALE ENHANCEMENT BRANDS WE TESTED
                </div>
              </el-col>
              <el-col :lg="{ span: 24, offset: 0 }" :xs="{ span: 20, offset: 2 }">
                <p class="title">What You Will Learn:</p>
                <ul class="list-l">
                  <li v-for="(item, index) in list1" :key="index">
                    <p>{{ item }}</p>
                    <img src="@/assets/me/correct.png" alt="">
                  </li>
                </ul>
                <p class="title">Our Evaluation Method:</p>
                <ul class="list-l">
                  <li v-for="(item, index) in list2" :key="index">
                    <p>{{ item }}</p>
                    <img src="@/assets/me/correct.png" alt="">
                  </li>
                </ul>
                <div class="buyer">
                  <p>Buyer Reviews Analyzed</p>
                  <div>
                    <img src="@/assets/me/headicon.png" alt="">
                    <span>24,168</span>
                  </div>
                </div>
                <p class="title" style="margin-bottom:48px;">Our Main Sources:</p>
                <el-row>
                  <el-col :lg="{ span: 24, offset: 0 }" :sm="{ span: 14, offset: 5 }" :xs="{ span: 14, offset: 5 }">
                    <img class="oms" src="@/assets/me/main.png" alt="">
                  </el-col>
                </el-row>
                <a class="lm">LEARN MORE</a>
              </el-col>
            </el-row>
          </el-col>
          <!-- right end -->
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
      value: 4.5,
      menu: [
        { name: "Men's Health Guide", path: "/MaleEnhancement" },
        { name: "Male Enhancement Reviews", path: "/MaleEnhancement/mer" },
        { name: "FAQ", path: "/MaleEnhancement/faq" },
        { name: "Our Rating Process", path: "/MaleEnhancement/orp" },
        { name: "Contact Us", path: "/MaleEnhancement/cu" },


      ],
      list1: [
        "The Truth Abouth Male Enhancement Supplements",
        "How To Boost Free Testosterone Naturally",
        "How To Avoid Getting Scammed Online",
        "What Is The Highest Rated Male Enhancement Pill On The Market Today.",
      ],
      list2: [
        "The Ingredients",
        "Product Testing Results",
        "The Company's Reputation",
        "Verified Buyer Reviews",
        "Strength of money back Guarantee",
        "Customer Service",
      ],
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

.banner {
  width: 100%;
  height: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(180deg, rgba(33, 108, 255, 0.00) 0, #216cff 100%);

  p {
    font-size: 48px;
    font-family: Inter, Inter-Bold;
    font-weight: 700;
    text-align: CENTER;
    color: #ffffff;
    line-height: 72px;
  }

  i {
    margin-top: 10px;
    font-size: 14px;
    font-family: Inter, Inter-Italic;
    font-weight: 400;
    text-align: center;
    color: #e5e5e5;
    line-height: 21px;
  }
}

@media screen and (max-width: 768px) {
  .el-menu-sm {
    h3 {
      font-size: 19px !important;
    }
  }
}

.el-main {
  padding: 0 !important;
  margin-bottom: 150px;

  .el-menu-sm {
    h3 {
      overflow: hidden;
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

    img {
      width: 100%;
    }

    .color-blue {
      font-size: 20px;
      margin: 25px auto 33px;
      font-family: Inter, Inter-Regular;
      font-weight: 400;
      text-align: LEFT;
      color: #216cff;
      line-height: 20px;
    }

    .title {
      font-size: 20px;
      font-family: Inter, Inter-Bold;
      font-weight: 700;
      text-align: justify;
      color: #222222;
      line-height: 24px;
    }

    >p {
      font-size: 14px;
      font-family: Inter, Inter-Bold;
      text-align: justify;
      color: #666666;
      line-height: 21px;
      margin-top: 23px;
    }

    >ul {
      margin-top: 23px;

      span {
        color: #666666;
      }

      li {
        list-style: disc;
        list-style-position: inside;
        font-size: 14px;
        font-family: Inter, Inter-Bold;
        text-align: justify;
        line-height: 25px;
      }
    }

    .bold-title {
      font-size: 32px;
      margin: 111px auto 45px;
      font-family: Inter, Inter-Bold;
      font-weight: 700;
      text-align: center;
      color: #222222;
      line-height: 30px;
    }

    .item {
      >.el-col {
        background: #f5f5f5;
        border: 1px solid #c4c4c4;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 25px;

        .flex-box1 {
          a {
            // margin-right: 30px;

            img {
              width: 100%;
            }
          }

          >div {
            flex: 1;
            display: flex;
            flex-direction: column;

            .f-title {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 35px;

              p {
                font-size: 24px;
                font-family: Inter, Inter-Bold;
                font-weight: 700;
                text-align: LEFT;
                color: #222222;
                line-height: 36px;
              }

              span {
                font-size: 15px;
                color: #222222;
                font-family: Semi Bold;
                font-weight: 700;


                strong {
                  font-size: 32px;
                  font-family: Inter, Inter-Bold;
                  font-weight: 700;
                  text-align: LEFT;
                  color: #216cff;
                  line-height: 48px;
                }
              }
            }

            .flex-content {
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              >p {
                display: flex;
                justify-content: space-between;
                margin-bottom: 15px;

                >span {
                  font-size: 16px;
                  font-family: Inter, Inter-Regular;
                  font-weight: 400;
                  text-align: LEFT;
                  color: #666666;
                  line-height: 24px;
                }

                >img {
                  width: 131px;
                  height: 24px;
                }
              }
            }
          }
        }

        .flex-box2 {
          margin-top: 20px;
          text-align: center;

          p {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 32px;
            font-family: Inter, Inter-Bold;
            font-weight: 700;
            color: #222222;
            line-height: 48px;
            min-height: 96px;
          }

          a {
            width: 287px;
            padding: 15px 0;
            margin: 0 auto;
            display: block;
            background: #216cff;
            border-radius: 12px;
            font-size: 24px;
            font-family: Inter, Inter-Bold;
            font-weight: 700;
            text-align: CENTER;
            color: #ffffff;
          }

          span {
            margin-top: 5px;
            display: inline-block;
            font-size: 13px;
            font-family: Inter, Inter-Light;
            font-weight: 300;
            text-align: CENTER;
            color: #666666;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.el-main {
  .aside {
    .link-tag {
      padding: 26px 36px;
      box-sizing: border-box;
      border: 1px solid #216cff;
      background: #eff3ff;
      border-radius: 12px;
      font-size: 20px;
      font-family: Inter, Inter-Bold;
      font-weight: 700;
      text-align: CENTER;
      color: #222222;
      line-height: 30px;
      transform: translateX(-1px);
    }

    .title {
      margin: 30px auto 15px;
      font-size: 20px;
      font-family: Inter, Inter-Bold;
      font-weight: 700;
      text-align: LEFT;
      color: #222222;
      line-height: 30px;
    }

    .list-l {
      margin-bottom: 30px;

      li {
        display: flex;
        padding: 16px 0;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #C5C5C5;
      }

      p {
        font-size: 18px;
        font-family: Inter, Inter-Regular;
        font-weight: 400;
        text-align: LEFT;
        color: rgb(59, 59, 59);
        line-height: 24px;
      }

      img {
        width: 36px;
        height: 38px;
      }
    }

    .buyer {
      padding: 20px 45px;
      margin: 57px auto 45px;
      box-sizing: border-box;
      background: #f5f5f5;
      border: 1px solid #c4c4c4;
      border-radius: 12px;

      p {
        margin-bottom: 17px;
        font-size: 20px;
        font-family: Inter, Inter-Bold;
        font-weight: 700;
        text-align: center;
        color: #666666;
        line-height: 20px;
      }

      >div {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 49px;
          height: 54px;
          margin-right: 19px;
        }

        span {
          font-size: 64px;
          font-family: Inter, Inter-Bold;
          font-weight: 700;
          text-align: LEFT;
          color: #216cff;
          line-height: 64px;
        }
      }

    }

    .oms {
      width: 100%;
    }

    .lm {
      width: 100%;
      height: 81px;
      margin: 60px auto 0;
      font-size: 32px;
      font-weight: bold;
      text-align: center;
      line-height: 81px;
      color: #ffffff;
      display: block;
      background: #216cff;
      border-radius: 12px;

    }
  }
}
</style>