<template>
    <div class="app" id="app">
        <div ref="top" class="top">
            <img src="../assets/images/bgtop.png">
            <video :src="vd" autoplay="true" loop="true" muted></video>
            <div class="cover">
                <!-- <img src="../assets/images/logo.png" class="logo" alt=""> -->
                <div class="centerVideo">
                    <div class="btnWarp">
                        <div class="imgWarp" @click="play">
                            <div ref="play" class="playAni iconfont icon-iconbofang"></div>
                        </div>

                        <a
                            target="_blank"
                            href="https://itunes.apple.com/us/app/azur-lane/id1411126549?l=zh&ls=1&mt=8"
                            class="ios btn"
                        ></a>
                        <a
                            target="_blank"
                            href="https://play.google.com/store/apps/details?id=com.YoStarEN.AzurLane"
                            class="android btn"
                        ></a>
                        <!-- <div class="btn code" @click="showCode=true"></div> -->
                    </div>
                </div>
            </div>
            <div class="topNav">
                <div class="navbar" :class="{'active':activeKey=='top'}" @click="go('top')">TOP
                    <img src="../assets/images/01/next.png" class="next">
                </div>
                <div class="navbar" :class="{'active':activeKey=='01'}" @click="go('06')">NEWS
                    <img src="../assets/images/01/next.png" class="next">
                </div>
                <!-- <div class="navbar" :class="{'active':activeKey=='01'}" @click="go('01')">PRE-REGISTRATION <img src="../assets/images/01/next.png" class='next'> </div> -->
                <div class="navbar" :class="{'active':activeKey=='02'}" @click="go('02')">WORLD VIEW
                    <img src="../assets/images/01/next.png" class="next">
                </div>
                <div class="navbar" :class="{'active':activeKey=='03'}" @click="go('03')">CHARACTER
                    <img src="../assets/images/01/next.png" class="next">
                </div>
                <div
                    class="navbar"
                    :class="{'active':activeKey=='04'}"
                    @click="go('05')"
                >UNION EVENT
                    <img src="../assets/images/01/next.png" class="next">
                </div>
                <div class="navbar" :class="{'active':activeKey=='04'}" @click="go('04')">ART-WORK
                    <img src="../assets/images/01/next.png" class="next">
                </div>
                <router-link to="offline_events" class="navbar navbar_link">OFFLINE EVENTS</router-link>
            </div>
        </div>
        <div class="webWarp">
            <img src="../assets/images/webBg.png">
            <div class="content">
                <img src="../assets/images/shareOn.png" alt>
                <a class="item" href="https://www.facebook.com/AzurLaneEN/">
                    <img src="../assets/images/facebook.png">
                    <div class="label">FACEBOOK</div>
                </a>
                <a class="item" href="https://twitter.com/AzurLane_EN">
                    <img src="../assets/images/twitter.png">
                    <div class="label">TWITTER</div>
                </a>
                <a class="item" href="https://www.reddit.com/r/AzureLane/">
                    <img src="../assets/images/reddit.png">
                    <div class="label">REDDIT</div>
                </a>
                <a class="item" href="https://www.twitch.tv/directory/game/Azur%20Lane">
                    <img src="../assets/images/twitch.png">
                    <div class="label">TWITCH</div>
                </a>
                <a class="item" href="https://discord.gg/WYjqf7P">
                    <img src="../assets/images/discord.png">
                    <div class="label">DISCORD</div>
                </a>
                <a class="item" href="https://discord.gg/FVgfdaN">
                    <img src="../assets/images/discordfans.png">
                    <div class="label">DISCORD FANS</div>
                </a>
                <a class="item" href="https://www.youtube.com/channel/UCPeJaqP6WgxUVDcpYkXZKMQ">
                    <img src="../assets/images/youtube.png">
                    <div class="label">YOUTUBE</div>
                </a>
                <!-- <a class="item" href="http://boards.4chan.org/jp/">
          <img src="../assets/images/4chan.png">
          <div class="label">4CHAN</div>
                </a>-->
            </div>
        </div>
        <nav06 ref="06"></nav06>
        <!-- <nav01 ref="01"></nav01> -->
        <nav02 ref="02"></nav02>
        <nav03 ref="03"></nav03>
        <nav05 ref="05"></nav05>
        <nav04 ref="04"></nav04>

        <div class="footer">
            <img src="../assets/images/footer.png" class="img">
            <span class="text">
                <div class="item">
                    <a href="#/privacypolicy" class="link">PRIVACY POLICY</a>
                    <span class="spe">|</span>
                    <a href="#/termofuse" class="link">TERMS OF USE</a>
                    <span class="spe">|</span>
                    <a href="mailto:al.cs@yo-star.com" class="link">CONTACT US</a>
                </div>
                <div class="tip">
                    <div>© 2018 Shanghai Manjuu Technology Co.,Ltd & Xiamen YongShi Technology Co.,Ltd.</div>
                    <div>©2018 Shanghai Yostar Co., Ltd. All rights reserved</div>
                </div>
            </span>
        </div>
        <div v-if="showVideo" class="videoWarp" :class="{hidden:showVideo}">
            <div class="iframe">
                <iframe
                    width="1120"
                    height="630"
                    :src="videoUrl"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                ></iframe>
                <div @click="close" class="close"></div>
            </div>
        </div>
        <div class="navs" v-if="activeKey!='top'">
            <div
                v-for="(item,index) in navs"
                @click="go(item.key)"
                :class="{'active':activeKey==item.key}"
                :key="index"
                class="nv"
            >{{item.num.toUpperCase()}}</div>
        </div>
        <div class="codeWarp" v-if="showCode">
            <div class="code">
                <input
                    type="text"
                    v-model="code"
                    minlength="17"
                    maxlength="17"
                    placeholder="Please enter your gift code"
                    class="codeinput"
                >
                <div
                    class="confirm"
                    v-if="!inviteSuccess"
                    v-loading="confirmLoading"
                    @click="inviteCodeSub"
                ></div>
                <div class="message">{{errorMessage}}</div>
                <el-form
                    v-if="inviteSuccess"
                    class="form"
                    ref="form"
                    :model="form"
                    label-position="right"
                    label-width="220px"
                >
                    <el-form-item
                        v-if="version=='v1'"
                        label="Your Email Address:"
                        prop="email"
                        :rules="[
      { type: 'email', trigger: ['blur', 'change'] }
    ]"
                    >
                        <el-input v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item v-if="version=='v1'" label="Verification Code:">
                        <el-input v-model="form.code" class="codeIn"></el-input>
                        <el-button
                            :disabled="codeSendTime>0"
                            @click.prevent="getCode()"
                            plain
                            class="codeBtn"
                        >
                            SEND
                            <span v-if="codeSendTime">({{codeSendTime}})</span>
                        </el-button>
                    </el-form-item>
                    <el-form-item v-if="version=='v2'" label="Server:">
                        <el-select
                            class="device"
                            v-model="form.serverName"
                            placeholder="select your server"
                        >
                            <el-option
                                v-for="item in serverListInfo"
                                :label="item.name"
                                :value="item.name"
                                :key="item.id"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item v-if="version=='v2'" label="UID:">
                        <el-input
                            v-model="form.roleId"
                            placeholder="UID can be found in Profile menu"
                        ></el-input>
                    </el-form-item>
                    <el-form-item v-if="version=='v2'" label="Avatar Name:">
                        <el-input v-model="form.roleName" placeholder="Your in-game nickname"></el-input>
                    </el-form-item>
                    <el-form-item label="OS:">
                        <el-select class="device" v-model="form.device" placeholder="IOS/Android">
                            <el-option label="Android" value="android"></el-option>
                            <el-option label="IOS" value="ios"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div
                    v-if="inviteSuccess"
                    class="confirm2"
                    v-loading="confirmLoading2"
                    @click="inviteCodeSub2"
                ></div>
                <div @click="showCode=false" class="close"></div>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
