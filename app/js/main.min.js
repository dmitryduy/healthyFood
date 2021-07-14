const prevSliderButton = document.querySelector('.reviews__prev-button');
const nextSliderButton = document.querySelector('.reviews__next-button');
const sliderContainer = document.querySelector('.reviews__slider-list');
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