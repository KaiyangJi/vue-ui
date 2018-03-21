import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import toast from '@/components/toast'
import backtop from '@/components/backtop'
import indicator from '@/components/indicator'
import noPage from '@/components/noPage'
import Picker from '@/components/picker.vue'
import ActionSheet from '@/components/actionSheet.vue'
import messageBox from '@/components/messageBox.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },{
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/toast',
            name: 'toast',
            component: toast
        },
        {
            path: '/backtop',
            name: 'backtop',
            component: backtop
        },
        {
            path: '/indicator',
            name: 'indicator',
            component: indicator
        },
        {
            path: '*',
            name: 'noPage',
            component: noPage
        },
        {
            path: '/picker',
            name: 'picker',
            component: Picker
        },
        {
            path: '/actionsheet',
            name: 'actionsheet',
            component: ActionSheet
        },{
            path: '/messageBox',
            name: 'messageBox',
            component: messageBox
        }
    ]
})
