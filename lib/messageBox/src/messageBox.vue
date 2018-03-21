<template>
    <div class="aifocus-msgbox-wrapper" v-if="showMessageBox">
        <div class="aifocus-msgbox" style="z-index: 2003;" >
            <div class="header" v-if="title !== ''">
                <div class="title">{{ title }}</div>
            </div>
            <div class="content" v-if="message !== ''">
                <div class="message">{{ message }}</div>
            </div>
            <div class="btns">
                <span :class="[ leftButtonClasses ]" v-show="showLeftButton" @click="handleAction('left')">{{ leftButtonText }}</span>
                <span :class="[ rightButtonClasses ]"  v-show="showRightButton" @click="handleAction('right')">{{ rightButtonText }}</span>
            </div>
        </div>
        <div class="modal" style="z-index: 2002;" v-if="modal && showMessageBox" @click="closeOnClickModal && handleAction('modal')"></div>
    </div>
</template>
<script>
    export default {
        name: 'messageBox',
        props: {
            title: {
                type: String,
                default: ''
            },
            message: {
                type: String,
                default: ''
            },
            modal: {
                type: Boolean,
                default: true
            },
            closeOnClickModal: {
                type: Boolean,
                default: true
            },
            rightButtonText: {
                type: String,
                default: '确定'
            },
            leftButtonText: {
                type: String,
                default: '取消'
            },
            showRightButton: {
                type: Boolean,
                default: true
            },
            showLeftButton: {
                type: Boolean,
                default: false
            },
            callback: {
                type: Function,
                default: null
            },
            // 自定义按钮样式
            leftButtonClass: {
                type: String,
                default: ''
            },
            rightButtonClass: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                showMessageBox: true
            };
        },
        mounted() {},
        methods: {
            handleAction(action) {
                this.showMessageBox = false;
                if (this.callback) {
                    this.callback(action);
                }
            }
        },
        computed: {
            leftButtonClasses() {
                return 'btn left ' + this.leftButtonClass;
            },
            rightButtonClasses() {
                return 'btn right ' + this.rightButtonClass;
            }
        }
    };
</script>
<style lang="scss">
.aifocus-msgbox-wrapper {
    .aifocus-msgbox {
        position: fixed;
        background:#ffffff;
        border-radius:(8rem/24);
        width: (560rem/24);
        left: 50%;
        margin-left: -(280rem/24);
        top: (400rem/24);
        color:#000000;
        .header {
            padding: 15px 0 0;
            .title {
                text-align: center;
                padding-left: 0;
                margin-bottom: 0;
                font-size: 16px;
                font-weight: bold;
            }
        }
        .content {
            padding: (60rem/24) (30rem/24);
            font-size:(30rem/24);
            text-align: center;
            .message {
            }
        }
        .btns {
            border-top: 1px solid #e5e5e5;
            height: (90rem/24);
            line-height: (90rem/24);
            text-align: center;
            display: flex;
            overflow: hidden;
            .btn {
                display: block;
                background-color: #fff;
                flex: 1;
            }
            .left {
                width: 50%;
                border-right: 1px solid #e5e5e5;
            }
            .right {
                width: 50%;
            }
        }
    }
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background: #000;
    }
}
</style>
