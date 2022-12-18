// Player Movement
window.addEventListener('keydown', (event) => {
    switch (event.key) {

        // jump
        case ' ':
            if (player.velocity.y == 0) {
                player.velocity.y = -20
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
