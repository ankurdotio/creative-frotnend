const emailInput = document.querySelector("#email-input")
const userNameInput = document.querySelector("#username")


emailInput.addEventListener("input", () => {
    const value = emailInput.value
    sessionStorage.setItem("email", value)
})


userNameInput.addEventListener("input", () => {
    const value = userNameInput.value
    sessionStorage.setItem("username", value)
})

function setItems() {
    const email = sessionStorage.getItem("email")
    const username = sessionStorage.getItem("username")

    if (email) {
        emailInput.value = email
    }

    if (username) {
        userNameInput.value = username
    }
}

setItems()