const menuToggle = document.querySelector(".menu-toggle")
const linksContainer = document.querySelector(".links-container")
menuToggle.addEventListener("click", () => {
  linksContainer.classList.toggle("show-links")
})
