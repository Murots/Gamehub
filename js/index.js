const slider = document.querySelector('.slider');
const sliderDots = document.querySelectorAll('.slider-dot');

for (let i = 0; i < sliderDots.length; i++) {
    const dot = sliderDots[i];
    
    dot.addEventListener('click', function() {

    // Scroll the slider to the corresponding slide
    slider.scroll({
        left: i * slider.offsetWidth,
        behavior: 'smooth'
    });

    // Update the active dot
    for (let i = 0; i < sliderDots.length; i++) {
        const otherDot = sliderDots[i];
        otherDot.classList.remove('active');
    }

    dot.classList.add('active');
  
    });
}