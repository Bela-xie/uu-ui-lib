<template>
  <div class="container-demo">
    <h1>Container 组件示例</h1>
    <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
    <p>
      &lt;uu-container&gt;：外层容器。 当子元素中包含 &lt;uu-header&gt; 或
      &lt;uu-footer&gt; 时，全部子元素会垂直上下排列， 否则会水平左右排列。
    </p>
    <p>&lt;uu-header&gt;：顶栏容器。</p>
    <p>&lt;uu-aside&gt;：侧边栏容器。</p>
    <p>&lt;uu-main&gt;：主要区域容器。</p>
    <p>&lt;uu-footer&gt;：底栏容器。</p>
    <p class="tip">
      <strong>注意：</strong>以上组件采用了 flex
      布局，使用前请确定目标浏览器是否兼容。 此外，
      &lt;uu-container&gt;的直接子元素必须是后四个组件中的一个或多个。
      后四个组件的亲元素必须是一个 &lt;uu-container&gt;
    </p>
    <Demo :component="ContainerDemo1" />
    <Demo :component="ContainerDemo2" />
    <Demo :component="ContainerDemo3" />
    <Demo :component="ContainerDemo4" />
    <Demo :component="ContainerDemo5" />
    <h2>相关属性说明</h2>
    <table>
      <thead>
        <tr>
          <td>组件名称</td>
          <td>属性</td>
          <td>说明</td>
          <td>类型</td>
          <td>默认值</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Header 组件</td>
          <td>height</td>
          <td>顶栏高度</td>
          <td>string</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Main 组件</td>
          <td>height</td>
          <td>主栏高度</td>
          <td>string</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Footer 组件</td>
          <td>height</td>
          <td>底栏高度</td>
          <td>string</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Aside 组件</td>
          <td>width</td>
          <td>侧栏宽度</td>
          <td>string</td>
          <td>50</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import ContainerDemo1 from "./Container1.demo.vue";
import ContainerDemo2 from "./Container2.demo.vue";
import ContainerDemo3 from "./Container3.demo.vue";
import ContainerDemo4 from "./Container4.demo.vue";
import ContainerDemo5 from "./Container5.demo.vue";
export default {
  components: { Demo },
  setup() {
    return {
      ContainerDemo1,
      ContainerDemo2,
      ContainerDemo3,
      ContainerDemo4,
      ContainerDemo5,
    };
  },
};
</script>

<style lang="scss">
.container-demo {
  p:nth-child(2) {
    margin-top: 12px;
  }
  p {
    line-height: 2.2;
  }
  table {
    width: 100%;
    text-align: center;
    margin-top: 15px;
    background: #ecf9fd;
  }
  table,
  th,
  td {
    border: 1px solid #d9d9d9;
    border-collapse: collapse;
  }
}
</style>