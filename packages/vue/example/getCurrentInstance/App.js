// 可以在 setup 中使用 getCurrentInstance 获取组件实例对象
import { h, getCurrentInstance } from "../../dist/mini-vue.esm-bundler.js";

export default {
  name: "App",
  setup() {
    // 获取到组件实例对象 根据此对象值可以进行组件的后续判断逻辑
    console.log(getCurrentInstance())
    return () => h("div", {}, [h("p", {}, "getCurrentInstance")]);
  },
};
