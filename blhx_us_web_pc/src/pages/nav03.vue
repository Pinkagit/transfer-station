<template>
  <div class="page">
    <img src="../assets/images/03/bg.jpg" class="img">
    <div class="cover">
      <div class="title">
      </div>
      <div class="content">
        <audio ref="say" @canplay="canplay=true" @pause="pause" @ended="playing=false" @playing="playing=true" v-if="selectCamp.roles[roleIndex]" :src="selectCamp.roles[roleIndex].say"></audio>
        <div @click="roleIndex=index" v-for="(item,index) in selectCamp.roles" :key="index" class="charItem" :class="getCharClass(index)">
          <div @click="roleIndex=index" class="warpin"></div>
          <img :src="item.img2" v-if="roleIndex==index">
          <img :src="item.img" v-else>
          <img :src="item.img1" v-if="item.img1&&roleIndex==index" class="descimg">
          <div class="descimg descplay" v-if="roleIndex==index&&item.say&&canplay" @click="playAudio(item.say)">
            <img v-if="playing" src="../assets/images/03/chuanming1.gif">
            <img v-else src="../assets/images/03/chuanming2.png">
          </div>
        </div>
      </div>
      <div class="navcon">
        <div class="nav prev" @click="pre"></div>
        <div class="nav next" @click="next"></div>
      </div>
    </div>
    <div class="cover-right">
      <div class="title">
      </div>
      <div class="content">
        <div @click="campIndex=index" v-for="(item,index) in list" :key="index" class="campItem" :class="getCampClass(index)">
          <img :src="item.img" v-if="campIndex==index">
          <img :src="item.img1" v-else>
        </div>
      </div>
      <img :src="selectCamp.img2" class="slider">
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  .page {
    position: relative;
    min-height: 500px;

    .img {
      width: 100%;
      display: block;
    }

    .cover {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: row;

      .navcon {
        position: absolute;
        width: 28%;
        bottom: 19%;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 100;

        .nav {
          position: absolute;
          width: 65px;
          height: 51px;
          background-size: 100% 100%;
          cursor: pointer;

          &.prev {
            left: 0;
            background-image: url('../assets/images/prev-a.png');

            &:hover {
              background-image: url('../assets/images/prev-aa.png');
            }
          }

          &.next {
            right: 0;
            background-image: url('../assets/images/next-a.png');

            &:hover {
              background-image: url('../assets/images/next-aa.png');
            }
          }
        }
      }

      .content {
        display: block;
        flex-direction: column;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0%;
        width: 100%;
        height: 100%;

        .charItem {
          width: 50%;
          display: block;
          transition: all 0.3s ease-out;
          left: 0;
          top: 12%;
          position: absolute;
          cursor: pointer;
          pointer-events: none;

          .warpin {
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            height: 70%;
            width: 35%;
            top: 12%;
            pointer-events: auto;
          }

          .descimg {
            position: absolute;
            top: 63%;
            left: 12%;
            right: 0;
            margin: auto;
            width: 30%;
            transition: all 0.3s ease-out;
            animation-duration: 0.5s;
            animation-fill-mode: both;
            animation-delay: 0.3s;
            animation-name: fadeInUp;

            &.descplay {
              left: -27%;
              width: 6%;
              pointer-events: auto;

              img {
                width: 100%;
              }
            }
          }

          &.c0 {
            transform: translate3d(-20%, 0px, 0) scale(0.6);
          }

          &.c1 {
            transform: translate3d(10%, 0px, 0) scale(0.8);
          }

          &.c2 {
            transform: translate3d(50%, 0px, 0) scale(1);
            z-index: 2;
          }

          &.c3 {
            transform: translate3d(90%, 0px, 0) scale(0.8);
          }

          &.c4 {
            transform: translate3d(120%, 0px, 0) scale(0.6);
            opacity: 0;
            display: none;
          }

          img {
            width: 100%;
          }
        }
      }

      .title {
        position: absolute;
        left: 10%;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        color: #000000;
        top: 20px;

        .slid {
          width: 37%;
          height: 3px;
          margin: 5px auto;
          background-color: #000000;
        }
      }
    }

    .cover-right {
      position: absolute;
      width: 25%;
      height: 100%;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: row;

      .content {
        display: block;
        flex-direction: column;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 100%;

        .campItem {
          width: 35%;
          border-radius: 50%;
          display: block;
          transition: all 0.3s ease-out;
          top: 32%;
          position: absolute;
          margin-left: 20%;
          cursor: pointer;

          &.c0 {
            transform: translate3d(0, -60%, 0) scale(1.1);
          }

          &.c1 {
            transform: translate3d(0, 40%, 0) scale(1.1);
          }

          &.c2 {
            transform: translate3d(0, 105%, 0) scale(1.2);
            z-index: 2;
          }

          &.c3 {
            transform: translate3d(0, 260%, 0) scale(1.1);
          }

          &.c4 {
            transform: translate3d(0, 360%, 0) scale(1.1);
          }

          img {
            width: 100%;
          }
        }
      }

      .slider {
        height: 80%;
        position: absolute;
        right: 15%;
        top: 18%;
      }

      .title {
        position: absolute;
        left: 10%;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        color: #ffffff;
        top: 20px;

        .slid {
          width: 37%;
          height: 3px;
          margin: 5px auto;
          background-color: #ffffff;
        }
      }
    }
  }
