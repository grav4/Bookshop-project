//import "../scss/slider.scss"
const sliderLine = document.querySelector('.slider-line');
const sliderImages = document.querySelectorAll('.banner');
const sliderDots = document.querySelectorAll('.slider-dot');

let sliderIndex = 0;
let sliderWidth;

window.addEventListener('resize',showSlide);

function showSlide(){
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();


setInterval(() =>{
    nextSlide()
  }, 
    5000 );


function rollSlider(){
    sliderLine.style.transform = `translateX(${-sliderIndex * sliderWidth}px)`;
}

function thisSlide(index){
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot,index) =>{
    dot.addEventListener('click', () =>{
    sliderIndex = index;
    rollSlider();
    thisSlide(sliderIndex);
    })
});

function nextSlide(){
    sliderIndex++;
    if (sliderIndex >= sliderImages.length) sliderIndex = 0;

    rollSlider();
    thisSlide(sliderIndex);
}