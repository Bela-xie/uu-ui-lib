<demo>
常规使用：支持三种按钮形式
</demo>
<template>
  <div>
    <uu-button>你好</uu-button>
    <uu-button theme="link">你好</uu-button>
    <uu-button theme="text">你好</uu-button>

  </div>
</template>

<script lang="ts">
import { UuButton } from "uu-ui-vue3";
export default {
  components: {
    UuButton,
  },
};
</script>