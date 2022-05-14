<demo>
支持使用 HTML 片段作为正文内容，需要设置 dangerouslyUseHTMLString 为 true
</demo>
<template>
  <Button @click="openText">show html content</Button>
</template>
    
<script lang="ts">
import Button from "../../lib/Button.vue";
import { openMessage } from "../../lib/Message/openMessage";
export default {
  components: { Button },
  methods: {
    openText() {
      openMessage({
        message: "<p>This is a <i>message</i>.</p>",
        dangerouslyUseHTMLString: true,
      });
    },
  },
};
</script>

<style lang="scss">
</style>