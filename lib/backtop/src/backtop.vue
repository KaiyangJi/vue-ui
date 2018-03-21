<template>
    <div v-show="showBacktop" class="backtop-wrap" :class="showPosition" @click="backToTop"></div>
</template>
<script>
export default {
    name: 'backtop',
    props: {
        showHeight: {
            type: Number,
            default: 0
        },
        showPosition: {
            type: String,
            default: 'bottom'
        }
    },
    data() {
        return {
            showBacktop: false
        }
    },
    mounted() {
        if (isNaN(this.showHeight)) {
            this.showHeight = 0
        }
        if (this.showHeight === 0) {
            this.showBacktop = true;
        } else {
            window.onscroll = (e) => {
                this.showBacktop = (window.scrollY >= (window.innerHeight * this.showHeight / 100))
            }
        }
    },
    methods: {
        backToTop() {
            window.scrollTo(0, 0)
        }
    }
}

</script>
<style>
.backtop-wrap {
    text-align: center;
    z-index: 99999;
    position: fixed;
    bottom: 4rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: url('../../../static/backTop.png') no-repeat;
    background-size: 100%;
}

.top {
    top: 4rem;
}

.middle {
    top: 50%;
    margin-top: -2rem;
}

.bottom {
    bottom: 4rem;
}

</style>
