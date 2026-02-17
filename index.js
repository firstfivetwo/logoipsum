const bullet = document.querySelector(".list__bullet")
const header = document.querySelector(".header__list")

bullet.addEventListener("click", ()=> {
    header.classList.toggle("active")
})