<template>
    <div class="nopage-wrap">
        <img src="/static/noPage.png" />
        <div class="title">404</div>
        <div class="content">这是一个还没有写的页面</div>
        <div class="back" @click="backPre">返回上一页</div>
    </div>
</template>
<script>
export default {
    name: 'noPage',
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.nopage-wrap {
    margin-top: 40%;
    .title {
        font-size: 4rem;
    }

    .content {
        font-size: 1.5rem;
    }

    .back {
        width: 40%;
        height: 3rem;
        background: #EFEFEF;
        border-radius: 0.5rem;
        font-size: 1.2rem;
        line-height: 3rem;
        margin: 10% auto;
        color: #444444;
        box-shadow: 0 0 1px #b8bbbf;
    }
}

</style>
