# MessageBox 弹出提示框
----
弹出式提示框，有多种交互形式。
### 基础用法
建议自定义样式覆盖组件样式

```
    this.$MessageBox.$open({
        message: '确定要退出账户吗？',
        modal: true,
        closeOnClickModal: true,
        rightButtonText: '再想想',
        leftButtonText: '确定',
        showLeftButton: true,
        callback: function(action) {
            console.log(action);
        }
    });
```

### Backtop 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 提示框的标题     | String | | |
| message | 提示框的内容   | String | | |
| showRightButton | 是否显示左边按钮 | Boolean | | true |
| showLeftButton   | 是否显示右边按钮 | Boolean | | false |
| leftButtonText | 左边按钮的文本 | String | | |
| rightButtonText | 右边按钮的文本  | String | | |
| modal | 是否显示遮罩     | Boolean | | true |
| closeOnClickModal | 是否在点击遮罩时关闭提示框 | Boolean | | true |
| leftButtonClass | 左边按钮自定义样式类 | String | | |
| rightButtonClass | 右边按钮自定义样式类 | String | | |
| callback | 回调函数(参数为left、right、modal) | Function | | |