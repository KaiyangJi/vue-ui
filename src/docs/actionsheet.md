# ActionSheet 操作表
----
操作表，从页面底部移入
### 基础用法
从底部移入的元素，让用户进行操作。

```
    <aifocus-actionsheet :actions="actions" :showSheet="show_" :cancelObj="cancelObj" :actionTitle="actionTitle"></aifocus-actionsheet>
```

### ActionSheet 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| showSheet | 是否显示操作表 | Boolean | | false |
| actionTitle | 操作表标题 | String | | '确定执行以下操作?' |
| actions | 操作菜单项数组(每个对象包含"name-操作名字，method-操作方法"字段) | Array |  | [] |
| cancelObj | 取消项对象(包含"text-取消名字，func-取消执行方法"字段) | Object | | {text:'取消',func:{}} |