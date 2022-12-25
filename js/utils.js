Array.prototype.parse2D = function() {
    const rows = []
    for (let i = 0; i < this.length; i += 32) {
        rows.push(this.slice(i, i + 32))
    } 

    return rows
}