.app {
    .navs {
        position: fixed;
        top: 32%;
        left: 4%;
        background-color: #000000;
        width: 3px;
        z-index: 100;
        padding: 30px 0;
        transition: 0.5s;

        .nv {
            cursor: pointer;
            display: block;
            width: 40px;
            height: 40px;
            color: #fff;
            background-color: #000;
            border-radius: 50%;
            margin: 10px;
            text-align: center;
            position: relative;
            left: -29px;
            font-size: 15px;
            line-height: 40px;
            font-weight: bold;

            &.active {
                background-color: #194b96;
            }

            &:hover {
                background-color: #194b96;
            }
        }
    }

    .footer {
        padding-top: 100px;
        padding-bottom: 40px;
        background-color: #000000;
        text-align: center;
        font-size: 16px;
        color: #ffffff;

        img {
            display: inline-block;
            margin: 0 30px;
            width: 500px;
        }

        .text {
            display: inline-block;
            position: relative;
            top: -20px;

            .link {
                color: #ffffff;
                text-decoration: none;

                &:hover {
                    color: #FFC107;
                }
            }

            .spe {
                margin: 0 30px;
            }

            .tip {
                margin: 20px 0 30px;
            }
        }
    }

    .codeWarp {
        position: fixed;
        top: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.83);
        width: 100%;
        height: 100%;
        z-index: 100;

        .code {
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            width: 705px;
            max-height: 728px;
            min-height: 500px;
            top: 50%;
            transform: translateY(-50%);
            background-image: url('../assets/images/code.jpg');
            background-size: 100% auto;
            padding-top: 196px;
            box-sizing: border-box;
            border-bottom: 2px solid #448eeb;

            .codeinput {
                display: block;
                text-align: center;
                width: 500px;
                height: 44px;
                font-size: 16px;
                margin: 0 auto 20px;
                position: relative;
                left: 9px;
                border: none;
            }

            .confirm {
                height: 72px;
                width: 210px;
                background-image: url('../assets/images/01/now-n.png');
                background-size: 100% 100%;
                cursor: pointer;
                margin: 20px auto 20px;

                &:hover {
                    background-image: url('../assets/images/01/now-s.png');
                }
            }

            .message {
                color: red;
                font-size: 24px;
                line-height: 24px;
                width: 500px;
                margin: 10px auto;
                text-align: center;
            }

            .form {
                width: 600px;
                margin: 40px auto 20px;

                .codeIn {
                    width: 225px;
                }

                .codeBtn {
                    width: 150px;
                }

                .device {
                    width: 100%;
                }
            }

            .confirm2 {
                height: 75px;
                width: 265px;
                background-image: url('../assets/images/Redeem.jpg');
                background-size: 100% 100%;
                cursor: pointer;
                margin: 20px auto 20px;

                &:hover {
                    background-image: url('../assets/images/Redeem1.jpg');
                }
            }

            .close {
                width: 50px;
                height: 50px;
                position: absolute;
                right: -5px;
                top: -5px;
                background: url('../assets/images/close2.png');
                background-size: 100% 100%;
            }
        }
    }

    .videoWarp {
        position: absolute;
        left: -1000000px;
        background-color: rgba(0, 0, 0, 0.83);

        .iframe {
            width: 80%;
            height: 80%;
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;

            iframe {
                width: 100%;
                height: 100%;
            }

            .close {
                width: 50px;
                height: 50px;
                position: absolute;
                right: -50px;
                top: -50px;
                background: url('../assets/images/close2.png');
                background-size: 100% 100%;
            }
        }

        &.hidden {
            z-index: 100;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .video-js {
            width: 80%;
            height: 80%;
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
        }
    }

    .top {
        position: relative;
        min-height: 500px;

        .topNav {
            top: 0;
            position: absolute;
            right: 50px;

            .navbar {
                top: 0;
                border-top: 8px solid rgba(0, 0, 0, 0);
                margin: 0 10px;
                color: #ffffff;
                display: inline-block;
                font-size: 20px;
                padding: 20px 20px 0 0;
                min-width: 80px;
                text-align: center;
                position: relative;
                font-weight: bold;
                cursor: pointer;

                &:hover {
                    padding-top: 20px;
                    border-top: 8px solid #0078ff;
                    color: #fcff00;
                }

                &.active {
                    padding-top: 20px;
                    border-top: 8px solid #0078ff;
                }

                .next {
                    width: 10px;
                    position: absolute;
                    right: 0;
                    top: 21px;
                }
            }

			.navbar_link {
				text-decoration: none;
			}
        }

        >video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
        }

        >img {
            width: 100%;
            display: block;
        }

        .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            .logo {
                position: absolute;
                width: 14%;
                top: 30px;
                left: 30px;
            }

            .topNav {
                position: absolute;
                top: 10px;
                right: 0;
                width: 40%;
            }

            .centerVideo {
                position: absolute;
                bottom: 0px;
                left: 0;
                right: 0;
                margin: auto;
                height: 100%;
                width: 100%;
                text-align: center;

                .imgWarp {
                    position: absolute;
                    width: 65px;
                    height: 65px;
                    left: 50%;
                    top: -34%;
                    transform: translateX(-50%);
                    display: inline-block;
                    text-align: center;

                    &:hover {
                        .playAni {
                            transform: scale(1.2);
                            color: red;
                            // animation: 'play' 1.5s ease-in-out 0.4s infinite;
                        }

                        .img {
                            transform: scale(1.01);
                        }
                    }

                    .playAni {
                        color: #ffffff;
                        width: 100%;
                        height: 100%;
                        font-size: 180%;
                        position: absolute;
                        top: 0;
                        right: 0;
                        left: 0;
                        bottom: 0;
                        margin: auto;
                        background-size: 100% 100%;
                        transition: 0.7s ease-in-out;
                        border-radius: 50%;
                        transition: 300ms;
                        cursor: pointer;
                        pointer-events: auto;
                    }

                    .bg {
                        width: 380px;
                    }

                    .img {
                        position: absolute;
                        width: 364px;
                        height: 189px;
                        margin: auto;
                        top: 14px;
                        left: 43px;
                        cursor: pointer;
                        transition: 0.7s ease-in-out;
                        transition: 300ms;
                        transform: scale(0.9);
                    }

                    .play {
                        position: absolute;
                        width: 100%;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        cursor: pointer;
                        margin: auto;
                        transition: all 0.3s ease-out;
                        transition: 300ms;
                        cursor: pointer;
                    }
                }

                .pbtn {
                    width: 13%;
                    height: 23%;
                    right: 57%;
                    top: 69%;
                    display: inline-block;
                    cursor: pointer;
                    background-image: url('../assets/images/top/pb-n.png');
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                    background-position: bottom;
                    position: absolute;

                    &:hover {
                        background-image: url('../assets/images/top/pb-h.png');
                    }

                    &.code {
                        background-image: url('../assets/images/pc-gift1.png');

                        &:hover {
                            background-image: url('../assets/images/pc-gift2.png');
                        }
                    }
                }

                .btnWarp {
                    width: 37.7%;
                    height: 24%;
                    right: 41.5%;
                    top: 78.5%;
                    display: inline-block;
                    position: absolute;

                    .btn {
                        display: inline-block;
                        height: 45%;
                        width: 30%;
                        margin-top: 3%;
                        cursor: pointer;
                        background-repeat: no-repeat;
                        background-size: 100% auto;
                        background-position: bottom;

                        &.android {
                            background-image: url('../assets/images/androidbg.png');
                        }

                        &.ios {
                            background-image: url('../assets/images/iosbg.png');
                        }

                        &.code {
                            background-image: url('../assets/images/pc-gift1.png');

                            &:hover {
                                background-image: url('../assets/images/pc-gift2.png');
                            }
                        }
                    }
                }
            }
        }
    }

    .webWarp {
        position: relative;
        z-index: 2;
        margin: -20px 0;

        >img {
            width: 100%;
            min-height: 167px;
        }

        .content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            text-align: center;

            >img {
                position: relative;
                top: 25px;
            }

            .item {
                display: inline-block;
                color: #fff;
                font-size: 12px;
                text-decoration: none;
                vertical-align: middle;
                margin: 29px 0px;

                >img {
                    width: 88px;
                    height: 88px;
                }

                .label {
                    display: block;
                    margin: 10px;
                }
            }
        }
    }

    .img {
        width: 100%;
    }
}
</style>
<script type="text/ecmascript-6">
import BasePage from "../extend/BasePage";
import nav01 from "./nav01";
import nav02 from "./nav02";
import nav03 from "./nav03";
import nav04 from "./nav04";
import nav05 from "./nav05";
import nav06 from "./nav06";

