<template>
  <button
    class="gulu-switch"
    :class="{ 'gulu-checked': value }"
    @click="toggle"
  >
    <span></span>
  </button>
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
@use "sass:math";
$h: 22px;
$h2: $h - 4px;
.gulu-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: math.div($h, 2);
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: math.div($h, 2);
    transition: left 250ms;
  }
  &.gulu-checked {
    background: blue;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.gulu-checked:active {
    > span {
      margin-left: -4px;
    }
  }
}
</style>