const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
burger.addEventListener('click', burgerAction);

function burgerAction() {
	nav.classList.toggle('nav--visible');
	burger.classList.toggle('burger--active');
}

const acccordion = document.querySelectorAll('.accordion__top');

for (const key in acccordion) {
	if (Object.hasOwnProperty.call(acccordion, key)) {
		const i = acccordion[key];
		acccordion[key].addEventListener('click', show)
		function show() {
			let content = i.nextElementSibling;
			// let plus = i.firstElementChild;
			const text = document.querySelector('.info__text');
			const plus = text.querySelectorAll('img');
			if (content.style.maxHeight) {
				document.querySelectorAll('.accordion__content').forEach(j => {
					j.style.maxHeight = null;
					plus.forEach(g => {
						g.style.transform = null;
					});
				});
			}

			else {
				document.querySelectorAll('.content').forEach(j => {
					j.style.maxHeight = null;
					plus.forEach(g => {
						g.style.transform = null;
					});
				});
				content.style.maxHeight = content.scrollHeight + 'px';
				plus[key].style.transform = "rotate(90deg)";
			}
		}
	}
}

let offset = 0;
//отступ
const sliderLine = document.querySelector('.slider__line');
//крутилка

document.querySelector('.slider__next').addEventListener('click', forward);
//получение кнопки крутилки вперёд
function forward() {
	offset += 420;
	if (offset > 840) {
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px';
}

document.querySelector('.slider__prev').addEventListener('click', backward);
//получение кнопки крутилки назад
function backward() {
	offset -= 420;
	if (offset < 0) {
		offset = 840;
	}
	sliderLine.style.left = -offset + 'px';
}

const el = document.getElementsByClassName('nav__item');

for (const i in el) {
	if (Object.hasOwnProperty.call(el, i)) {
		el[i].addEventListener("click", scrollto);
		function scrollto() {
			switch (true) {
				case i == 0:
					document.querySelector('.intro').scrollIntoView(top);
					break;
				case i == 1:
					document.querySelector('.logs').scrollIntoView(top);
					break;
				case i == 2:
					document.querySelector('.places').scrollIntoView(top);
					break;
				case i == 3:
					document.querySelector('.subscribe').scrollIntoView(top);
					break;

				default:
					break;
			}
		}
	}
}

const footer__item = document.getElementsByClassName('footer__item');

for (const i in footer__item) {
	if (Object.hasOwnProperty.call(footer__item, i)) {
		footer__item[i].addEventListener("click", scrollto);
		function scrollto() {
			switch (true) {
				case i == 0:
					document.querySelector('.intro').scrollIntoView(top);
					break;
				case i == 1:
					document.querySelector('.logs').scrollIntoView(top);
					break;
				case i == 2:
					document.querySelector('.places').scrollIntoView(top);
					break;
				case i == 3:
					document.querySelector('.baite').scrollIntoView(top);
					break;
				case i == 4:
					document.querySelector('.more').scrollIntoView(top);
					break;
				case i == 5:
					document.querySelector('.opportunities').scrollIntoView(top);
					break;
				case i == 6:
					document.querySelector('.opportunities').scrollIntoView(top);
					break;
				case i == 7:
					document.querySelector('.info').scrollIntoView(top);
					break;
				case i == 8:
					document.querySelector('.logs').scrollIntoView(top);
					break;
				case i == 9:
					document.querySelector('.info').scrollIntoView(top);
					break;
				case i == 10:
					document.querySelector('.testimonials').scrollIntoView(top);
					break;
				case i == 11:
					document.querySelector('.subscribe').scrollIntoView(top);
					break;

				default:
					break;
			}
		}
	}
}