<template>
    <div class="health">
        <el-container>
            <el-header style="height:auto;">
            </el-header>
            <el-main class="layui-container">
                <!-- menu -->
                <Menu />
                <!-- menu end -->
                <!-- content -->
                <el-row style="overflow: hidden;" class="layui-container">
                    <el-col :lg="{ span: 24 }" :xs="{ span: 22, offset: 1 }" class="content ">
                        <span class="health_title">Health & Wellness</span>
                    </el-col>
                    <el-col :lg="{ span: 24 }" :xs="{ span: 22, offset: 1 }">
                        <span class="rate">Top Rated Brands By Buyer Reviews*</span>
                    </el-col>
                    <el-col>
                        <el-row class="item" :gutter="30">
                            <el-col v-for="item in items" :key="item.id" :xs="{ span: 22, offset: 1 }"
                                :sm="{ span: 12, offset: 0 }" :lg="{ span: 24, offset: 0 }">
                                <div class="drug-content">
                                    <el-row class="flex-box1" :gutter="30">
                                        <el-col class="col-img" :lg="10" :xs="24">
                                            <a><img :src="item.src" alt=""></a>
                                        </el-col>
                                        <el-col class="col-rate" :lg="14" :xs="24">
                                            <div class="f-title">
                                                <p>AVG Rating</p>
                                                <span><strong>{{item.rate}}</strong> / 10</span>
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
                                            <p>{{item.massage}}</p>
                                        </el-col>
                                        <el-col :lg="14" :xs="24">
                                            <a>Read full review</a>
                                            <span>*Individual Results May Vary</span>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col>
                        <el-pagination background layout="prev, pager, next" :total="30" prev-text="prev"
                          next-text="next">
                        </el-pagination>
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
            value: 4.5,
            items: [
                {id:1, massage: "#1 Viril-X By Dignity Bio-Labs",src: require("../../assets/me/drug1.png"),rate:'9.6' },
                {id:2, massage: "#2 Extenze" ,src: require("../../assets/me/drug2.png"),rate:'8.8'},
                {id:3, massage: "#3 VigRX PLUS" ,src: require("../../assets/me/drug3.png"),rate:'8.6'},
                {id:4, massage: "#4 Nugenix Total-T" ,src: require("../../assets/me/drug4.png"),rate:'7.6'},
                {id:5, massage: "#5 BioXgenic" ,src: require("../../assets/me/drug5.png"),rate:'7.6'},
            ],
            pager:""
        };
    },
    
    components: { Menu },
    
}
import Menu from '../components/menu.vue';
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
    background-color: #222222;
    color: #333;
    text-align: center;
    line-height: 60px;

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
    margin-bottom: 150px;

    .el-menu-center {
        font-family: Inter, Inter-Bold;
        font-weight: 700;
        color: #222222;
        line-height: 24px;
        // padding: 30px 0 80px;

        .el-menu-item {
            font-size: 24px;
        }

        .el-menu-item:hover {
            background: transparent;
            border-bottom: 4px solid #216CFF;
            width: auto;
            border-bottom-color: #216CFF !important;
        }
    }

    .health_title {
        width: 100%;
        height: 44px;
        font-size: 36px;
        font-family: Inter, Inter-Bold;
        font-weight: 700;
        text-align: left;
        color: #222222;
        line-height: 36px;
        display: block;
    }

    .rate {
        height: 81px;
        display: block;
        padding-left: 60px;
        margin-top: 45px;
        margin-bottom: 40px;
        border-radius: 12px;
        font-size: 32px;
        line-height: 80px;
        color: #ffffff;
        font-family: Inter, Inter-Bold;
        font-weight: 700;
        text-align: left;
        background: #216cff;
    }

    .item {
        >.el-col {
            .drug-content {
                background: #eff3ff;
                border: 1px solid #c4c4c4;
                border-radius: 12px;
                padding: 20px 30px 46px;
                margin-bottom: 40px;
                box-sizing: border-box;
            }


            .flex-box1 {
                margin-bottom: 40px;

                >div {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .col-img {
                    align-items: center;
                }

                .col-rate {

                    .f-title {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 40px;

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
                            margin-top: 15px;

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

                        >p:first-of-type {
                            margin-top: 0;
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
                    width: 80%;
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

    .el-pagination.is-background::v-deep .btn-prev:disabled,
    .el-pagination.is-background::v-deep .btn-next:disabled {
        color: #fff;
        opacity: .2;
    }

    .el-pagination::v-deep {
        justify-content: flex-end;
        display: flex;

        button {
            width: 151px;
            height: 63px;
            background: #216cff;
            border-radius: 12px;
            font-family: Inter, Inter-Bold;
            font-weight: 700;
            text-align: CENTER;
            color: #ffffff;

            span {
                font-size: 24px;
                line-height: 24px;
            }
        }

        .el-pager {
            li {
                width: 63px;
                height: 63px;
                background: #c4c4c4;
                border-radius: 12px;
                font-size: 24px;
                font-family: Inter, Inter-Bold;
                font-weight: 700;
                text-align: CENTER;
                color: #ffffff;
                line-height: 63px;
                margin: 0 15px;
            }

            li:hover {
                color: #fff;
            }

            li.disabled {
                color: #000;
            }
        }

        .active {
            background-color: #216cff !important;
            color: #FFF;
        }
    }

}

@media screen and (max-width: 992px) {
    .el-main {
        .rate {
            padding-left: 0;
            text-align: center;
            font-size: 28px;
        }
    }
}

@media screen and (max-width: 667px) {
    .el-main {
        .rate {
            padding-left: 0;
            text-align: center;
            font-size: 24px;
        }
    }

    .el-pagination::v-deep {
        flex-direction: column;
        align-items: center;

        ul {
            margin: 20px auto;
        }
    }
}

@media screen and (max-width: 567px) {
    .el-main {
        .rate {
            padding-left: 0;
            text-align: center;
            font-size: 20px;
        }
    }
}
</style>