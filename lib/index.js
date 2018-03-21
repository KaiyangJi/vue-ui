/*
 * @Author: wangyifan
 * @Date:   2018-02-27 16:25:32
 * @Last Modified by:   dengxuxue
 * @Last Modified time: 2018-03-08 18:14:20
 */

import Toast from './toast/index'
import Indicator from './indicator/index'
import Backtop from './backtop/index'
import ActionSheet from './actionsheet/index'
import MessageBox from './messageBox/index'

const components = [Backtop, ActionSheet]

// 全局注册(将所有组件全局注册，所有插件注册为全局方法)
const install = (Vue) => {
    if (install.installed) return
    // 组件注册
    components.map(component => {
        Vue.component(component.name, component)
    })

    // 插件注册(全局方法)
    Vue.prototype.$Toast = Toast
    Vue.prototype.$Indicator = Indicator
    Vue.prototype.$MessageBox = MessageBox
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    Backtop,
    ActionSheet
}
