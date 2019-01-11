class frameAnimation {
  constructor (imgSrc, canvasDom, interFrameTime) {
    this.imgSrc = imgSrc || []
    this.positionInfo = []
    this.imgSrc.forEach(element => {
      this.positionInfo.push({
        x: 0,
        y: 0,
        w: element.width,
        h: element.height,
        offX: 0,
        offY: 0,
        sourceW: element.width,
        sourceH: element.height
      })
    })
    this.canvasDom = canvasDom
    var frames = []
    console.log('fram', frames)
    this.frameIndex = 0
    this.timeOutIndex = -1
    this.ifbegin = false
    this.ifstop = false
    this.schedule = 0
    this.interFrameTime = interFrameTime
    this.imgOnload = false

    this.begin = this.begin.bind(this)
    this.stop = this.stop.bind(this)
    this.recover = this.recover.bind(this)
    this.end = this.end.bind(this)
  }

  begin (loop) {
    let me = this

    if (this.ifbegin) return

    this.ifbegin = true
    let ctx = this.canvasDom.getContext('2d')
    me.canvasDom.style.backgroundImage = ''

    function nextFrame () {
      if (me.frameIndex < me.positionInfo.length) {} else {
        if (loop) {
          me.frameIndex = 0
        } else {
          // ctx.clearRect(0, 0, me.canvasDom.width, me.canvasDom.height)
          return
        }
      }

      let beginX, beginY, realX, realY

      realX = me.positionInfo[me.frameIndex].w * (me.canvasDom.width / me.positionInfo[me.frameIndex].sourceW)
      realY = me.positionInfo[me.frameIndex].h * (me.canvasDom.height / me.positionInfo[me.frameIndex].sourceH)

      beginX = me.positionInfo[me.frameIndex].offX * (me.canvasDom.width / me.positionInfo[me.frameIndex].sourceW)
      beginY = me.positionInfo[me.frameIndex].offY * (me.canvasDom.height / me.positionInfo[me.frameIndex].sourceH)

      ctx.clearRect(0, 0, me.canvasDom.width, me.canvasDom.height)
      ctx.drawImage(me.imgSrc[me.frameIndex], me.positionInfo[me.frameIndex].x, me.positionInfo[me.frameIndex].y,
        me.positionInfo[me.frameIndex].w, me.positionInfo[me.frameIndex].h, beginX, beginY, realX, realY)

      me.timeOutIndex = setTimeout(nextFrame, me.interFrameTime)
      me.frameIndex++
    }

    nextFrame()
  }

  stop () {
    this.ifstop = true
    clearTimeout(this.timeOutIndex)
  }

  recover () {
    if (this.ifstop && this.ifbegin) {
      this.ifstop = false
      this.begin()
    }
  }
  play (loop) {
    this.begin(loop)
  }
  end () {
    this.ifstop = false
    this.ifbegin = false
    this.frameIndex = 0
    clearTimeout(this.timeOutIndex)
  }
}

module.exports = frameAnimation
