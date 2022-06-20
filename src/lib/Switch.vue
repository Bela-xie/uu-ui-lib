<template>
  <button ref="switchEl" id="uu-switch" class="uu-switch"
    :class="{ 'uu-switch-checked': value, 'uu-switch-inActiveColor': inActiveColor, 'uu-switch-activeColor': activeColor, [size]: size }"
    @click="toggle">
    <transition name="fade">
      <span class="uu-switch-activeText" v-if="activeText && value">{{ activeText }}</span>
    </transition>
    <transition name="fade">
      <span class="uu-switch-inActiveText" v-if="inActiveText && !value">{{ inActiveText }}</span>
    </transition>
    <span class="uu-switch-ball"></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { onMounted, ref, watch } from '@vue/runtime-core';
export default defineComponent({
  props: {
    value: {
      type: Boolean
    },
    inActiveColor: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    activeText: {
      type: String
    },
    inActiveText: {
      type: String
    },
    size: {
      type: String,
      default: "",
      validator: (v: string) => {
        return ['large', 'small', ''].includes(v)
      }
    }
  },
  emits: ["update:value"],
  setup(props, context) {
    const switchEl = ref<HTMLButtonElement>()
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    onMounted(() => {
      if (props.inActiveColor && switchEl.value) {
        switchEl.value.style.background = props.inActiveColor
      }
    })
    watch(() => props.value, () => {
      if (props.value && props.activeColor && switchEl.value) {
        switchEl.value.style.background = props.activeColor
      } else if (!props.value && props.inActiveColor && switchEl.value) {
        switchEl.value.style.background = props.inActiveColor
      }
    })
    return { toggle, switchEl };
  },
})
</script>

<style lang="scss">
// @use "sass:math";
@import "../assets/vars.scss";

.uu-switch {
  border: none;
  background: #c9c8c8;
  position: relative;
  font-size: 12px;
  color: white;

  &-inActiveColor {
    // background: v-bind(inActiveColor);
  }

  &-ball {
    position: absolute;
    top: 2px;
    left: 2px;
    background: white;
    transition: left 250ms;
  }

  &:focus {
    outline: none;
  }

  &.uu-switch-checked:active {
    >.uu-switch-ball {
      margin-left: -4px;
    }
  }

  &.uu-switch-checked {
    background: $lightBlueColor;

    &.uu-switch-activeColor {
      // background: v-bind(activeColor);
    }
  }

  &-activeText,
  &-inActiveText {
    position: absolute;
    top: 0;
    font-size: 1em;
    top: 50%;
    transform: translateY(-50%);
  }

  &-activeText {
    left: 4px;
  }

  &-inActiveText {
    right: 4px;
  }
}

@mixin setStyleBySize($h) {
  $h2: $h - 4px;
  $borderRadius: math.div($h, 2);
  height: $h;
  width: $h * 2;
  border-radius: $borderRadius;

  >.uu-switch-ball {
    height: $h2;
    width: $h2;
    border-radius: $borderRadius;
  }

  &:active {
    >.uu-switch-ball {
      width: $h2 + 4px;
    }
  }

  &.uu-switch-checked {
    >.uu-switch-ball {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}

.uu-switch {
  &.large {
    @include setStyleBySize(24px);
  }

  &.small {
    @include setStyleBySize(16px);
  }

  @include setStyleBySize(20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>