var scroll = require("scroll");
var page = require("scroll-doc")();

export default {
    name: "home",
    mixins: [BasePage],
    pageName: "Azur Lane Official Website",
    mounted: function() {
        var me = this;
        window.onscroll = function(ev) {
            me.scroll(ev);
        };
        this.ema.bind("playVideo", data => {
            this.showVideo = true;
            this.videoUrl = data.url;
        });
        var images = [require("../assets/images/pc-gift2.png")];
        this.preloadImg(images);
        this.getServerList();
    },
    components: { nav01, nav02, nav03, nav04, nav05, nav06 },
    data: function() {
        return {
            version: "v2",
            code: "",
            form: {
                email: "",
                code: "",
                device: "android",
                serverName: "",
                roleId: "",
                roleName: ""
            },
            serverListInfo: [],
            confirmLoading: false,
            confirmLoading2: false,
            codeSendTime: 0,
            inviteSuccess: false,
            showCode: false,
            navshow: false,
            navsPos: [],
            activeKey: "top",
            navs: [
                { num: "top", key: "top" },
                { num: "01", key: "06" },
                // {num: '02', key: '01'},
                { num: "02", key: "02" },
                { num: "03", key: "03" },
                { num: "04", key: "05" },
                { num: "05", key: "04" }
            ],
            vd: require("../assets/video/bg.mp4"),
            videoUrl: "https://www.youtube.com/embed/nhsu-N3_pwk",
            showVideo: false,
            errorMessage: ""
        };
    },
    methods: {
        reset: function(params) {
            this.form = {
                email: "",
                code: "",
                device: "android",
                serverName: "",
                roleId: "",
                roleName: ""
            };
            this.errorMessage = "";
            this.inviteSuccess = false;
            this.showCode = false;
            this.code = "";
        },
        inviteCodeSub: function(params) {
            if (this.confirmLoading) {
                return;
            }
            this.confirmLoading = true;
            fetch("https://azurlane.yo-star.com/pre/code/verify", {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    version: this.version,
                    code: this.code
                })
            })
                .then(res => {
                    if (res.status >= 400) {
                        throw new Error("status error", res.status);
                    }
                    return res.json();
                })
                .then(info => {
                    this.confirmLoading = false;
                    if (info.code == 20000) {
                        this.inviteSuccess = true;
                        this.errorMessage =
                            "The code is valid! Please enter your information to redeem your gift.";
                    } else {
                        this.inviteSuccess = false;
                        this.errorMessage = info.message;
                    }
                })
                .catch(err => {
                    this.confirmLoading = false;
                    console.log(err);
                });
        },
        inviteCodeSub2: function(params) {
            if (this.confirmLoading2) {
                return;
            }

            var data = {};
            data.version = this.version;
            data.device = this.form.device;
            data.code = this.code;
            if (this.version == "v1") {
                data.email = this.form.email;
                data.verificationCode = this.form.code;
            } else if (this.version == "v2") {
                data.serverName = this.form.serverName;
                data.roleId = this.form.roleId;
                data.roleName = this.form.roleName;
            }
            for (const key in data) {
                if (!data[key]) {
                    alert("Please check the incomplete information");
                    return;
                }
            }
            // var device = this.form.device == 'android' ? 'Android' : 'IOS'
            if (
                !confirm(
                    `Please confirm your information. Once you click the Confirm button, The process cannot be redone. If you met any problem, please contact our customer service.`
                )
            ) {
                return;
            }
            this.confirmLoading2 = true;
            fetch("https://azurlane.yo-star.com/pre/code/submit", {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => {
                    if (res.status >= 400) {
                        throw new Error("status error", res.status);
                    }
                    return res.json();
                })
                .then(info => {
                    this.confirmLoading2 = false;
                    if (info.code == 20000) {
                        this.reset();
                        alert(
                            "Successfully Redeemed! The gift will be sent to your in-game mailbox in several work days."
                        );
                    } else {
                        alert(info.message);
                    }
                })
                .catch(err => {
                    this.confirmLoading2 = false;
                    console.log(err);
                });
        },
        getCode: function(params) {
            // get
            var me = this;
            this.codeSendTime = 60;
            this.timer = setInterval(function(params) {
                me.codeSendTime--;
                if (me.codeSendTime <= 0) {
                    me.codeSendTime = 0;
                    clearInterval(me.timer);
                }
            }, 1000);
            if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.form.email)) {
                alert("email is not a valid email");
                return;
            }
            fetch("https://azurlane.yo-star.com/pre/code/emailVerify", {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    version: this.version,
                    code: this.code,
                    email: this.form.email
                })
            })
                .then(res => {
                    if (res.status >= 400) {
                        throw new Error("status error", res.status);
                    }
                    return res.json();
                })
                .then(info => {
                    if (info.code == 20000) {
                    } else {
                        this.codeSendTime = 0;
                        alert(info.message);
                    }
                })
                .catch(err => {
                    this.codeSendTime = 0;
                    console.log(err);
                });
        },
        downapp: function() {
            alert("coming soon");
        },
        getServerList: function(params) {
            fetch("https://azurlane.yo-star.com/pre/code/serverlist", {
                method: "get",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
                .then(res => {
                    if (res.status >= 400) {
                        throw new Error("status error", res.status);
                    }
                    return res.json();
                })
                .then(info => {
                    if (info.code == 20000) {
                        this.serverListInfo = info.data.serverlist || [];
                        if (this.serverListInfo[0]) {
                            this.form.serverName = this.serverListInfo[0].name;
                        }
                    } else {
                        alert(info.message);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        initAllRect: function(params) {
            this.navs.forEach(element => {
                if (this.$refs[element.key]) {
                    var box = this.$refs[element.key].getBoundingClientRect();
                    console.log("box", box);
                }
            });
        },
        scroll: function(params) {
            this.navs.forEach(element => {
                if (this.$refs[element.key]) {
                    var box = {};
                    if (!this.$refs[element.key].getBoundingClientRect) {
                        box = this.$refs[
                            element.key
                        ].$el.getBoundingClientRect();
                    } else {
                        box = this.$refs[element.key].getBoundingClientRect();
                    }
                    if (box.top < 100) {
                        this.activeKey = element.key;
                    }
                }
            });
        },
        go: function(na1) {
            if (this.$refs[na1]) {
                var box = {};
                if (!this.$refs[na1].getBoundingClientRect) {
                    box = this.$refs[na1].$el.getBoundingClientRect();
                } else {
                    box = this.$refs[na1].getBoundingClientRect();
                }
                console.log("box", box);
                scroll.top(page, box.top + document.body.scrollTop);
            }
        },
        close: function(params) {
            this.showVideo = false;
        },
        play: function(params) {
            this.showVideo = true;
        }
    }
};
</script>
