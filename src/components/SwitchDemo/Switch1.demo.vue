<demo>
常规用法
</demo>
<template>
  <uu-switch v-model:value="bool" />
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