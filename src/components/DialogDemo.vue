<template>
  <div>
    <h2>Dialog示例一</h2>
    <Button @click="toggleDialog">toggle</Button>
    <Dialog v-model:visible="dialogVisible" :ok="okClick" :cancel="cancelClick">
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
      <template v-slot:content>
        <h2>内容区域</h2>
        <div>这是一段内容哦</div>
      </template>
    </Dialog>
    <h2>Dialog示例二</h2>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { h, ref } from "vue";
export default {
  components: { Dialog, Button },
  setup(props, context) {
    const dialogVisible = ref(false);
    const toggleDialog = () => {
      dialogVisible.value = !dialogVisible.value;
    };
    const okClick = () => {
      return true;
    };
    const cancelClick = () => {
      console.log("点击 cancel 按钮了");
    };
    const showDialog = () => {
      openDialog({
        title: h("strong", "标题"),
        content: "这是一段内容文本",
        ok: () => {
          console.log("点击 ok 了");
        },
        cancel: () => {
          console.log("点击 cancel 了");
        },
      });
    };
    return {
      dialogVisible,
      toggleDialog,
      okClick,
      cancelClick,
      showDialog,
    };
  },
};
</script>