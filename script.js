const popupContainer = document.querySelector(".popup");
popupContainer.addEventListener("click",() => {togglePopup()});

function togglePopup() {
    const popup = document.querySelector("#logoPopup");
    popup.classList.toggle("show");
}
