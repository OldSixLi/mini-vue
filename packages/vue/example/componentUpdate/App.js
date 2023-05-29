// 在 render 中使用 proxy 调用 emit 函数
// 也可以直接使用 this
// 验证 proxy 的实现逻辑
import { h, ref, reactive } from "../../dist/mini-vue.esm-bundler.js";
import Child from "./Child.js";

export default {
  name: "App",
  setup() {
    const msg = ref("123");
    const obj = reactive({
      aaa: "100",
      bbb: "我是探测响应值的东西",
    });
    window.msg = msg;

    const changeChildProps = () => {
      msg.value++;
      // obj.aaa++;
    };
// 返回的结果存储在setuResult中 然后用proxy代理进行访问
    return { msg, changeChildProps, obj };
  },

  render() {
    return h("div", {}, [
      h("div", {}, "你好"),
      h(
        "button",
        {
          onClick: this.changeChildProps,
        },
        "change child props"
      ),
      h(Child, {
        msg: this.msg,
        obj: this.obj,
      }),
    ]);
  },
};
