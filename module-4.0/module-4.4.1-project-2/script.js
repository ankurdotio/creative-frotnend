const h1 = document.querySelector("h1")
const text = h1.innerText

function getRandomCharacter() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz*&^%$#@!"

    return characters.split("")[ Math.floor(Math.random() * 60) ]
}


h1.addEventListener("click", () => {

    let i = 0

    let interValId = setInterval(() => {

        h1.innerText = text.split("").map((char, index) => {
            if (index < i) {
                return char
            }
            return getRandomCharacter()
        }).join("")

        i = i + 1 / 5

        if (text.length < i) {
            clearInterval(interValId)
        }

        console.log("some")

    }, 30)

})