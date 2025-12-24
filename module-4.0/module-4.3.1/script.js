const imageCover = document.querySelector(".img-cover")
const h1 = document.querySelector("h1")
const p = document.querySelector("p")

fetch("https://randomuser.me/api/")
    .then(function (result) {
        result.json().then(data => {
            const userData = data.results[ 0 ]
            console.log(userData)

            const img = document.createElement("img")
            img.src = userData.picture.large

            imageCover.append(img)

            h1.innerHTML = `${userData.name.first} ${userData.name.last}`

            p.innerHTML = userData.email

            imageCover.classList.remove("skeleton")
            h1.classList.remove("skeleton")
            p.classList.remove("skeleton")
        })
    }).catch(err => {
        console.log(err)
    })