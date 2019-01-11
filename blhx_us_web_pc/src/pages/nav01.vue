<template>
  <div ref="01" class="page">
    <img src="../assets/images/01/bg1.jpg" class="img">
    <div class="cover">
      <img src="../assets/images/01/pretext.png" class="img">
      <div class="email">
        <div class="input">
          <img src="../assets/images/01/email.png" class="top" alt="">
          <input type="text" v-model="email" placeholder="Please enter your email">
        </div>
        <div class="button" @click="sendEmail">
          <div class="peo"></div>
        </div>
      </div>
      <div class="desc">
        <div class="item">
          <div class="checkbox" :class="{'active':ch1}" @click="ch1=!ch1"></div>
          <div class="content">
            I HEREBY CONFIRM THAT I AM OVER 13 YEARS OLD AND I HAVE READ AND AGREED TO THE
            <a href="#/termofuse"> TERMS OF USE</a> AND THE
            <a href="#/privacypolicy">PRIVACY POLICY</a>.
          </div>
        </div>
        <div class="item">
          <div class="checkbox" :class="{'active':ch2}" @click="ch2=!ch2"></div>
          <div class="content">
            I AGREE TO RECEIVE NEWS RELEASE, EVENT INFORMATION AND OTHER NEWS ABOUT AZUR LANE AND OTHER YO-STAR PRODUCTS VIA EMAIL. (OPTIONAL, YOU CAN UNSUBSCRIBE AT ANY TIME.)
          </div>
        </div>
      </div>
      <img src="../assets/images/01/spbonus.png" class="img">
      <div class="reword">
        <div class="itemWarp">
          <div class="itemimg" v-for="(item,index) in navs" :key="item" :class="{'active':number >= item}">
            <img :src="getSrc(item)">
            <div class="jian"></div>
            <div class="progress"></div>
            <div class="role" v-if="canshowrole(index,item)">
              <img src="../assets/images/01/loading_anima_2.gif" class="run"></img>
              <span class="text">NOW :</span>
              <span class="number">{{number}}</span>
            </div>
          </div>
        </div>
        <div class="skillWarp">
          <img src="../assets/images/01/jineng.png" alt="">
          <div class="skill top">
            <img src="../assets/images/01/jineng1.png" alt="">
          </div>
          <div class="skill bottom">
            <img src="../assets/images/01/jineng2.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="linkout">
      <a target="_blank" href="https://www.facebook.com/AzurLaneEN/photos/a.614995418864921.1073741829.600408550323608/651342128563583/?type=3" class="facebook out"></a>
      <a target="_blank" href="https://twitter.com/AzurLane_EN/status/1019520955368988672" class="twitter out"></a>
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
      width: 40%;
      top: 10%;
      left: 7%;
      position: absolute;
      height: 50%;

      .pre {
        width: 100%;
      }

      .desc {
        font-size: 12px;
        line-height: 14px;
        margin: 7% 0px 4% 4%;
        color: #7e7e7e;

        .item {
          position: relative;
          padding-left: 35px;
          margin: 10px 0;

          .checkbox {
            left: 0;
            top: 0;
            position: absolute;
            width: 30px;
            height: 30px;
            background-size: 100% 100%;
            background-image: url('../assets/images/01/checkbox-n.png');
            display: inline-block;

            &.active {
              background-image: url('../assets/images/01/checkbbox-s.png');
            }
          }

          .content {
            display: inline-block;

            a {
              color: #c35300;
            }
          }
        }
      }

      .email {
        padding-left: 5%;
        font-size: 12px;
        margin: 5% 0;
        width: 104%;
        vertical-align: middle;
        height: 10%;

        .input {
          background-size: 100% 100%;
          background-image: url('../assets/images/01/inputbg.jpg');
          position: relative;
          padding: 5px;
          display: inline-block;
          vertical-align: middle;
          width: 50%;
          height: 100%;

          .top {
            top: -33%;
            position: absolute;
            left: 0;
            width: 40%;
          }

          input {
            width: 100%;
            height: 100%;
            font-size: 16px;
            padding: 0 1%;
          }
        }

        .button {
          vertical-align: middle;
          height: 141%;
          width: 30%;
          margin-left: 6%;
          background-image: url('../assets/images/01/now-n.png');
          background-size: 100% 100%;
          display: inline-block;
          position: relative;
          cursor: pointer;

          .peo {
            background-image: url('../assets/images/01/emailpeo.png');
            background-size: 100% auto;
            height: 156%;
            width: 35%;
            left: 99%;
            top: -151%;
            position: absolute;
            background-repeat: no-repeat;
            pointer-events: none;
          }

          &:hover {
            background-image: url('../assets/images/01/now-s.png');
          }
        }
      }

      .reword {
        pointer-events: none;
        width: 224%;
        position: relative;
        top: -31%;
        left: 3.1%;

        .img {
          width: 100%;
        }

        .itemWarp {
          vertical-align: bottom;
          position: relative;

          .itemimg {
            width: 13.7%;
            display: inline-block;
            vertical-align: bottom;
            position: relative;

            &.active {
              .progress {
                background-color: #0073d5;
                background-image: none;
              }

              .jian {
                background-color: #0073d5;
              }
            }

            .progress {
              margin-top: 10px;
              width: 100%;
              height: 20px;
              background-color: #c9c9c9;
              position: relative;
              background-image: url('../assets/images/01/sp.png');
              background-position: center center;
              background-repeat: repeat-x;
            }

            .role {
              position: absolute;
              bottom: -40px;
              color: #0073d5;
              width: 100%;
              text-align: center;
              font-weight: bold;
              font-size: 20px;
              left: 0;

              .run {
                width: 18%;
                background-size: 100% auto;
                position: absolute;
                left: -10%;
                top: -50px;
                background-repeat: no-repeat;
              }

              .text {
              }

              .number {
                color: #ffffff;
                background-color: #0073d5;
                padding: 3px 30px;
              }
            }

            .jian {
              width: 20px;
              height: 20px;
              position: absolute;
              left: 50%;
              transform: rotate(45deg);
              background-color: #c9c9c9;
              bottom: 10px;
            }

            img {
              width: 100%;
            }

            &:last-child {
              width: 44%;

              .run {
                width: 6%;
                left: 96%;
              }
            }
          }
        }

        .skillWarp {
          position: absolute;
          right: 6%;
          bottom: 10%;

          .skill {
            position: absolute;
            width: 100%;
            height: 50%;
            pointer-events: auto;
            cursor: pointer;

            img {
              opacity: 0;
              display: none;
              width: 500%;
              position: absolute;
              left: -250%;
              z-index: 100;
            }

            &:hover {
              img {
                opacity: 1;
                display: block;
              }
            }

            &.top {
              top: 0;

              img {
                top: -220%;
              }
            }

            &.bottom {
              bottom: 0;

              img {
                bottom: -220%;
              }
            }
          }
        }
      }
    }

    .linkout {
      position: absolute;
      bottom: 0;
      right: 2.8%;
      width: 35.88%;
      height: 10.2777%;
      background-image: url('../assets/images/01/fenxiang.png');
      background-size: 100% 100%;

      .out {
        width: 10%;
        height: 57%;
        bottom: 10%;
        display: block;
        position: absolute;

        &.facebook {
          right: 15%;
        }

        &.twitter {
          right: 1.5%;
        }
      }
    }
  }
