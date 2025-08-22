/* ================================
   Script pour site famille
================================ */

// --- Bouton mode clair/sombre ---
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.innerHTML = "☀️"; // soleil
  } else {
    themeBtn.innerHTML = "🌙"; // lune
  }
});

// --- Lightbox pour galerie ---
const galleryImages = document.querySelectorAll(".gallery img");

// Créer la lightbox
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0,0,0,0.9)";
lightbox.style.display = "flex";
lightbox.style.justifyContent = "center";
lightbox.style.alignItems = "center";
lightbox.style.zIndex = "2000";
lightbox.style.visibility = "hidden";

// Ajouter image dans lightbox
const lightboxImg = document.createElement("img");
lightboxImg.style.maxWidth = "90%";
lightboxImg.style.maxHeight = "80%";
lightboxImg.style.borderRadius = "10px";
lightboxImg.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
lightbox.appendChild(lightboxImg);

// Fermer lightbox au clic
lightbox.addEventListener("click", () => {
  lightbox.style.visibility = "hidden";
});

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.visibility = "visible";
  });
});

// --- Smooth Scroll (défilement doux pour menu) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
