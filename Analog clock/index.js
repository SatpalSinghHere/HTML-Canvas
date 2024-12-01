
const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let angleIncrement = Math.PI / 30
let x = 10, y = 10
function draw() {

  if (canvas.getContext) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const now = new Date()
    const thisSecond = now.getSeconds()
    const thisMinute = now.getMinutes()
    const thisHour = now.getHours()



    //Clock Body
    ctx.lineWidth = 15
    ctx.beginPath()
    ctx.arc(canvas.width / 2, canvas.height / 2, 150, 0, 2 * Math.PI)
    ctx.stroke()

    //Second's hand
    let secondsAngle = (Math.PI / 2) - (thisSecond * angleIncrement)
    ctx.lineWidth = 5
    ctx.beginPath()
    ctx.moveTo(canvas.width / 2, canvas.height / 2)
    ctx.lineTo((canvas.width / 2) + (140 * Math.cos(secondsAngle)), (canvas.height / 2) - (140 * Math.sin(secondsAngle)))
    ctx.stroke()

    //Minute's hand
    let minutesAngle = (Math.PI / 2) - (thisMinute * angleIncrement)
    ctx.lineWidth = 10
    ctx.beginPath()
    ctx.moveTo(canvas.width / 2, canvas.height / 2)
    ctx.lineTo((canvas.width / 2) + (120 * Math.cos(minutesAngle)), (canvas.height / 2) - (120 * Math.sin(minutesAngle)))
    ctx.stroke()

    //Hour's hand
    let hoursAngle = (Math.PI / 2) - (thisHour * ((Math.PI) / 6))
    ctx.lineWidth = 15
    ctx.beginPath()
    ctx.moveTo(canvas.width / 2, canvas.height / 2)
    ctx.lineTo((canvas.width / 2) + (90 * Math.cos(hoursAngle)), (canvas.height / 2) - (90 * Math.sin(hoursAngle)))
    ctx.stroke()
    window.requestAnimationFrame(draw)
  }
  else {
    console.log("Canvas not supported")
  }
}

window.requestAnimationFrame(draw)

// const offset = new Date().getTimezoneOffset(); // In minutes
// console.log(offset); // Example: -330 for IST (GMT+5:30)
// const now = new Date()
// console.log(now.getHours())

// // let secondsAngle = (Math.PI / 2) - (3 * (Math.PI / 12))
// // ctx.lineWidth = 5
// // ctx.beginPath()
// // ctx.moveTo(canvas.width / 2, canvas.height / 2)
// // ctx.lineTo((canvas.width / 2) + (200 * Math.cos(secondsAngle)), (canvas.height / 2) - (200 * Math.sin(secondsAngle)))
// // ctx.stroke()


