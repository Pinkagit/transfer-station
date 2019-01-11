<template>
    <div class="page">
        <img
            src="../assets/images/offline_events/offline_events_bg.jpg"
            @load="imageLoaded"
            class="img"
            alt
        >
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <div class="cover" v-show="isShow">
                <div class="sp1">
                    <div class="warp">
                        <div class="box">
                            <p class="title">PHOTO</p>
                            <div class="btn-wrap wrap-top">
                                <span
                                    class="iconfont icon-bold-arrow-left sp1-button"
                                    @click="toTop"
                                    v-show="toTop_isshow"
                                ></span>
                            </div>
                            <div class="btn-wrap wrap-bottom">
                                <span
                                    class="iconfont icon-bold-arrow-left sp1-button"
                                    @click="toBottom"
                                    v-show="toBottom_isshow"
                                ></span>
                            </div>
                            <div class="content">
                                <swiper
                                    style="content-swiper"
                                    :options="swiperOption"
                                    ref="mySwiper"
                                >
                                    <!-- slides -->
                                    <swiper-slide
                                        v-for="(imgArr, Aindex) in format_imglist"
                                        :key="Aindex"
                                    >
                                        <ul>
                                            <li
                                                class="img-wrap"
                                                v-for="(item, Bindex) in imgArr"
                                                :key="Bindex"
                                            >
                                                <div class="imgbox" @click="selectWarper(Aindex, Bindex)">
                                                    <img :src="item" alt>
                                                </div>
                                            </li>
                                        </ul>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sp2">
                    <div class="textWrap">
                        <div class="text">Azur Lane EN was present, and sponsored, Comic Fiesta 2018! Held annually in Kuala Lumpur, Malaysia. This event also marked the first offline gathering for Azur Lane EN. Thousands of comic artists, illustrators, cosplayers and fans of the culture gathered at the event.</div>
                        
                        <div class="text">
                            This also marked the first time staff from Yostar Games took to the floor and met face-to-face with the many waves of adoring, passionate, supporting fans of Azur Lane EN. The turnout could not have been better, as fans interacted with our cosplayers, raffle tickets were drawn, prizes were given out and Azur Lane merchandise were well-received at the Azur Lane booth.
                        </div>

                        <div class="text">
                            Yostar Games looks forward to seeing you, Commander! Stay tuned to our social media, there you will find the latest news on all things Azur Lane -- including future offline event news.
                        </div>
                    </div>

                </div>
            </div>
        </transition>
        <!-- imgWall -->
        <transition enter-active-class="animated pulse" leave-active-class="animated fadeOut">
            <div v-show="showWallpaper" class="imageViewer">
                <div class="imgwarp" ref="imgwarp">
                    <transition-group tag="div" :enter-active-class="enterClass" :leave-active-class="leaveClass">
                        <template v-for="(item, index) in imglist">
                            <img v-if="index == selectedIndex" ref="showImg" @load="showimgLoad" class="img" :src="item" :key="index">
                        </template>
                    </transition-group>
                    
                    <div class="close" @click="WallClose" :style="closeStyle"></div>
                    <div class="navcon">
                        <div class="nav prev" v-preventReClick="500" v-show="nav_p_isshow" @click="switchImg('prev', $event)"></div>
                        <div class="nav next" v-preventReClick="500" v-show="nav_n_isshow" @click="switchImg('next', $event)"></div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
.swiper-container {
    height: 100% !important;
}

.swiper-slide {
    height: 100% !important;
}

