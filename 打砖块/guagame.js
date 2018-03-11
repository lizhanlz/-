var GuaGame = function(fps) {
    var game = {
        actions: {},
        keydowns: {},
    }
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    game.canvas = canvas
    game.context = context
    game.drawImage = function(guaImage) {
        game.context.drawImage(guaImage.image, guaImage.x, guaImage.y)

    }

    window.addEventListener('keydown', function(event) {
        game.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function(event) {
        game.keydowns[event.key] = false
    })
    game.registerActions = function(key, callback) {
        game.actions[key] = callback
    }
    window.fps = 60
    var runloop = function() {

        var actions = Object.keys(game.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (game.keydowns[key]) {
                game.actions[key]()
            }
        }


        game.update()
        context.clearRect(0, 0, canvas.width, canvas.height)

        game.draw()
        //下一个运行周期
        setTimeout(function(){
            runloop()
        }, 1000/window.fps)
    }
    setTimeout(function(){
        runloop()
    }, 1000/fps)
    return game

}
