const toggleBtn = document.querySelector(".toggle-btn")
const sidebar = document.querySelector(".aside-container")

const links = document.querySelectorAll(".link")

const accordionToggleBtn = document.querySelectorAll(".accordion-header")

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show")
})

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(li => {
      if (li.classList.contains("active")) {
        li.classList.remove("active")
      }
    })
    link.classList.add("active")
  })
})

accordionToggleBtn.forEach(accordionBtn => {
  accordionBtn.addEventListener("click", (e) => {
    let parent = e.currentTarget.parentElement
    parent.classList.toggle("show")
  })
})
