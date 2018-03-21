<template>
    <div>
        <example-header component-name="Indicator"></example-header>
        <div class="indicator-button" @click="showIndicatorFunc1">no-text</div>
        <div class="indicator-button" @click="showIndicatorFunc2">have-text</div>
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
        showIndicatorFunc1() {
            this.$Indicator.$open();
            setTimeout(() => {
                this.closeIndicatorFunc()
            }, 1500)
        },
        showIndicatorFunc2() {
            this.$Indicator.$open('正在加载', 'loading');
            setTimeout(() => {
                this.closeIndicatorFunc()
            }, 1500)
        },
        closeIndicatorFunc() {
            this.$Indicator.$close();
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
