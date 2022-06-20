<demo>
支持 inActiveColor 和 activeColor
</demo>
<template>
  <uu-switch v-model:value="bool" inActiveColor="#878787" activeColor="blue" />
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