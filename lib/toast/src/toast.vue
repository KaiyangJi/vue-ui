<template>
    <div v-if="showToast" class="toast-wrap">
        <div class="toast-box">
            <img class="toast-img" :src="imageSrc" height="86" width="86" v-if="haveImg" />
            <div class="toast-content" v-html="toastText"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'toast',
    props: {
        toastText: {
            type: String,
            default: ''
        },
        imageSrc: {
            type: String,
            default: ''
        }
    },
    computed: {
        haveImg() {
            return !!this.imageSrc;
        }
    },
    data() {
        return {
            showToast: false
        }
    }
}

</script>
<style lang="scss" scoped>
.toast-wrap {
    position: fixed;
    width: 100%;
    top: 40%;
    text-align: center;
    z-index: 99999;
    .toast-box {
        display: inline-block;
        line-height: 2rem;
        text-align: center;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.5);
        padding: 0.5rem 1rem;
        color: #FFFFFF;
        width: 6rem;
        .toast-img {
            display: block;
            height: 3rem;
            width: auto;
            margin: 1rem auto;
        }
    }
}

</style>
