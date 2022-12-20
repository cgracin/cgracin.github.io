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


const player = new Player({
    collisionBlocks,
    imageSrc: 'img/king/idleRight.png',
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: 'img/king/idleRight.png',
            // image: idleRightImg,
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: 'img/king/idleLeft.png',
            // image: idleLeftImg,
            
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: 'img/king/runRight.png',
            // image: runRightImg,
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: 'img/king/runLeft.png',
            // image: runLeftImg,
        }
    }

})

const doors = [
    new Sprite({
        position: {
            x: 440,
            y: 457
        },
        imageSrc: 'img/doorOpen.png',
        frameRate: 5,
        frameBuffer: 5,
        loop: false,
    }),
    new Sprite({
        position: {
            x: 184,
            y: 104
        },
        imageSrc: 'img/doorOpen.png',
        frameRate: 5,
        frameBuffer: 5,
        loop: false,
    }),
    new Sprite({
        position: {
            x: 778,
            y: 233
        },
        imageSrc: 'img/doorOpen.png',
        frameRate: 5,
        frameBuffer: 5,
        loop: false,
    }),
]

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

    doors.forEach(door => {
        door.draw()
    })

    player.velocity.x = 0
    if (keys.d.pressed) {
        player.lastDirection = 'right'
        player.switchSprite('runRight')
        player.velocity.x = 5
    } else if (keys.a.pressed) {
        player.lastDirection = 'left'
        player.switchSprite('runLeft')
        player.velocity.x = -5
    } else {
        if (player.lastDirection === 'left') {
            player.switchSprite('idleLeft')
        } else {
            player.switchSprite('idleRight')
        }
    }

    player.draw()
    player.update()

    
} // end of animate function

animate()
