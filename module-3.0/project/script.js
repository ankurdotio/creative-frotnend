

const textarea = document.querySelector("textarea")
const board = document.querySelector(".board")


textarea.addEventListener("input", () => {

    const value = textarea.value
    board.innerHTML = ""

    value.split(" ").forEach((word) => {

        const wordElem = document.createElement('div')
        wordElem.classList.add("word")

        word.split("").forEach((char) => {







            const img = document.createElement("img")
            img.src = `/alphabet/${char.toLocaleLowerCase()}.png`

            const imgCover = document.createElement("div")

            imgCover.append(img)

            wordElem.append(imgCover)
        })

        const spacer = document.createElement("div")

        spacer.classList.add("spacer")

        board.append(wordElem)
        board.append(spacer)
    })

})