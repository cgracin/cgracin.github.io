class Player extends Sprite{
    constructor({ collisionBlocks = [], imageSrc, frameRate , animations, loop }) {
        super({ imageSrc, frameRate, animations, loop })
        this.position = {
            x: 200,
            y: 200
        } // end of this.position

        this.velocity = {
            x: 0,
            y: 0
        }

        this.sides = {
            bottom: this.position.y + this.height

        } // end of this.sides
        this.gravity = 1

        this.collisionBlocks = collisionBlocks
    } // end of Player Constructor


    update() {
        // c.fillStyle = 'rgba(0, 0, 255, 0.5)'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        this.position.x += this.velocity.x
        
        this.updateHitbox()

        //check for horizontal collisions
        this.checkForHorizontalCollisions()

        //apply gravity
        this.applyGravity()

        this.updateHitbox()

        // c.fillStyle = 'rgba(0, 0, 255, 0.5)'
        // c.fillRect(this.hitbox.position.x, this.hitbox.position.y, this.hitbox.width, this.hitbox.height)
        // check vertical collisions
        this.checkVerticalCollisions()

        
    } // end of Update()

    handleInput() {
        if (this.preventInput) return
    this.velocity.x = 0
    if (keys.d.pressed) {
        this.lastDirection = 'right'
        this.switchSprite('runRight')
        this.velocity.x = 5
    } else if (keys.a.pressed) {
        this.lastDirection = 'left'
        this.switchSprite('runLeft')
        this.velocity.x = -5
    } else {
        if (this.lastDirection === 'left') {
            this.switchSprite('idleLeft')
        } else {
            this.switchSprite('idleRight')
        }
    }
    }

    switchSprite(name) {
        if (this.image === this.animations[name].image) {
            return
        }
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
        this.loop = this.animations[name].loop
    }
    updateHitbox() {
        this.hitbox = {
            position: {
                x: this.position.x + 21,
                y: this.position.y + 16
            },
            width: 22,
            height: 28,
        }
    }

    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

            // if collision exists
            if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y && 
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
                    //collision on x going left
                    if (this.velocity.x < 0) {
                        const offset = this.hitbox.position.x - this.position.x
                        this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01
                        break
                    }

                    if (this.velocity.x > 0) {
                        const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
                        this.position.x = collisionBlock.position.x - offset - 0.01
                        break
                    }
            }  // end of collision check
        } // end of loop for collision
    } // end of check horizontal

    applyGravity() {
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    } // end of applyGravity

    checkVerticalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

            // if collision exists
            if (this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y && 
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
                
                    if (this.velocity.y < 0) {
                        this.velocity.y = 0
                        const offset = this.hitbox.position.y - this.position.y
                        this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01
                        break
                    }

                    if (this.velocity.y > 0) {
                        this.velocity.y = 0
                        const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
                        this.position.y = collisionBlock.position.y - offset - 0.01
                        break
                    }
            }  // end of collision check
        } // end of loop for collision
    } // check vertical collisions

} // end of Player Class