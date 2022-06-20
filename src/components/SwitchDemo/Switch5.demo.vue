<demo>
支持添加文字描述
</demo>
<template>
  <uu-switch v-model:value="bool" activeText="是" inActiveText="否" />
</template>

<script lang="ts">
import { ref } from "vue";
import { UuSwitch } from "uu-ui-vue3";
export default {
  components: {
    UuSwitch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>
