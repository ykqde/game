<template>
    <div class="disclosure">
        <el-container>
            <el-header style="height: auto">
            </el-header>
            <el-main class="layui-container">
                <Menu>Disclosure Statement</Menu>
                <el-row type="flex" justify="start" align="middle" class="layui-container">
                    <el-col :lg="{ span: 24 }" :xs="{ span: 22, offset: 1 }">
                        <div class="title">Disclosure Statement</div>
                        <div class="disclosure_txt">
                            <p style="margin:24px 0 10px 0">The US Federal Trade Commission requires that we disclose
                                any relationship that we have
                                between
                                a product manufacturer, supplier or service provider when we write about a product or
                                service.
                                Here are the guidelines that we follow.</p>
                            <p style="margin:10px 0 10px 0">Our website BuyerReviews.org is a commercial website,
                                and, as such, runs advertising on pages of the site. When writing a product or service
                                review,
                                we are never paid for doing a review. We invest our personal time and money to present
                                anecdotal
                                reviews. If the website has a link to a product or service, we may get paid a commission
                                if you
                                purchase the product or service. No publisher, manufacturer, supplier or advertiser will
                                ever
                                influence the content, topics or posts made on this website. The reviews contain factual
                                information that is easily verifiable. We always try to provide an honest and accurate
                                assessment. The review includes a section that is a subjective summary. This is based on
                                the
                                personal experience and/or opinions of the reviewer. Attempts are made to establish the
                                general
                                consensus in relation to specific products by reading reviews of those products on other
                                sites,
                                along with user experience stories and we attempt to accurately portray this overall
                                perception
                                in our reviews. We always try and provide links to the manufacturers’ website to provide
                                additional information that is not available in our reviews. Some of this information
                                can
                                include customer user experience stories, more specific product details, sales
                                information, etc.</p>
                            <p style="margin:10px 0 10px 0">Product names, logos, brands and other trademarks appearing
                                on this website are the
                                property of
                                their respective holders, and are used only to directly describe the products and
                                services
                                offered. Use of these trademarks in no way indicates any relationship between this
                                website and
                                the holders of the trademarks. Rather, any usage of third party trademarks by us is to
                                refer to
                                such products is considered nominative fair use under trademark law. These said or
                                referred to
                                trademark holders are not affiliated with this site, or any of our services, products or
                                websites. Nor do said or referred to trademarks sponsor, endorse or express any opinion
                                as to
                                the correctness of our comments, products or endeavors, not excluding direct or indirect
                                interaction with said trademarks.</p>
                            <p style="margin:10px 0 10px 0">In today’s internet world, we feel it is important for you
                                to
                                understand the relationship between a person reviewing the product and the manufacturer,
                                supplier or service provider. The opinions expressed on this website may not necessarily
                                reflect
                                the views of the owners of the products or services that we review. As a visitor to our
                                website,
                                your contributions are always appreciated.</p>
                            <p style="margin:10px 0 10px 0">*Results may vary. If you have a serious medical
                                condition, or have a history of heart conditions we suggest consulting with a physician
                                before
                                using any supplement. The information contained in this website is provided for general
                                informational purposes only. It is not intended to diagnose, treat*, cure, or prevent
                                any
                                disease and should not be relied upon as medical advice. Always consult your doctor
                                before using
                                any supplements.</p>
                            <p style="margin:10px 0 10px 0">Disclosure of Material Connection: Some of the links in the
                                post above are
                                "associate sales links." This means if you click on the link and purchase an item, we
                                will
                                receive a commission. Regardless, we only recommend products or services which we use
                                personally
                                and/or believe will add value to our readers. We are disclosing this in accordance with
                                the
                                Federal Trade Commission's 16 CFR, Part 255: "Guides Concerning the Use of Endorsements
                                and
                                Testimonials."</p>
                        </div>
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
            activeIndex: '{{item}}',
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
    color: #333;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: 150px;

    .title {
        width: 100%;
        font-size: 36px;
        margin-bottom: 45px;
        font-family: Inter, Inter-Bold;
        font-weight: 700;
        text-align: LEFT;
        color: #222222;
        line-height: 36px;
    }

    .disclosure_txt {
        width: 100%;
        font-size: 14px;
        font-family: Inter, Inter-Regular;
        font-weight: 400;
        text-align: justify;
        color: #666666;
        line-height: 21px;
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