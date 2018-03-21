/*
 * @Author: wangyifan
 * @Date:   2018-02-27 16:03:35
 * @Last Modified by:   wangyifan
 * @Last Modified time: 2018-03-05 16:07:47
 */

import Vue from 'vue'
import AiFocusToast from './src/toast.vue'

let ToastConstructor = Vue.extend(AiFocusToast);

let Toast = () => {
    return new ToastConstructor()
}

ToastConstructor.prototype.$showToast = (toastText = 'default-text', duration = 1500, imageSrc = '') => {
    if (document.getElementsByClassName('toast-wrap').length) return
    let $vm = new ToastConstructor().$mount();
    document.body.appendChild($vm.$el);
    $vm.toastText = toastText;
    $vm.imageSrc = imageSrc;
    $vm.showToast = true;
    setTimeout(function() {
        $vm.showToast = false;
        document.body.removeChild($vm.$el)
    }, duration);
}

// 如果项目中是使用 script 方式引入的 Vue.js（这种情况下 Vue 才会作为一个全局变量存在）
// 在使用比如 vue-router 之类的插件时就可以直接引入然后使用，不用再调用 Vue.use()
// 在模块环境下应当始终显式调用该方法，以保证插件可以正常使用

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Toast());
}

export default Toast()
