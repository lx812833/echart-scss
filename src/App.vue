<template>
  <div id="app" ref="app">
    <div class="left_container">
      <div class="left_top">
        <line-chart-page />
      </div>
      <div class="left_center">
        <line-chart-page />
      </div>
      <div class="left_bottom">
        <line-chart-page />
      </div>
    </div>

    <div class="center_container">
      <div class="center_top">
        <Map />
      </div>
      <div class="center_bottom">
        <bar-chart-page />
      </div>
    </div>

    <div class="right_container">
      <div class="right_top">
        <line-chart-page />
      </div>
      <div class="right_center">
        <line-chart-page />
      </div>
      <div class="right_bottom">
        <line-chart-page />
      </div>
    </div>
  </div>
</template>

<script>
import styleUtil from "@/utils/styleUtil.js";
import BarChartPage from "@/views/BarChartPage";
import LineChartPage from "@/views/LineChartPage";
import Map from "@/components/MapChart";

export default {
  name: "App",
  components: {
    BarChartPage,
    LineChartPage,
    Map
  },
  methods: {
    // 动态新增DOM结构
    handleDOMDynamic() {
      let dom = document.createElement("div");
      this.$refs.app.append(dom);
      dom.style.width = styleUtil.px2vw(300);
      dom.style.height = styleUtil.px2vh(300);
      dom.style.background = "#ccc";
    },
    // 基于transform的适配方案
    handleSetScale() {
      const designWidth = 1920; // 设计稿的宽度
      const designHeight = 1080; // 设计稿的高度

      // (窗口宽度 / 窗口高度) < (设计稿宽度 / 设计稿高度) ? (窗口宽度 / 设计稿高度) : (窗口高度 / 设计稿高度)
      const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designWidth / designHeight
          ? document.documentElement.clientWidth / designWidth
          : document.documentElement.clientHeight / designHeight;
      document.querySelector("#app").style.transform = `scale(${scale})`;
    },
    // 基于rem实现等比缩放
    handleSetFontSize() {
      const designWidth = 1920; 
      const designHeight = 1080; 

      let fontSize = document.documentElement.clientWidth / document.documentElement.clientHeight < designWidth / designHeight
          ? (document.documentElement.clientWidth / designWidth) * 12
          : (document.documentElement.clientHeight / designHeight) * 12;
      document.querySelector("#app").style.fontSize = fontSize + "px";

      // div {
      //   width: px2rem(500);
      //   height: px2rem(500);
      // }
    }

  },
  mounted() {
    // this.handleDOMDynamic();
    // this.handleSetScale();
    // window.addEventListener("resize", this.handleSetScale);

    // this.handleSetFontSize();
  },
  beforeDestroy() {
    // window.removeEventListener("resize", this.handleSetScale);
  },
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: vh(20);
  box-sizing: border-box;
  .left_container,
  .right_container {
    > div {
      min-width: 250px;
      width: vw(450);
      height: vh(330);
      background: rgb(202, 202, 202);
      border-radius: 10px;
    }

    .left_center,
    .right_center {
      margin: vh(20) 0;
    }
  }

  .center_container {
    // 需要设置一个最小宽高，否则再绘图的时候，发现宽高为0的话会引起Echarts报错
    min-width: 600px;
    width: vw(1200);
    height: vh(500);
    margin: 0 vh(20);

    .center_top {
      height: vh(680);
      background: rgb(202, 202, 202);
      border-radius: vh(10);
    }

    .center_bottom {
      height: vh(330);
      margin-top: vh(20);
      background: rgb(202, 202, 202);
      border-radius: vh(10);
    }
  }
}
</style>
