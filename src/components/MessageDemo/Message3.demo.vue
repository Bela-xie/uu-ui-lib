<demo>
支持 showClose：默认值为 false，表示是否显示关闭消息框图标
</demo>
<template>
  <uu-button @click="openText">show text</uu-button>
  <uu-button @click="openSuccessText">show success text</uu-button>
  <uu-button @click="openWarnText">show warn text</uu-button>
  <uu-button @click="openErrorText">show error text</uu-button>
</template>
    
<script lang="ts">
import { UuButton, openUuMessage } from "uu-ui-vue3";
export default {
  components: { UuButton },
  methods: {
    openText() {
      openUuMessage({
        message: "This is a message.",
        showClose: true,
      });
    },
    openSuccessText() {
      openUuMessage({
        message: "This is a message.",
        type: "success",
        showClose: true,
      });
    },
    openWarnText() {
      openUuMessage({
        message: "This is a message.",
        type: "warn",
        showClose: true,
      });
    },
    openErrorText() {
      openUuMessage({
        message: "This is a message.",
        type: "error",
        showClose: true,
      });
    },
  },
};
</script>

<style lang="scss">
</style>