<template>
  <div class="home">
    <el-container>
      <el-header style="height:auto;">
        <div class="banner">
          <p>Epic Guide To Stronger Erections, Adding Size,<br />And Boosting Testosterone</p>
          <i>Updated 05/01/2022</i>
        </div>
      </el-header>
      <el-main class="layui-container">
        <!-- menu -->
        <el-row>
          <el-col :xs="{ span: 22, offset: 1 }" class="hidden-lg-and-up">
            <el-menu class="el-menu-sm">
              <el-submenu index="1">
                <template slot="title">
                  <h3>Men's Health Guide</h3>
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
            <img src="@/assets/me/level_img.png" alt="">
            <div class="color-blue">Get The Secret To Saving Big On Top Rated Brands.</div>
            <p class="title">Learn How To Pick The Right Male Enhancement Product To Work For You</p>
            <p style="margin-top:0;">
              When it comes to finding a product that works, male enhancement is one of the toughest categories out
              there. With all the scams and misinformation in the marketplace today, we at Buyer Reviews decided it was
              time to weigh in and set things straight once and for all.
            </p>
            <p>
              As we started to analyze these products we found that there is way too much marketing hype which is
              completely misleading and is causing people to buy products that not only have no effect, but can also be
              harmful. There are countless brands to choose from and many of them make outrageous claims about what
              their product can do without any legitimate studies to back it up. We have done the research and will
              guide you through this deceptive web we call the male enhancement industry.
            </p>
            <p class="title">What To Look For In A Potent & Proven Product</p>
            <p>
              In any effective male enhancement product you need to look for certain ingredients that are backed by
              scientific research and actually proven to work. There are different areas that you need to consider when
              dealing with low testosterone and erectile problems. Below is our guide to finding a male enhancement
              solution that can work for you.*
            </p>
            <p class="title">Step 1: Boost Your Free Testosterone Levels</p>
            <p>Testosterone is central in the male sexual response, including the desire for sex and the mechanics of
              triggering an erection. High levels of testosterone are associated with a strong desire for sex and an
              increased ability to have an erection.1, 2
            </p>
            <p class="title">Step 2: Increase Blood Flow To Your Penis</p>
            <p>A better blood flow means that the cavities in your penis will fill up with blood more readily. This
              counters the effects of weak erections. You gain the power to have an erection on demand, maintain it for
              longer and experience better sex.*
            </p>
            <p class="title">Step 3: Improve Your Libido & Sexual Stamina</p>
            <p>There are some ingredients that will improve the mood and desire for sex. These have long been known as
              aphrodisiacs in traditional Chinese medicine, products that include these ingredients may increase your
              sex drive and libido which does drop in men at a certain age.*
            </p>
            <p class="title">Top 5 Must Have Ingredients For Male Enhancement*</p>
            <p><strong>Maca:</strong> Data shows Maca enhances sexual performance indicating a significant increase in
              erectile function.3
            </p>
            <p><strong>Nettles:</strong> Helps increase testosterone by inhibiting the binding of testosterone to sex
              hormone binding globulin.4
            </p>
            <p><strong>Tribulus Terrestris:</strong> Studies validate the traditional use of Tribulus Terrestris as a
              sexual enhancer in males.5,6
            </p>
            <p><strong>Zinc:</strong> Studies show a positive correlation between zinc and increased testosterone
              levels.7,8
            </p>
            <p><strong>Avena Sativa:</strong> Study shows scientific validation on this traditionally used herbal plant
              as an aphrodisiac herb for the management of male sexual function.9
            </p>
            <p class="title">Read Between The Lines Of Big Pharma</p>
            <p>The drug companies have tried to tell us that prescription drugs are the best answer to male performance
              issues. Yet we all know that these pills come with some very serious side effects.
            </p>
            <p class="title">How To Spot & Avoid Online SCAMS!</p>
            <p>There are certain phrases that you want to avoid seeing when looking at male enhancement products. We’ve
              studied this category so thoroughly that we can spot a scam from 300 yards away. And we are here to help
              you spot one too. Run as far as you can from products with marketing messages such as:
            </p>
            <p><strong>“Male Enhancement Pill - FREE TRIAL OFFER”</strong> – This is the BIGGEST SCAM Online. Customers
              are enrolled in an auto re-bill scheme and are charged the full price of the product every month just by
              entering their credit card info online to pay for a nominal shipping fee.</p>
            <p><strong>“Counterfeit products that are made in China”</strong> – Look for products that are made in the
              USA as they are subject to FDA safety scrutiny.</p>
            <p><strong>“Works better than the leading prescription brand”</strong> – Exaggeration of claims shows a
              product that simply isn’t effective.</p>
            <p>And let's not forget the testimonials. A quick search for male enhancement reveals better Photoshop work
              than one would see at an art college.</p>
            <p>*Results are based on the Buyer Reviews Ranking System and do not necessarily reflect typical results
              from the use of these products. Please visit product website for more information.</p>
            <p class="title">What Factors Go Into A Top Rated Male Enhancement Supplement?</p>
            <p>It’s time to cut through all the hype and tell it like it is. We’ve looked at all of the data to bring
              you objective and comprehensive reviews on all major male enhancement products in the marketplace.* Listed
              below are important factors that we’ve analyzed for each brand, so that you don’t have to play Russian
              roulette with your erection. Here are the factors which we took into consideration-</p>
            <p>1. Scientific research backing claims.</p>
            <p>2. Verified reviews from real customers.</p>
            <p>3. Safety and effectiveness of ingredients.</p>
            <p>4. Value that customers get for the price.</p>
            <p>5. Whether results are consistent.</p>
            <p>6. Strength of money back guarantee.</p>
            <p class="title">Our Specialized Ranking Algorithm</p>
            <p>At Buyer Reviews we employ a complete evaluation system to analyze and measure the full value of
              products, by looking at the ingredients, clinical studies, safety, projected effectiveness, return policy,
              and overall customer satisfaction. This method is known as the Buyer Reviews Ranking System.</p>
            <p>Putting all of these factors together has given us the opportunity to bring you the best products that
              are available today. With our no holds barred reviews we show you the brands that scored the best against
              these strict criteria so that you can make an informed decision.*</p>
            <p class="title">The Bottom Line – Which Male Performance Products Actually Work?</p>
            <p>From all the different products which we analyzed, we found out that most had poor reviews from men
              saying they do not work nearly as well as their advertisements claim. But, that wasn't the case with all
              of them.</p>
            <p>As it turns out, there are a few good brands out there that truly do get users real results.</p>
            <p>Which products got the best reviews and what have men said about them?</p>
            <p>Out of the 100 plus brands which we tested – these top 10 all natural products stood above all the rest.
            </p>
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
                    <router-link to="/MaleEnhancement/offer" @click="InterOffer()">Read full review</router-link>
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

            <p class="title" style="margin-top:48px">Citations</p>
            <p>
              Cunningham, G. R., Stephens-Shields, A. J., Rosen, R. C., Wang, C., Bhasin, S., Matsumoto, A. M., Snyder,
              P. J. “Testosterone Treatment and Sexual Function in Older Men With Low Testosterone Levels.” PubMed.
              Journal of Clinical Endocrinology and Metabolism. 01 August 2016. 2. Pendick, Daniel. “A Logical Approach
              to Treating Erection Issues.” Harvard Health Publications. Harvard Men’s Health Watch. 27 November 2012.
              3. Zenico, T. Cicero, AF. Valmorri, L. Mercuriali, M. Bercovich, E. “Subjective Effects of Lepidium
              Meyenii (Maca) Extract on Well-Being and Sexual Performances in Patients with Mild Erection Issues: A
              Randomized, Double-Blind, Clinical Trial.” PubMed. Andrologia. April 2009. 4. Schottner, M., Gansser, D.,
              Spiteller, G., “Lignans From the Roots of Urtica Dioica and Their Metabolites Bind to Human Sex Hormone
              Binding Globulin (SHBG).” PubMed. Planta Medica. December 1997. 5. Singh, S., Nair, V., Gupta, Y. K.,
              “Evaluation of the Aphrodisiac Activity of Tribulus Terrestris Linn. In Sexually Sluggish Male Albino
              Rats.” PubMed. Journal of Pharmacology and Pharmacotherapeutics. March 2012. 6. Do, J., Choi, S., Choi,
              J., Hyun, J. S., “Effects and Mechanism of Action of a Tribulus Terrestris Extract on Penile Erection.”
              PubMed. Department of Urology, Gyeongsang National University Hospital. March 2013. 7. Prasad, A. S.,
              Mantzoros, C. S., Beck, F. W. Hess, J. W., Brewer G. J., “Zinc Status and Serum Testosterone Levels of
              Healthy Adults.” PubMed. Nutrition. May 1996. 8. Kothari, R. P., Chaudhari, A. R., “Zinc Levels in Seminal
              Fluid in Infertile Males and It’s Relation with Serum Free Testosterone.” PubMed. Journal of Clinical and
              Diagnostic Research. May 2016. 9. Malviya, N., Jain, S., Gupta, V. B., Vyas, S., “Recent Studies on
              Aphrodisiac Herbs for the Management of Male Sexual Function—a Review.” PubMed. Acta Pol Pharm. February
              2011.
            </p>

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
  methods:{
    InterOffer(){
      // if(text=="#1 Viril-X By Dignity Bio-Labs"){
      //   path:'./offer.vue',
      //   `<img src="@/assets/me/drug2.png" alt="">`,
      // }
    }
  }
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
  // height: 350px;
  padding: 92px 0;
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

// @media screen and (max-width: 768px) {
//   .banner {
//     p {
//       font-size: 35px !important;
//       line-height: 50px;
//     }
//   }
// }

.el-main {
  padding: 0 !important;
  margin-bottom: 150px;

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