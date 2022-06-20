<demo>
常规用法，既可以渲染普通文本，也可以渲染组件
</demo>
<template>
  <uu-button @click="openText">show text</uu-button>
  <uu-button @click="openVnode">show vnode</uu-button>
</template>
    
<script lang="ts">
import { h } from "vue";
import { UuButton, openUuMessage } from "uu-ui-vue3";
export default {
  components: { UuButton },
  methods: {
    openText() {
      openUuMessage("This is a message.");
    },
    openVnode() {
      openUuMessage({
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