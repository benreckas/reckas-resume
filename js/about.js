// DOM Queries
const skills = document.querySelectorAll('div.skill');

// Event Listeners
function flipEvent() {
    for (let i = 0; i < skills.length; i++) {
        skills[i].addEventListener('mouseover', flip);
        skills[i].addEventListener('mouseleave', unflip);
    };
};

// Flip Skill Over to See Skill Lvl
function flip(e) {
    e.target.children[0].classList.remove('unflip');
    e.target.children[0].classList.add('flip');
    e.target.children[2].classList.remove('hidden');
    e.target.children[2].classList.add('value-flip');
};

// Flip Skill Back to Original State
function unflip(e) {
    e.target.children[0].classList.remove('flip');
    e.target.children[0].classList.add('unflip');
    e.target.children[2].classList.add('hidden');
}

// Call Fn on Page Load
flipEvent();
