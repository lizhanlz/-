var Paddle = function() {
    var image = imageFromPath('paddle.png')
    var paddle = {
        image: image,
        x: 300,
        y: 480,
        speed: 12,
    }
    paddle.moveLeft = function() {
        paddle.x -= paddle.speed
        if (paddle.x < 0) {
            paddle.x = 0
        }
    }
    paddle.moveRight = function() {
        paddle.x += paddle.speed
        if (paddle.x > 800 - paddle.image.width) {
            paddle.x = 800 - paddle.image.width
        }
    }


    paddle.collide = function(ball) {
        return Collide(ball, paddle)
    }
    return paddle
}
