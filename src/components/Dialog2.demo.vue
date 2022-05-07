<demo>
函数式调用
</demo>
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import { Button, openDialog } from "uu-ui-vue3";
import { h } from "vue";
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
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