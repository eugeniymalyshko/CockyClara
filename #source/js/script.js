'use strict'

const buttonMore = document.querySelector('.delivery__paragraph_more');
const moreParagraph = document.querySelectorAll('._more');

if (innerWidth <= 480) {
	buttonMore.addEventListener('click', () => {
		moreParagraph.forEach(item => {
			if (item.style.display === 'block' ) {
				item.style.display = 'none';
			}else {
				item.style.display = 'block';
				buttonMore.style.display = 'none';
			}
		})
	})
}else {
	buttonMore.style.display = 'none';
}