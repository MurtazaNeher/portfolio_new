window.sections = [...document.querySelectorAll('.project-card')];
window.lastScrollTop = window.pageYOffset;

document.querySelector("#projects-page").style.background = window.sections[0].getAttribute('data-bg');
document.querySelector(".ball").style.backgroundColor = window.sections[0].getAttribute('data-color');

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
    // document.body.style.color = section.el.getAttribute('data-color');
    document.querySelector(".ball").style.backgroundColor = section.el.getAttribute('data-color');
}


// Js For Pointer Ball
const ball = document.querySelector('.ball');

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.6;

// Update ball position
function animate() {
    //Determine distance between ball and mouse
    let distX = mouseX - ballX;
    let distY = mouseY - ballY;

    // Find position of ball and some distance * speed
    ballX = ballX + (distX * speed);
    ballY = ballY + (distY * speed);

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

    requestAnimationFrame(animate);
}
animate();

// Move ball with cursor
document.addEventListener("mousemove", function(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
});