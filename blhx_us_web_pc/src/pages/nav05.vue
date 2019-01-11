<template>
  <div class="page">
      <div :class="['page_box', !firstShow?'box_show': 'box_hidden' ]">
        <a href="javascript:;"  class="gotoBtn" @click="switchImg"><img src="../assets/images/05/ongoing.png" alt="" ></a>
        <img src="../assets/images/05/bg.jpg" class="img">

        <div class="linkout text">
          <a target="_blank" href="https://www.facebook.com/AzurLaneEN/" class="facebook out"></a>
          <a target="_blank" href="https://twitter.com/AzurLane_EN" class="twitter out"></a>
        </div>
        <div class="linkout btn">
          <a target="_blank" href="https://www.facebook.com/AzurLaneEN/" class="facebook out"></a>
          <a target="_blank" href="https://twitter.com/AzurLane_EN" class="twitter out"></a>
        </div>
        <div class="cover" :style="coverStyle">
          <div class="start" v-for="(start,index) in starts" :key="index" :style="getStartStyle(start,index)">
            <div class="startin"></div>
            <div class="imgWarp">
              <img :src="tips[index]" v-if="tips[index]" class="img" alt="">
            </div>
          </div>
        </div>
      </div>

      <div :class="['page_box gngoing', firstShow?'box_show': 'box_hidden']">
        <img src="../assets/images/05/bg_nogoing.jpg" class="img">
        <a href="javascript:;"  class="gotoBtn" @click="switchImg"><img src="../assets/images/05/past.png" alt="" ></a>

        <div class="linkout text">
          <a target="_blank" href="https://www.facebook.com/AzurLaneEN/" class="facebook out"></a>
          <a target="_blank" href="https://twitter.com/AzurLane_EN" class="twitter out"></a>
        </div>
        <div class="linkout btn">
          <a target="_blank" href="https://www.facebook.com/AzurLaneEN/" class="facebook out"></a>
          <a target="_blank" href="https://twitter.com/AzurLane_EN" class="twitter out"></a>
        </div>

        <div class="cover_ongoing" :style="coverStyle_ongoing">
          <div class="start" v-for="(start,index) in starts_ongoing" :key="index" :style="getStartStyle_ongoing(start,index)">
            <div class="startin"></div>
            <div class="imgWarp">
              <img :src="tips_ongoing[index]" v-if="tips_ongoing[index]" class="img" alt="">
            </div>
          </div>
        </div>
        
      </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .page {
    position: relative;
    min-height: 500px;
    
    .box_show {
      opacity 1;
      z-index: 1;
    }

    .box_hidden {
      opacity: 0;
      z-index: -1;
    }

    .gotoBtn {
      display: block;
      position: absolute;
      left: 50.93%;
      top: 27.24%;
      width: 9.32%;
      height: 4.24%;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .gngoing {
      position absolute;
      left 0;
      top: 0;
    }
    
    .page_box {
      transition: opacity .7s;
    }
  
    .img {
      width: 100%;
      display: block;
    }

    .linkout {
      position: absolute;

      &.text {
        left: 11.66%;
        width: 11.5%;
        top: 30%;
        height: 2.5%;

        .out {
          width: 50%;
          height: 100%;
          bottom: 0%;
          display: block;
          position: absolute;

          // background-color: rgba(255, 0, 0, 0.41);
          &.facebook {
            left: 0%;
          }

          &.twitter {
            width: 37%;
            right: 0%;
          }
        }
      }

      &.btn {
        right: 18.2%;
        width: 28.9%;
        bottom: 9.3%;
        height: 5.2%;

        .out {
          width: 45%;
          height: 100%;
          bottom: 0%;
          display: block;
          position: absolute;

          // background-color: rgba(255, 0, 0, 0.41);
          &.facebook {
            width: 46%;
            left: 0%;
          }

          &.twitter {
            right: 0%;
          }
        }
      }
    }

    
    
    .cover, .cover_ongoing {
      position: absolute;
      background-size: 100% 100%;
      width: 31.51%;
      height: 41.92%;
      top: 34.2%;
      right: 15.8%;

      .start {
        position: absolute;
        background-size: 100% 100%;
        width: 14%;
        height: 15.9%;
        cursor: pointer;

        .imgWarp {
          display: none;
        }

        &:hover {
          .imgWarp {
            display: block;
            position: absolute;
            width: 450%;
            height: 140%;
            top: -160%;
            left: -176%;
            text-align: center;

            .img {
              height: 100%;
              width: auto;
              display: inline-block;
            }
          }
        }
      }
    }

    .cover_ongoing {
      top: 35.2%;
    }
  }
</style>
<script type="text/ecmascript-6">
  import BaseComponent from '../extend/BaseComponent'

  export default {
    name: 'nav05',
    mixins: [BaseComponent],
    mounted: function () {
    },
    computed: {
      coverStyle: function (params) {
        return {
          'background-image': `url(${this.lines[this.currentLevel - 1]})`
        }
      },

      coverStyle_ongoing: function (params) {
        return {
          'background-image': `url(${this.lines_ongoing[this.currentLevel_ongoing - 1]})`
        }
      }

    },
    data: function () {
      return {
        firstShow: true,
        
        lines: [
          require('../assets/images/05/1.png'),
          require('../assets/images/05/2.png'),
          require('../assets/images/05/3.png'),
          require('../assets/images/05/4.png'),
          require('../assets/images/05/5.png'),
          require('../assets/images/05/6.png'),
          require('../assets/images/05/7.png'),
          require('../assets/images/05/8.png'),
          require('../assets/images/05/9.png')
        ],
        lines_ongoing: [
          require('../assets/images/05/ongoing/1.png'),
          require('../assets/images/05/ongoing/2.png'),
          require('../assets/images/05/ongoing/3.png'),
          require('../assets/images/05/ongoing/4.png'),
          require('../assets/images/05/ongoing/5.png'),
          require('../assets/images/05/ongoing/6.png'),
          require('../assets/images/05/ongoing/7.png'),
        ],        
        tips: [
          '',
          require('../assets/images/05/22000.png'),
          require('../assets/images/05/24000.png'),
          require('../assets/images/05/28000.png'),
          require('../assets/images/05/30000.png'),
          require('../assets/images/05/34000.png'),
          require('../assets/images/05/38000.png'),
          require('../assets/images/05/40000.png'),
          require('../assets/images/05/45000.png'),
          require('../assets/images/05/50000.png')
        ],

        tips_ongoing: [
          '',
          require('../assets/images/05/ongoing/60k.png'),
          require('../assets/images/05/ongoing/65k.png'),
          require('../assets/images/05/ongoing/70k.png'),
          require('../assets/images/05/ongoing/75k.png'),
          require('../assets/images/05/ongoing/80k.png'),
          require('../assets/images/05/ongoing/90k.png'),
          require('../assets/images/05/ongoing/100k.png'),
        ],
        
        currentLevel: 9,            // 活动进度

        currentLevel_ongoing: 2,    // 活动进度
        
        starts: [
          {
            left: '-3%',
            top: '17.7%'
          },
          {
            left: '22.2%',
            top: '3.5%'
          },
          {
            left: '47.4%',
            top: '23.5%'
          },
          {
            left: '77%',
            top: '10.5%'
          },
          {
            left: '88.4%',
            top: '40%'
          },
          {
            left: '64%',
            top: '56%'
          },
          {
            left: '25.6%',
            top: '50%'
          },
          {
            left: '7%',
            top: '75.6%'
          },
          {
            left: '43%',
            top: '87%'
          },
          {
            left: '86%',
            top: '82%'
          }
        ],
        starts_ongoing: [
          {
            left: '-3%',
            top: '14.7%'
          },
          {
            left: '30.8%',
            top: '9.5%'
          },
          {
            left: '63.4%',
            top: '19.7%'
          },
          {
            left: '88.3%',
            top: '37%'
          },
          {
            left: '77.3%',
            top: '72%'
          },
          {
            left: '46.3%',
            top: '79%'
          },
          {
            left: '5%',
            top: '62%'
          },
          {
            left: '31%',
            top: '46%'
          }
        ]
      }
    },
    watch: {

    },
    methods: {
      switchImg: function() {
        this.firstShow = !this.firstShow;
      },
      
      getStartStyle: function (style, index) {

        if (this.currentLevel >= index) {
          style['background-image'] = `url(${require('../assets/images/05/m.png')})`
          if (index == 9) {
            style['background-image'] = `url(${require('../assets/images/05/over.png')})`
          }
          if (index == 0) {
            style['background-image'] = `url(${require('../assets/images/05/start.png')})`
          }
        }
        return style
      },

      getStartStyle_ongoing: function(style, index) {
        if (this.currentLevel_ongoing >= index) {
          style['background-image'] = `url(${require('../assets/images/05/ongoing/m.png')})`
          if (index == 7) {
            style['background-image'] = `url(${require('../assets/images/05/ongoing/over.png')})`
          }
          if (index == 0) {
            style['background-image'] = `url(${require('../assets/images/05/ongoing/start.png')})`
          }
        }
        return style
      }
      
    }
  }
</script>
