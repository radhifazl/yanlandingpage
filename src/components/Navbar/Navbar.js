export function linkAction() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(n => n.addEventListener('click', () => {
        navLinks.forEach(n => n.classList.remove('active'));
        n.classList.add('active');
    }));


    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 10);
    })
}