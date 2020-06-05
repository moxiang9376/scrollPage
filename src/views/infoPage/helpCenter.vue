<template>
  <div class="helpCenter">
    <div class="helpCenter_left">
      <div
        @click="goPage(item.path)"
        style="color: rgba(56, 56, 56, 1);font-size: 1rem;text-align: center;padding:1.5rem 0;border-bottom:1px solid #f5f5f5;cursor: pointer;"
        v-for="(item,index) in helpNavList"
        :key="index"
      >{{item.text}}</div>
    </div>

    <div class="helpCenter_right">
      <div
        style="border-bottom:1px solid #f5f5f5;padding:1rem 0;color:rgba(0, 0, 0, 1);font-size: 1.38rem;"
      >帮助中心</div>
      <div class="helpCenter_list_box">
        <div
          style="padding:2rem 0;cursor: pointer;border-bottom: 1px solid #f5f5f5;"
          @click="showInfo(item.text)"
          v-for="(item,index) in helpInfoList"
          :key="index"
        >
          <div style="display: flex;justify-content: space-between;align-items: center;">
            <span style="font-size: 1rem;font-weight: bold;color:rgba(56, 56, 56, 1)">{{item.text}}</span>
            <img
              src="../../../static/img/helpCenter_pullDown.svg"
              :class="item.choose == true?'':'no_pull_style'"
              style="width:1.5rem;height:1.5rem"
            />
          </div>
          <div :class="item.choose==true?'show_info':'no_show'">{{item.info}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "helpCenter",
  data() {
    return {
      helpNavList: [
        {
          text: "公司介绍",
          path: "/infoPage/introduce"
        },
        {
		  text: "网站介绍",
		  path:"/"
        },
        {
          text: "帮助中心"
        },
        {
          text: "会员协议"
        },
        {
          text: "业务合作"
        }
      ],
      helpInfoList: [
        {
          text: "如何注册",
          choose: false,
          info: "您可以通过以下链接完成注册程序。"
        },
        {
          text: "积分兑换",
          choose: false,
          info: "您可以通过以下链接完成注册程序。"
        },
        {
          text: "如何推广",
          choose: false,
          info: "您可以通过以下链接完成注册程序。"
        },
        {
          text: "联系客服电话",
          choose: false,
          info: "您可以通过以下链接完成注册程序。"
        }
      ]
    };
  },

  mounted() {
    console.log(this.$route.path);
  },

  methods: {
    //
    showInfo(text) {
      const that = this;
      that.helpInfoList.forEach(item => {
        if (item.text == text) {
          item.choose = !item.choose;
        }
      });
    },
    //跳转其他页面
    goPage(path) {
     this.$router.push(path)
    }
  }
};
</script>

<style lang="scss">
.helpCenter {
  width: 100%;
  height: 100%;
  padding: 0 7rem;
  padding-top: 1rem;
  overflow: auto;
}

.helpCenter_left {
  display: inline-block;
  width: 20%;
  height: 100%;
  background-color: white;
  border-radius: 0.31rem;
  scrollbar-width: none;
  /* firefox */
  -ms-overflow-style: none;
  /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
}

.helpCenter_left::-webkit-scrollbar {
  display: none;
}

.helpCenter_right {
  display: inline-block;
  vertical-align: top;
  margin-left: 2rem;
  padding: 1rem;
  height: 100%;
  width: 70%;
  background-color: white;
  border-radius: 0.31rem;
  overflow: hidden;

  .helpCenter_list_box {
    padding-bottom: 5rem;
    height: 100%;
    width: 100%;

    scrollbar-width: none;
    /* firefox */
    -ms-overflow-style: none;
    /* IE 10+ */
    overflow-x: hidden;
    overflow-y: auto;
  }
}

.helpCenter_list_box::-webkit-scrollbar {
  display: none;
}

.no_pull_style {
  transform: rotate(-90deg);
}

.show_info {
  margin-top: 1.5rem;
  font-size: 0.81rem;
}

.no_show {
  display: none;
  transition-duration: 1.5s;
}
</style>
