// DOM Queries
const slides = document.querySelectorAll('#slides');
const leftArrowIcon = document.querySelector('#left-arrow');
const rightArrowIcon = document.querySelector('#right-arrow');
const pauseIcon = document.querySelector('#pause');
const playIcon = document.querySelector('#play');

// Event Listeners
leftArrowIcon.addEventListener('click', prev);
rightArrowIcon.addEventListener('click', next);
pauseIcon.addEventListener('click', pause);
playIcon.addEventListener('click', play);

// Carousel Counters
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

// Pause the Carousel by Clearing Timer
function pause(e) {
    clearInterval(timer);
    pauseIcon.classList.add('hidden');
    playIcon.classList.remove('hidden');
};

// Play the Carousel
function play(e) {
    pauseIcon.classList.remove('hidden');
    playIcon.classList.add('hidden');
    carousel();
}

// Change Carousel Attributes
function carousel() {
    // If paused, advance slide and do not add timer, else advance slide and add timer for next slide.
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }
    slides[slideIndex].classList.remove('hidden');
    if (playIcon.classList.contains('hidden') === true) {
        timer = setInterval(next, 6000)
    }
};

// Run Fn on Page Load
carousel();