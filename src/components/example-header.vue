<template>
    <div class="header">
        <span class="back-pre" @click="backPre"></span>
        <span @click="backPre">返回</span>
        <span class="component-name">{{componentName}}</span>
    </div>
</template>
<script>
export default {
    name: 'example-header',
    props: {
        componentName: {
            type: String,
            default: 'AIFocus UI'
        }
    },
    data() {
        return {}
    },
    methods: {
        backPre() {
            this.$router.go(-1)
        }
    }
}

</script>
<style lang="scss" scoped>
.header {
    height: 4rem;
    line-height: 4rem;
    padding-left: 2rem;
    text-align: left;
    background: #DDDDDD;
    font-size: 1.25rem;
    position: relative;
    .back-pre {
        width: 0.8rem;
        height: 0.8rem;
        display: inline-block;
        border-top: 2px solid #666;
        border-left: 2px solid #666;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
    .component-name {
        font-size: 1.8rem;
        width: 10rem;
        position: absolute;
        left: 50%;
        margin-left: -5rem;
        text-align: center;
    }
}

</style>
