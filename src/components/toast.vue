<template>
    <div>
        <example-header component-name="Toast"></example-header>
        <div class="toast-button" @click="showToastFunc">show-toast</div>
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
        showToastFunc() {
            this.$Toast.$showToast('<i>啦啦啦啦</i>', 1500, '/static/toast-default.png');
        }
    },
    components: {
        'example-header': exampleHeader
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.toast-button {
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
