//Artist
let hoverElement1 = document.getElementById('button');
hoverElement1.addEventListener('mouseenter', function() {
	hoverElement1.style.opacity = '0.8';
})
hoverElement1.addEventListener('mouseleave', function() {
	hoverElement1.style.opacity = '3';
});
//Shop
let hoverElement2 = document.getElementById('button2'); 
hoverElement2.addEventListener('mouseenter', function() {
	hoverElement2.style.opacity = '0.8';
})
hoverElement2.addEventListener('mouseleave', function() {
	hoverElement2.style.opacity = '1';
});
//FAQ
let hoverElement3 = document.getElementById('button3'); 
hoverElement3.addEventListener('mouseenter', function() {
	hoverElement3.style.opacity = '0.8';
})
hoverElement3.addEventListener('mouseleave', function() {
	hoverElement3.style.opacity = '1';
});
//mouse click event below. "This is the vibe"
let button = document.getElementById('Extra'); 
button.addEventListener('click', function() {
	button.textContent = "You thought"
});
