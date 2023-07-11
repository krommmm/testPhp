// Début de l'accueil

var open = document.querySelectorAll('.btn-open');
var close = document.querySelectorAll('.close');
var close2 = document.querySelectorAll('.close2');

const waitSeconds = async (durée) => {
	await new Promise((resolve) => setTimeout(resolve, durée));
};

//pour chaque bouton d'ouverture
open.forEach((btn) => {
	//pour chaque clicks
	btn.addEventListener('click', () => {
		leftChilds = btn.parentElement.children;
		for (child of leftChilds) {
			if (child.classList.contains('modal')) {
				child.style.visibility = 'visible';
				child.style.transform = 'translateY(0px)';
				let modalContent = child.children[0];
				modalContent.style.visibility = 'visible';
				modalContent.style.transform = 'translateY(0px)';
			}
		}
	});
});

close.forEach((btn) => {
	btn.addEventListener('click', async () => {
		let modalContent = btn.parentElement;
		modalContent.style.transform = 'translateY(-1000px)';
		await waitSeconds(300);
		modalContent.style.visibility = 'hidden';

		let modal = modalContent.parentElement;
		modal.style.transform = 'translateY(-1000px)';
		await waitSeconds(300);
		modal.style.visibility = 'hidden';
	});
});

close2.forEach((btn) => {
	btn.addEventListener('click', async () => {
		let modalContent = btn.parentElement;
		modalContent.style.transform = 'translateY(-1000px)';
		await waitSeconds(300);
		modalContent.style.visibility = 'hidden';

		let modal = modalContent.parentElement;
		modal.style.transform = 'translateY(-1000px)';
		await waitSeconds(300);
		modal.style.visibility = 'hidden';
	});
});
// Fin de l'accueil

// Début du devis
const handleNom = (e)=>{
e.preventDefault();
var nom = document.getElementById("input_nom");
console.log(nom.value);
};
// Fin du devis

// Début du footer
let date = new Date().getFullYear();
let dateSelection = document.querySelector(".date");

dateSelection.innerHTML=date;
// Fin du footer
