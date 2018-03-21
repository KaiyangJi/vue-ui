<template>
    <div>
        <example-header component-name="MessageBox"></example-header>
        <div class="indicator-button" @click="showMessageBoxFunc1">打开alert提示框</div>
        <div class="indicator-button" @click="showMessageBoxFunc2">打开确认提示框</div>
    </div>
</template>
<script>
import exampleHeader from './example-header.vue'
export default {
    name: 'index',
    data() {
        return {}
    },
    methods: {
        showMessageBoxFunc1() {
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
        },
        showMessageBoxFunc2() {
            this.$MessageBox.$open({
                title: '提示',
                message: '银行卡未绑定，无法提现',
                modal: true,
                rightButtonText: '去绑定',
                // leftButtonText: '取消',
                // showLeftButton: true,
                callback: function(action) {
                    console.log(action);
                }
            });
        }
    },
    components: {
        'example-header': exampleHeader
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.indicator-button {
    width: 80%;
    height: 4rem;
    background: #EFEFEF;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    line-height: 4rem;
    margin: 10% auto;
    color: #444444;
    box-shadow: 0 0 1px #b8bbbf;
}
</style>
