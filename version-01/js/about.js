// DOM Queries
const skills = document.querySelectorAll('div.skill');

// Event Listeners
// console.log(skills);
// skills.addEventListener('mouseover', (e) => {
//     console.log(e);
// });

// Animate the Icons to flip.
// function flipAnimation (e) {
//     console.log(e);
// };

function flipEvent() {
    for (let i = 0; i < skills.length; i++) {
        skills[i].addEventListener('mouseover', flip);
        skills[i].addEventListener('mouseleave', unflip);
    };
};

function flip(e) {
    // if(e.target.classList.contains('skill') === true) {
        e.target.children[0].classList.remove('unflip');
        e.target.children[0].classList.add('flip');
        e.target.children[2].classList.remove('hidden');
        e.target.children[2].classList.add('value-flip');
    // }
};

function unflip(e) {
    e.target.children[0].classList.remove('flip');
    e.target.children[0].classList.add('unflip');
    e.target.children[2].classList.add('hidden');
}

flipEvent();
