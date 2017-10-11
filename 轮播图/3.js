// 轮播图
// 每个网站包括苹果都有的轮播图组件（什么是组件）
/*
1. 写一个 div 里面有 3 个 img 标签
2. 只显示当前活动的 img 标签
3. 加 1 个按钮，点击的时候切换图片
*/

var showImageAtIndex = function(slide, index) {
    var nextIndex = index
    // 设置父节点的 data-active
    slide.dataset.active = nextIndex
    // 删除当前图片的 class 给下一张图片加上 class
    var className = 'gua-active'
    removeClassAll(className)
    // 得到下一张图片的选择器
    var nextSelector = '#id-guaimage-' + String(nextIndex)
    var img = e(nextSelector)
    img.classList.add(className)
    // 切换小圆点
    // 1. 删除当前小圆点的 class
    var indiClassName = 'gua-white'
    removeClassAll(indiClassName)
    // 2. 得到下一个小圆点的选择器
    var indiSelector = '#id-indi-' + String(nextIndex)
    var indicator = e(indiSelector)
    indicator.classList.add(indiClassName)
}

var nextIndex = function(slide, offset) {
    var numberOfImgs = Number(slide.dataset.imgs)
    var activeIndex = Number(slide.dataset.active)
    // log('click slide')
    // 求出下一张图片的 id

    // if (activeIndex + 1 == numberOfImgs - 1) {
    //     nextIndex = 0
    // } else {
    //     nextIndex = activeIndex + 1
    // }
    // 下面这句和上面的效果是一样的, 都是按照凯撒加密的方式来处理的
    var i = (numberOfImgs + activeIndex + offset) % numberOfImgs
    return i
}

var bindEventSlide = function() {
    var selector = '.gua-slide-button'
    bindAll(selector, 'click', function(event) {
        log('click next')
        var button = event.target
        // 找到 gua-slide div
        var slide = button.parentElement
        // 求出 button 的 data-offset
        // 上一张按钮的 offset 是 -1
        // 下一张按钮的 offset 是 1
        var offset = Number(button.dataset.offset)
        var index = nextIndex(slide, offset)
        showImageAtIndex(slide, index)
    })
}

var bindEventIndicator = function() {
    var selector = '.gua-slide-indi'
    bindAll(selector, 'click', function(event) {
        log('indi 小圆点')
        var self = event.target
        var index = Number(self.dataset.index)
        log('index', index, typeof(index))
        var slide = self.closest('.gua-slide')
        // 直接播放第 n 张图片
        showImageAtIndex(slide, index)
    })
}

var playNextImage = function() {
    var slide = e('.gua-slide')
    // 求出下一张图片的 index
    var index = nextIndex(slide, 1)
    // 显示下一张图片
    showImageAtIndex(slide, index)
}

var autoPlay = function() {
    var interval = 2000
    setInterval(function() {
        // 每 2s 都会调用这个函数
        playNextImage()
    }, interval)
}

bindEventSlide()
bindEventIndicator()
// autoPlay()

// 先写出来, 然后不断地把程序改得更好, 这个过程叫 重构

// 第一个参数是定时会被调用的函数
// 第二个参数是延迟的时间, 以毫秒为单位, 1000 毫秒等于 1 秒
// setTimeout 只会执行一次
// log('开始时间', new Date())
// setTimeout(function() {
//     log('结束时间', new Date())
// }, 2000)
//
// // setInterval 会无限执行
// // setInterval 和  setTimeout 函数都有一个返回值
// // 返回值可以用来清除定时函数
// var clockId = setInterval(function() {
//     log('时间到', new Date())
// }, 1000)
// log('用来删除定时器的 id', clockId)