</style>
<script type="text/ecmascript-6">
  import BaseComponent from '../extend/BaseComponent'
  import fetch from 'cross-fetch'
  import common from '../assets/js/common'
  export default {
    name: 'nav01',
    mixins: [BaseComponent],
    mounted: function () {
      var images = [require('../assets/images/01/now-s.png')]
      this.preloadImg(images)

      fetch('https://azurlane.yo-star.com/pre/registration/data', {
        method: 'get',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      }).then(res => {
        if (res.status >= 400) {
          throw new Error('status error', res.status)
        }
        return res.json()
      }).then(user => {
        this.number = user.data.count
      }).catch(() => {
      })
    },
    components: {},
    data: function () {
      return {
        email: '',
        sending: false,
        ch1: true,
        ch2: true,
        navs: ['5000', '10000', '20000', '30000', '50000'],
        imgs: {
          'no5000': require('../assets/images/01/no5000.png'),
          'no5000-a': require('../assets/images/01/no5000-a.png'),
          'no10000': require('../assets/images/01/no10000.png'),
          'no10000-a': require('../assets/images/01/no10000-a.png'),
          'no20000': require('../assets/images/01/no20000.png'),
          'no20000-a': require('../assets/images/01/no20000-a.png'),
          'no30000': require('../assets/images/01/no30000.png'),
          'no30000-a': require('../assets/images/01/no30000-a.png'),
          'no50000': require('../assets/images/01/no50000.png'),
          'no50000-a': require('../assets/images/01/no50000-a.png'),
        },
        number: 0
      }
    },
    methods: {
      sendEmail: function (params) {
        if (!this.ch1) {
          alert('Please agree to our terms of use and privacy policy.')
          return
        }
        if (!/^[A-Za-z0-9._%-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,4}$/.test(this.email)) {
          alert('Please make sure that email is correct.')
          return
        }
        if (this.sending) {
          return
        }
        this.sending = true
        fetch('https://azurlane.yo-star.com/pre/registration', {
          method: 'post',
          headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
          body: JSON.stringify({email: this.email, device: common.getPlac()})
        }).then(res => {
          if (res.status >= 400) {
            throw new Error('status error', res.status)
          }
          return res.json()
        }).then(user => {
          if (user.code == 20000) {
            if (user.data.status == 1) {
              alert('Email address is already registered!')
            } else {
              if (user.data.email == this.email) {
                gtag && gtag('event', 'conversion', {'send_to': 'AW-798490883/eDEDCPqZmYcBEIOC4PwC'})
                fbq && fbq('track', 'CompleteRigistration')
                alert('Thank you for your registration. Please stay tuned on our Facebook and twitter!')
              }
            }
          } else {
            alert(user.message)
          }
          this.sending = false
        }).catch(err => {
          console.error(err)
          this.sending = false
        })
      },
      canshowrole: function (index) {
        var lastIndex = 4
        for (let key = 0; key < this.navs.length; key++) {
          if (this.navs[key] - this.number > 0) {
            lastIndex = key
            break
          }
        }
        if (index == lastIndex) {
          return true
        } else {
          return false
        }
      },
      getSrc: function (num) {
        if (this.number >= num) {
          return this.imgs[`no${num}-a`]
        }
        return this.imgs[`no${num}`]
      }
    }
  }
</script>
