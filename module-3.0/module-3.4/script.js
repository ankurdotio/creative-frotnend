function createBulb() {
    const bulb = document.createElement("div")

    bulb.classList.add('bulb')

    return bulb
}

const box = document.querySelector(".box")

for (let i = 0; i < 150; i++) {
    const bulb = createBulb()

    box.appendChild(bulb)
}


box.addEventListener('click', (e) => {
    e.target.classList.toggle('on')
})

/* 1 = 1mb ram */
/* 150 = 150mb */