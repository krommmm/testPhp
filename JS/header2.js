// Debut HEADER 
var diapo = document.querySelector('.diapo_img');
var banner = document.querySelector('.banner_container');

var crepesObject = [
	{ image: "crepe.png", titre: 'Traiteur - Crépier' },
	{ image: "ble.png", titre: 'Crêpes à domicile' },
	{ image: "crepe2.png", titre: 'Crêpes Lorient' },
	{ image: "crepe3.png", titre: 'Galettes Bretonnes' },
	{ image: "crepe4.png", titre: 'Cocktails Blinis' },
	{ image: "crepe5.png", titre: 'Repas pour toutes occasions' },
];

const bannerGoDown = async () => {
	banner.style.transform = 'translateY(0px)';
	banner.style.opacity = '0.7';
	await wait(3000);
};
const bannerGoUp = async () => {
	banner.style.transform = 'translateY(-305px)';
	banner.style.opacity = '0';
	await wait(1000);
};

const wait = (duration) =>
	new Promise((resolve) => setTimeout(resolve, duration));

const diapoGogo = async () => {
	banner.style.transform = 'translateY(-305px)';

	for (let i = 0; i < crepesObject.length; i++) {
		diapo.setAttribute('src', `../assets/${crepesObject[i].image}`);
		await wait(1000);
		diapo.style.opacity = '1';
		document.querySelector(
			'.banner_container .titre'
		).textContent = `${crepesObject[i].titre}`;
		await wait(1000);
		await bannerGoDown();
		await bannerGoUp();
		diapo.style.opacity = '0';
		await wait(2000);
	}
};

const repeatDiapoGogo = async () => {
	while (true) {
		await diapoGogo();
	}
};

repeatDiapoGogo();

const ancre = document.querySelector('.AncreDébutImg');
window.addEventListener('scroll', () => {
	if (window.scrollY > 700) {
		ancre.style.opacity = '1';
		ancre.style.transform = 'scale(1)';
	} else if (window.scrollY < 700) {
		ancre.style.transform = 'scale(0)';
	}
});
// Fin HEADER