<template>
    <div v-if="showIndicator" class="indicator-wrap">
        <div class="indicator-box" :class="{'have-img':!haveText}">
            <img class="indicator-img" :src="imageSrc" height="86" width="86" />
            <div class="indicator-content" v-if="haveText">
                {{indicatorText}}
            </div>
        </div>
    </div>
</template>
<script>
var imgUrl = require('../../../static/loading.png')
export default {
    name: 'indicator',
    props: {
        indicatorText: {
            type: String,
            default: ''
        },
        indicatorType: {
            type: String,
            default: ''
        }
    },
    computed: {
        imageSrc() {
            let src = ''
            switch (this.indicatorType) {
                case 'loading':
                    src = imgUrl;
                    break;
                default:
                    src = imgUrl;
                    break;
            }
            return src;
        },
        haveText() {
            return !!this.indicatorText;
        }
    },
    data() {
        return {
            showIndicator: false
        }
    }
}

</script>
<style lang="scss" scoped>
.indicator-wrap {
    position: fixed;
    width: 100%;
    top: 40%;
    text-align: center;
    z-index: 99999;
    .indicator-box {
        display: inline-block;
        line-height: 2rem;
        text-align: center;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.5);
        padding: 0.5rem 1rem;
        color: #FFFFFF;
        width: 6rem;
        .indicator-img {
            display: block;
            height: 3rem;
            width: auto;
            margin: 1rem auto;
            animation: animations 1.5s linear infinite;
            -moz-animation: animations 1.5s linear infinite;
            -webkit-animation: animations 1.5s linear infinite;

            @keyframes animations {
                0% {
                    -webkit-transform: rotate(0deg);
                }
                25% {
                    -webkit-transform: rotate(90deg);
                }
                50% {
                    -webkit-transform: rotate(180deg);
                }
                75% {
                    -webkit-transform: rotate(270deg);
                }
                100% {
                    -webkit-transform: rotate(360deg);
                }
            }
            @-webkit-keyframes animations {
                0% {
                    -webkit-transform: rotate(0deg);
                }
                25% {
                    -webkit-transform: rotate(90deg);
                }
                50% {
                    -webkit-transform: rotate(180deg);
                }
                75% {
                    -webkit-transform: rotate(270deg);
                }
                100% {
                    -webkit-transform: rotate(360deg);
                }
            }
        }
    }
    .have-img {
        width: 4rem;
    }
}

</style>
