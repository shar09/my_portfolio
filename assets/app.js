const displayNav = () => {
    const burger = document.querySelector('#menu-bars');
    const nav = document.querySelector('.links');
    const project = document.querySelector('#project-link');
    // const resume = document.querySelector('#resume-link');
    // const photos = document.querySelector('#photos-link');
    const toggleMove = document.querySelector('.page-move');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        project.classList.toggle('border-bottom');
        // resume.classList.toggle('border-bottom');
        // photos.classList.toggle('border-bottom');
        toggleMove.classList.toggle('toggle-page-move');
    });
}

displayNav();