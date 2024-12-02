const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles

function Particle(a, b, pathRadius, radius, color) {
    
    this.a = a
    this.b = b
    this.pathRadius = pathRadius

    this.angle = Math.random() * 2 * Math.PI
    this.x = this.a + this.pathRadius * Math.cos(this.angle)
    this.y = this.b + this.pathRadius * Math.sin(this.angle)

    this.radius = radius
    this.color = color

    let toss = Math.random() - 0.5
    if (toss > 0) {
        this.clockwise = true
    } else {
        this.clockwise = false
    }

    this.radiusUp = true

}

Particle.prototype.draw = function () {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
}

Particle.prototype.update = function () {
    console.log("updating particle")
    let angularSpeed = Math.PI / 200

    this.x = this.a + this.pathRadius * Math.cos(this.angle)
    this.y = this.b + this.pathRadius * Math.sin(this.angle)

    if (this.clockwise) {
        this.angle += angularSpeed
    } else {
        this.angle -= angularSpeed
    }

    if (this.radiusUp) {
        this.radius += 0.05
    } else {
        this.radius -= 0.05
    }

    if (this.radius > 5) {
        this.radiusUp = false
    }
    if (this.radius < 0.2) {
        this.a = Math.random() * innerWidth
        this.b = Math.random() * innerHeight
        this.radiusUp = true
    }

    this.draw()
}

function createNewParticle() {
    let a = Math.random() * canvas.width
    let b = Math.random() * canvas.height
    let pathRadius = Math.random() * 50 + 10
    let radius = Math.random() * 5 + 0.5
    let color = 'grey'

    return new Particle(a, b, pathRadius, radius, color)
}

function init() {
    particles = []
    for (let i = 0; i < 100; i++) {
        
        particles.push(createNewParticle())
    }

}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, innerWidth, innerHeight)

    for (let i = 0; i < particles.length; i++) {
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




