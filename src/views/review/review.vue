<template>
    <div class="home">
        <el-container>
            <el-header style="height:auto;">
            </el-header>
            <el-main class="layui-container">
                <!-- menu -->
                <Menu />
                <!-- menu end -->
                <!-- content -->
                <el-row class="layui-container">
                    <el-col :lg="{ span: 24 }" :xs="{ span: 22, offset: 1 }" class="content">
                        <div class="title">Review Process</div>
                        <el-row class="Review-Process" :gutter="30" type="flex">
                            <el-col :lg="12" :md="12" v-for="(item, index) in review_list" :key="index">
                                <div>
                                    <img class="top-img" :src="item.src" alt="">
                                    <b v-html="item.title"></b>
                                    <p v-html="item.info"></p>
                                </div>
                            </el-col>
                        </el-row>
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
            review_list: [
                { src: require("../../assets/me/search.png"), title: "EXAMINE SCIENTIFIC RESEARCH", info: "With any product you want to know what the science is saying. It is all well and good for the manufacturers to make claim after claim but you need to know two very important facts about each product-<br /><br />1. Is this product safe for me to take?<br />2. Do the ingredients have the desired effect?<br /><br />If there is scientific research into a product or its ingredients then we find it and analyse it so that we can pass on all the information you might need. That is why we have sifted through all the scientific research so you can see what all of the research tells you. It is important to know if the ingredients used in each product have been tested for safety and have been part of any meaningful research with regards to how effective they are.*<br /><br />A large part of our review process focuses on the product's formula and the scientific research backing it's claims, so you have the peace of mind that the product you buy will actually have the desired effects.*" },
                { src: require("../../assets/me/information.png"), title: "ANALYSE VERIFIED REVIEWS", info: "If you scour the internet you will find that there are reviews for just about anything. But with people posing as buyers and some website selling reviews it can be difficult to sort out the genuine reviews from the fake ones.<br/><br/>We look at all of the verified reviews for a product so that we can see what real consumers actually think of the products that they have tried. This customer feedback forms an essential part of our report. It is useful for you to know if these products are having a positive effect on real men.<br/><br/>We look through the fake reviews and bring you the lowdown on every product based on what is actually happening out there in the real world." },
                { src: require("../../assets/me/light.png"), title: "DISCOVER QUALITY PRODUCTS", info: "We keep our ear to the ground for all of the products that are launched or repackaged. This means that we can bring you the most up to date information on all of the products that you might consider. It is important to have the latest information at your fingertips so you can make an informed decision.*<br/><br/>Come to us and you can see if the product you have been thinking about buying is genuine, safe and recommended by your peers. We can give you peace of mind by letting you know all about the products that are out there on the market today. Some are widely available and others on only one or two selected websites so it is important to know that we have your back by finding them and checking them out on your behalf.*" },
                { src: require("../../assets/me/champion.png"), title: "RECOMMED TOP RATED BRANDS", info: "When we have assessed all of the data from people that have used the product and looked through the science we are in the best position to recommend the top products for you. Each will start out with their own claims about how effective they are. We cut through the marketing hype to give you an objective rating on each brand.*<br/><br/>Then you can see the best product for you and your needs. Don’t buy products blind, check out all of the hard work that we at Buyer Reviews have put into researching the market and find out what will suit you best.*" },
            ],
            data:[]
        };
    },
    components: { Menu },
    methods: {
        
    },
    
};
import Menu from '../components/menu.vue';

</script>

<style lang="scss" scoped>
.el-main {
    margin-bottom: 150px;
    overflow: visible;

    .content {
        >.title {
            font-size: 36px;
            margin-bottom: 45px;
            font-family: Inter, Inter-Bold;
            font-weight: 700;
            text-align: LEFT;
            color: #222222;
            line-height: 36px;
        }

        .Review-Process {
            flex-wrap: wrap;

            >.el-col {
                >div {
                    min-height: 572px;
                    padding: 21px 29px 40px;
                    margin-bottom: 30px;
                    background: #ffffff;
                    border-radius: 12px;
                    border: 1px solid #fff;
                    transition: .3s;
                    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);

                    .top-img {
                        width: auto;
                        margin: 0 auto;
                        display: block;
                    }

                    b {
                        display: block;
                        margin: 11px auto 16px;
                        font-size: 20px;
                        font-family: Inter, Inter-Bold;
                        font-weight: 700;
                        text-align: CENTER;
                        color: #222222;
                        line-height: 30px;
                    }

                    p {
                        font-size: 14px;
                        font-family: Inter, Inter-Regular;
                        font-weight: 400;
                        text-align: CENTER;
                        color: #666666;
                        line-height: 21px;
                    }
                }

                >div:hover {
                    border: 1px solid #216cff;
                    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);
                    transition-delay: 0s !important;
                    transform: translate(0, -5px);
                }
            }

            @media (max-width:992px) {
                >.el-col div {
                    min-height: auto;
                }
            }


        }
    }
}
</style>