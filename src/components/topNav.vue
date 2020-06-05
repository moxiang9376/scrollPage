<template>
  <div class="topNav">
    <div
      @click="goHome()"
      style="font-size: 2.18rem;font-weight: bold;color:black;margin-left: 3rem;display: inline-block;cursor:pointer"
    >LOGO</div>
    <div style="width:60%;display: inline-block;float:right;text-align: right;">
      <div
        :class="item.choose == true? 'sel_btn':'top_nav_btn'"
        v-for="(item,index) in navList"
        :key="index"
        @click="goPage(item.path)"
      >{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topNav",
  data() {
    return {
      selPath: "", //当前页面的路由
      navList: [
        {
          text: "讯调查",
          choose: false,
          path: "/"
        },
        {
          text: "快速问答",
          path: "/infoPage/quickQN",
          choose: false
        },
        {
          text: "兑换中心",
          choose: false
        },
        {
          text: "邀请有礼",
          choose: false
        },
        {
          text: "帮助中心",
          choose: false,
          path: "/infoPage/helpCenter"
        }
      ]
    };
  },

  watch: {
    $route(to, from) {
      console.log(to.path);
      const that = this;

      that.navList.forEach(item => {
        if (item.path == to.path) {
          item.choose = true;
        } else {
          item.choose = false;
        }
      });
    }
  },

  methods: {
    //跳转首页
    goHome() {
      this.$router.push("/");
    },

    //页面跳转
    goPage(path) {
      const that = this;
      that.navList.forEach(item => {
        if (item.path == path) {
          item.choose = true;
        } else {
          item.choose = false;
        }
      });
      if (path != undefined) {
        this.$router.push(path);
      }
    }
  }
};
</script>
<style lang="scss">
.topNav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  overflow: hidden;
  background-color: white;

  .top_nav_btn {
    display: inline-block;
    font-size: 1.38rem;
    margin-right: 3rem;
    cursor: pointer;
  }

  .sel_btn {
    display: inline-block;
    font-size: 1.38rem;
    margin-right: 3rem;
    cursor: pointer;
    font-weight: bold;
    color: rgba(57, 151, 255, 1);
  }
}
</style>
