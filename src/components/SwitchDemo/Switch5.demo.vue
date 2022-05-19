<demo>
支持添加文字描述
</demo>
<template>
  <Switch v-model:value="bool" activeText="是" inActiveText="否" />
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../../lib/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>
