<template>
  <div id="app" ref="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import styleUtil from "@/utils/styleUtil.js";

export default {
  name: "App",
  components: {
    HelloWorld,
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
  },
  mounted() {
    this.handleDOMDynamic();
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: vh(60);
}
</style>