</style>
<script type="text/ecmascript-6">
  import BaseComponent from '../extend/BaseComponent'

  export default {
    name: 'nav03',
    mixins: [BaseComponent],
    mounted: function () {
      var images = []
      this.list.forEach(value => {
        value.img && images.push(value.img)
        value.img1 && images.push(value.img1)
        value.roles.forEach(role => {
          role.img && images.push(role.img)
          role.img1 && images.push(role.img1)
          role.img2 && images.push(role.img2)
        })
      })
      this.preloadImg(images)
    },
    components: {},
    data: function () {
      return {
        campIndex: 0,
        roleIndex: 2,
        playing: false,
        canplay: false,
        list: [
          {
            img: require('../assets/images/03/zy/baiyin.png'),
            img1: require('../assets/images/03/zy/baiyin1.png'),
            img2: require('../assets/images/03/zy/baiyin2.png'),
            roles: [
              {
                img: require('../assets/images/03/baiyin/beili.png'),
                img1: require('../assets/images/03/baiyin/beili1.png'),
                img2: require('../assets/images/03/baiyin/beili2.png'),
                say: require('../assets/audio/peo/beili.mp3')
              },
              {
                img: require('../assets/images/03/baiyin/haima.png'),
                img1: require('../assets/images/03/baiyin/haima1.png'),
                img2: require('../assets/images/03/baiyin/haima2.png'),
                say: require('../assets/audio/peo/haima.mp3')
              },
              {
                img: require('../assets/images/03/baiyin/jiajia.png'),
                img1: require('../assets/images/03/baiyin/jiajia1.png'),
                img2: require('../assets/images/03/baiyin/jiajia2.png'),
                say: require('../assets/audio/peo/jiajia.mp3')

              },
              {
                img: require('../assets/images/03/baiyin/lafei.png'),
                img1: require('../assets/images/03/baiyin/lafei1.png'),
                img2: require('../assets/images/03/baiyin/lafei2.png'),
                say: require('../assets/audio/peo/lafei.mp3')
              },
              {
                img: require('../assets/images/03/baiyin/kedie.png'),
                img1: require('../assets/images/03/baiyin/kedie1.png'),
                img2: require('../assets/images/03/baiyin/kedie2.png'),
                say: require('../assets/audio/peo/kedie.mp3')
              }
            ]
          },
          {
            img: require('../assets/images/03/zy/chongying.png'),
            img1: require('../assets/images/03/zy/chongying1.png'),
            img2: require('../assets/images/03/zy/chongying2.png'),
            roles: [
              {
                img: require('../assets/images/03/chongying/chichen.png'),
                img1: require('../assets/images/03/chongying/chichen1.png'),
                img2: require('../assets/images/03/chongying/chichen2.png'),
                say: require('../assets/audio/peo/chicheng.mp3')
              },
              {
                img: require('../assets/images/03/chongying/gaoxiong.png'),
                img1: require('../assets/images/03/chongying/gaoxiong1.png'),
                img2: require('../assets/images/03/chongying/gaoxiong2.png'),
                say: require('../assets/audio/peo/gaoxiong.mp3')
              },
              {
                img: require('../assets/images/03/chongying/jiahe.png'),
                img1: require('../assets/images/03/chongying/jiahe1.png'),
                img2: require('../assets/images/03/chongying/jiahe2.png'),
                say: require('../assets/audio/peo/jiahe.mp3')
              },
              {
                img: require('../assets/images/03/chongying/linbo.png'),
                img1: require('../assets/images/03/chongying/linbo1.png'),
                img2: require('../assets/images/03/chongying/linbo2.png'),
                say: require('../assets/audio/peo/linbo.mp3')
              },
              {
                img: require('../assets/images/03/chongying/moye.png'),
                img1: require('../assets/images/03/chongying/moye1.png'),
                img2: require('../assets/images/03/chongying/moye2.png'),
                say: require('../assets/audio/peo/moye.mp3')
              }
            ]
          },
          {
            img: require('../assets/images/03/zy/donghuang.png'),
            img1: require('../assets/images/03/zy/donghuang1.png'),
            img2: require('../assets/images/03/zy/donghuang2.png'),
            roles: [
              {
                img: require('../assets/images/03/comingsoon.png'),
                img2: require('../assets/images/03/comingsoon2.png')
              },
              {
                img: require('../assets/images/03/donghuang/ninghai.png'),
                img1: require('../assets/images/03/donghuang/ninghai1.png'),
                img2: require('../assets/images/03/donghuang/ninghai2.png'),
                say: require('../assets/audio/peo/ninghai.mp3')
              },
              {
                img: require('../assets/images/03/donghuang/pinghai.png'),
                img1: require('../assets/images/03/donghuang/pinghai1.png'),
                img2: require('../assets/images/03/donghuang/pinghai2.png'),
                say: require('../assets/audio/peo/pinghai.mp3')
              },
              {
                img: require('../assets/images/03/comingsoon.png'),
                img2: require('../assets/images/03/comingsoon2.png')
              }, {
                img: require('../assets/images/03/comingsoon.png'),
                img2: require('../assets/images/03/comingsoon2.png')
              }
              // {
              //   img: require('../assets/images/03/donghuang/anshan.png'),
              //   img1: require('../assets/images/03/donghuang/anshan1.png'),
              //   img2: require('../assets/images/03/donghuang/anshan2.png')
              // },
              // {
              //   img: require('../assets/images/03/donghuang/changchun.png'),
              //   img1: require('../assets/images/03/donghuang/changchun1.png'),
              //   img2: require('../assets/images/03/donghuang/changchun2.png'),
              // },

              // {
              //   img: require('../assets/images/03/donghuang/yixian.png'),
              //   img1: require('../assets/images/03/donghuang/yixian1.png'),
              //   img2: require('../assets/images/03/donghuang/yixian2.png')
              // }
            ]
          },
          {
            img: require('../assets/images/03/zy/huangjia.png'),
            img1: require('../assets/images/03/zy/huangjia1.png'),
            img2: require('../assets/images/03/zy/huangjia2.png'),
            roles: [
              {
                img: require('../assets/images/03/huangjia/aidingbao.png'),
                img1: require('../assets/images/03/huangjia/aidingbao1.png'),
                img2: require('../assets/images/03/huangjia/aidingbao2.png'),
                say: require('../assets/audio/peo/aidingbao.mp3')
              },
              {
                img: require('../assets/images/03/huangjia/beiye.png'),
                img1: require('../assets/images/03/huangjia/beiye1.png'),
                img2: require('../assets/images/03/huangjia/beiye2.png'),
                say: require('../assets/audio/peo/beiye.mp3')
              },
              {
                img: require('../assets/images/03/huangjia/guanghui.png'),
                img1: require('../assets/images/03/huangjia/guanghui1.png'),
                img2: require('../assets/images/03/huangjia/guanghui2.png'),
                say: require('../assets/audio/peo/guanghui.mp3')
              },
              {
                img: require('../assets/images/03/huangjia/hude.png'),
                img1: require('../assets/images/03/huangjia/hude1.png'),
                img2: require('../assets/images/03/huangjia/hude2.png'),
                say: require('../assets/audio/peo/hude.mp3')
              },
              {
                img: require('../assets/images/03/huangjia/yinghuochong.png'),
                img1: require('../assets/images/03/huangjia/yinghuochong1.png'),
                img2: require('../assets/images/03/huangjia/yinghuochong2.png'),
                say: require('../assets/audio/peo/yinghuochong.mp3')
              }
            ]
          },
          {
            img: require('../assets/images/03/zy/tiexue.png'),
            img1: require('../assets/images/03/zy/tiexue1.png'),
            img2: require('../assets/images/03/zy/tiexue2.png'),
            roles: [
              {
                img: require('../assets/images/03/tiexue/beizhai.png'),
                img1: require('../assets/images/03/tiexue/beizhai1.png'),
                img2: require('../assets/images/03/tiexue/beizhai2.png'),
                say: require('../assets/audio/peo/beizhai.mp3')
              },
              {
                img: require('../assets/images/03/tiexue/deyizhi.png'),
                img1: require('../assets/images/03/tiexue/deyizhi1.png'),
                img2: require('../assets/images/03/tiexue/deyizhi2.png'),
                say: require('../assets/audio/peo/deyizhi.mp3')
              },
              {
                img: require('../assets/images/03/tiexue/shaen.png'),
                img1: require('../assets/images/03/tiexue/shaen1.png'),
                img2: require('../assets/images/03/tiexue/shaen2.png'),
                say: require('../assets/audio/peo/shaen.mp3')
              },
              {
                img: require('../assets/images/03/tiexue/sipei.png'),
                img1: require('../assets/images/03/tiexue/sipei1.png'),
                img2: require('../assets/images/03/tiexue/sipei2.png'),
                say: require('../assets/audio/peo/sipei.mp3')
              },
              {
                img: require('../assets/images/03/tiexue/z23.png'),
                img1: require('../assets/images/03/tiexue/z231.png'),
                img2: require('../assets/images/03/tiexue/z232.png'),
                say: require('../assets/audio/peo/z23.mp3')
              }
            ]
          }
        ]
      }
    },
    computed: {
      selectRole: function (params) {
        return this.selectCamp[this.roleIndex]
      },
      selectCamp: function (params) {
        return this.list[this.campIndex]
      }
    },
    watch: {
      roleIndex: function (params) {
        this.$refs['say'].currentTime = 0
        this.$refs['say'].pause()
        this.playing = false
      },
      campIndex: function (params) {
        this.$refs['say'].currentTime = 0
        this.$refs['say'].pause()
        this.playing = false
      }
    },
    methods: {
      pause: function (params) {
        this.playing = false
      },
      getCampClass: function (k) {
        var csskey = ['c2', 'c3', 'c4', 'c0', 'c1']
        var index = k - this.campIndex
        if (index >= 0) {
        } else {
          index = csskey.length + index
        }
        return csskey[index]
      },
      getCharClass: function (k) {
        var csskey = ['c2', 'c3', 'c4', 'c0', 'c1']
        var index = k - this.roleIndex
        if (index >= 0) {
        } else {
          index = csskey.length + index
        }
        return csskey[index]
      },
      next: function (params) {
        this.roleIndex = this.roleIndex + 1
        if (this.roleIndex >= this.list[this.campIndex].roles.length) {
          this.roleIndex = 0
        }
      },
      playAudio: function (url) {
        if (this.playing) {
          this.$refs['say'].pause()
        } else {
          this.$refs['say'].play()
        }
      },
      pre: function (params) {
        this.roleIndex = this.roleIndex - 1
        if (this.roleIndex < 0) {
          this.roleIndex = this.list[this.campIndex].roles.length - 1
        }
      }
    }
  }
</script>
