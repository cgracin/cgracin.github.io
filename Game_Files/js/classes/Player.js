class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        } // end of this.position

        this.velocity = {
            x: 0,
            y: 0
        }

        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height

        } // end of this.sides
        this.gravity = 1
    } // end of Player Constructor

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    } // end of Draw

    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height

        // above bottom of canvas
        if (this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += this.gravity
        }  else this.velocity.y = 0 // end of if
    } // end of Update()
} // end of Player Class