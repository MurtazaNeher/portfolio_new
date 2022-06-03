window.sections = [...document.querySelectorAll('.project-card')];
window.lastScrollTop = window.pageYOffset;

document.querySelector("#projects-page").style.background = window.sections[0].getAttribute('data-bg');

window.addEventListener('scroll', onScroll);

function onScroll() {
    const scrollTop = window.pageYOffset;

    const section = window.sections
        .map(section => {
            const el = section;
            const rect = el.getBoundingClientRect();
            return { el, rect };
        })
        .find(section => section.rect.bottom >= (window.innerHeight * 0.5));
    document.querySelector("#projects-page").style.background = section.el.getAttribute('data-bg');
}


$('#projects-page').ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
});