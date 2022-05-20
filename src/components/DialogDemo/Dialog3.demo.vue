<demo>
支持closeOnClickOverlay
</demo>
<template>
  <div>
    <Button @click="toggle">点击蒙层不关闭对话框</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
      <template v-slot:content> 内容 </template>
      <template v-slot:title> 标题 </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Button from "../../lib/Button/Button.vue";
import Dialog from "../../lib/Dialog/Dialog.vue";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return {
      x,
      toggle,
      f1,
      f2,
    };
  },
};
</script>