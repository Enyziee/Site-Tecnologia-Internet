function active() {
    let title = document.title;
    let links = document.getElementsByClassName("nav-link");

    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        if (link.textContent.toLowerCase() == title.toLowerCase()) {
            link.classList.add("active")
        }
    }
}
