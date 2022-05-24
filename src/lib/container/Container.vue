<template>
  <div class="uu-container" :class="{ horizontal }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component } from "@vue/runtime-core";
import UuAside from './Aside.vue'
export default {
  name: "UuContainer",
  setup(props, context) {
    const slots = context.slots.default();
    const slotsTypeArr = [
      "UuAside",
      "UuFooter",
      "UuHeader",
      "UuMain",
      "UuContainer",
    ];
    const hasOtherSlot = slots.some(
      (s) => slotsTypeArr.indexOf((s.type as Component).name) === -1
    );
    if (hasOtherSlot)
      console.warn(`UuContainer中的子元素必须是${slotsTypeArr}中的任意一个`);
    const horizontal = slots.some((s) => s.type === UuAside);
    return { horizontal };
  },
};
</script>

<style lang="scss">
.uu-container {
  min-width: 200px;
  flex: 1;

  &.horizontal {
    display: flex;
  }
}
</style>