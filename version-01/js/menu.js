// Menu Animate

const mobileMenu = document.querySelector('#menu');
const mobileNav = document.querySelector('.mobile-nav');
const mainNav = document.querySelector('nav');
const hmTop = document.querySelector('.hm-top');
const hmMid = document.querySelector('.hm-mid');
const hmBot = document.querySelector('.hm-bot');
const home = document.querySelector('.home-nav');
const about = document.querySelector('.about-nav');
const work = document.querySelector('.work-nav');

mobileMenu.addEventListener('click', menu);

function menu(e) {
	if(mobileMenu.classList.contains('open-icon') === true) {
		mobileMenu.classList.remove('open-icon');
		//Remove unneeded classes
		hmMid.classList.remove('aniMidClose');
		hmTop.classList.remove('aniTopClose');
		hmBot.classList.remove('aniBotClose');
		mobileMenu.classList.remove('aniClose');
		home.classList.remove('aniHomeClose');
		about.classList.remove('aniAboutClose');
		work.classList.remove('aniWorkClose');
		//Add animation classes
		hmMid.classList.add('aniMidOpen');
		hmTop.classList.add('aniTopOpen');
		hmBot.classList.add('aniBotOpen');
		mobileMenu.classList.add('aniOpen');
		home.classList.add('aniHomeOpen');
		about.classList.add('aniAboutOpen');
        work.classList.add('aniWorkOpen');
        return;
	} else {
		mobileMenu.classList.add('open-icon');
		//Remove unneeded classes
		hmMid.classList.remove('aniMidOpen');
		hmTop.classList.remove('aniTopOpen');
		hmBot.classList.remove('aniBotOpen');
		mobileMenu.classList.remove('aniOpen');
		home.classList.remove('aniHomeOpen');
		about.classList.remove('aniAboutOpen');
		work.classList.remove('aniWorkOpen');
		// Add close animation classes
		hmMid.classList.add('aniMidClose');
		hmTop.classList.add('aniTopClose');
		hmBot.classList.add('aniBotClose');
		mobileMenu.classList.add('aniClose');
		home.classList.add('aniHomeClose');
		about.classList.add('aniAboutClose');
        work.classList.add('aniWorkClose');
        return;
    };
};