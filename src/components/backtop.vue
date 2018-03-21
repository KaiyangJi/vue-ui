<template>
    <div>
        <backtop :show-height='50'></backtop>
        <example-header component-name="ActionSheet"></example-header>
        <div class="content">
            <p v-for="i in 40" :key="i">页面内容页面内容页面内容</p>
        </div>
    </div>
</template>
<script>
import exampleHeader from './example-header.vue'
export default {
    name: 'index',
    data() {
        return {}
    },
    methods: {},
    components: {
        'example-header': exampleHeader
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content {
    font-size: 2rem;
}

</style>
