<demo>
常规使用
</demo>
<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <strong>这是内容</strong>
      </template>
      <template v-slot:title>
        <strong>这是标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { Dialog, Button } from "uu-ui-vue3";
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