const contents = document.querySelectorAll(".content")

window.addEventListener("scroll", showContent)

showContent();

function showContent() {
    const trigger = window.innerHeight / 5*4

    contents.forEach(content => {
        const contentTop = content.getBoundingClientRect().top

        if(contentTop < trigger) {
            content.classList.add("show")
        }else{
            content.classList.remove("show")
        }
    })
}