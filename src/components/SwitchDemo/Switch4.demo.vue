<demo>
支持 size，传值只接受 large 和 small
</demo>
<template>
  <Switch v-model:value="bool" size="large" /><br/>
  <Switch v-model:value="bool" /><br/>
  <Switch v-model:value="bool" size="small" />
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
