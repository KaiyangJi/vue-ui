# Backtop 回到页面顶部
----
点击按钮，使页面滚动到顶部
### 基础用法
页面中的浮层元素，可设置显示时机及显示位置。

```
	<backtop :showHeight="50" :showPosition="bottom"></backtop>
```

### Backtop 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| showHeight | 页面滚动高度占屏幕高度的(showHeight/100)时显示组件(为0时始终显示) | Number | | 0 |
| showPosition | 显示位置 | String | 'top' 'middle' 'bottom' | 'bottom' |