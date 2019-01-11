<template>
  <div class="page">
    <div class="e404">404</div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  @require '../assets/style/base.styl';

  .page {
    height: 100%;
    background-color: #f5f5f5;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;

    .e404 {
      margin-top: -60px;
      color: #333;
      text-shadow: 6px 6px 16px #000;
      -webkit-text-shadow: 6px 6px 16px #000;
    }
  }
</style>

<script type="text/ecmascript-6">
  import BasePage from '../extend/BasePage'

  export default {
    mixins: [BasePage],
    name: 'E404',
    components: {},
    pageName: '404'
  }
</script>
