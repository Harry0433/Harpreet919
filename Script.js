const lightbox = document.getElementById("lightboxModal");
const lightboxImg = document.getElementById("lightboxImage");
const caption = document.getElementById("caption");

document.querySelectorAll(".lightbox-thumb").forEach(img => {
    img.onclick = function() {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
        caption.innerHTML = this.alt;
    }
});

document.querySelector(".close").onclick = function() {
    lightbox.style.display = "none";
}
