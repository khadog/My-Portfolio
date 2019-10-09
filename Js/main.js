// ----- When load the page -----

// this function to styling introSection after page loaded.
window.addEventListener('load', () => {
	window.scrollTo(0, 0);
	//this function to show the navigation, arrowDown and intro-text after 1s
	setTimeout(() => {
		nav.style.opacity = '1';
		introHeading1.style.transform = 'translateX(0)';
		introHeading2.style.transform = 'translateX(0)';
		introParagraph.style.opacity = '1';
		scrollDown.style.opacity = '1';
		document.querySelector('.bg1').style.transform = 'scale(1)';
		document.querySelector('.bg2').style.transform = 'scale(1)';
	}, 1000);
});

// ----- Navigation -----

//this variable aNav to get the elements a(About, Work, Contact)
let aNav = document.querySelectorAll('#nav a');
//this variable check help me to check if user click on menu or not!
let check = true;
//this function to hide the menu when user click on element a(About, Work, Contact).
function hideMenu() {
	nav.style.height = '70px';
	check = false;
	showMenu();
}
aNav[1].addEventListener('click', hideMenu);
aNav[2].addEventListener('click', hideMenu);
aNav[3].addEventListener('click', hideMenu);

//this function to show the menu when i click on menu Icon and also to style the item inside menu when menu showed up!
function showMenu() {
	if (check) {
		nav.style.height = '100vh';
		nav.style.backgroundColor = '#00334e';
		icon1.style.transform = 'translateY(8px) rotate(35deg)';
		icon2.style.transform = 'translateY(-8px) rotate(-35deg)';
		menu.style.display = 'block';
		menu.style.lineHeight = '3.5';
		check = false;
	} else {
		nav.style.height = '60px';
		icon1.style.transform = 'translateY(0) rotate(0)';
		icon2.style.transform = 'translateY(0) rotate(0)';
		menu.style.display = 'none';
		menu.style.lineHeight = '1.5';
		check = true;
	}
}
menuIcon.addEventListener('click', showMenu);

window.addEventListener('scroll', () => {
	if (pageYOffset > 75) nav.style.backgroundColor = '#00334e';
	else nav.style.backgroundColor = 'transparent';
});

// ----- About Me-----

//this function to show aboutMe and workHeading heading when scrolled!
window.addEventListener('scroll', () => {
	if (profileImg.getBoundingClientRect().top < window.innerHeight / 1.5) {
		aboutMe.style.opacity = '1';
		aboutMe.style.letterSpacing = '2px';
		profileImg.style.transform = 'translateX(0)';
		profileText1.style.opacity = '1';
		profileText2.style.opacity = '1';
	} else {
		aboutMe.style.opacity = '0';
		aboutMe.style.letterSpacing = '10px';
		profileImg.style.transform = 'translateX(130%)';
		profileText1.style.opacity = '0';
		profileText2.style.opacity = '0';
	}
	if (workHeading.getBoundingClientRect().top < window.innerHeight / 1.5) {
		workHeading.style.opacity = '1';
		workHeading.style.letterSpacing = '2px';
	} else {
		workHeading.style.opacity = '0';
		workHeading.style.letterSpacing = '10px';
	}
});
// ----- Skills -----

const myCanvas = document.getElementById('myCanvas');
const c = myCanvas.getContext('2d');

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
myCanvas.style.position = 'absolute';
myCanvas.style.left = '0';
myCanvas.style.zIndex = '-1';

var colorArray = [ '#e75735', '#56a8dd', '#5aa921', '#fb9939' ];

// Animation
function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
	// Create The Circle
	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
	};
	// Control on Circle move
	this.update = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	};
}
// Save The All Circle In This Array
var circleArray = [];
// Put The width, height, x, y, radius, dx, and dy Values and how many Circle we need! (100).
for (i = 0; i < 15; i++) {
	let radius = 7;
	let x = Math.random() * (innerWidth - radius * 2) + radius;
	let y = Math.random() * (innerHeight - radius * 2) + radius;
	let dx = Math.random() - 0.5;
	let dy = Math.random() - 0.5;
	circleArray.push(new Circle(x, y, dx, dy, radius));
}
function animate() {
	// this function will refresh the page infinity
	requestAnimationFrame(animate);
	// remove the circle when moved
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}
animate();

// ----- Planning -----

//this function to show Planning Heading when scrolled!
window.addEventListener('scroll', () => {
	if (plan1Heading.getBoundingClientRect().top < window.innerHeight / 1.5) {
		plan1Heading.style.opacity = '1';
		plan1Heading.style.letterSpacing = '2px';
	} else {
		plan1Heading.style.opacity = '0';
		plan1Heading.style.letterSpacing = '10px';
	}
});

window.addEventListener('scroll', () => {
	// first plan (main)
	// note: code, square, github, and react are id for icon elements in html
	if (plan1.getBoundingClientRect().top < window.innerHeight / 1.7) {
		code.style.opacity = '1';
		code.style.transform = 'translateY(80px)';

		square.style.opacity = '1';
		square.style.transform = 'translateY(-80px)';

		github.style.opacity = '1';
		github.style.transform = 'translateX(0px)';

		react.style.opacity = '1';
		react.style.transform = 'translateY(80px)';

		nodeJs.style.opacity = '1';
		nodeJs.style.transform = 'translateX(0px)';
	} else {
		code.style.opacity = '0';
		code.style.transform = 'translateY(0px)';

		square.style.opacity = '0';
		square.style.transform = 'translateY(0px)';

		github.style.opacity = '0';
		github.style.transform = 'translateX(-100px)';

		react.style.opacity = '0';
		react.style.transform = 'translateY(0px)';

		nodeJs.style.opacity = '0';
		nodeJs.style.transform = 'translateX(-100px)';
	}
});

// ----- Works -----

//this function to styling(translateX) the all items(figure, paragraph)!
window.addEventListener('scroll', () => {
	const figure = document.querySelectorAll('.figure'); // to selector the all figure.
	const paragraph = document.querySelectorAll('.paragraph'); // to selector the all paragraph.

	for (i = 0; i < figure.length; i++) {
		if (figure[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
			paragraph[i].style.transform = 'translateX(0)';
			figure[i].style.transform = 'translateX(0)';
		} else {
			if (i % 2 == 0) {
				paragraph[i].style.transform = 'translateX(150%)';
				figure[i].style.transform = 'translateX(-150%)';
			} else {
				paragraph[i].style.transform = 'translateX(-150%)';
				figure[i].style.transform = 'translateX(150%)';
			}
		}
	}
});
