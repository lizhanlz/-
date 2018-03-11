var Ball = function() {
    var image = imageFromPath('ball.png')
    var ball = {
        image: image,
        x: 385,
        y: 450,
        speedX: 10,
        speedY: 10,
        fired: false,
    }
    ball.fire = function() {
        ball.fired = true
    }
    ball.move = function() {
        if (ball.fired) {
            // log('move')
            if (ball.x < 0 || ball.x > 770) {
                ball.speedX *= -1
            }
            if (ball.y < 0) {
                ball.speedY *= -1
            }
            ball.x += ball.speedX
            ball.y += ball.speedY
        }
    }

    ball.rebound = function() {
        ball.speedY *= -1
    }
    return ball
}
