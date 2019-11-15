## 基于事件冒泡机制的VUE低侵入自动埋点方案

### 安装
```bash
  npm i monitor --save
```

### 使用
#### 初始化 
在vue项目入口文件中初始化, 基于vue-cli创建的项目一般为src/main.js
```javascript
import Vue from 'vue'
import router from './router'
import App from './App'
// 引入买点SDK
import Monitor from 'vue-monitor'

// 初始化埋点 需在vue实例创建前初始化 
// **第一个参数为VueRouter实例(用来监听页面切换上报页面PV) 
// **第二个参数为埋点上报地址
Monitor.getInstance().init(router, 'https://xxxx')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

```
#### 埋点
只需在需埋点组件上添加monitor属性即可 支持QueryString传参数 可携带业务参数
```html
<template>
  <button :monitor="`enent_key=btn_search&event_id=1111&pageId=${pageId}&desc=${desc}`">测试</button>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      pageId: 1,
      desc: '备注'
    }
  }
}
</script>
```