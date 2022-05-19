<demo>
支持 inActiveColor 和 activeColor
</demo>
<template>
  <Switch v-model:value="bool" inActiveColor="#878787" activeColor="blue" />
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