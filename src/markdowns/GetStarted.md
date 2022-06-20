# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "uu-ui-vue3"
import "uu-ui-vue3/dist/lib/uu.css";
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <uu-button>按钮</uu-button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "uu-ui-vue3"
export default {
  components: {Button}
}
</script>
```