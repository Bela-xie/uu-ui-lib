<demo>
支持 showClose：默认值为 false，表示是否显示关闭消息框图标
</demo>
<template>
  <Button @click="openText">show text</Button>
  <Button @click="openSuccessText">show success text</Button>
  <Button @click="openWarnText">show warn text</Button>
  <Button @click="openErrorText">show error text</Button>
</template>
    
<script lang="ts">
import Button from "../../lib/Button.vue";
import { openMessage } from "../../lib/Message/openMessage";
export default {
  components: { Button },
  methods: {
    openText() {
      openMessage({
        message: "This is a message.",
        showClose: true,
      });
    },
    openSuccessText() {
      openMessage({
        message: "This is a message.",
        type: "success",
        showClose: true,
      });
    },
    openWarnText() {
      openMessage({
        message: "This is a message.",
        type: "warn",
        showClose: true,
      });
    },
    openErrorText() {
      openMessage({
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