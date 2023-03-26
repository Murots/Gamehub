const slider = document.querySelector('.slider');
const sliderDots = document.querySelectorAll('.slider-dot');

for (let i = 0; i < sliderDots.length; i++) {
    const dot = sliderDots[i];
    
    dot.addEventListener('click', function() {

    slider.scroll({
        left: i * slider.offsetWidth,
        behavior: 'smooth'
    });

    for (let i = 0; i < sliderDots.length; i++) {
        const otherDot = sliderDots[i];
        otherDot.classList.remove('active');
    }

    dot.classList.add('active');
  
    });
}