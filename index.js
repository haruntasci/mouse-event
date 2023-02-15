const containerEl = document.querySelector(".container")
const mouseEventX = document.querySelector(".mouse-event-x p")
const mouseEventY = document.querySelector(".mouse-event-y p")


addEventListener("mousemove", (event) => {
    mouseEventX.innerText = event.clientX
    mouseEventY.innerText = event.clientY
})