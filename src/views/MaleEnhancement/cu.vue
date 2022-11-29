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
                  <h3>Contact Us</h3>
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
            <div class="title">Contact Us</div>
            <el-row class="cu">
              <el-col :lg="{ span: 14, offset: 5 }" :sm="{ span: 18, offset: 3 }" :xs="{ span: 22, offset: 1 }">
                <el-form :label-position="l_position" label-width="106px" :model="validateForm"
                  ref="dynamicValidateForm" class="contact-us">
                  <el-form-item prop="firstName" label="First Name *"
                    :rules="{ required: true, message: 'Please enter your first name', trigger: 'blur' }">
                    <el-input placeholder="First Name *" v-model="validateForm.firstName"></el-input>
                  </el-form-item>
                  <el-form-item prop="firstName" label="Last Name *"
                    :rules="{ required: true, message: 'Please enter your first name', trigger: 'blur' }">
                    <el-input placeholder="Last Name *" v-model="validateForm.lastName"></el-input>
                  </el-form-item>
                  <el-form-item class="email" prop="email" label="E-mail *" :rules="[
                    { required: true, message: 'Please type your email address', trigger: 'blur' },
                    { type: 'email', message: 'Please enter the correct email address', trigger: ['blur', 'change'] }
                  ]">
                    <el-input placeholder="E-mail *" v-model="validateForm.email"></el-input>
                    <p>Mail:<span>michael@buyerreviews.org</span></p>
                  </el-form-item>
                  <el-form-item class="request" prop="request" label="Your Request *">
                    <el-input placeholder="Your Request *" type="textarea" v-model="validateForm.request"></el-input>
                  </el-form-item>
                  <el-form-item class="submit">
                    <el-button type="primary" @click="submitForm('dynamicValidateForm')">Subscribe</el-button>
                  </el-form-item>
                </el-form>
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
      activeIndex: this.$route.path,
      l_position: 'left',
      menu: [
        { name: "Men's Health Guide", path: "/MaleEnhancement" },
        { name: "Male Enhancement Reviews", path: "/MaleEnhancement/mer" },
        { name: "FAQ", path: "/MaleEnhancement/faq" },
        { name: "Our Rating Process", path: "/MaleEnhancement/orp" },
        { name: "Contact Us", path: "/MaleEnhancement/cu" },
      ],
      validateForm: {
        firstName: "",
        lastName: "",
        email: "",
        request: "",
      }
    };
  },
  methods: {
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert('submit!');
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },
    submitForm() {
      let data = {};//新建一个对象存放数据
      data.fullname = this.validateForm.firstName + this.validateForm.lastName;//将数据传入后台规定字段
      data.email = this.validateForm.email;
      this.$http.post('/api/email/v1/', data, res => {//连接接口
        if (res.statu_code == '200') {
          console.log('submit!');
        } else {
          console.log('error submit!!');
        }
      })
    }
  },
  created() {
    if (document.body.clientWidth < 768) {
      this.l_position = 'top';
    }
  },
};
import '../../api/request';
import '../../main'
</script>

<style lang="scss" scoped>
.el-col-xs-top-0 {
  margin-top: 0;
}

.el-header {
  padding: 0;
}

@media screen and (max-width: 768px) {
  .el-main {
    width: 100%;
  }

  .submit {
    margin-top: 50px !important;

    button {
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

    .contact-us::v-deep {
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
  }
}
</style>