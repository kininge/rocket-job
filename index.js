/** @format */

var uploadButtonElement = null;

window.addEventListener("load", () => {
	uploadButtonElement = document.getElementById("uploadButton");

	// events
	uploadButtonElement.addEventListener("click", handleUploadUserData);
});

function handleUploadUserData() {
	// Getting user input file
	const fileInput = document.getElementById("fileInput");
	const file = fileInput.files[0];

	if (!file) {
		alert("Please select a file.");
		return;
	}

	const reader = new FileReader();

	reader.onload = function (event) {
		try {
			const jsonData = JSON.stringify(event.target.result);
			console.log("Uploaded JSON data:", jsonData);
			localStorage.setItem("DummyDataTesting", jsonData);
		} catch (error) {
			alert("Error parsing JSON: " + error.message);
		}
	};

	reader.onerror = function () {
		alert("Error reading file.");
	};

	reader.readAsText(file);
}
