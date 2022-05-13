<template>
  <div class="uu-input-wrapper">
    <textarea
      v-if="$attrs.type === 'textarea'"
      class="uu-input uu-textarea"
      v-bind="$attrs"
    ></textarea>
    <input
      v-else
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="['uu-input', size ? `uu-input-${size}` : '']"
      v-bind="$attrs"
      :type="isPassword ? 'password' : 'text'"
      ref="inputRef"
    />
    <span
      class="uu-clearable input-icon"
      @click="clearAll"
      v-if="clearable && modelValue"
    ></span>
    <span
      v-if="showPassword && modelValue"
      class="uu-showPsw input-icon"
      @click="switchType"
      ><span v-show="isPassword" class="uu-showPsw-line"></span
    ></span>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from "@vue/reactivity";
export default {
  name: "UuInput",
  props: {
    clearable: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const inputRef = ref(null);
    const isPassword = ref(context.attrs.type === "password" ? true : false);
    const clearAll = () => {
      context.emit("update:modelValue", "");
      inputRef.value?.focus();
    };
    const switchType = () => {
      isPassword.value = !isPassword.value;
    };
    return { clearAll, inputRef, switchType, isPassword };
  },
};
</script>

<style lang="scss">
@import "../assets/vars.scss";
.uu-input-wrapper {
  position: relative;
  .uu-input {
    width: 100%;
    height: 36px;
    border: 1px solid $grayColor;
    padding: 10px;
    border-radius: $inputBoxRadius;
    &:hover {
      outline: 1px solid #c5bbbb;
      &[disabled] {
        outline: none;
      }
    }
    &:focus {
      outline: 1px solid $mainColor;
    }
    &::placeholder {
      color: #c0baba;
    }
    &.uu-input-large {
      width: 50%;
    }
    &.uu-input-middle {
      width: 50%;
      height: 24px;
    }
    &.uu-input-small {
      width: 50%;
      height: 12px;
    }
  }
  .uu-textarea {
    height: auto;
  }
  //   输入框右侧图标统一样式
  .input-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  // 一键清空图标
  .uu-clearable {
    display: inline-block;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 1px solid $grayColor;
    border-radius: 50%;
    &::after,
    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      border-left: 2px solid $grayColor;
      height: 12px;
      transform: rotate(45deg);
      left: 8px;
      top: 3px;
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
  //   密码切换图标
  .uu-showPsw {
    display: inline-block;
    width: 20px;
    height: 12px;
    border: 1px solid #a8abb2;
    border-radius: 50%;
  }
  .uu-showPsw::before {
    content: "";
    width: 6px;
    height: 6px;
    border: 1px solid #a8abb2;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .uu-showPsw-line {
    display: inline-block;
    width: 24px;
    border-top: 1px solid #a8abb2;
    transform: rotate(145deg);
    position: absolute;
    right: -2px;
    top: 4px;
  }
}
</style>