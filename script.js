const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-bar');

    burger.addEventListener('click', () => {
        console.log('click')
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navSlide();                          