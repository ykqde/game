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
                        <el-row class="flex-box3" :gutter="20">
                            <el-col :lg="10" :xs="24" v-for="item in Image" :key="item.id">
                                <a><img v-if="imageIndex == item.id" :src="item.src" @click="clock" alt=""></a>
                            </el-col>
                            <el-col :lg="10" :xs="24">
                                <div class="f-title1">
                                    <p>Extenze</p>
                                </div>
                                <div class="flex-content1">
                                    <p>
                                        <el-button type="text" @click="centerDialogVisible = true">431 Review(s)
                                        </el-button>

                                        <el-dialog title="Write Your Review" :visible.sync="centerDialogVisible" center>
                                            <el-row class="block_box">
                                                <el-col :lg="8" :xs="{ span: 22, offset: 6 }" class="block">
                                                    <p>
                                                        <span class="demonstration">Product Effectiveness</span>
                                                        <el-rate v-model="value1" :allow-half="true"></el-rate>
                                                    </p>
                                                    <p><span class="demonstration">Ingredient Quality</span>
                                                        <el-rate v-model="value1" :allow-half="true"></el-rate>
                                                    </p>
                                                </el-col>
                                                <el-col :lg="8" :xs="{ span: 22, offset: 2 }" class="block1">
                                                    <p><span class="demonstration">No Side Effects</span>
                                                        <el-rate v-model="value1" :allow-half="true"></el-rate>
                                                    </p>
                                                    <p><span class="demonstration">Price / Value</span>
                                                        <el-rate v-model="value1" :allow-half="true"></el-rate>
                                                    </p>
                                                </el-col>
                                                <el-col :lg="8" :xs="{ span: 22, offset: 2 }" class="block2">
                                                    <p><span class="demonstration">Customer Service</span>
                                                        <el-rate v-model="value1" :allow-half="true"></el-rate>
                                                    </p>
                                                </el-col>
                                            </el-row>
                                            <el-form :label-position="l_position" label-width="106px"
                                                :model="validateForm" ref="dynamicValidateForm" class="contact-us">
                                                <el-form-item prop="firstName" label="First Name *"
                                                    :rules="{ required: true, message: 'Please enter your first name', trigger: 'blur' }">
                                                    <el-input placeholder="First Name *"
                                                        v-model="validateForm.firstName">
                                                    </el-input>
                                                </el-form-item>
                                                <el-form-item prop="firstName" label="Last Name *"
                                                    :rules="{ required: true, message: 'Please enter your first name', trigger: 'blur' }">
                                                    <el-input placeholder="Last Name *" v-model="validateForm.lastName">
                                                    </el-input>
                                                </el-form-item>
                                                <el-form-item class="email" prop="email" label="E-mail *" :rules="[
                                                    { required: true, message: 'Please type your email address', trigger: 'blur' },
                                                    { type: 'email', message: 'Please enter the correct email address', trigger: ['blur', 'change'] }
                                                ]">
                                                    <el-input placeholder="E-mail *" v-model="validateForm.email">
                                                    </el-input>
                                                </el-form-item>
                                                <el-form-item class="request" prop="request" label="Your Request *">
                                                    <el-input placeholder="Your Request *" type="textarea"
                                                        v-model="validateForm.request"></el-input>
                                                </el-form-item>
                                                <!-- <el-form-item class="submit">
                                                        <el-button type="primary"
                                                            @click="submitForm('dynamicValidateForm')">
                                                            Subscribe
                                                        </el-button>
                                                    </el-form-item> -->
                                            </el-form>
                                            <div slot="footer" class="dialog-footer1 submit">
                                                <el-button type="primary" @click="submitForm('dynamicValidateForm')">
                                                    Submit Your Review
                                                </el-button>
                                            </div>
                                        </el-dialog>
                                        <strong>AVG Rating</strong>
                                    </p>
                                    <p>
                                        <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled
                                            score-template="{value}">
                                        </el-rate>
                                        <span><strong class="rate_score">8.8 </strong>/ 10</span>
                                    </p>
                                    <p>
                                        Stronger Erections: *
                                    </p>
                                    <p>
                                        <el-progress :percentage="90" :show-text="false" :color="customColor">
                                        </el-progress>
                                        <strong>9 / 10</strong>
                                    </p>
                                    <p>Improves Stamina: *</p>
                                    <p>
                                        <el-progress :percentage="90" :show-text="false" :color="customColor">
                                        </el-progress>
                                        <strong>9 / 10</strong>
                                    </p>
                                    <p>Enhances Libido: *</p>
                                    <p>
                                        <el-progress :percentage="90" :show-text="false" :color="customColor">
                                        </el-progress>
                                        <strong>9 / 10</strong>
                                    </p>
                                    <p>Boosts Testosterone: *</p>
                                    <p>
                                        <el-progress :percentage="80" :show-text="false" :color="customColor">
                                        </el-progress>
                                        <strong>8 / 10</strong>
                                    </p>
                                    <p>Quality Ingredients: *</p>
                                    <p>
                                        <el-progress :percentage="90" :show-text="false" :color="customColor">
                                        </el-progress>
                                        <strong>9 / 10</strong>
                                    </p>
                                </div>
                                <el-row class="flex-box4" :gutter="20">
                                    <el-col :lg="20" :xs="20">
                                        <router-link to="offer">ADD TO CART</router-link>
                                    </el-col>
                                </el-row>
                            </el-col>

                        </el-row>


                        <p class="title">Does Extenze Really Wok? Full Review & Analysis:</p>
                        <p style="margin-top:20px;">
                            Extenze probably receives more in the way of marketing and media attention than any
                            other
                            male enhancement product. It is sold in outlets such as Wal-Mart and Wallgreens so it's
                            more
                            widely available than most other products.
                        </p>
                        <p style="margin-top:20px;">
                            The Extenze website claims that all of the
                            ingredients are from natural sources and that it can improve your sexual function as
                            well as
                            size.*
                        </p>
                        <p style="margin-top:20px;">
                            *Results are based on the Buyer Reviews Ranking System and do not necessarily reflect
                            typical results from the use of these products. Please visit product website for more
                            information.
                        </p>
                        <p class="title">How Does Extenze Work?</p>
                        <p>
                            Extenze contains a blend of ingredients that are designed to work together to enhance
                            the
                            male sexual experience.*
                        </p>
                        <ul style="margin-top:20px;">
                            <li class="list_sty">Folate (folic acid)</li>
                            <li class="list_sty">Zinc (as oxide)</li>
                            <li class="list_sty">Black pepper (seed)</li>
                            <li class="list_sty">Ginger (root)</li>
                            <li class="list_sty">Yohimbe extract (bark)</li>
                            <li class="list_sty">Tribulus terrestris extract</li>
                            <li class="list_sty">Korean ginseng extract (root)</li>
                            <li class="list_sty">Cnidium monnieri (seed)</li>
                            <li class="list_sty">Eleutherococcus extract (root)</li>
                            <li class="list_sty">Xanthroparmelia scarbosa (aerial
                                part)</li>
                            <li class="list_sty">Damiana (leaf)</li>
                        </ul>
                        <p class="title">Customer Reviews & Feedback</p>
                        <p>There is much written about Extenze on the internet. It ranges from very positive reviews
                            to
                            ones that that claim that the supplement didn't have much of an effect. It is probably
                            safest to say that it works for some and not for others.*
                        </p>
                        <p class="title">Side Effects & Consumer Warnings</p>
                        <p>There is an ingredient that may be cause for concern with some men. Yohimbe is a product
                            that
                            causes a reaction to a small minority of people. It quite simply does not agree with
                            some
                            people. It is best to try one tablet to see if you have a reaction as many in the
                            population
                            do not.*
                        </p>
                        <p>
                            Always use supplements that contain only natural ingredients to look after your
                            health.
                        </p>
                        <p class="title">The Bottom Line - Is Extenze Right For Me?</p>
                        <p>Extenze is a hugely popular product that some men swear by to help them in the bedroom.
                            But
                            Extenze doesn’t seem to be right at all for some people. If your body reacts badly to
                            yohimbe then this product is not going to be one that you will want to take.*
                        </p>
                        <p>
                            Below are the
                            best products on the market today. We have assessed them to be safe and have looked at
                            how
                            well they have worked for others. We have taken the time to study each product so that
                            you
                            will know what works best for you.*
                        </p>

                        <div class="bold-title">Top Rated Brands By Buyer Reviews*</div>
                        <el-row class="item">
                            <el-col :xs="{ span: 22, offset: 1 }" :sm="{ span: 11, offset: 1 }"
                                :lg="{ span: 24, offset: 0 }">
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
                                                <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled
                                                    score-template="{value}">
                                                </el-rate>
                                            </p>
                                            <p><span>Improves Stamina*</span>
                                                <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled
                                                    score-template="{value}">
                                                </el-rate>
                                            </p>
                                            <p><span>Enhances Libido*</span>
                                                <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled
                                                    score-template="{value}">
                                                </el-rate>
                                            </p>
                                            <p><span>Boosts Testosterone*</span>
                                                <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled
                                                    score-template="{value}">
                                                </el-rate>
                                            </p>
                                            <p><span>Quality Ingredients*</span>
                                                <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled
                                                    score-template="{value}">
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
                                        <!-- <router-link to="offer" @click="clock(1)">Read full review</router-link> -->
                                        <a to="offer" @click="clock(1)">Read full review</a>
                                        <span>*Individual Results May Vary</span>
                                    </el-col>
                                </el-row>
                            </el-col>

                            <el-col :xs="{ span: 22, offset: 1 }" :sm="{ span: 11, offset: 1 }"
                                :lg="{ span: 24, offset: 0 }">
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
                                                <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled
                                                    score-template="{value}">
                                                </el-rate>
                                            </p>
                                            <p><span>Improves Stamina*</span>
                                                <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled
                                                    score-template="{value}">
                                                </el-rate>
                                            </p>
                                            <p><span>Enhances Libido*</span>
                                                <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled
                                                    score-template="{value}">
                                                </el-rate>
                                            </p>
                                            <p><span>Boosts Testosterone*</span>
                                                <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled
                                                    score-template="{value}">
                                                </el-rate>
                                            </p>
                                            <p><span>Quality Ingredients*</span>
                                                <el-rate v-model="value" disabled-void-color="#c4c4c4" disabled
                                                    score-template="{value}">
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
                                        <a @click="clock(2)">Read full review</a>
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
                            <el-col :lg="{ span: 24, offset: 0 }" :xs="{ span: 20, offset: 2 }">

                                <p class="title">Our Evaluation Method:</p>
                                <ul class="list-l">
                                    <li v-for="(item, index) in list2" :key="index">
                                        <p>{{ item }}</p>
                                        <img src="@/assets/me/correct.png" alt="">
                                    </li>
                                </ul>
                                <p class="title" style="margin-bottom:48px;">Our Main Sources:</p>
                                <el-row>
                                    <el-col :lg="{ span: 24, offset: 0 }" :sm="{ span: 14, offset: 5 }"
                                        :xs="{ span: 14, offset: 5 }">
                                        <img class="oms" src="@/assets/me/main.png" alt="">
                                    </el-col>
                                </el-row>
                                <a class="lm">LEARN MORE</a>
                                <el-row>
                                    <el-col :lg="{ span: 24, offset: 0 }" :sm="{ span: 14, offset: 5 }"
                                        :xs="{ span: 14, offset: 5 }">
                                        <img class="oms" src="@/assets/me/top_drug.png" alt="">
                                    </el-col>
                                </el-row>
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
            customColor: '#216CFF',
            centerDialogVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px',
            validateForm: {
                firstName: "",
                lastName: "",
                email: "",
                request: "",
            },
            l_position: 'left',
            value1: null,
            colors: ['#99A9BF', '#F7BA2A'],
            itemList: {
                content: '',
            },
            Image: [
                { id: 1, src: require("../../assets/me/drug1.png") },
                { id: 2, src: require("../../assets/me/drug2.png") },
                { id: 3, src: require("../../assets/me/drug3.png") },
                { id: 4, src: require("../../assets/me/drug4.png") },
                { id: 5, src: require("../../assets/me/drug5.png") }
            ],
            imageIndex:1
        };
    },
    methods: {
        Getarticle() {
            let data = {};
            data.content = this.content;
            axios.get('/api/posts/v1/detail?post_id=32').then((res) => {
                if (res.status_code == '200') {
                    console.log(res);
                }

            }).catch((res) => {
                console.log(res);
            })
        },
        submitForm() {
            let data = {};//新建一个对象存放数据
            data.fullname = this.validateForm.firstName + this.validateForm.lastName;//将数据传入后台规定字段
            data.email = this.validateForm.email;
            alert("submit!");
            this.$http.post('/api/email/v1/', data, res => {//连接接口
                if (res.statu_code == '200') {
                    console.log('submit!');
                } else {
                    console.log('error submit!!');
                }
            })
        },
        // btnClick() {
        //     this.Image.id = Image.id;
        // },
        clock(id) {
            if (id) {
                this.imageIndex = id
            }
            window.scrollTo(0,0);
            // this.Image.forEach(e => {
            //     if (e.id == this.$route.query.id) {
            //         this.data = e;
            //     }
            // })
        }
    },
    mounted() {
        // this.Getarticle()
        this.clock()
    },
    created() {
            if (this.$route.query.id) {
                this.Image.forEach(e => {
                    if (e.id == this.$route.query.id) {
                        this.data = e;
                    }
                })
            }
    },
    computed:{}

};
import '../../api/request';
import '../../main'
import axios from 'axios';
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
    .el-main {
        width: 100%;
        overflow: hidden;
    }

    .outmenu::v-deep {
        .el-menu-center {
            margin: 30px 9px 40px;
        }
    }

    .Menu {
        margin: 0 30px;
    }

    .el-menu-center {
        margin-left: 9px;
    }

    .dialog-footer1 {
        // margin-top: 50px !important;

        .el-button {
            width: 100% !important;
        }
    }

    .submit {
        margin-top: 50px !important;

        button {
            width: 100% !important;
        }
    }

    .flex-box2 {
        a {
            width: 100% !important;
        }
    }

    .email {
        p {
            position: absolute;
            top: calc(100% + 15px);
            left: 0;
            white-space: normal;
        }
    }
}

