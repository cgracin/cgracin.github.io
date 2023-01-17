

testing_url = 'http://127.0.0.1:5500'

live_url = 'https://cartergracin.com'

window.addEventListener('resize', () => {
    c.width = window.innerWidth
    c.height = window.innerHeight
})




// Player Movement
window.addEventListener('keydown', (event) => {
    if (player.preventInput) return
    switch (event.key) {

        case 'e':
            for (let i = 0; i < doors.length; i++) {
                const door = doors[i]
                
                if (player.hitbox.position.x <= door.position.x + door.width &&
                    player.hitbox.position.x + player.hitbox.width >= door.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= door.position.y && 
                    player.hitbox.position.y <= door.position.y + door.height) {
                        player.velocity.x = 0
                        player.velocity.y = 0
                        player.preventInput = true
                        door.play()
                        player.switchSprite('enterDoor')

                        
                        setTimeout(() => {// Page redirecting
                        if (player.hitbox.position.x > 423 && player.hitbox.position.x < 482) {
                            window.location = testing_url + '/projects.html'
                        } else if (player.hitbox.position.x > 763 && player.hitbox.position.x < 816) {
                            window.location = testing_url + '/experience.html'
                        } else {
                            window.location = testing_url + '/education.html'
                        }
                        }, 1000)
                        return
                    }
            }
            break

        // jump
        case ' ':
            if (player.velocity.y == 0) {
                player.velocity.y = -12
            }
            break

        // move left
        case 'a':
            keys.a.pressed = true
            break

        // move right
        case 'd':
            keys.d.pressed = true
            break

    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        // move left
        case 'a':
            keys.a.pressed = false
            break

        // move right
        case 'd':
            keys.d.pressed = false
            break

    }
})
