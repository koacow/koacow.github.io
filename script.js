const popupContainer = document.querySelector(".popup");
const projectExpandables = document.querySelectorAll("h3.expand-toggle");

popupContainer.addEventListener("click",() => {togglePopup()});
projectExpandables.forEach(projectExpandToggle => {
    projectExpandToggle.addEventListener("click",(event) => {expandProject(event)});
});

function togglePopup() {
    const popup = document.querySelector("#logoPopup");
    popup.classList.toggle("show");
}

expandProject = event => {
    const project = event.target.nextElementSibling;
    console.log(event.target)
    project.classList.toggle("hidden");
}


