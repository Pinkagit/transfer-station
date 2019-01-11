<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'app',
    components: {
    },
    data: function () {
      return {
      }
    },
    beforeCreate: function () {},
    created: function () {
    },
    mounted: function () {
    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import 'assets/style/base.styl';
  @import 'https://at.alicdn.com/t/font_726279_8rkengg72xo.css';

  initialize();

  @keyframes play {
    from {
      box-shadow: 0 0 9px #333;
    }

    50% {
      box-shadow: 0 0 18px #ffffff;
    }

    to {
      box-shadow: 0 0 9px #333;
    }
  }

  body {
    background-color: #000000;
    font-size: rem(36);
    background: #efefef;
    width: 100%;
    min-width: 1320px;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  }

  img {
    pointer-events: none;
    user-select: none;
  }

  .el-input__inner {
    border-radius: 0px;
  }

  .el-form-item__label {
    color: #333;
    font-size: 20px;
    font-weight: bold;
  }

  .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom 5px !important
  }

  .el-select-dropdown {
    border-radius: 0px;
  }

  .el-button {
    border-radius: 0px;
  }

  .el-form-item__error{
    position relative
  }
  .el-form-item.is-success .el-input__inner, .el-form-item.is-success .el-input__inner:focus, .el-form-item.is-success .el-textarea__inner, .el-form-item.is-success .el-textarea__inner:focus{
    border-color #409eff
  }
</style>
