/*
* @Author: jikaiyang
* @Date:   2018-03-08 10:59:47
* @Last Modified by:   jikaiyang
* @Last Modified time: 2018-03-08 21:30:39
*/
import Vue from 'vue'
import AiFocusMessageBox from './src/messageBox.vue'

let MessageBoxConstructor = Vue.extend(AiFocusMessageBox);

let MessageBox = () => {
    return new MessageBoxConstructor()
}

let $vm;

MessageBoxConstructor.prototype.$open = (options) => {
    if (document.getElementsByClassName('msgbox-wrapper').length) return
    $vm = new MessageBoxConstructor().$mount();
    document.body.appendChild($vm.$el);

    for (let key in options) {
        $vm[key] = options[key];
    }
    // $vm.showMessageBox = true;
}

// MessageBoxConstructor.prototype.$close = () => {
//     if (!document.getElementsByClassName('msgbox-wrapper').length) return
//     $vm.showMessageBox = false;
//     document.body.removeChild($vm.$el)
// }

// 如果项目中是使用 script 方式引入的 Vue.js（这种情况下 Vue 才会作为一个全局变量存在）
// 在使用比如 vue-router 之类的插件时就可以直接引入然后使用，不用再调用 Vue.use()
// 在模块环境下应当始终显式调用该方法，以保证插件可以正常使用

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(MessageBox())
}

export default MessageBox()
