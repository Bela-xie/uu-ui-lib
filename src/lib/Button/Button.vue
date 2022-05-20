<template>
  <button class="uu-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="uu-loadingIndicator"></span>
    <span v-if="theme === 'link'" class="linkSlotWrap">
      <slot></slot>
    </span>
    <slot v-else></slot>
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
interface Props {
  theme?: string;
  size?: string;
  level?: string;
  disabled?: boolean;
  loading?: boolean;
}
export default {
  name: 'UuButton',
  props: {
    theme: {
      default: "button",
      validator(value: string) {
        return ["button", "text", "link"].includes(value);
      },
    },
    size: {
      default: "normal",
      validator(value: string) {
        return ["normal", "small", "large"].includes(value);
      },
    },
    level: {
      default: "normal",
      validator(value: string) {
        return [
          "normal",
          "primary",
          "success",
          "info",
          "warn",
          "danger",
        ].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: Props) {
    const classes = computed(() => {
      const { theme, size, level } = props;
      return {
        [`uu-theme-${theme}`]: theme,
        [`uu-size-${size}`]: size,
        [`uu-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
@import "../../assets/vars.scss";
$h: 32px;
$color: rgb(1, 1, 1);
$blue: rgb(137, 184, 199);
$radius: 4px;
$red: red;
$grey: grey;

.uu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $grayColor;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  //   选中除了第一个的 .uu-button
  &+& {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  // 上面的 outline 在火狐浏览器中没有效果
  &::-moz-focus-inner {
    border: 0;
  }

  &.uu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    >.linkSlotWrap {
      border-bottom: 1px solid;
    }

    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.uu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.uu-size-large {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.uu-size-small {
    font-size: 12px;
    height: 24px;
    padding: 0 4px;
  }

  @mixin setLevelStyleByThemeType($type) {

    @each $classNamePost,
    $setColor in (primary, #6aa5ff),
    (success, #74c55f),
    (info, #c7b8ae),
    (warn, #eaa952),
    (danger, #f5717e) {
      &.uu-level-#{$classNamePost} {
        @if $type==themeButton {
          background: $setColor;
          border-color: $setColor;
          color: white;

          &:hover,
          &:focus {
            background: darken($setColor, 10%);
            border-color: darken($setColor, 10%);
          }
        }

        @else if $type==themeLinkOrText {
          color: $setColor;

          &:hover,
          &:focus {
            color: darken($setColor, 15%);
          }
        }
      }
    }
  }

  &.uu-theme-button {
    @include setLevelStyleByThemeType(themeButton);
  }

  &.uu-theme-link,
  &.uu-theme-text {
    @include setLevelStyleByThemeType(themeLinkOrText);
  }

  &.uu-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grayColor;
      }
    }
  }

  &.uu-theme-link,
  &.uu-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        background: none;
      }
    }
  }

  >.uu-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: uu-spin 1s infinite linear;
  }
}

@keyframes uu-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>