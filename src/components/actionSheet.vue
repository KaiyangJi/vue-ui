<template>
    <div class="action-sheet">
        <example-header component-name="ActionSheet"></example-header>
        <button @click="showAs" class="show-actionsheet">show ActionSheet</button>
        <aifocus-actionsheet :actions="actions" :showSheet="show_" :cancelObj="cancelObj" :actionTitle="actionTitle"></aifocus-actionsheet>
        <div class="mask" v-show="showMask" @click="exit"></div>
    </div>
</template>

<script>
import exampleHeader from './example-header.vue'
export default{
    name: "ActionSheet",
    data(){
        return {
            actions: [],
            actionTitle: 'AIFocus',
            cancelObj: {},
            showMask:false,
            show_: false,
        }
    },
    methods:{
        exit(){
            this.show_ = false;
            this.showMask = false;
        },
        showAs(){
            this.show_ = true;
            this.showMask = true;
        },
        changeShow(val){
            console.log(val + 'changeShow');
        }
    },
    components: {
        'example-header': exampleHeader
    },
    mounted(){
        this.actions = [{
            name: '退出购物',
            method: this.exit
        }]
        this.cancelObj = {
            text: '不退',
            func: this.exit
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    //遮罩
    .show-actionsheet{
        border: none;
        outline: none;
        border-radius: .8rem;
        text-align: center;
        display: block;
        width: 14rem;
        height: 3rem;
        background-color: #ddd;
        color:#fff;
        margin: 0 auto;
        margin-top: 5rem;
    }
    .mask{
        position: fixed;
        top:0;
        left:0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.5);
        z-index: 7;
    }
</style>