.page {
    position: relative;
    min-height: 500px;

    .img {
        display: block;
        width: 100%;
    }

    .cover {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;

        .sp1 {
            flex: 1;
            position: relative;

            .warp {
                position: absolute;
                width: 63.4%;
                height: 76%;
                top: 14.44%;
                right: 0;
                border-left: 2px solid #8bc1ff;
                box-sizing: border-box;
                padding: 25px 10px 48px;

                .box {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    box-sizing: border-box;
                    padding: 30px 0;
                    background: rgba(0, 0, 0, 0.1);

                    .title {
                        position: absolute;
                        height: 35px;
                        font-size: 28px;
                        font-weight: 700;
                        color: #fff;
                        line-height: 35px;
                        top: 0;
                        left: 5px;
                    }

                    .btn-wrap {
                        position: absolute;
                        width: 100%;
                        height: 35px;
                        left: 0;
                        text-align: center;
                        line-height: 35px;

                        span {
                            cursor: pointer;
                        }
                    }

                    .wrap-top {
                        top: 0;

                        .sp1-button {
                            display: inline-block;
                            font-size: 32px;
                            color: #0047bd;
                            transform: rotate(90deg);
                        }
                    }

                    .wrap-bottom {
                        bottom: 0;

                        .sp1-button {
                            display: inline-block;
                            font-size: 32px;
                            color: #0047bd;
                            transform: rotate(-90deg);
                        }
                    }

                    .content {
                        width: 100%;
                        height: 100%;
                        overflow: hidden;

                        // background: rgba(0, 0, 0, 0.6); //
                        ul {
                            width: 100%;
                            height: auto;
                            overflow: hidden;
                            position: relative;
                            top: 0;
                            transition: all 1s;
                        }

                        .img-wrap {
                            display: block;
                            float: left;
                            width: 33.33%;
                            height: 33.33%;
                            padding: 5px 5px;
                            box-sizing: border-box;

                            .imgbox {
                                width: 100%;
                                height: 100%;
                                background: rgba(0, 0, 0, 0.8);
                                cursor: pointer;

                                img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                }
                            }
                        }
                    }
                }
            }
        }

        .sp2 {
            flex: 0.846;
            position: relative;
            font-size: 12px;

            .textWrap {
                width: 59.50%;
                height: 0;
                font-size: 12px;

                border: 1px solid lightblue;
                margin-left: 15px;
                padding-bottom: 50%;

                @media screen and (min-width: 1320px) {
                    & {
                        font-size: calc(100% + 4 * (100vw - 1320px) / 600);
                    }
                }

                .text {
                    font-size: 1em;
                    color: #fff;
                    text-align: center;
                    margin-left: 5%;
                    margin-right: 5%;
                    
                    &:nth-of-type(1) {
                        margin-top: 15%;
                    }

                    &:nth-of-type(2) {
                        margin-top: 5%;
                    }

                    &:nth-of-type(3) {
                        margin-top: 5%;
                    }
                }
            }
        }
    }

    .imageViewer {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.83);
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 10000;

        .imgwarp {
            position: absolute;
            top: 10%;
            bottom: 10%;
            left: 10%;
            right: 10%;
            height: 80%;
            width: 80%;
            max-height: 80%;
            max-width: 1200px;
            margin: auto;

            &.mini {
                width: 600px;

                .down {
                    right: 10%;
                    top: 1px;

                    img {
                        width: 100%;
                    }
                }

                .img {
                }
            }

            .navcon {
                position: absolute;
                width: 100%;
                bottom: 53%;
                left: 0;
                right: 0;
                margin: auto;

                .nav {
                    position: absolute;
                    width: 55px;
                    height: 41px;
                    background-size: 100% 100%;
                    cursor: pointer;

                    &.prev {
                        background-image: url('../assets/images/prev-a.png');
                        left: -10%;

                        &:hover {
                            background-image: url('../assets/images/prev-aa.png');
                        }
                    }

                    &.next {
                        background-image: url('../assets/images/next-a.png');
                        right: -10%;

                        &:hover {
                            background-image: url('../assets/images/next-aa.png');
                        }
                    }
                }
            }

            .down {
                width: 24%;
                height: 60px;
                position: absolute;
                right: 1%;
                top: 10px;
                background-size: 100% 100%;
                cursor: pointer;
                font-size: 14px;
                color: #ffffff;
            }

            .close {
                width: 60px;
                height: 60px;
                position: absolute;
                right: -10px;
                top: -10px;
                background: url('../assets/images/close2.png');
                background-size: 100% 100%;
                cursor: pointer;
            }

            .img {
                border: 1px solid #000000;
                max-width: 100%;
                max-height: 100%;
                width: auto;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
            }
        }
    }
}
</style>

