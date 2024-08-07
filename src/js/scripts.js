function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

$(document).ready(function(){
    $('.skills-carousel').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    $('.portfolio-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        const skillLevel = card.getAttribute('data-skill');
        const progressBar = card.querySelector('.progress-bar');
        const progressPercentage = document.createElement('div');
        progressPercentage.classList.add('progress-percentage');
        progressPercentage.textContent = skillLevel + '%';
        card.querySelector('.progress').appendChild(progressPercentage);
        progressBar.style.setProperty('--skill-level', skillLevel + '%');
    });
});
