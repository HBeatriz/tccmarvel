document.addEventListener("DOMContentLoaded", function() {
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

    document.querySelectorAll('.info-button').forEach(button => {
        button.addEventListener('click', function() {
            const cardContent = this.closest('.card-content');
            const description = cardContent.querySelector('.description');
            const scrollButton = cardContent.querySelector('.scroll-button');

            // Alterna a exibição da descrição
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
                scrollButton.style.display = 'block'; // Mostra o botão de rolagem
                cardContent.parentElement.style.height = 'auto';
            } else {
                description.style.display = 'none';
                scrollButton.style.display = 'none'; // Oculta o botão de rolagem
                cardContent.parentElement.style.height = '';
            }
        });
    });

    // Adiciona funcionalidade ao botão de rolagem
    document.querySelectorAll('.scroll-button').forEach(scrollButton => {
        scrollButton.addEventListener('click', function() {
            const cardContent = this.closest('.card-content');
            cardContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    });
});
