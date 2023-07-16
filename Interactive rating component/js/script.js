
let div = document.querySelector(".main-section");
let div2 = document.querySelector(".second-section");
let btn = document.querySelector("button");
let list = document.querySelectorAll('li');
let span = document.querySelector("#nb")


btn.addEventListener("click", () =>
{
    div.classList.add("hidden");
    div2.style.display = "flex";
})

list.forEach((e) => {
    e.addEventListener('click', () => {
        span.textContent = e.textContent;
    })
})