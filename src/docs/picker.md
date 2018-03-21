# Picker 选择器
----
picker 选择器为移动端选择器，为滑动选择，可以为一级选择器，二级选择器，三级选择器，默认为三级选择器

### 基础用法
```
// 引入模块，在vue 文件中
<picker :pickList="address" :pickerShow="addressShow" :reset="false" :pickerNames="addressNames" v-on:cancelFn="cancelFn" v-on:confirmFn="confirmFn" label="area" listLabel="children" :level="3"></picker>
```





### 各参数及函数说明

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|addressShow |地址选择器展示与隐藏||true false ||
|reset| 每次进入的地址一样，不会取 addressNames 中的值|boolen| true ||
|reset|每次进入地址为上addressNames 中的值|boolen|false ||
|addressNames| 为地址的省市区信息，以,隔开|string|||
|cancelFn| 点取消按钮的函数||||
|confirmFn| 点确认之后回调的函数，data 为地址信息，地址也许只包含两级数据||||
|label| 为节点的信息，默认为name ，传值后为变量名|可以为 String 或 Object对象，当为Object 对象是，只能去Object 的name 值进行处理|||
|listLabel| 为子节点的数据列表，默认是children 变量，可以更改为自己的数据节点变量 dot分割标记 reset 不读取展示的时间，最顶端向下滑动||||
|level| 几层数据格式，默认三层||1，2，3|3|


### picker的item的高度
默认是31px，不能改为rem，需要为确定的px值