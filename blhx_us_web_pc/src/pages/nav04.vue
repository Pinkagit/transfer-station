<template>
  <div class="page">
    <img src="../assets/images/04/bg.jpg" class="img">
    <div class="cover">
      <div class="title">
      </div>
      <div class="content">
        <div class="itemWcarp" v-show="selectCamp.text=='GAME PV'">
          <div v-for="(item,index) in selectCamp.roles" :key="'pv'+index" @click="playVideo(index,item)" :class="getCharClass(index)" class="charItem">
            <img :src="item.img">
            <div class="play iconfont icon-iconbofang" v-if="index==roleIndex">
            </div>
          </div>
        </div>
        <div class="itemWcarp" v-show="selectCamp.text=='WALLPAPER'">
          <div v-for="(item,index) in selectCamp.roles" :key="'wp'+index" @click="selectWarper(index)" class="charItem" :class="getCharClass(index)">
            <img :src="item.img">
          </div>
          </div>
          <div class="itemWcarp" v-show="selectCamp.text=='COMIC'">
            <div v-for="(item,index) in selectCamp.roles" :key="'co'+index" @click="selectWarper(index)" class="charItem" :class="getCharClass(index)">
              <img :src="item.img">
          </div>
            </div>
          </div>
          <div class="navcon">
            <div class="nav prev" @click="pre"></div>
            <div class="nav next" @click="next"></div>
          </div>
        </div>
        <div class="cover-right">
          <div class="content">
            <template v-for="(item,index) in list">
              <div @click="campIndex=index" class="campItem" :class="{'active':campIndex==index}">
                <div class="spwarp">
                  <div class="sp"></div>
                </div>
                {{item.text}}
              </div>
              <span class="spbot" v-if="index!=list.length-1"></span>
            </template>
          </div>
        </div>
        <div v-if="showWallpaper" class="imageViewer">
          <div class="imgwarp" :class="{'mini':selectCamp.text=='COMIC'}">
            <img class="img" :src="selectCamp.roles[roleIndex].imgbz">
            <div class="down" @click="down">
              <img src="../assets/images/04/down.png" alt="">
        </div>
              <div class="close" @click="showWallpaper=false"></div>
              <div class="navcon">
                <div class="nav prev" @click="preImg"></div>
                <div class="nav next" @click="preImg"></div>
              </div>
            </div>

          </div>
        </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
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
      overflow: hidden;

      .navcon {
        position: absolute;
        width: 28%;
        bottom: 24%;
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
            background-image: url('../assets/images/prev.png');
            left: -10%;

            &:hover {
              background-image: url('../assets/images/prev-a.png');
            }
          }

          &.next {
            background-image: url('../assets/images/next.png');
            right: -10%;

            &:hover {
              background-image: url('../assets/images/next-a.png');
            }
          }
        }
      }

      .content {
        display: block;
        flex-direction: column;
        position: absolute;
        margin: auto;
        top: 14%;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .itemWcarp {
          height: 100%;
        }

        .charItem {
          width: 20%;
          display: block;
          transition: all 0.3s ease-out;
          left: 0;
          top: 20%;
          position: absolute;
          opacity: 0;
          cursor: pointer;

          &:hover {
            .play {
              color: red;
            }
          }

          .play {
            width: 100px;
            height: 100px;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            margin: auto;
            background-size: 100% 100%;
            cursor: pointer;
            font-size: 100px;
            color: #ffffff;
            transition: color 0.5s;
          }

          &.c0 {
            transform: translate3d(0%, 0px, 0) scale(0.7);
            opacity: 0;
            display: none;
          }

          &.c1 {
            transform: translate3d(100%, 0px, 0) scale(0.7);
            opacity: 1;
          }

          &.c2 {
            transform: translate3d(200%, 0px, 0) scale(1);
            opacity: 1;
            z-index: 2;
          }

          &.c3 {
            opacity: 1;
            transform: translate3d(300%, 0px, 0) scale(0.7);
          }

          &.c4 {
            opacity: 0;
            display: none;
            transform: translate3d(400%, 0px, 0) scale(0.7);
          }

          img {
            width: 100%;
          }
        }
      }

      .title {
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        width: 200px;
        text-align: center;
        font-size: 35px;
        font-weight: bold;
        color: #000000;
        top: 40px;

        .slid {
          width: 80%;
          height: 3px;
          margin: 5px auto;
          background-color: #000000;
        }
      }
    }

    .cover-right {
      position: absolute;
      width: 20%;
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
        top: 35%;
        left: 0;
        border: 2px solid #000000;
        width: 68%;

        .spbot {
          width: 80%;
          margin: 3px auto;
          height: 1px;
          background-color: #000000;
          display: block;
        }

        .campItem {
          border: 2px solid #fff;
          display: block;
          color: #0062d0;
          font-size: 18px;
          padding: 5% 3%;
          cursor: pointer;
          margin: 3% 2%;

          &.active {
            color: #ffffff;
            background-color: #0062d0;

            .sp {
              background-color: #ffffff;
            }
          }

          &:hover {
            background-color: #0062d0;
            color: #ffffff;

            .sp {
              background-color: #ffffff;
            }
          }

          .spwarp {
            width: 14%;
            text-align: center;
            display: inline-block;
          }

          .sp {
            display: inline-block;
            height: 10px;
            width: 10px;
            margin: 1px;
            background-color: #0062d0;
          }
        }
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
          margin: auto;
          width: auto;
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
        value.roles.forEach(role => {
          role.img && images.push(role.img)
          // role.imgbz && images.push(role.imgbz)
        })
      })
      this.preloadImg(images)
    },
    components: {},
    data: function () {
      return {
        campIndex: 0,
        roleIndex: 2,
        showWallpaper: false,
        list: [
          {
            text: 'WALLPAPER',
            roles: [
              {
                img: require('../assets/images/04/bz/bizhi1.png'),
                imgbz: require('../assets/images/04/bz/bz1.png')
              },
              {
                img: require('../assets/images/04/bz/bizhi2.png'),
                imgbz: require('../assets/images/04/bz/bz2.png')
              },
              {
                img: require('../assets/images/04/bz/bizhi3.png'),
                imgbz: require('../assets/images/04/bz/bz3.png')
              },
              {
                img: require('../assets/images/04/bz/bizhi4.png'),
                imgbz: require('../assets/images/04/bz/bz4.png')
              },
              {
                img: require('../assets/images/04/bz/bizhi5.png'),
                imgbz: require('../assets/images/04/bz/bz5.png')
              },
              {
                img: require('../assets/images/04/bz/bizhi6.png'),
                imgbz: require('../assets/images/04/bz/bz6.png')
              },
              {
                img: require('../assets/images/04/bz/bizhi7.png'),
                imgbz: require('../assets/images/04/bz/bz7.png')
              },
              {
                img: require('../assets/images/04/bz/bizhi8.png'),
                imgbz: require('../assets/images/04/bz/bz8.png')
              },
              {
                img: require('../assets/images/04/bz/bizhi9.png'),
                imgbz: require('../assets/images/04/bz/bz9.png')
              },
              {
                img: require('../assets/images/04/bz/bizhi10.png'),
                imgbz: require('../assets/images/04/bz/bz10.png')
              },
              {
                img: require('../assets/images/04/bz/bizhi11.png'),
                imgbz: require('../assets/images/04/bz/bz11.png')
              },
              {
                img: require('../assets/images/04/bz/bizhi12.png'),
                imgbz: require('../assets/images/04/bz/bz12.png')
              }
            ]
          },
          /* {
            text: 'COMIC',
            roles: [
              {
                img: require('../assets/images/04/comic/1.png'),
                imgbz: require('../assets/images/04/comic/1.png')
              },

              {
                img: require('../assets/images/04/comic/2.png'),
                imgbz: require('../assets/images/04/comic/2.png')
              },

              {
                img: require('../assets/images/04/comic/3.png'),
                imgbz: require('../assets/images/04/comic/3.png')
              },

              {
                img: require('../assets/images/04/comic/4.png'),
                imgbz: require('../assets/images/04/comic/4.png')
              },

              {
                img: require('../assets/images/04/comic/5.png'),
                imgbz: require('../assets/images/04/comic/5.png')
              },

              {
                img: require('../assets/images/04/comic/6.png'),
                imgbz: require('../assets/images/04/comic/6.png')
              },

              {
                img: require('../assets/images/04/comic/7.png'),
                imgbz: require('../assets/images/04/comic/7.png')
              },

              {
                img: require('../assets/images/04/comic/8.png'),
                imgbz: require('../assets/images/04/comic/8.png')
              },

              {
                img: require('../assets/images/04/comic/9.png'),
                imgbz: require('../assets/images/04/comic/9.png')
              },

              {
                img: require('../assets/images/04/comic/10.png'),
                imgbz: require('../assets/images/04/comic/10.png')
              },

              {
                img: require('../assets/images/04/comic/11.png'),
                imgbz: require('../assets/images/04/comic/11.png')
              },

              {
                img: require('../assets/images/04/comic/12.png'),
                imgbz: require('../assets/images/04/comic/12.png')
              }
            ]
          }, */
          {
            text: 'GAME PV',
            roles: [{
              img: require('../assets/images/04/vd/shipin10.png'),
              url: 'https://www.youtube.com/embed/CfRXEVI7RvM'
            },{
              img: require('../assets/images/04/vd/shipin9.png'),
              url: 'https://www.youtube.com/embed/eBZOUYREAaQ'
            },{
              img: require('../assets/images/04/vd/shipin8.png'),
              url: 'https://www.youtube.com/embed/TkEq4zCVeoY'
            },{
              img: require('../assets/images/04/vd/shipin3.png'),
              url: 'https://www.youtube.com/embed/P3M-1wMd0h8'
            }, {
              img: require('../assets/images/04/vd/shipin4.png'),
              url: 'https://www.youtube.com/embed/n5WZNTFaVus'
            }, {
              img: require('../assets/images/04/vd/shipin5.png'),
              url: 'https://www.youtube.com/embed/xeXtrkMlvJM'
            }, {
              img: require('../assets/images/04/vd/shipin6.png'),
              url: 'https://www.youtube.com/embed/JGOeN6bwsWI'
            }
            ]
          }
        ]
      }
    },
    watch: {
      campIndex: function (params) {
        this.roleIndex = 1
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
    methods: {
      selectWarper: function (index) {
        if (index == this.roleIndex) {
          this.showWallpaper = true
        }
        this.roleIndex = index
      },
      getCharClass: function (k) {
        var csskey = ['c0', 'c1', 'c2', 'c3', 'c4']
        var length = this.selectCamp.roles.length
        function createArray (params) {
          var array = []
          for (let index = 0; index < length; index++) {
            array.push(index)
          }
          return array
        }
        var array = createArray().concat(createArray()).concat(createArray())
        var index = length + this.roleIndex

        var temparray = [
          array[index - 2],
          array[index - 1],
          array[index],
          array[index + 1],
          array[index + 2]
        ]
        return csskey[temparray.indexOf(k)]
      },
      next: function (params) {
        this.roleIndex = this.roleIndex + 1
        if (this.roleIndex >= this.selectCamp.roles.length) {
          this.roleIndex = 0
        }
      },
      pre: function (params) {
        this.roleIndex = this.roleIndex - 1
        if (this.roleIndex < 0) {
          this.roleIndex = this.selectCamp.roles.length - 1
        }
      },
      nextImg: function (params) {
        this.roleIndex = this.roleIndex + 1
        if (this.roleIndex >= this.selectCamp.roles.length) {
          this.roleIndex = 0
        }
      },
      preImg: function (params) {
        this.roleIndex = this.roleIndex - 1
        if (this.roleIndex < 0) {
          this.roleIndex = this.selectCamp.roles.length - 1
        }
      },
      download: function (src) {
        var $a = document.createElement('a')
        $a.setAttribute('href', src)
        $a.setAttribute('download', '')

        var evObj = document.createEvent('MouseEvents')
        evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, true, false, 0, null)
        $a.dispatchEvent(evObj)
      },
      down: function (params) {
        this.download(this.selectCamp.roles[this.roleIndex].imgbz)
      },
      playVideo: function (index, params) {
        if (index == this.roleIndex) {
          this.ema.fire('playVideo', {
            url: params.url
          })
        } else {
          this.roleIndex = index
        }
      }
    }
  }
</script>
