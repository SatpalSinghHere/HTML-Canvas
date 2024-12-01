const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles

function circleEquation(x, radius){
    return Math.floor(Math.sqrt(Math.pow(radius, 2) - Math.pow(x, 2)))
}

function Particle(x, y, vx, vy, radius, color, accX, accY) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.radius = radius
    this.color = color
    this.accX = accX
    this.accY = accY
}

Particle.prototype.draw = function () {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
}

Particle.prototype.update = function () {
    this.x += this.vx
    this.y += circleEquation(this.x, this.radius)
    
    
    // if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
    //     this.vx = -this.vx
    // }

    // if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
    //     this.vy = -this.vy
    // }


    this.draw()
}

function init() {
    particles = []
    for (let i = 0; i < 100; i++) {
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height
        let vx = Math.random() * 0.5 - 0.5
        let vy = Math.random() * 2 - 1
        let radius = Math.random() * 20 + 2
        let color = 'grey'
        let accX = Math.random() * 0.05 - 0.05
        let accY = Math.random() * 0.05 - 0.05
        particles.push(new Particle( x, y, vx, vy, radius, color, accX, accY))
    }

}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0,0, innerWidth, innerHeight)

    for (let i = 0; i < particles.length; i++){
        particles[i].update()

    }
}

init()
animate()

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    init()
})




