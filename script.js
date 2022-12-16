const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-bar');

    burger.addEventListener('click', () => {
        console.log('clicc=k')
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

navSlide();                          