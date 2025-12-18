const modal = document.getElementById("gameModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close-modal");


function openModal(image, title, price) {
    modal.style.display = "flex";
    modalImg.src = image;
    modalTitle.textContent = title;
    modalPrice.textContent = "Prix : " + price;
    modalDescription.textContent = 
        "Description : " + title + " est un jeu populaire incluant plusieurs mécaniques de gameplay modernes, conçu pour offrir une expérience immersive.";
}


document.querySelectorAll(".game-card").forEach(card => {
    card.addEventListener("click", () => {
        const img = card.querySelector("img").src;
        const title = card.querySelector(".game-title").textContent;
        const price = card.querySelector(".game-price").textContent;

        openModal(img, title, price);
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});