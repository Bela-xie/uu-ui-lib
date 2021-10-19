<template>
  <div>
    <h2>Button示例一----theme</h2>
    <Button>按钮</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="text">按钮</Button>
    <h2>Button示例二----size</h2>
    <Button theme="button" size="big">按钮</Button>
    <Button theme="button" size="normal">按钮</Button>
    <Button theme="button" size="small">按钮</Button><br /><br />
    <Button theme="link" size="big">按钮</Button>
    <Button theme="link" size="normal">按钮</Button>
    <Button theme="link" size="small">按钮</Button><br /><br />
    <Button theme="text" size="big">按钮</Button>
    <Button theme="text" size="normal">按钮</Button>
    <Button theme="text" size="small">按钮</Button>
    <h2>Button示例三----level</h2>
    <Button theme="button" level="main">按钮</Button>
    <Button theme="button" level="normal">按钮</Button>
    <Button theme="button" level="danger">按钮</Button><br /><br />
    <Button theme="link" level="main">按钮</Button>
    <Button theme="link" level="normal">按钮</Button>
    <Button theme="link" level="danger">按钮</Button><br /><br />
    <Button theme="text" level="main">按钮</Button>
    <Button theme="text" level="normal">按钮</Button>
    <Button theme="text" level="danger">按钮</Button>
    <h2>Button示例四----disable</h2>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
    <h2>Button示例四----loading</h2>
    <Button>普通按钮按钮</Button>
    <Button loading="true">加载中按钮</Button>
  </div>
</template>

<script lang= 'ts'>
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {},
};
</script>