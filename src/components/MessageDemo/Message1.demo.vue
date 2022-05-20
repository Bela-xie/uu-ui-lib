<demo>
常规用法，既可以渲染普通文本，也可以渲染组件
</demo>
<template>
  <Button @click="openText">show text</Button>
  <Button @click="openVnode">show vnode</Button>
</template>
    
<script lang="ts">
import { h } from "@vue/runtime-core";
import Button from "../../lib/Button/Button.vue";
import { openMessage } from "../../lib/Message/openMessage";
export default {
  components: { Button },
  methods: {
    openText() {
      openMessage("This is a message.");
    },
    openVnode() {
      openMessage({
        message: h("p", null, [
          h("span", null, "Message can be "),
          h("i", { style: "color: lightBlue" }, "VNode."),
        ]),
      });
    },
  },
};
</script>

<style lang="scss">
</style>