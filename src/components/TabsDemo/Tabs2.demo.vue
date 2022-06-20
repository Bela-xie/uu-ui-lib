<demo>
支持 disabled
</demo>
<template>
  <uu-tabs v-model:selected="currentTab">
    <uu-tab title="导航1">内容1</uu-tab>
    <uu-tab title="导航2">内容2</uu-tab>
    <uu-tab title="导航3" disabled>内容3</uu-tab>
  </uu-tabs>
</template>

<script lang="ts">
import { UuTabs, UuTab } from "uu-ui-vue3";
import { ref } from "vue";
export default {
  components: {
    UuTabs,
    UuTab,
  },
  setup() {
    const currentTab = ref("导航1");
    return {
      currentTab,
    };
  },
};
</script>