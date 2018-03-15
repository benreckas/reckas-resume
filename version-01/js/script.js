// DOM Queries
const slides = document.getElementsByClassName('slides');
const leftArrowIcon = document.querySelector('.fa-angle-left');
const rightArrowIcon = document.querySelector('.fa-angle-right');
const pauseIcon = document.querySelector('.fa-pause');
const playIcon = document.querySelector('.fa-play');

// Event Listeners
leftArrowIcon.addEventListener('click', prev);
rightArrowIcon.addEventListener('click', next);
pauseIcon.addEventListener('click', pause);
playIcon.addEventListener('click', play);

// Carousel
let slideIndex = 0;
let timer;

// Previous Slide
function prev(e) {
    clearInterval(timer);
    slideIndex === 0 ? slideIndex = slides.length - 1 : slideIndex--;
    carousel();
};

// Next Slide
function next(e) {
    clearInterval(timer);
    slideIndex === slides.length - 1 ? slideIndex = 0 : slideIndex++;
    carousel();
};

function pause(e) {
    clearInterval(timer);
    pauseIcon.classList.add('hidden');
    playIcon.classList.remove('hidden');
};

function play(e) {
    pauseIcon.classList.remove('hidden');
    playIcon.classList.add('hidden');
    carousel();
}

// Change Carousel Attributes
const carousel = () => {
    // If paused, advance slide and do not add timer, else advance slide and add timer for next slide.
    if(pauseIcon.classList.contains('hidden') === true) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden');
        }
        slides[slideIndex].classList.remove('hidden');
        return;
    } else {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden');
        }
        slides[slideIndex].classList.remove('hidden');
        timer = setInterval(next, 6000);
        return;
    };
};

// Run Functions on Page Load
carousel();