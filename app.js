const ba_cups = document.querySelectorAll('.ba-cup');
const ba_default_cup = document.querySelector('.ba-cup-active');

ba_cups.forEach(ba_cup => {

	ba_cup.addEventListener("mouseover", () => {
		ba_default_cup.classList.remove('ba-cup-active');
		ba_cup.classList.add('ba-cup-active');
	});

	ba_cup.addEventListener("mouseout", () => {
		ba_cup.classList.remove('ba-cup-active');
		ba_default_cup.classList.add('ba-cup-active');
	});

});

