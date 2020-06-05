<template>
  <div class="bottom_nav">
    <!-- 左边列表 -->
    <div class="bottom_nav_left">
      <div style="display: flex;justify-content: space-between;align-items: center;">
        <div class="first_box" v-for="(item,index) in navList" :key="index">
          <div>
            <div>{{item.firstText}}</div>
            <div
              class="second_box"
              v-for="(item2,index2) in item.second"
              :key="index2"
              @click="goPage(item2.path)"
            >{{item2.secondText}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 右边官方信息 -->
    <div class="bottom_nav_right">
      <div class="bottom_nav_info">
        <img src="../assets/logo.png" />
        <div>官方微博</div>
      </div>
      <div class="bottom_nav_info">
        <img src="../assets/logo.png" />
        <div>官方微信</div>
      </div>
    </div>
    <!-- 底部版权信息 -->
    <div style="text-align: center;">@版权信息</div>
  </div>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {
      navList: [
        {
          firstText: "关于我们",
          second: [
            {
              secondText: "公司介绍",
              path: "/infoPage/introduce"
            },
            {
              secondText: "网站介绍",
              path: "/"
            }
          ]
        },
        {
          firstText: "友情链接",
          second: [
            {
              secondText: "百度",
              path: "baidu"
            },
            {
              secondText: "360",
              path: "360"
            }
          ]
        },
        {
          firstText: "帮助中心",
          second: [
            {
			  secondText: "常见问题",
			  path:"/infoPage/helpCenter"
            },
            {
              secondText: "联系客服"
            }
          ]
        },
        {
          firstText: "其他",
          second: [
            {
              secondText: "会员协议"
            },
            {
              secondText: "业务合作"
            }
          ]
        }
      ]
    };
  },

  methods: {
    goPage(path) {
      if (path == "baidu") {
        window.location.href = "http://www.baidu.com";
      } else if (path == 360) {
        window.location.href = "http://www.baidu.com";
      } else {
        this.$router.push(path);
      }
    }
  }
};
</script>
<style lang="scss">
.bottom_nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10rem;
  background-color: rgba(56, 56, 56, 1);
  color: white;
  padding-top: 1.3rem;
  padding-left: 3rem;

  .bottom_nav_left {
    display: inline-block;
    width: 60%;
    vertical-align: middle;

    .first_box {
      display: inline-block;
      font-weight: bold;
      font-size: 1.13rem;

      .second_box {
        margin-top: 1.3rem;
        font-size: 0.88rem;
        cursor: pointer;
        font-weight: normal;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .bottom_nav_right {
    display: inline-block;
    vertical-align: middle;
    margin-left: 8rem;

    .bottom_nav_info {
      display: inline-block;
      margin-right: 2.5rem;

      img {
        width: 5rem;
        height: 5rem;
      }

      div {
        text-align: center;
      }
    }
  }
}
</style>
