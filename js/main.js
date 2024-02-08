
let btn = document.getElementById("btn")
let index = 1

btn.addEventListener("click", () => {
    let color = document.getElementById("color" + index)
    color.classList.remove("display")

    index > 4 ? index = 1 : index++

    let next = document.getElementById("color" + index)
    next.classList.add("display")
})


