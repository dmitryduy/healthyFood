const prevSliderButton = document.querySelector('.reviews__prev-button');
const nextSliderButton = document.querySelector('.reviews__next-button');
const sliderContainer = document.querySelector('.reviews__slider-list');
const popUpContent = document.querySelector('.pop-up__content');
const popUp = document.querySelector('.pop-up');
const popUpButton = document.querySelector('.pop-up__close');
const hamburger = document.querySelector('.header__hamburger');
let currentSlide = 0;

nextSliderButton.addEventListener('click', () => {
    prevSliderButton.classList.remove('reviews__button--disabled')
    if (currentSlide === sliderContainer.children.length - 2)  {
        nextSliderButton.classList.add('reviews__button--disabled')
    }
    if (currentSlide === sliderContainer.children.length - 1) {
        return;
    }
    currentSlide++;
    sliderContainer.style.transform = `translateX(-${currentSlide* sliderContainer.clientWidth}px)`;
})

prevSliderButton.addEventListener('click', () => {
    nextSliderButton.classList.remove('reviews__button--disabled')
    if (currentSlide === 1)  {
        prevSliderButton.classList.add('reviews__button--disabled')
    }
    if (currentSlide === 0) {
        return;
    }
    currentSlide--;
    sliderContainer.style.transform = `translateX(-${currentSlide*sliderContainer.clientWidth}px)`;
})


window.addEventListener('resize', () => {
    sliderContainer.style.transform = `translateX(-${currentSlide* sliderContainer.clientWidth}px)`;
})


popUp.addEventListener('click', (e) => {
    console.log(e.path)
    if (e.path.includes(popUpContent) && !e.path.includes(popUpButton)) {
        return;
    }
    document.body.style.overflow = 'auto';
    popUp.style.visibility = 'hidden';
    popUpContent.style.transform = 'translateX(-200px)';
})


hamburger.addEventListener('click', () => {
    popUp.style.visibility = 'visible';
    popUpContent.style.transform = 'translateX(0)';
    document.body.style.overflow = 'hidden';
})