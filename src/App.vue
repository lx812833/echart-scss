<template>
  <div id="app" ref="app">
    <div class="left_container">
      <div class="left_top">
        1
        <!-- <line-chart-page /> -->
      </div>
      <div class="left_center">
        2
        <!-- <line-chart-page /> -->
      </div>
      <div class="left_bottom">
        3
        <!-- <line-chart-page /> -->
      </div>
    </div>

    <div class="center_container">
      <div class="center_top">
        4
        <!-- <Map /> -->
      </div>
      <div class="center_bottom">
        5
        <!-- <bar-chart-page /> -->
      </div>
    </div>

    <div class="right_container">
      <div class="right_top">
        6
        <!-- <line-chart-page /> -->
      </div>
      <div class="right_center">
        7
        <!-- <line-chart-page /> -->
      </div>
      <div class="right_bottom">
        8
        <!-- <line-chart-page /> -->
      </div>
    </div>
  </div>
</template>

<script>
import styleUtil from "@/utils/styleUtil.js";

export default {
  name: "App",
  components: {
    // HelloWorld,
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
  },
  mounted() {
    // this.handleDOMDynamic();
    this.handleSetScale();
    window.addEventListener("resize", this.handleSetScale);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleSetScale);
  }
};
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  /* padding-top: vh(60); */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #ccc;
}
</style>
