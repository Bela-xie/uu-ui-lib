<template>
  <div class="uu-tabs">
    <div class="uu-tabs-nav" ref="containerEl">
      <div
        @click="
          () => {
            if (!tab.disabled) select(tab.title);
          }
        "
        :class="{ selected: tab.title === selected, disabled: tab.disabled }"
        class="uu-tabs-nav-item"
        v-for="(tab, index) in tabProps"
        :key="index"
        :ref="
          (el) => {
            if (tab.title === selected) selectedItem = el;
          }
        "
      >
        {{ tab.title }}
      </div>
      <div ref="indicatorEl" class="uu-tabs-nav-indicator"></div>
    </div>
    <div class="uu-tabs-content">
      <component :key="selected" class="uu-tabs-content-item" :is="current">
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import { computed, onMounted, ref, watchEffect } from "vue";
export default {
  props: {
    selected: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicatorEl = ref<HTMLDivElement>(null);
    const containerEl = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(() => {
        const { width, left: left1 } =
          selectedItem.value.getBoundingClientRect();
        indicatorEl.value.style.width = width + "px";
        const { left: left2 } = containerEl.value.getBoundingClientRect();
        const left = left1 - left2;
        indicatorEl.value.style.left = left + "px";
      });
    });
    const defaults = context.slots.default();
    defaults.forEach((tab) => {
      if (tab.type !== Tab) {
        throw new Error("Tabs 中必须是 Tab 组件");
      }
    });
    const tabProps = defaults.map((tab) => {
      const { title, disabled } = tab.props;
      return { title, disabled: disabled !== undefined };
    });
    const select = (t) => {
      context.emit("update:selected", t);
    };
    const current = computed(() => {
      return defaults.filter((tab) => tab.props.title === props.selected)[0];
    });
    return {
      tabProps,
      select,
      current,
      selectedItem,
      indicatorEl,
      containerEl,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.uu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
      &.disabled {
        cursor: not-allowed;
        color: #ccc;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: left 300ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>