<demo>
支持 disabled
</demo>
<template>
  <uu-button disabled>禁用按钮</uu-button>
  <uu-button theme="link" disabled>禁用链接按钮</uu-button>
  <uu-button theme="text" disabled>禁用文本按钮</uu-button>
</template>

<script lang="ts">
import UuButton from "../../lib/Button/Button.vue";
export default {
  components: {
    UuButton,
  },
};
</script>