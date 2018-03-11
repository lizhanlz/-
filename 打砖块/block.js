var Block = function() {
    var image = imageFromPath('block.png')
    var block = {
        image: image,
        x: 100,
        y: 100,
        alive: true,

    }
    block.kill = function() {
        block.alive = false
    }

    block.collide = function(ball) {
        return block.alive && Collide(ball, block)
    }
    return block
}
