<demo>
支持显示加载中
</demo>
<template>
  <div>
    <uu-button loading>加载中</uu-button>
    <uu-button>加载完毕</uu-button>
  </div>
</template>

<script lang="ts">
import UuButton from "../../lib/Button/Button.vue";
export default {
  components: {
    UuButton,
  },
};
</script>