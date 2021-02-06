var slider_img = document.querySelector('.slider-img1');
var images = ['a1.png','a2.png','a3.png','a4.png','a5.png','a6.jpg','a7.jpg','a8.jpg','a9.jpg','a10.jpg'];
var i = 0;

function prev1() {
	if (i <= 0) {
		i = images.length;
	}
	i--;
	return setImage1();
}
function next1(){
if (i >= images.length-1) {
	i = -1;
}
i++;
return setImage1();
}
function setImage1(){
	return slider_img.setAttribute('src','img1/' + images[i]);
}

var slider_img1 = document.querySelector('.slider-img2');
var images1 = ['b1.jpg','b2.jpg','b3.jpg','b4.jpg','b5.jpg','b6.jpg','b7.jpg','b8.jpg','b9.jpg','b10.jpg'];

function prev2() {
	if (i <= 0) {
		i = images1.length;
	}
	i--;
	return setImage2();
}
function next2() {
	if (i >= images1.length-1) {
		i = -1;
	}
	i++;
	return setImage2();
}
function setImage2() {
	return slider_img1.setAttribute('src','img2/' + images1[i]);
}

var slider_img2 = document.querySelector('.slider-img3');
var images2 = ['c1.jpg','c2.jpg','c3.jpg','c4.jpg','c5.jpg','c6.jpg','c7.jpg','c8.jpg','c9.jpg','c10.jpg'];

function prev3() {
	if (i <= 0) {
		i = images2.length;
	}
	i--;
	return setImage3();
}
function next3(){
if (i >= images2.length-1) {
	i = -1;
}
i++;
return setImage3();
}
function setImage3(){
	return slider_img2.setAttribute('src','img3/' + images2[i]);
}
