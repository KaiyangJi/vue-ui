<template>
    <transition name="actionsheet">
        <div v-show="show" class="aifocus-actionsheet">
            <h3 class="aifocus-actionsheet-title"> {{ actionTitle }} </h3>
            <ul class="aifocus-actionsheet-list" v-if="actions.length" :class="{ 'has-cancel' : cancelObj.text }">
                <li v-for="item in actions" class="aifocus-actionsheet-listitem" @click="itemClick(item)">{{ item.name }}</li>
            </ul>
            <span class="aifocus-actionsheet-button" @click="cancel(cancelObj)"> {{ cancelObj.text }}</span>
        </div>
    </transition>
</template>
<script>
    export default{
        name: "aifocus-actionsheet",

        props:{
            actionTitle:{
                type: String,
                default: '确定执行以下操作?'
            },

            cancelObj:{
                type: Object,
                default: () => {
                    return {
                        text:'取消',
                        func: this.cancel
                    }
                }
            },

            actions:{
                type: Array,
                default: () => []
            },

            showSheet:{
                type: Boolean,
                default: false
            }
        },

        data(){
            return {
                show: this.showSheet
            }
        },

        watch:{
            showSheet : function(val){
                this.show = val;
            },
            show : function(val){
                this.$emit('changeShow', val);
            }
        },

        methods:{
            itemClick(item){
                 if (item.method && typeof item.method === 'function') {
                    item.method();
                }
                this.show = false;
            },
            cancel(cancelObj){
                if(cancelObj.func && typeof cancelObj.func === 'function'){
                    cancelObj.func();
                }else{
                    this.show = false;
                }
            }
        },

        mounted(){
            // console.log("actionsheet mounted");
        }
    }
</script>
    <style lang="scss" scoped>
    .actionsheet-enter-active {
      transition: all .3s ease;
    }
    .actionsheet-leave-active {
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .actionsheet-enter, .actionsheet-leave-to{
      transform: translateY(10px);
      opacity: 0;
    }
    .aifocus-actionsheet{
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: #FFFFFF;
        z-index: 10000;

        ul,li{
            list-style: none;
            width: 100%;
            text-align:center;
            font-size:.36rem;
            margin: 0;
            padding: 0;
        }
        h3{
            margin:0;
            padding:0;
        }
        .aifocus-actionsheet-list{
            &.has-cancel{
                border-bottom: .8rem solid #f7f7f7;
            }
            .aifocus-actionsheet-listitem{
                height: 3rem;
                line-height: 3rem;
                border-bottom: 1px solid #ddd;
                &:last-child{
                    border-bottom: none;
                }
            }
        }

        .aifocus-actionsheet-title{
            height: 3rem;
            line-height: 3rem;
            font-size: .28rem;
            color: #888888;
            border-bottom: 1px solid #ddd;
        }

        .aifocus-actionsheet-button{
            border:0;
            background-color:#fff;
            display: block;
            width:100%;
            height: 3rem;
            line-height: 3rem;
            color: #000000;
        }
    }
</style>