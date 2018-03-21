# Indicator 加载提示框
----
全局创建了一个用于显示自定义文字、图片的加载提示框。
因为可复用性的关系，```Indicator``` 只会全局创建一个实例，而且在 ```Vue.prototype``` 中添加了全局对象 ```$Indicator```，可以直接通过 ```this.$Indicator``` 操作实例
### 基础用法
通过调用 ```$Indicator``` 提供的 ```$open、$close``` 方法来控制全局的加载提示框

```
	// 显示提示框
	this.$Indicator.$open();
	this.$Indicator.$open('正在加载');
	this.$Indicator.$open('正在加载', 'loading');
	
	// 关闭提示框
	this.$Indicator.$close();
```

### Indicator $open

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| indicatorText | 提示内容 | String | 为空时仅显示icon | '' |
| indicatorType | 提示icon类型 | String | 暂时仅支持loading类型 | 'loading' |