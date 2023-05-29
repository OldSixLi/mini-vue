import { h, ref } from "../../dist/mini-vue.esm-bundler.js";

const HelloWorld = {
  name: "HelloWorld",
  setup() {
    const count = ref(0);

    // count.value++;

    const changeChildProps = () => {
      count.value++;
      // obj.aaa++;
    };

    return {
      changeChildProps,
      count,
    };
  },
  // TODO 第一个小目标
  // 可以在使用 template 只需要有一个插值表达式即
  // 可以解析 tag 标签
  // template: `
  //   <div>hi {{msg}}</div>
  //   需要编译成 render 函数
  // `,
  render() {
    return h("div", { tId: "helloWorld" }, [
      h("p", {}, `hello world: count: ${this.count}`),
      h(
        "button",
        {
          onClick: this.changeChildProps,
        },
        "change child props"
      ),
    ]);
  },
};

export default {
  name: "App",
  setup() {},

  render() {
    return h("div", { tId: 1 }, [h("p", {}, "主页"), h(HelloWorld)]);
  },
};
