let showChange = document.getElementById("element");
let text = document.querySelector("h1");
function S() {
	text.innerHTML = "small";
	text.style.textTransform = "lowercase";
	showChange.classList = "small";
}
function M() {
	text.innerHTML = "medium";
	text.style.textTransform = "Capitalize";
	showChange.classList = "middle";
}
function L() {
	text.innerHTML = "large";
	text.style.textTransform = "Uppercase";
	showChange.classList = "bigCrazy";
}
