console.log("welcome to my extension");

const clock = document.createElement("div")
clock.classList.add("clockOnTop")
setInterval(updateClock, 1000)
updateClock()

document.body.append(clock)

function updateClock() {
    const date = new Date()
    const hours = date.getHours().toString().padStart(2,"0")
    const minutes = date.getMinutes().toString().padStart(2,"0")
    // const seconds = date.getSeconds().toString().padStart(2,"0")
    // const time = `${hours}:${minutes}:${seconds}`
    const time = `${hours}:${minutes}`

    if (clock.innerText !== time) {
        clock.innerText = time
    }

    // console.log(typeof time)
}