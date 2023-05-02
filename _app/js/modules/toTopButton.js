export default function toTopButton() {

	const showButtonOnPx = 100;
	const backToTopButton = document.querySelector('.to-top__button');

	const scrollContainer = () => {
		return document.documentElement || document.body;
	};

	document.addEventListener('scroll', () => {
		if (scrollContainer().scrollTop > showButtonOnPx) {
			backToTopButton.classList.remove('hidden');
		} else {
			backToTopButton.classList.add('hidden');
		}
	})

}