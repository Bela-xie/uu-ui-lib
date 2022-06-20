<demo>
函数式调用
</demo>
<template>
  <div>
    <uu-button @click="showDialog">打开对话框</uu-button>
  </div>
</template>

<script lang="ts">
import { UuButton, openUuDialog } from "uu-ui-vue3";
import { h } from "vue";
export default {
  components: {
    UuButton,
  },
  setup() {
    const showDialog = () => {
      openUuDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return {
      showDialog,
    };
  },
};
</script>