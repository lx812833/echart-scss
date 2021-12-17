// 定义设计稿尺寸
const designWidth = 1080;
const designHeight = 1920;

// 在创建元素的同时，动态的为其分配对应的css属性
const styleUtil = {
  px2vw: function (px) {
    return `${(px * 100) / designWidth}vw`;
  },
  px2vh: function (px) {
    return `${(px * 100) / designHeight}vh`;
  }
}

export default styleUtil;