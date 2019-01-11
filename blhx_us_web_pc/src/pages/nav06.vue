<template>
  <div class="page">
    <img src="../assets/images/06/bg.jpg" class="img">

    <div class="cover">
      <a href="https://azurlane.yo-star.com/news/" class="more" target="_blank"></a>
      <a v-for="item in lists" :key="item.id" class="item" :href="item.link|https" target="_blank">
        [NEWS] <span v-html="item.title.rendered"></span> 
        <span class="time">{{item.date | datetime('yyyy/MM/dd')}}</span>
      </a>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .page {
    position: relative;

    .img {
      width: 100%;
      display: block;
    }

    .cover {
      position: absolute;
      background-size: 100% 100%;
      margin: 0 auto;
      width: 50%;
      height: 50%;
      top: 40%;
      left: 0;
      right: 0;

      .item {
        display: block;
        color: #fff;
        line-height: 34px;
        font-size: 20px;
        text-decoration: none;
        word-wrap: normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 0 20% 0 4%;
        margin: 10px 0;

        &:hover {
          background-color: #262626;
          color: #00deff;
        }

        .time {
          position: absolute;
          right: 6%;
        }
      }

      .more {
        position: absolute;
        background-image: url('../assets/images/06/more.jpg');
        background-size: 100% 100%;
        width: 16%;
        height: 7%;
        right: 5%;
        top: -19%;
      }
    }
  }
</style>
<script type="text/ecmascript-6">
  import BaseComponent from '../extend/BaseComponent'

  export default {
    name: 'nav05',
    mixins: [BaseComponent],
    mounted: function () {
      fetch('https://azurlane.yo-star.com/news/wp-json/wp/v2/posts?context=embed&per_page=6', {
        method: 'get',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      }).then(res => {
        if (res.status >= 400) {
          throw new Error('status error', res.status)
        }
        return res.json()
      }).then(data => {
        this.lists = data || []
      }).catch(() => {
      })
    },
    computed: {
      coverStyle: function (params) {
        return {
          'background-image': `url(${this.lines[this.currentLevel - 1]})`
        }
      }
    },
    data: function () {
      return {
        lists: []
      }
    },
    watch: {
    },
    methods: {
    }
  }
</script>
