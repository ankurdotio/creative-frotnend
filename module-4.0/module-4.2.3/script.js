import raf from "./raf.js"

let x = 0
let y = 0

addEventListener("mousemove", (e) => {
    x = e.clientX
    y = e.clientY
})


function animate() {
    document.body.style.setProperty("--x", x + "px")
    document.body.style.setProperty("--y", y + "px")
}

raf(animate)




/* 1s = 60 frames */



