<demo>
支持 size，传值只接受 large 和 small
</demo>
<template>
  <uu-switch v-model:value="bool" size="large" /><br />
  <uu-switch v-model:value="bool" /><br />
  <uu-switch v-model:value="bool" size="small" />
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