<script>
export default {
    data: () => ({
        // sp1
        imglist: [
            require("../assets/images/offline_events/comic_fiesta/1.jpg"),
            require("../assets/images/offline_events/comic_fiesta/2.jpg"),
            require("../assets/images/offline_events/comic_fiesta/3.jpg"),
            require("../assets/images/offline_events/comic_fiesta/4.jpg"),
            require("../assets/images/offline_events/comic_fiesta/5.jpg"),
            require("../assets/images/offline_events/comic_fiesta/6.jpg"),
            require("../assets/images/offline_events/comic_fiesta/7.jpg"),
            require("../assets/images/offline_events/comic_fiesta/8.jpg"),
            require("../assets/images/offline_events/comic_fiesta/9.jpg"),
            require("../assets/images/offline_events/comic_fiesta/10.jpg"),
            require("../assets/images/offline_events/comic_fiesta/11.jpg"),
            require("../assets/images/offline_events/comic_fiesta/12.jpg"),
            require("../assets/images/offline_events/comic_fiesta/13.jpg"),
            require("../assets/images/offline_events/comic_fiesta/14.jpg"),
            require("../assets/images/offline_events/comic_fiesta/15.jpg"),
            require("../assets/images/offline_events/comic_fiesta/16.jpg"),
            require("../assets/images/offline_events/comic_fiesta/17.jpg"),
            require("../assets/images/offline_events/comic_fiesta/18.jpg")
        ],
        isShow: false,
        showWallpaper: false,

        closeStyle: {},
        wallDir: '',
        selectedIndex: -1,
        swiperOption: {
            direction: "vertical",
            initialSlide: 0,
        },
        activeSwiper: null,

        // sp2
    }),
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        },
        nav_p_isshow() {
            return this.selectedIndex > 0;
        },
        nav_n_isshow() {
            return this.selectedIndex < this.imglist.length - 1;
        },
        toTop_isshow() {
            if(this.activeSwiper) {
                return this.activeSwiper.activeIndex > 0;
            }
        },
        toBottom_isshow() {
            if(this.activeSwiper) {
                return this.activeSwiper.activeIndex < this.format_imglist.length - 1;
            }
        },
        format_imglist() {
            return this.sliceArray(this.imglist, 9);
        },
        enterClass() {
            return `animated ${this.wallDir=='next'?'fadeInLeft': (this.wallDir == ''?'fadeIn': 'fadeInRight')}`
        },
        leaveClass() {
            return `animated ${this.wallDir=='next'?'fadeOutRight': (this.wallDir == '' ? 'fadeOut': 'fadeOutLeft')}`
        },
    },
    mounted() {
        this.activeSwiper = this.swiper;
    },
    watch: {
    },
    methods: {
        toTop() {
            this.swiper.slidePrev(1000, false);
        },
        toBottom() {
            this.swiper.slideNext(1000, false);
        },
        sliceArray(array, size) {
            //分割数组
            let result = [];
            for (let x = 0; x < Math.ceil(array.length / size); x++) {
                let start = x * size;
                let end = start + size;
                result.push(array.slice(start, end));
            }
            return result;
        },
        imageLoaded() {
            this.isShow = true;
        },
        selectWarper(Aindex, Bindex) {
            this.showWallpaper = true;
            this.selectedIndex = Aindex * 9 + Bindex;
        },
        showimgLoad() {
        },
        switchImg(dir, event) {
            if(event.target.disabled) {
                // 点击过于频繁
                return;
            }
            
            if(dir == 'next') {
                this.wallDir = 'next';
                
                if(this.selectedIndex  < this.imglist.length - 1) {
                    this.selectedIndex += 1;
                }
            } else if(dir == 'prev') {
                this.wallDir = 'prev';
                
                if(this.selectedIndex > 0) {
                    this.selectedIndex -= 1;
                }
            }
        },
        WallClose() {
            this.selectedIndex = -1;
            setTimeout(()=> {
                this.showWallpaper = false;
            }, 200)
            this.wallDir = '';
        }
    }
};
</script>
