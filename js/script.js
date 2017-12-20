
// const arrows = document.querySelectorAll(".arrows");

function showSlides () {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");    
    let slideIndex = 0;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    };

    slideIndex++;
    // if (slideIndex > slides.length) {slideIndex = 1} 
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); //5 Sec
};

showSlides();


// Home Page Carousel


// Establish a counter for the slide index, then run the showSlides function. 
// var slideIndex = 0;
// showSlides();

// function showSlides() {
    
//     var i;
//     // Establish variables for DOM elements
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     // For loop to go through the carousel images.
//     // If slide index is greater than 0 but less than the total index number of slides run the function.
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     slideIndex++;
//     // 
//     if (slideIndex > slides.length) {slideIndex = 1} 
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 3000); // Change image every 3 seconds
// }