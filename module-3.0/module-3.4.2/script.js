const debounce = (func, delay) => {
    let timeout;
    return () => {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(func, delay)
    }
}

const throttle = (func, limit) => {
    let isThrottled;
    return () => {

        if (isThrottled) {
            return
        }

        isThrottled = setTimeout(() => {
            func()
            isThrottled = null
        }, limit)

    }
}


const capsule = document.querySelector(".capsule")

const removeScrolling = debounce(() => {
    capsule.classList.remove("scrolling")
}, 500)

const addScroll = throttle(() => {
    capsule.classList.add("scrolling")
}, 100)

document.addEventListener("scroll", () => {
    addScroll()
    removeScrolling()
})


