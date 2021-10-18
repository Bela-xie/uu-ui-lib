<template>
  <router-view></router-view>
</template>

<script lang='ts'>
import { ref, provide } from "vue";
import { router } from "./router";
export default {
  setup() {
    const screenWidth = document.documentElement.clientWidth;
    const asideVisible = ref(screenWidth <= 500 ? false : true);
    provide("asideVisible", asideVisible);
    if (screenWidth <= 500) {
      router.afterEach(() => {
        asideVisible.value = false;
      });
    }
  },
};
</script>
