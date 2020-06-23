/*! personal-site v1.0.0 | (c) 2020 Branden Soropia | MIT License | https://github.com/BrandenSoropia/personal-site */
document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);