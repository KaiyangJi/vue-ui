<template>
    <div>
        <div class="index-title">AiFocus UI组件库</div>
        <div class="menu-title">JS Components</div>
        <ul>
            <li v-for="item in jsComponents" v-bind:data-name="item.componentName" :key="item.componentName" @click="goComponent">
                {{item.componentName}}
            </li>
        </ul>
        <div class="menu-title">CSS Components</div>
        <ul>
            <li v-for="item in cssComponents" v-bind:data-name="item.componentName" :key="item.componentName" @click="goComponent">
                {{item.componentName}}
            </li>
        </ul>
        <div class="menu-title">Form Components</div>
        <ul>
            <li v-for="item in formComponents" v-bind:data-name="item.componentName" :key="item.componentName" @click="goComponent">
                {{item.componentName}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'index',
    data() {
        return {
            jsComponents: [{
                    componentName: 'Toast'
                },
                {
                    componentName: 'BackTop'
                },
                {
                    componentName: 'Indicator'
                },
                {
                    componentName: 'MessageBox'
                },
                {
                    componentName: 'ActionSheet'
                },
                {
                    componentName: 'Picker'
                }
            ],
            cssComponents: [{
                    componentName: 'Header'
                },
                {
                    componentName: 'Tabbar'
                },
                {
                    componentName: 'Navbar'
                },
                {
                    componentName: 'Search'
                }
            ],
            formComponents: [{
                    componentName: 'Input'
                },
                {
                    componentName: 'Radio'
                }
            ]
        }
    },
    methods: {
        goComponent(e) {
            // console.log(e.srcElement.getAttribute('data-name'))
            let pageName = e.srcElement.getAttribute('data-name').toLowerCase()
            this.$router.push(pageName)
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}

.index-title {
    font-size: 2.5rem;
    height: 5rem;
    line-height: 5rem;
}

.menu-title {
    font-size: 2rem;
    background: #EEEEEE;
    height: 4rem;
    line-height: 4rem;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: block;
    height: 3rem;
    line-height: 3rem;
    text-align: left;
    font-size: 1.3rem;
    padding: 0 1rem;
    border-bottom: 1px solid #DDDDDD;
}

a {
    color: #42b983;
}

</style>
