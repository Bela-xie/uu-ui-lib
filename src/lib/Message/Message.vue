<template>
  <div :class="['uu-message', `uu-message-${type}`, { center }]">
    <span :class="`icon icon-${type}`"></span>
    <template v-if="content">
      <div
        class="content"
        v-if="dangerouslyUseHTMLString"
        v-html="content"
      ></div>
      <div class="content" v-else v-text="content"></div>
    </template>
    <div v-else class="content"><slot /></div>
    <span @click="closeMessage" v-if="showClose" class="closeIcon">×</span>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    type: {
      type: String,
    },
    showClose: {
      type: Boolean,
    },
    center: {
      type: Boolean,
    },
    content: {
      type: String,
    },
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["unmountMsgApp"],
  methods: {
    closeMessage() {
      this.$emit("unmountMsgApp");
    },
  },
};
</script>
<style lang="scss">
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}
.uu-message {
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  padding: 10px;
  display: flex;
  align-items: center;
  animation: fade-in 0.25s ease-out;
  min-width: 30%;
  &.center {
    justify-content: center;
  }
  @mixin setMainColor($color) {
    background: $color;
    color: darken($color: $color, $amount: 30%);
  }
  &-info {
    @include setMainColor(#f4f4f5);
  }
  &-success {
    @include setMainColor(#f0f9eb);
  }
  &-warn {
    @include setMainColor(#fdf6ec);
  }
  &-error {
    @include setMainColor(#fef0f0);
  }
  .icon {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    @mixin setIcon($bgColor, $iconContent) {
      background: $bgColor;
      &::before {
        content: $iconContent;
      }
    }
    &-info {
      @include setIcon(#a0a2a7, "i");
    }
    &-success {
      @include setIcon(#77c94f, "✔");
    }
    &-warn {
      @include setIcon(#e6a23c, "!");
    }
    &-error {
      @include setIcon(#f56c6c, "×");
    }
  }
  .closeIcon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    font-size: 22px;
    color: #c3c2c4;
    cursor: pointer;
  }
}
</style>