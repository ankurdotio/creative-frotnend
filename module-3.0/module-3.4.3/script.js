const input = document.querySelector("#email-input")

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


input.addEventListener("blur", () => {
    const value = input.value

    if (!emailRegex.test(value)) {
        input.classList.add("invalid")
        input.classList.remove("valid")
    } else {
        input.classList.add("valid")
        input.classList.remove("invalid")
    }
})

input.addEventListener("input", () => {
    input.classList.remove("invalid")
})