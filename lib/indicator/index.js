/*
 * @Author: wangyifan
 * @Date:   2018-03-05 10:25:12
 * @Last Modified by:   wangyifan
 * @Last Modified time: 2018-03-05 16:08:17
 */

import Vue from 'vue'
import AiFocusIndicator from './src/indicator.vue'

let IndicatorConstructor = Vue.extend(AiFocusIndicator);

let Indicator = () => {
    return new IndicatorConstructor()
}

let $vm;

IndicatorConstructor.prototype.$open = (indicatorText = '', indicatorType = '') => {
    if (document.getElementsByClassName('indicator-wrap').length) return
    $vm = new IndicatorConstructor().$mount();
    document.body.appendChild($vm.$el);

    $vm.indicatorText = indicatorText;
    $vm.indicatorType = indicatorType;
    $vm.showIndicator = true;
}

IndicatorConstructor.prototype.$close = () => {
    if (!document.getElementsByClassName('indicator-wrap').length) return
    $vm.showIndicator = false;
    document.body.removeChild($vm.$el)
}

// 如果项目中是使用 script 方式引入的 Vue.js（这种情况下 Vue 才会作为一个全局变量存在）
// 在使用比如 vue-router 之类的插件时就可以直接引入然后使用，不用再调用 Vue.use()
// 在模块环境下应当始终显式调用该方法，以保证插件可以正常使用

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Indicator())
}

export default Indicator()
