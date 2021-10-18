<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单一</li>
      <li>菜单二</li>
    </ul>
    <span class="toggleAside" @click="toggleAside"></span>
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from "vue";
export default {
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
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-content: center;
  z-index: 10;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  > .logo {
    max-width: 6em;
    margin-right: auto;
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
    width: 30px;
    height: 30px;
    border: 1px solid red;
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