<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuVisible" class="icon toggleAside" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-content: center;
  z-index: 20;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: none;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 500px) {
    > .toggleAside {
      display: inline-block;
    }
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>