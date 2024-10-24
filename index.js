/** @format */

window.addEventListener("load", () => {
	const parentElement = document.getElementById("extension-container");
	const newElement = document.createElement("button");
	newElement.innerHTML = "Click me";
	parentElement.appendChild(newElement);

	newElement.addEventListener("click", greet);
});

function greet() {
	console.log("Job-Hunter chrome extension loaded!");
}
