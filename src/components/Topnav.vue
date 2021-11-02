<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/">
        <img :src="logoImg" alt="" class="logoImg" />
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/">主页</router-link>
      </li>
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
      <li>
        <a href="https://github.com/BelaXie/uu-ui-lib" target="__blank"
          >Github</a
        >
      </li>
    </ul>
    <svg v-if="toggleMenuVisible" class="icon toggleAside" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from "vue";
import logoImg from "../assets/logo.png";

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
    return { toggleAside, logoImg };
  },
};
</script>

<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  justify-content: flex-end;
  align-content: center;
  z-index: 20;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    position: fixed;
    left: 15px;
    svg {
      width: 32px;
      height: 32px;
    }
    .logoImg {
      width: 34px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      > a {
        text-decoration: none;
        padding-bottom: 2px;
        &:hover {
          border-bottom: 2px solid $color;
        }
      }
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
      position: static;
      margin: 0 auto;
    }
  }
}
</style>