.el-col-xs-top-0 {
    margin-top: 0;
}

.el-header {
    padding: 0;
}

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

        .flex-box3 {
            padding-bottom: 20px;

            a {

                img {
                    width: 100%;
                }
            }

            >div {
                flex: 1;
                display: flex;
                flex-direction: column;

                .f-title1 {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 3px;

                    >p {
                        font-size: 24px;
                        font-family: Inter, Inter-Bold;
                        font-weight: 700;
                        text-align: LEFT;
                        color: #222222;
                        line-height: 36px;
                    }

                    >span {
                        font-size: 15px;
                        color: #222222;
                        font-family: Semi Bold;
                        font-weight: 700;


                        >strong {
                            font-size: 32px;
                            font-family: Inter, Inter-Bold;
                            font-weight: 700;
                            text-align: LEFT;
                            color: #216cff;
                            line-height: 48px;
                        }
                    }
                }

                .flex-content1 {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;


                    >p {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        >span {
                            // flex: 1;
                            font-size: 14px;
                            font-family: Inter, Inter-Regular;
                            font-weight: 400;
                            text-align: left;
                            color: #666666;
                            line-height: 14px;
                        }

                        .el-button {
                            flex: 1;
                            font-size: 14px;
                            font-family: Inter, Inter-Regular;
                            font-weight: 400;
                            text-align: left;
                            color: #666666;
                            line-height: 14px;
                        }

                        .el-rate {
                            align-items: center;
                            justify-content: space-between;
                            margin: -10px 0 0 -5px;
                        }

                        .rate_score {
                            font-size: 32px;
                            font-family: Inter, Inter-Bold;
                            font-weight: 700;
                            text-align: left;
                            color: #222222;
                            line-height: 18px;
                        }
                    }

                    .el-progress {
                        width: 80%;
                        flex: 1;
                    }

                    ::v-deep .el-dialog {
                        font-size: 40px;
                        font-family: Inter, Inter-Bold;
                        font-weight: 700;
                        color: #222222;
                        line-height: 36px;
                        border-radius: 12px;

                        .block_box {
                            // display: flex;
                            // padding: 0 30px;
                            // flex: 1;
                            // flex-direction: column;
                            // justify-content: space-between;

                            .block,
                            .block1,
                            .block2 {
                                // display: flex;
                                // flex-direction: column;
                                // justify-content: space-between;
                                flex: 1;
                                align-items: center;
                                justify-content: center;

                                >p {
                                    display: block;
                                    // padding: 0 73px;

                                    >span {
                                        display: block;
                                        margin: 0 0 15px 0;
                                    }

                                    .el-rate {
                                        align-items: center;
                                        justify-content: space-between;
                                        // margin: -10px 0 0 -5px;
                                    }
                                }

                            }
                        }

                    }


                    .contact-us::v-deep {
                        margin-top: 20px;

                        .el-form-item__error {
                            font-size: 14px;
                        }

                        .email {
                            position: relative;

                            p {
                                font-size: 14px;
                                font-family: Roboto, Roboto-Regular;
                                font-weight: 400;
                                line-height: 25px;
                                text-align: LEFT;
                                color: #666666;
                                position: absolute;
                                right: 0;

                                span {
                                    color: #216CFF;
                                    font-weight: 700;
                                }
                            }
                        }

                        .request {
                            margin-top: 50px;
                        }

                        .submit {
                            margin-top: 100px;

                            button {
                                width: 399px;
                                height: 50px;
                                background: #216cff;
                                border-radius: 12px;
                            }
                        }

                        .el-form-item {
                            margin-bottom: 25px;

                            .el-form-item__label {
                                line-height: 50px;
                                padding: 0;
                            }

                            input {
                                height: 50px;
                                border: none;
                                border-radius: 12px;
                                background: #eff3ff;
                                transition: .3s;
                            }

                            input:focus {
                                background: none;
                                box-shadow: 0 0 0 1px #216cff;
                            }

                            textarea {
                                height: 193px;
                                border: none;
                                border-radius: 12px;
                                background: #eff3ff;
                                transition: .3s;
                            }

                            textarea:focus {
                                background: none;
                                box-shadow: 0 0 0 1px #216cff;
                            }
                        }

                    }

                    .dialog-footer1 .el-button {
                        width: 55%;
                        height: 50px;
                        background: #216cff;
                        border-radius: 12px;
                        text-align: center;
                        color: #fff;
                        overflow: hidden;
                    }
                }
            }
        }

        .flex-box4 {
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

        .color-blue {
            font-size: 20px;
            margin: 25px auto 33px;
            font-family: Inter, Inter-Regular;
            font-weight: 400;
            text-align: LEFT;
            color: #216cff;
            line-height: 20px;
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
.list_sty {
    list-style: inside;
}

.el-main {
    .aside {

        .title {
            // margin: 30px auto 15px;
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
            margin-bottom: 60px;
        }
    }
}
</style>