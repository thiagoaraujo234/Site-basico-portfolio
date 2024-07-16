function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.classList.add('close');
        setTimeout(() => {
            menu.classList.remove('close'); // Remove a classe de fechamento após a animação
            menu.style.display = 'none'; // Oculta o menu
        }, 300); // Tempo igual à duração da animação de fechamento
    } else {
        menu.style.display = 'flex'; // Exibe o menu
        setTimeout(() => {
            menu.classList.add('open'); // Adiciona a classe de abertura após o display
        }, 0); // Para permitir que o menu seja visível antes de aplicar a animação
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

const title = document.querySelector('.container h2');

function resetAnimation() {
    title.style.animation = 'none'; // Remove a animação
    title.offsetHeight; // Reflow para reiniciar a animação
    title.style.animation = ''; // Adiciona a animação novamente
}

// Chama a função após a animação de digitação terminar
setInterval(resetAnimation, 8000); // Tempo total da animação

$(document).ready(function(){
    $('.portfolio-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">←</button>',
        nextArrow: '<button type="button" class="slick-next">→</button>'
    });
});
