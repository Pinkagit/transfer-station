<template>
  <div class="page">
    <img src="../assets/images/02/bg.jpg" class="img">
    <div class="cover" v-if="selectNode">
      <div class="sp1">
        <div class="topimg">
          <img src="../assets/images/02/hood.png" alt="">
        </div>
        <div class="nav">
          <div class="center">
            <div class="btn prev" @click="pre"></div>
            <img src="../assets/images/02/wenzi.png" alt="">
            <div class="btn next" @click="next"></div>
          </div>
        </div>
        <div class="navstatus">
          <template v-for="(item,index) in list">
            <span class="sp"></span>
            <span class="navst" :class="{'active':index==selectIndex}"></span>
            <span class="sp" v-if="index==list.length-1"></span>

          </template>
        </div>
      </div>
      <div class="sp2">
        <img :src="list[selectIndex].img" class="topImg" alt="">
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

      >div {
        flex: 1;
        height: 100%;
      }

      .sp1 {
        text-align: center;

        .topimg {
          margin: 21% auto 9%;
          width: 60%;

          img {
            width: 100%;
          }
        }

        .nav {
          color: #ffffff;

          .btn {
            width: 13%;
            height: 53%;
            background-size: 100% 100%;
            margin: 5px 6px;
            position: absolute;
            top: 0;
            cursor: pointer;

            &.prev {
              background-image: url('../assets/images/prev-a.png');
              left: -40%;

              &:hover {
                background-image: url('../assets/images/prev.png');
              }
            }

            &.next {
              background-image: url('../assets/images/next-a.png');
              right: -40%;

              &:hover {
                background-image: url('../assets/images/next.png');
              }
            }
          }

          .center {
            display: inline-block;
            font-size: 40px;
            width: 42%;
            position: relative;

            img {
              width: 100%;
            }
          }
        }

        .navstatus {
          vertical-align: middle;
          width: 100%;
          margin: 10% auto;

          >span {
            vertical-align: middle;
            display: inline-block;
          }

          .sp {
            width: 50px;
            height: 2px;
            background-color: #2294ff;
          }

          .navst {
            width: 30px;
            height: 30px;
            background-image: url('../assets/images/02/biaoji1.png');
            background-size: 100% 100%;

            &.active {
              background-image: url('../assets/images/02/biaoji2.png');
            }
          }
        }
      }

      .sp2 {
        text-align: center;

        .topImg {
          width: 96%;
          margin: 12% auto 5%;
          display: block;
        }
      }
    }
  }
</style>
<script type="text/ecmascript-6">
  import BaseComponent from '../extend/BaseComponent'

  export default {
    name: 'nav02',
    mixins: [BaseComponent],
    mounted: function () {
    },
    components: {},
    data: function () {
      return {
        selectIndex: 0,
        list: [
          {
            img: require('../assets/images/02/jieshao1.png')
          }, {
            img: require('../assets/images/02/jieshao2.png')
          }, {
            img: require('../assets/images/02/jieshao3.png')
          }
        ]
      }
    },
    computed: {
      selectNode: function (params) {
        return this.list[this.selectIndex]
      }
    },
    methods: {
      next: function (params) {
        this.selectIndex = this.selectIndex + 1
        if (this.selectIndex >= this.list.length) {
          this.selectIndex = 0
        }
      },
      pre: function (params) {
        this.selectIndex = this.selectIndex - 1
        if (this.selectIndex < 0) {
          this.selectIndex = this.list.length - 1
        }
      }
    }
  }
</script>
