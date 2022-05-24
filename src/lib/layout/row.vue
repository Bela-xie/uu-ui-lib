<template>
  <div :class="`uu-row ${justify ? 'justify-' + justify : ''}`" :style="gutterStyle">
    <slot />
  </div>
</template>
<script lang="ts">
import { Component, computed, provide } from "@vue/runtime-core";
import UuCol from './col.vue'
interface Props {
  gutter: String | Number;
  justify?: String;
}
export default {
  name: "UuRow",
  props: {
    gutter: {
      type: [String, Number],
      default: 0,
    },
    justify: {
      type: String,
      required: false,
      validator(value: string) {
        return [
          "start",
          "end",
          "center",
          "space-between",
          "space-around",
          "space-evenly",
        ].includes(value);
      },
    },
  },
  setup(props: Props, context) {
    provide("gutter", { value: props.gutter });
    const slots = context.slots.default();
    slots.forEach((s) => {
      if (s.type !== UuCol) {
        console.warn("UuRow中的子元素必须是 UuCol");
      }
    });
    const gutterStyle = computed(() => {
      const paddingValue = Number(props.gutter) / 2;
      const style =
        paddingValue === 0
          ? {}
          : {
            marginLeft: -paddingValue + "px",
            marginRight: -paddingValue + "px",
          };
      return style;
    });
    return { gutterStyle };
  },
};
</script>
<style lang="scss">
.uu-row {
  display: flex;
}

.justify-end {
  justify-content: flex-end;
}

@each $justify in center,
space-around,
space-evenly,
space-between {
  .justify-#{$justify} {
    justify-content: $justify;
  }
}
</style>