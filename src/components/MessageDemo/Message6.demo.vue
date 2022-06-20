<demo>
支持使用 HTML 片段作为正文内容，需要设置 dangerouslyUseHTMLString 为 true
</demo>
<template>
  <uu-button @click="openText">show html content</uu-button>
</template>
    
<script lang="ts">
import { UuButton, openUuMessage } from "uu-ui-vue3";
export default {
  components: { UuButton },
  methods: {
    openText() {
      openUuMessage({
        message: "<p>This is a <i>message</i>.</p>",
        dangerouslyUseHTMLString: true,
      });
    },
  },
};
</script>

<style lang="scss">
</style>