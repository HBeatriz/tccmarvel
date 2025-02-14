document.addEventListener("DOMContentLoaded", function() {
    // Inicialização do Swiper
    var swiper = new Swiper(".slide-container", {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
  
    // Função para alternar a visibilidade da descrição
    document.querySelectorAll('.info-button').forEach(button => {
        button.addEventListener('click', function() {
            const description = this.closest('.card-content').querySelector('.description');
            description.style.display = description.style.display === "none" || description.style.display === "" ? "block" : "none";
        });
    });
  });
  