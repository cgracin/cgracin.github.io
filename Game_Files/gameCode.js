const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16 // 1024
canvas.height = 64 * 9 // 576

const collisionBlocks = []

const parsedCollisions = collisionLevel.parse2D()

parsedCollisions.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 306) {
            //push new collision into collisionBlockArray
            collisionBlocks.push(new CollisionBlock({
                position: {
                    x: x * 32,
                    y: y * 32,
            }, // end of position
        }) // end of new collision block
        ) //end of push to collision block array
        } // end of if collision
    }) //end of column iter
}) // end of row iter


const backgroundLevel = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: 'img/Website-Map.png'
})


const player = new Player()

const keys = {
    space: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}
function animate() {
    window.requestAnimationFrame(animate)

    backgroundLevel.draw()
    collisionBlocks.forEach(CollisionBlock => {
        CollisionBlock.draw()
    })

    player.velocity.x = 0
    if (keys.d.pressed) {
        player.velocity.x = 5
    } else if (keys.a.pressed) {
        player.velocity.x = -5
    }

    player.draw()
    player.update()

    
} // end of animate function

animate()
