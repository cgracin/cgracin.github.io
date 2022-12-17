const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 16 // 1024
canvas.height = 64 * 9 // 576

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        } // end of this.position

        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height

        } // end of this.sides
    } // end of Player Constructor

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    } // end of Draw

    update() {
        if (this.sides.bottom < canvas.height) {
            this.position.y++
            this.sides.bottom = this.position.y + this.height
        } // end of if
    } // end of Update()
} // end of Player Class


const player = new Player()

//let bottom = y + height

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.draw()
    player.update()

    
} // end of animate function

animate()