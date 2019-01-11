<template>
  <div :style="style">
    <canvas class="canvas" style="cstyle" ref='canvas'></canvas>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus" scoped type="text/stylus">
  .canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
</style>

<script type="text/ecmascript-6">
  import BaseComponent from 'src/extend/BaseComponent'
  import FrameAnimation from '../extend/FrameAnimation'
  import FrameAnimationAlone from '../extend/FrameAnimationAlone'
  export default {
    mixins: [BaseComponent],
    name: 'Animation',
    props: {
      image: {
        type: [String, Array]
      },
      action: {
        type: String
      },
      config: {
        type: Object
      },
      name: {
        type: String
      },
      framerate: {
        type: Number,
        default: 24
      },
      auto: {
        type: Boolean,
        default: true
      },
      loop: {
        type: Boolean,
        default: true
      },
      rotate: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        style: {
        },
        cstyle: {}
      }
    },
    components: {},
    mounted () {
      if (typeof this.image == 'string') {
        if (window.Queue.getResult(this.image)) {
          var frame = this.config.frames
          for (const key in frame) {
            const element = frame[key]
            let imgSize = {
              width: element.sourceW,
              height: element.sourceH
            }
            this.dealSize(imgSize)
            break
          }
          this.animation = new FrameAnimation(window.Queue.getResult(this.image), this.$refs.canvas, this.config, this.framerate)
          this.animation.play(this.loop)
        }
      } else {
        let imgSize = {
          width: this.image[0].width,
          height: this.image[0].height
        }
        this.dealSize(imgSize)
        this.animation = new FrameAnimationAlone(this.image, this.$refs.canvas, this.framerate)
        this.animation.play(this.loop)
      }
    },
    methods: {
      dealSize: function (size) {
        this.$refs.canvas.width = size.width
        this.$refs.canvas.height = size.height
      },
      play: function (name, loop) {
        this.animation.play(name, loop)
      },
      stop: function () {
        this.animation.stop()
      }
    }
  }
</script>
