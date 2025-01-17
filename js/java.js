// java.js

let currentSkill = 1; // Inicializamos en la habilidad 1

// Función para cambiar la habilidad mostrada
function showSkill(index) {
    // Ocultamos todas las habilidades
    const skills = document.querySelectorAll('.skill-box');
    skills.forEach(skill => skill.classList.remove('active'));

    // Mostramos la habilidad correspondiente
    const skillToShow = document.getElementById(`skill-${index}`);
    skillToShow.classList.add('active');
}

// Función para mover a la habilidad siguiente
function nextSkill() {
    currentSkill = (currentSkill % 6) + 1; // Ciclo entre 1 a 6 habilidades
    showSkill(currentSkill);
}

// Función para mover a la habilidad anterior
function prevSkill() {
    currentSkill = (currentSkill === 1) ? 6 : currentSkill - 1; // Ciclo entre 1 a 6 habilidades
    showSkill(currentSkill);
}

// Mostrar la primera habilidad al cargar la página
window.onload = function() {
    showSkill(currentSkill);
};

//-------------------proyectos-----------

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");

    let currentIndex = 0;
    const totalImages = images.length;
    const intervalTime = 3000; // Tiempo entre deslizamientos (5 segundos)
    let autoSlide;

    // Configuración inicial del carrusel
    carousel.style.width = `${totalImages * 100}%`;
    images.forEach(img => (img.style.width = `${100 / totalImages}%`));

    // Función para actualizar la posición del carrusel
    function updateCarousel() {
        const offset = -(currentIndex * (100 / totalImages)); // Calcula el desplazamiento en porcentaje
        carousel.style.transform = `translateX(${offset}%)`;
        carousel.style.transition = "transform 0.5s ease-in-out"; // Suaviza el desplazamiento
    }

    // Función para mostrar la imagen anterior
    function showPrevious() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
        resetAutoSlide();
    }

    // Función para mostrar la imagen siguiente
    function showNext() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
        resetAutoSlide();
    }

    // Función para iniciar el deslizamiento automático
    function startAutoSlide() {
        autoSlide = setInterval(() => {
            showNext();
        }, intervalTime);
    }

    // Función para detener y reiniciar el deslizamiento automático
    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    // Event listeners para los botones
    prevButton.addEventListener("click", showPrevious);
    nextButton.addEventListener("click", showNext);

    // Iniciar el deslizamiento automático
    startAutoSlide();
});



document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel img"); // Todas las imágenes del carrusel
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close");

    // Al hacer clic en una imagen, abre el modal
    images.forEach(image => {
        image.addEventListener("click", () => {
            modal.style.display = "flex"; // Muestra el modal (en lugar de "block", usamos "flex" para centrarlo)
            modalImage.src = image.src; // Asigna la fuente de la imagen al modal
        });
    });

    // Al hacer clic en el botón de cerrar, cierra el modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none"; // Oculta el modal
    });

    // Cierra el modal al hacer clic fuera de la imagen
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none"; // Oculta el modal
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("contactModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.querySelector(".close-btn");
    const form = document.getElementById("contactForm");
  
    // Abrir el modal
    openModal.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });
  
    // Cerrar el modal
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
  });
  