<template>
  <div class="layout">
    <Topnav :toggleMenuVisible="true" class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/button">button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">tabs 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/container">container 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang = 'ts'>
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  z-index: $aside-index;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  background: lightblue;
  width: 150px;
  padding: 16px 0px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
    padding: 0px 16px;
  }
  > ol {
    > li {
      // padding: 4px 0;
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      > .router-link-active {
        background: white;
        border-right: 3px solid #007974;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>