/** @format */

function getLocalStorage(key = "") {
	return localStorage.getItem(key);
}

function setLocalStorage(key = "", value = "") {
	return localStorage.setItem(key, value);
}

function removeLocalStorage(key = "") {
	localStorage.removeItem(key);
}

function removeAllLocalStorage() {
	localStorage.clear();
}
